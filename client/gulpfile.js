'use strict';

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp          = require('gulp');
var $             = require('gulp-load-plugins')();
var es            = require('event-stream');
var path          = require('path');
var runSequence   = require('run-sequence');
var webpack       = require('webpack');
var fileinclude   = require('gulp-file-include');
var rename        = require('gulp-rename');
var url           = require('url');
var settings      = require('./config/settings.js');
var argv          = require('minimist')(process.argv.slice(2));
var sass          = require('gulp-sass');
var prefix        = require('gulp-autoprefixer');

// Settings
var release       = argv.release;
var outputPath    = release ? settings.prodOutput : settings.devOutput;
var webpackConfig = require('./config/webpack.config.js')(release);

// Node.js runtime dependencies and their version numbers
var pkgs = require('./package.json').dependencies;
Object.keys(pkgs).forEach(function (key) { return pkgs[key] = pkgs[key].substring(1); });

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

// Copy static files / assets
// -----------------------------------------------------------------------------
gulp.task('assets', function(){
  return es.merge(
    gulp.src('./app/images/**')
      .pipe(gulp.dest(outputPath + '/images/')),
    gulp.src('./app/styles/fonts/**')
      .pipe(gulp.dest(outputPath + '/css/fonts/'))
  );
});

// Compile html
// -----------------------------------------------------------------------------
gulp.task('tpl', function(){
  return gulp.src('./app/**/*.tpl.html')
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
  return gulp.src('./app/**/*.html')
    .pipe(!release ? $.util.noop() : $.htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    }))
    .pipe(gulp.dest(outputPath));
});

// Copy other files
// -----------------------------------------------------------------------------
gulp.task('approot', function(){
  return gulp.src('./app/**/*')
    .pipe(gulp.dest(outputPath));
});

// CSS stylesheets
// -----------------------------------------------------------------------------
gulp.task('styles', function(){
  return gulp.src('./app/styles/*.scss')
    .pipe($.plumber())
    .pipe(sass({sourceMap: 'sass', sourceComments: 'map'}))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .on('error', $.util.log)
    .pipe(release ? $.minifyCss() : $.util.noop())
    .pipe(gulp.dest(outputPath + '/css'));
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
  runSequence(['vendor', 'assets', 'styles', 'javascript', 'tpl', 'html', 'approot'], cb);
});

gulp.task('deploy', ['build'], function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo <%= f(file.path) %>',
      'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
});

// The default task
gulp.task('default', ['hot']);
