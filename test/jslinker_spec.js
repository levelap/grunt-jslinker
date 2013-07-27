'use strict';

describe('jslinker', function () {

  var grunt = require('grunt');

  beforeEach(function () {
  });

  it('should include all js files configured on default task', function () {
    var actual = grunt.file.read('test/fixtures/file.html');
    var expected = grunt.file.read('test/expected/file.html');
    expect(actual).toEqual(expected);
  });

});
