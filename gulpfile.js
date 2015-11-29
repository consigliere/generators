/**
 * Created by anonymoussc on 08/03/15 9:49.
 */

/*!
 * gulp
 * $ npm install gulp gulp-rename del gulp-template gulp-data moment string yargs --save-dev
 */

'use strict';

// Load plugins
var gulp    = require('gulp'),
    process = require('./tasks/generate.js');

// Task generate
gulp.task('generate', process.generate);

// Task default
gulp.task('default', ['generate']);
