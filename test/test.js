var similarRegister = require('../'),
	similar = require('../tasks/similar'),
	sinon = require('sinon'),
	should = require('should');

describe('similar register should', function(){
	var grunt = {
		task: {
			_tasks: {
				'asd' : {},
				'tasked': {}
			}
		},
		cli: {}
	};

	beforeEach(function(){
		grunt.registerTask = sinon.spy();
	});

	it('call registerTask if one task in cli', function(){
		grunt.cli.tasks = ['task'];
		similarRegister.attach(grunt);
		grunt.registerTask.called.should.be.ok;
	});

	it('not call registerTask if more than one task in cli', function(){
		grunt.cli.tasks = ['task', 'task2'];
		similarRegister.attach(grunt);
		grunt.registerTask.called.should.not.be.ok;
	});

	it('call registerTask if one task in cli with subtask', function(){
		grunt.cli.tasks = ['task:asda'];
		similarRegister.attach(grunt);
		grunt.registerTask.called.should.be.ok;
	});

});

describe('similar should', function(){
	var taskFunction,
		distance,
		grunt = {
			task: {
				_tasks: {
					'asd' : {},
					'tasked': {}
				}
			},
			cli: {},
			registerMultiTask: function(a, b, fun){
				taskFunction = fun;
			}
		};
	var gruntContext = {
		options: function(){
			return {
				distance: distance
			};
		}
	};

	beforeEach(function(){
		grunt.task.run = sinon.spy();
	});


	it('call task.run', function(){
		grunt.task._tasks = {
			'taska': {},
			'task': {}
		}
		similar(grunt);
		taskFunction.call(gruntContext);
		grunt.task.run.called.should.be.ok;
	});

	it('call task.run with proper task', function(){
		grunt.task._tasks = {
			'taska': {},
			'task': {}
		}
		similar(grunt);
		taskFunction.call(gruntContext);
		grunt.task.run.calledOnce.should.be.ok;
		grunt.task.run.firstCall.args[0].should.be.equal('taska');
	});

});