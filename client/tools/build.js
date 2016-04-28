var path          = require("path");
var _             = require("lodash");
var fs            = require("fs");
var webpack       = require("webpack");

var buildContent  = require("./build/content");

// Settings
var webpackConfigBuilder = require("../config/webpack.config");
var settings             = require("../config/settings");
var argv                 = require("minimist")(process.argv.slice(2));
var release              = argv.release;
var stage                = release ? "production" : "development";

// -----------------------------------------------------------------------------
// Delete everything
// -----------------------------------------------------------------------------
function clean(stage, cb){
  var rimraf = require("rimraf");
  var outputPath = stage == "production" ? settings.prodOutput : settings.devOutput;
  rimraf(outputPath, cb);
}

// -----------------------------------------------------------------------------
// run webpack to build entry points
// -----------------------------------------------------------------------------
function buildWebpackEntries(webpackConfig, cb){
  var bundler = webpack(webpackConfig);
  function bundle(err, stats){
    if (err){
      throw new util.PluginError("webpack", err);
    }
    //util.log("[webpack]", stats.toString({colors: true}));
    cb(webpackConfig, stats.toJson());
  }
  bundler.run(bundle);
}

// -----------------------------------------------------------------------------
// build html and markdown files in a given directory
// -----------------------------------------------------------------------------
function buildContents(dir, webpackConfig, webpackStats, stage, options){
  var results = [];
  var files = fs.readdirSync(dir);
  files.forEach(function(file){
    var fullPath = path.join(dir, file);
    if(options.templateDirs.indexOf(fullPath) < 0){ // Ignore template dirs
      if(fs.statSync(fullPath).isDirectory()){
        results = _.concat(results, buildContents(fullPath, webpackConfig, webpackStats, options));
      } else {
        var page = buildContent(fullPath, webpackConfig, webpackStats, stage, options);
        results.push(page);
      }
    }
  });
  return results;
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(dir, stage, options){
  clean(stage, function(){
    buildWebpackEntries(webpackConfigBuilder(stage), function(webpackConfig, webpackStats){
      results = buildContents(dir, webpackConfig, webpackStats, stage, options);
    });
  });
};


var templateDirs = [path.join(__dirname, "../html/layouts")];

var options = {
  entries:         settings.entries,     // Webpack entry points
  cssEntries:      settings.cssEntries,  // Webpack css entry points
  buildSuffix:     settings.buildSuffix, // Webpack build suffix. ie _bundle.js
  templateData:    {},                   // Object that will be passed to every page as it is rendered
  templateMap:     {},                   // Used to specify specific templates on a per file basis
  templateDirs:    templateDirs          // Directories to look in for template
};

build(path.join(__dirname, "../html"), stage, options);

