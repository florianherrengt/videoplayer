module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		html2js: {
			dist: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'app/templates/', // Src matches are relative to this path.
					src: ['**/*.tpl.html'], // Actual pattern(s) to match.
					dest: 'app/templates/', // Destination path prefix.
					ext: '.tpl.js'
				}],
				options: {
					base: 'app/',
					singleModule: true,
					htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						removeComments: true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true
					},
					module: 'VideoPlayer.templates.home',
					// module: false,
					// singleModule: true
					/*
					module: function (task) {
						var tplName = task.src[0].split('/').slice(-1)[0].split('.')[0];
						return 'template-' + tplName;
					}
          */
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			configFiles: {
				files: ['Gruntfile.js', 'config/*.js'],
				options: {
					reload: true
				}
			},
			scripts: {
				files: ['app/js/controllers/**/*.js'],
				tasks: ['copy:scripts']
			},
			html: {
				files: ['app/templates/**/*.tpl.html'],
				tasks: ['html2js', 'copy:templates']
			},
			index: {
				files: ['app/index.html'],
				tasks: ['copy:index']
			},
			scriptsDist: {
				files: ['dist/js/main.js']
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: '*',
					base: 'dist',
					// open: {
					//  target: 'http://localhost:8000',
					//  appName: 'Google Chrome'
					// }
				}
			}
		},
		clean: {
			dist: 'dist/',
			tmp: 'tmp/'
		},
		copy: {
			index: {
				expand: true,
				flatten: true,
				src: 'app/index.html',
				dest: 'dist/'
			},
			templates: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'app/templates/', // Src matches are relative to this path.
					src: ['**/*.tpl.html'], // Actual pattern(s) to match.
					dest: 'dist/templates'
				}]
			},
			scripts: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'app/', // Src matches are relative to this path.
					src: ['**/*.js'], // Actual pattern(s) to match.
					dest: 'dist/'
				}]
			}
		},
		browserify: {
			dist: {
				files: {
					'tmp/js/main.js': ['app/app.js'],
				},
				options: {
					browserifyOptions: {
						debug: true
					}
				}
			}
		},
		watchify: {
			options: {
				debug: true
			},
			dist: {
				src: ['./app/app.js'],
				dest: './dist/js/main.js'
			}
		},
		concurrent: {
			clean: ['clean:dist', 'clean:tmp'],
			build: ['copy:index', 'html2js'],
			dist: ['copy:scripts', 'copy:templates']
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'concurrent:clean',
		'concurrent:build',
		'copy:templates',
		'copy:scripts',
		// 'concurrent:dist',
		'watchify',
		'connect',
		'watch'
	]);

};
