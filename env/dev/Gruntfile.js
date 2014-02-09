module.exports = function(grunt) {

	grunt.initConfig({
			concat: {
				'facts-db': {
					options: {
						separator: ';'
					},
					src: ['/vagrant-mnt/facts-db/src/api/js/**/*.js'],
					dest: 'dist/facts-db.js'
				},

				'facts-js': {
					options: {
						separator: ';'
					},
					src: ['/vagrant-mnt/facts-js/src/js/**/*.js'],
					dest: '../../www/dist/js/facts-js.js'
				}
			},

			uglify: {
				'facts-db': {
					options: {
						banner: '/*! facts-db <%= grunt.template.today("dd-mm-yyyy") %> */\n'
					},
					files: {
						'dist/facts-db.min.js': 'dist/facts-db.js'
					}
				},

				'facts-js': {
					options: {
						banner: '/*! facts-js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
					},
					files: {
						'../../www/dist/js/facts-js.min.js': '../../www/dist/js/facts-js.js'
					}
				}
			},

			jshint: {
				files: ['/vagrant/Gruntfile.js', '/vagrant-mnt/src/www/js/**/*.js', '/vagrant-mnt/src/node/**/*.js', '/vagrant-mnt/facts-db/**/*.js', '/vagrant-mnt/facts-js/**/*.js'],
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
					command: 'rsync -rt /vagrant-mnt/src/www/ ../../www/docroot'
				},
				'copy-facts-js-test': {
					command: 'rsync -rt /vagrant-mnt/facts-js ../../www/aux'
				},
				'copy-node': {
					command: 'rsync -rt /vagrant-mnt/src/node/ .'
				},
				'bounce-node': {
					command: 'service api.bill-boyer.com restart'
				}
			},

			watch: {
				js: {
					files: ['<%= jshint.files %>'],
					tasks: ['shell:copy-node', 'build']
				},
				docroot: {
					files: ['/vagrant-mnt/src/www/**'],
					tasks: ['shell:copy-docroot']
				},
				'facts-js-test': {
					files: ['/vagrant-mnt/facts-js/**'],
					tasks: ['shell:copy-facts-js-test']
				}
			}
		});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'shell:bounce-node']);
	grunt.registerTask('copy-build', ['shell:copy-docroot', 'shell:copy-facts-js-test', 'shell:copy-node', 'build']);
};
