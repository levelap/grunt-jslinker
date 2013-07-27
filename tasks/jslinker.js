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

    var page = grunt.file.read(target_file);

    var start = page.indexOf(start_scripts_tag);
    var end = page.indexOf(end_scripts_tag);

    var scripts = "\n";
    this.filesSrc.forEach(function(file_path){
      scripts += "<script src='"+file_path+"'></script>\n";
    });

    var newPage = page.substr(0, start + start_scripts_tag.length) + scripts + page.substr(end);
    grunt.file.write(target_file, newPage);
  });

};
