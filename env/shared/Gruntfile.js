module.exports = function(grunt) {

	grunt.initConfig({

		compass: {
			facts: {
				options: {
					sassDir: '<%= grunt.option("dest") %>/www/dist/facts-js/src/css',
					cssDir: '<%= grunt.option("dest") %>/www/dist/css',
					outputStyle: 'compressed',
					noLineComments: true
				}
			},

			site: {
				options: {
					sassDir: '<%= grunt.option("src") %>/src/www/css/sass',
					cssDir: '<%= grunt.option("dest") %>/www/dist/css',
					outputStyle: 'compressed',
					noLineComments: true
				}
			}
		},

		concat: {
			facts: {
				options: {
					separator: ';'
				},
				src: ['<%= grunt.option("dest") %>/www/dist/facts-js/src/js/**/*.js'],
				dest: '<%= grunt.option("dest") %>/www/dist/js/facts-js.js'
			},

			head: {
				options: {
					separator: ';'
				},
				src: ['<%= grunt.option("src") %>/src/www/js/head/**/*.js'],
				dest: '<%= grunt.option("dest") %>/www/dist/js/head.js'
			},

			site: {
				options: {
					separator: ';'
				},
				src: ['<%= grunt.option("src") %>/src/www/js/*.js'],
				dest: '<%= grunt.option("dest") %>/www/dist/js/site.js'
			}
		},

		uglify: {
			facts: {
				options: {
					banner: '/*! facts-js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("dest") %>/www/dist/js/facts-js.min.js': '<%= grunt.option("dest") %>/www/dist/js/facts-js.js'
				}
			},

			head: {
				options: {
					banner: '/*! head-js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("dest") %>/www/dist/js/head.min.js': '<%= grunt.option("dest") %>/www/dist/js/head.js'
				}
			},

			site: {
				options: {
					banner: '/*! site-js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("dest") %>/www/dist/js/site.min.js': '<%= grunt.option("dest") %>/www/dist/js/site.js'
				}
			},

			'node': {
				options: {
					banner: '/*! node-main <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'<%= grunt.option("dest") %>/node/dist/main.min.js': '<%= grunt.option("src") %>/src/node/main.js'
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', '<%= grunt.option("src") %>/src/www/js/**', '<%= grunt.option("src") %>/src/node/**/*.js'],
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
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/src/www/ <%= grunt.option("dest") %>/www/docroot'
			},
			'copy-wp': {
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/src/wordpress/theme <%= grunt.option("dest") %>/wordpress/wp-content/themes/blog.bill-boyer.com'
			},
			'copy-rails': {
				command: 'rsync -rt --delete --exclude .git --exclude tmp --exclude log <%= grunt.option("src") %>/src/rails/ <%= grunt.option("dest") %>/rails/www.bill-boyer.com'
			},
			'build-themes': {
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/src/www/css/themes/ <%= grunt.option("dest") %>/www/dist/css/themes'
			},
			'build-fonts': {
				command: 'rsync -rt --delete --exclude .git <%= grunt.option("src") %>/src/www/fonts/ <%= grunt.option("dest") %>/www/dist/css/themes/fonts'
			},
			'build-rails': {
				command: 'cd <%= grunt.option("dest") %>/rails/www.bill-boyer.com; bundle update; RAILS_ENV=production bundle exec rake assets:precompile'
			},
			'build-wp': {
				command: 'cd <%= grunt.option("dest") %>/wordpress/wp-content/themes/blog.bill-boyer.com; ./copy-from-rails <%= grunt.option("dest") %>/rails/app/views/layout'
			},
			'deploy-www': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/www/ <%= grunt.option("dest") %>/www'
			},
			'deploy-node': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/node/dist/ <%= grunt.option("dest") %>/node/dist'
			},
			'deploy-rails': {
				command: 'rsync -rt --delete <%= grunt.option("src") %>/rails/ <%= grunt.option("dest") %>/rails'
			},
			'bounce-apache': {
				command: 'service apache2 restart'
			},
			'bounce-passenger': {
				command: 'cd <%= grunt.option("dest") %>/rails/www.bill-boyer.com; passenger stop --port 81; RAILS_ENV=<%= grunt.option("rails-env") %> passenger start --daemonize --port 81'
			},
			'bounce-node': {
				command: 'service node-js restart'
			}
		},

		watch: {
			compass: {
				files: ['<%= grunt.option("src") %>/src/www/css/sass/**', '<%= grunt.option("src") %>/facts-js/src/css/**'],
				tasks: ['compass']
			},
			js: {
				files: ['<%= grunt.option("src") %>/src/www/js/**/*.js', '<%= grunt.option("src") %>/src/node/**/*.js'],
				tasks: ['build', 'shell:bounce-node']
			},
			docroot: {
				files: ['<%= grunt.option("src") %>/src/www/**'],
				tasks: ['shell:copy-docroot']
			},
			rails: {
				files: ['<%= grunt.option("src") %>/src/rails/**'],
				tasks: ['shell:copy-rails', 'shell:build-rails', 'shell:bounce-passenger']
			},
		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('copy', ['shell:copy-docroot', 'shell:copy-rails']);
	grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'compass', 'shell:build-themes', 'shell:build-fonts', 'shell:build-rails']);

	grunt.registerTask('copy-build', ['copy', 'build']);
	grunt.registerTask('copy-build-bounce', ['copy-build', 'shell:bounce-apache', 'shell:bounce-passenger', 'shell:bounce-node']);

	grunt.registerTask('deploy', ['shell:deploy-www', 'shell:deploy-node', 'shell:deploy-rails']);
	grunt.registerTask('deploy-bounce', ['deploy', 'shell:bounce-apache', 'shell:bounce-node']);
};
