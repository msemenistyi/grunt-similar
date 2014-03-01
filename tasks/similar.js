/*
 * grunt-similar
 * https://github.com/msemenistyi/grunt-similar
 *
 * Copyright (c) 2014 Mykyta Semenistyi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	var levenshtein = require('levenshtein-component');

	grunt.registerMultiTask('similar', 'Suggests which tasks you wanted to call unless you made a typo', function(){

		var defaultOptions = {
			distance: 3
		};

		var options = this.options();
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)){
				if (typeof options[i] === 'undefined'){
					options[i] = defaultOptions[i];
			 }
			}
		}

		var tasks = Object.keys(grunt.task._tasks)
		var taskParts = tasks.splice(tasks.length -1 , 1)[0].split(':');
		var cliTask = taskParts[0];
		if (typeof taskParts[1] !== 'undefined'){
			var subtaskName = taskParts[1];
		}

		var minDistance, similarTaskName;
		var distance;
		for (var i = 0, l = tasks.length; i < l; i++) {
			distance = levenshtein(cliTask, tasks[i]);
			if (typeof minDistance === 'undefined' || minDistance > distance){
				minDistance = distance;
				similarTaskName = tasks[i];
			}
		}
		
		if (minDistance <= options.distance) {

			if (subtaskName){
				similarTaskName = similarTaskName + ':' + subtaskName;
			}
			grunt.task.run(similarTaskName);

		} else {
			throw new Error('Task "' + cliTask + '" not found.');
		}

	});

};