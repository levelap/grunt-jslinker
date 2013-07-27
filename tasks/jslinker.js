'use strict';

var util = require('util');

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('jslinker', 'Autoinsert script tags (or other filebased tags) in an html file', function() {
    var options = this.options({target:""});

    var start_scripts_tag = "<!--SCRIPTS-->";
    var end_scripts_tag = "<!--SCRIPTS END-->";

    var target_file = options.target;

  });

};
