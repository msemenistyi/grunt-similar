# grunt-similar [![Build Status](https://travis-ci.org/msemenistyi/grunt-similar.png)](https://travis-ci.org/msemenistyi/grunt-similar)

> Suggests which tasks you wanted to call unless you made a typo

![similar](console-example.png)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the 
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how 
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install 
and use Grunt plugins. Once you're familiar with that process, you may install 
this plugin with this command:

##Install

```shell
npm install grunt-similar --save-dev
```

## The "similar" task

### Overview
Similar lets you be a normal human being and make mistakes in console. In case
when grunt task you've written in console does not exist, similar is being executed
and checks whether you've made a little typo or your cat is walking on your keyboard.

In case when the distance counted by Levenshtein algorythm 
between the task written and the one declared in config is sufficient, it 
executes the task you meant.  

### Options

- **distance** *Integer* - difference distance allowed between entered and existing task
name counted by Levenshtein algorythm. **Default** 3.  

### Basic Usage
```js
module.exports = function(grunt){ 
	...
	similar: {
		options:{
			distance: 2
		},
		all: {}
	},
	...
	grunt.loadNpmTasks('grunt-similar');
	...
	//in the very bottom of the file after all the tasks are registered, but still 
	//within the function being exported. 
	require('./node_modules/grunt-similar/lib/similar-register')(grunt);
}
```

##Contributing
Feel free to open issues and send PRs, though make sure that you create tests
for new functionality and amend ones for fixes and changes. 

Versions are assigned according to [SemVer](http://semver.org/) specification. 

## Running tests
Run `npm test` in order to see test results.

## License

The MIT License (MIT)

Copyright (c) 2014 Semenistyi Mykyta nikeiwe@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.