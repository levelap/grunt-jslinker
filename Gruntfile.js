'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    jasmine_node: {
      specNameMatcher: "./spec", 
      projectRoot: ".",
      requirejs: false,
      forceExit: true,
    },

    jslinker: {
      default:{
        options: {
          target: "test/fixtures/target_files/default.html",
          start_tag: "<!--MYSCRIPTS-->",
          end_tag: "<!--MYSCRIPTS END-->",
          relative_to: "test/"
        },
        src: ["test/fixtures/js/**/**.js"]
      },
      exclude:{
        options: {
          target: "test/fixtures/target_files/excluded.html",
          exclude: ["test/fixtures/js/excluded/*.js"]
        },
        src: ["test/fixtures/js/**/**.js"]
      },
      duplicated_end_tag:{
        options: {
          target: "test/fixtures/target_files/duplicated_end_tag.html"
        },
        src: ["test/fixtures/js/**/**.js"]
      }
    }


  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jslinker', 'jasmine_node']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
