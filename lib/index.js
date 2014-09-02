'use strict';

var fs = require('fs');
var path = require('path');
var jsHintPath = path.resolve(__dirname, '../.jshintrc');
var plato = require('gulp-plato');

// save a reference to our parameters in a local variable
var gulp = null;
var config = null;

/**
 * Setups up the plato task
 *
 * @param {Object} gulpRef The gulp instance to add the task to
 * @param {Object} conf The configuration options
 */
function platoSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('plato', false, platoTask);
}

/**
 * Runs the plato task
 */
function platoTask() {
  // get the jshintrc options since plato ignores the file right now
  var jsHintContents = fs.readFileSync(jsHintPath);
  var jsHintOptions = JSON.parse(jsHintContents);

  // determine the output path
  var outPath = path.resolve(config.root, 'docs/complexity');

  return gulp.src(config.src)
    .pipe(plato(outPath, {
      jshint: jsHintOptions
    }));
}

module.exports = platoSetup;
