'use strict';

var gulp          = require('gulp');
var gulpFilter    = require('gulp-filter');
var gulpIgnore    = require('gulp-ignore');
var inject        = require('gulp-inject');
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
  var rimraf = require('rimraf');
  rimraf(outputPath, cb);
});


// Copy vendor files
// -----------------------------------------------------------------------------
// Use this task to copy assets (ie fonts) from node modules
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


// Copy html files
// -----------------------------------------------------------------------------
gulp.task('html', function(){

  var tplFilter     = gulpFilter('**/*.tpl.html', {restore: true});
  var htmlFilter    = gulpFilter('**/*.html', {restore: true});

  var sources = gulp.src([outputPath + '/**/*.js'], {read: false});
 
  return gulp.src('./html/**/*')
    .pipe(gulpIgnore.exclude("partials/**"))
    .pipe(gulpIgnore.exclude("partials"))
    .pipe(tplFilter)
    .pipe(fileinclude())  // Compile html (tpl) templates
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(tplFilter.restore)
    .pipe(htmlFilter)
    .pipe(inject(sources))
    .pipe(!release ? $.util.noop() : $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(htmlFilter.restore)
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
  runSequence(['vendor', 'fonts', 'images', 'javascript', 'html'], cb);
});


// The default task
gulp.task('default', ['build']);
