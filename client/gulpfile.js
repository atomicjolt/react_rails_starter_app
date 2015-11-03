'use strict';

var gulp          = require('gulp');
var $             = require('gulp-load-plugins')();
var es            = require('event-stream');
var runSequence   = require('run-sequence');
var webpack       = require('webpack');
var fileinclude   = require('gulp-file-include');
var rename        = require('gulp-rename');
var settings      = require('./config/settings.js');
var argv          = require('minimist')(process.argv.slice(2));

// Settings
var release       = argv.release;
var outputPath    = release ? settings.prodOutput : settings.devOutput;
var webpackConfig = require('./config/webpack.config.js')(release);


// Clean up
// -----------------------------------------------------------------------------
gulp.task('clean', function(cb){
  if(release){
    var rimraf = require('rimraf');
    rimraf(outputPath, cb);
  }
});

// Copy vendor files
// -----------------------------------------------------------------------------
gulp.task('vendor', function(){
  return es.merge(
    gulp.src('./node_modules/bootstrap-sass/assets/fonts/**')
      .pipe(gulp.dest(outputPath + '/fonts')),
    gulp.src('./node_modules/font-awesome/fonts/**')
      .pipe(gulp.dest(outputPath + '/fonts'))
  );
});

// Copy images
// -----------------------------------------------------------------------------
gulp.task('images', function(){
  gulp.src('./images/**/*')
    .pipe(gulp.dest(outputPath + '/images/'));
});

// Copy fonts
// -----------------------------------------------------------------------------
gulp.task('fonts', function(){
  gulp.src('./fonts/**/*')
    .pipe(gulp.dest(outputPath + '/styles/fonts/'));  
});

// Compile html templates
// -----------------------------------------------------------------------------
gulp.task('tpl', function(){
  return gulp.src('./html/**/*.tpl.html')
    .pipe(fileinclude())
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(!release ? $.util.noop() : $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(gulp.dest(outputPath));
});

// Copy html files
// -----------------------------------------------------------------------------
gulp.task('html', function(){
  return gulp.src('./html/**/*.html')
    .pipe(!release ? $.util.noop() : $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(gulp.dest(outputPath));
});

// Copy other files
// -----------------------------------------------------------------------------
gulp.task('assets', function(){
  return gulp.src('./assets/**/*')
    .pipe(gulp.dest(outputPath));
});

// Create JavaScript bundle
// -----------------------------------------------------------------------------
gulp.task('javascript', function(cb){

  var bundler = webpack(webpackConfig);

  function bundle(err, stats){
    if (err){
      throw new $.util.PluginError('webpack', err);
    }
    $.util.log('[webpack]', stats.toString({colors: true}));
    return cb();
  }
  bundler.run(bundle);
});

// Build the app from source code
// -----------------------------------------------------------------------------
gulp.task('build', ['clean'], function(cb){
  runSequence(['vendor', 'fonts', 'images', 'javascript', 'tpl', 'html', 'assets'], cb);
});


// The default task
gulp.task('default', ['build']);
