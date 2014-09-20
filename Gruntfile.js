module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['app/**/*.js'],
				tasks: ['browserify'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: 'dist'
				}
			}
		},
		clean: {
			dist: 'dist/'
		},
		copy: {
			main: {
				expand: true,
				flatten: true,
				src: 'app/index.html',
				dest: 'dist/'

			}
		},
		browserify: {
			dist: {
				files: {
					'dist/js/main.js': ['app/app.js'],
				},
				options: {

				}
			}
		},
		concurrent: {
			dist: ['copy', 'browserify']
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['clean', 'concurrent:dist', 'connect', 'watch']);

};
