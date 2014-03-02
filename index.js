module.exports = {
	attach: function(grunt){
		if (grunt.cli.tasks.length === 1){
			var taskParts = grunt.cli.tasks[0].split(':');
			var tasks = Object.keys(grunt.task._tasks);
			if (tasks.indexOf(taskParts[0]) === -1){
				grunt.registerTask(grunt.cli.tasks[0], ['similar']);
			}
		}		
	}
};