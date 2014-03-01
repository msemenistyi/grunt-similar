/*
 * grunt-similar
 * https://github.com/msemenistyi/grunt-similar
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {


	grunt.initConfig({

		similar: {
			all: {}, 
			options:{
				distance: 3
			}
		},

		simplemocha: {
			options: {
				globals: ['should'],
				timeout: 5000,
				ignoreLeaks: false,
				reporter: 'dot'
			},

			all: { src: ['test/**/*test.js'] }			
		},

		clean: {
			tests: {
				src: ['tmp']
			}
		}

	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('test', ['clean', 'simplemocha']);

	grunt.registerTask('default', ['clean']);

	require('./lib/similar-register')(grunt);

};