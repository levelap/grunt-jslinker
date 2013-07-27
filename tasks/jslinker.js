'use strict';

var util = require('util');

module.exports = function(grunt) {

	grunt.registerMultiTask('jslinker', 'Autoinsert script tags (or other filebased tags) in an html file', function() {
    var options = this.options({
      target:"", 
      exclude:[],
      start_scripts_tag: "<!--SCRIPTS-->",
      end_scripts_tag: "<!--SCRIPTS END-->"
    });

    var page = grunt.file.read(options.target);
    var start = page.indexOf(options.start_scripts_tag);
    var end = page.indexOf(options.end_scripts_tag, start);

    var excluded_files = grunt.file.expand(options.exclude);
    var scripts = "\n";
    this.filesSrc.filter(function(file_path){
      if(grunt.util._(excluded_files).contains(file_path)){
        return false;
      }
      return true;
    }).map(function(file_path){
      scripts += "<script src='"+file_path+"'></script>\n";
    });

    var page_top = page.substr(0, start + options.start_scripts_tag.length);
    var page_bottom = page.substr(end);

    var newPage = page_top+scripts+page_bottom;
    grunt.file.write(options.target, newPage);
  });

};
