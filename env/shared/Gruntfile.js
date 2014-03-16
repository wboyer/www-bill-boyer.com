module.exports = function(grunt) {

	grunt.initConfig({

		cssmin: {
			'www': {
				src: ['<%= grunt.option("src") %>/src/www/css/*.css'],
				dest: '<%= grunt.option("www-dest") %>/dist/css/main.css'
			}
		},

		concat: {
			'facts-db': {
				options: {
					separator: ';'
				},
				src: ['<%= grunt.option("src") %>/facts-db/src/api/js/**/*.js'],
				dest: '<%= grunt.option("node-dest") %>/dist/facts-db.js'
			},

			'facts-js': {
				options: {
					separator: ';'
				},
				src: ['<%= grunt.option("src") %>/facts-js/src/js/**/*.js'],
				dest: '<%= grunt.option("www-dest") %>/dist/js/facts-js.js'
			}
		},

		uglify: {
			'facts-db': {
				options: {
					banner: '/*! facts-db <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("node-dest") %>/dist/facts-db.min.js': '<%= grunt.option("node-dest") %>/dist/facts-db.js'
				}
			},

			'facts-js': {
				options: {
					banner: '/*! facts-js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("www-dest") %>/dist/js/facts-js.min.js': '<%= grunt.option("www-dest") %>/dist/js/facts-js.js'
				}
			},

			'node-main': {
				options: {
					banner: '/*! node-main <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("node-dest") %>/dist/main.min.js': '<%= grunt.option("src") %>/src/node/main.js'
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', '<%= grunt.option("src") %>/src/www/js/**/*.js', '<%= grunt.option("src") %>/src/node/**/*.js', '<%= grunt.option("src") %>/facts-db/**/*.js', '<%= grunt.option("src") %>/facts-js/**/*.js'],
			options: {
				globals: {
					console: true,
					module: true,
					document: true
				}
			}
		},

		shell: {
			'copy-docroot': {
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/src/www/ <%= grunt.option("www-dest") %>/docroot'
			},
			'copy-facts-js-test': {
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/facts-js <%= grunt.option("www-dest") %>/aux'
			},
			'deploy-docroot': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/src/www/ <%= grunt.option("www-dest") %>/docroot'
			},
			'deploy-facts-js-test': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/facts-js <%= grunt.option("www-dest") %>/aux'
			},
			'deploy-www-dist': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/dist/www/dist/ <%= grunt.option("www-dest") %>/dist'
			},
			'deploy-node': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/dist/node/dist/ <%= grunt.option("node-dest") %>/dist'
			},
			'bounce-apache': {
				command: 'service apache2 restart'
			},
			'bounce-node': {
				command: 'service api.bill-boyer.com restart'
			}
		},

		watch: {
			css: {
				files: ['<%= cssmin.www.src %>'],
				tasks: ['cssmin']
			},
			js: {
				files: ['<%= jshint.files %>'],
				tasks: ['build', 'shell:bounce-node']
			},
			docroot: {
				files: ['<%= grunt.option("src") %>/src/www/**'],
				tasks: ['shell:copy-docroot']
			},
			'facts-js-test': {
				files: ['<%= grunt.option("src") %>/facts-js/**'],
				tasks: ['shell:copy-facts-js-test']
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('copy', ['shell:copy-docroot', 'shell:copy-facts-js-test']);
	grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'cssmin']);

	grunt.registerTask('copy-build', ['copy', 'build']);
	grunt.registerTask('copy-build-bounce', ['copy-build', 'shell:bounce-apache', 'shell:bounce-node']);

	grunt.registerTask('deploy', ['shell:deploy-www-dist', 'shell:deploy-docroot', 'shell:deploy-facts-js-test', 'shell:deploy-node']);
	grunt.registerTask('deploy-bounce', ['copy', 'deploy', 'shell:bounce-apache', 'shell:bounce-node']);
};
