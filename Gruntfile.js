module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			configFiles: {
				files: ['Gruntfile.js', 'config/*.js'],
				options: {
					reload: true
				}
			},
			scripts: {
				files: ['dist/js/main.js'],
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
		watchify: {
			dist: {
				src: './app/**/*.js',
				dest: 'dist/js/main.js'
			}
		},
		concurrent: {
			dist: ['copy']
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['clean', 'concurrent:dist', 'watchify', 'connect', 'watch']);

};
