var path          = require("path");
var _             = require("lodash");
var fs            = require("fs-extra");
var webpack       = require("webpack");
var nodeWatch     = require("node-watch");

var file            = require("./file");
var buildContent    = require("./content");
var templates       = require("./templates");
var utils           = require("./utils");
var applyProduction = require("./production");

// Settings
var webpackConfigBuilder = require("../../config/webpack.config");
var settings             = require("../../config/settings");
var argv                 = require("minimist")(process.argv.slice(2));
var release              = argv.release;
var stage                = release ? "production" : "development";

var inputPath            = path.join(__dirname, "../../html");
var templateDirs         = [path.join(inputPath, "layouts")];
var outputPath           = stage == "production" ? settings.prodOutput : settings.devOutput;

var ignoreFiles          = [".DS_Store"];

var options              = {
  truncateSummaryAt : 1000,
  buildExtensions   : ['.html', '.htm', '.md', '.markdown'], // file types to build (others will just be copied)
  rootInputPath     : inputPath,            // Original input path
  entries           : settings.entries,     // Webpack entry points
  cssEntries        : settings.cssEntries,  // Webpack css entry points
  buildSuffix       : settings.buildSuffix, // Webpack build suffix. ie _bundle.js
  templateData      : {},                   // Object that will be passed to every page as it is rendered
  templateMap       : {},                   // Used to specify specific templates on a per file basis
  templateDirs      : templateDirs          // Directories to look in for template
};

// -----------------------------------------------------------------------------
// run webpack to build entry points
// -----------------------------------------------------------------------------
function buildWebpackEntries(isHot){
  return new Promise(function(resolve, reject){
    var webpackConfig = webpackConfigBuilder(stage);
    if(!isHot){
      var bundler = webpack(webpackConfig);
      function bundle(err, stats){
        if(err){
          console.log("webpack error", err);
          reject(err);
        }
        //console.log("webpack", stats.toString({colors: true}));
        resolve({
          webpackConfig: webpackConfig,
          webpackStats: stats.toJson()
        });
      }
      bundler.run(bundle);
    } else {
      resolve(webpackConfig, null);
    }
  });
}

// -----------------------------------------------------------------------------
// build html and markdown files in a given directory
// -----------------------------------------------------------------------------
function buildContents(inputPath, outputPath, webpackConfig, webpackStats, stage, options){
  var results = [];
  var files = fs.readdirSync(inputPath);
  files.forEach(function(fileName){
    var fullInputPath = path.join(inputPath, fileName);
    var doOutput = options.templateDirs.indexOf(fullInputPath) < 0 && // Ignore template dirs
                  !_.includes(ignoreFiles, fileName);
    if(doOutput){
      if(fs.statSync(fullInputPath).isDirectory()){
        results = _.concat(results, buildContents(fullInputPath, outputPath, webpackConfig, webpackStats, stage, options));
      } else {
        var ext = path.extname(fullInputPath);
        if(_.includes(options.buildExtensions, ext)){
          var page = buildContent(fullInputPath, webpackConfig, webpackStats, stage, options);
          var outFile = fileName;
          var outPath = outputPath;
          var inPath = inputPath;
          if(page.destination && page.destination.length > 0){
            if(_.endsWith(page.destination, "/")){
              outPath = path.join(outPath, page.destination);
              outFile = "index.html";
            } else {
              outFile = page.destination;
            }
            inPath = "";
          }
          page.outputFilePath = file.write(inPath, outPath, outFile, page.html, options);
          results.push(page);
        } else {
          file.copy(inputPath, outputPath, fileName, options);
        }
      }
    }
  });
  return results;
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(isHot){
  return new Promise(function(resolve, reject){

    // Delete everything in the output path
    fs.emptydir(outputPath, function(){

      // Copy static files to build directory
      try {
        var stats = fs.statSync(settings.staticDir);
        console.log("Copying static files in " + settings.staticDir);
        fs.copySync(settings.staticDir, outputPath);
      }
      catch(err) {
        // No static dir. Do nothing
      }

      // Build files
      console.log("Building files in: " + inputPath);
      buildWebpackEntries(isHot).then(function(packResults){
        var pages = buildContents(inputPath, outputPath, packResults.webpackConfig, packResults.webpackStats, stage, options);

        resolve({
          pages         : pages,
          inputPath     : inputPath,
          outputPath    : outputPath,
          webpackConfig : packResults.webpackConfig,
          webpackStats  : packResults.webpackStats,
          stage         : stage,
          options       : options
        });
      });
    });
  });
};

// -----------------------------------------------------------------------------
// watch
// -----------------------------------------------------------------------------
function watch(){
  return new Promise(function(resolve, reject){
    build(true).then(function(buildResults){

      // Watch content
      nodeWatch(buildResults.inputPath, function(filePath){
        // Build the page
        var page = buildContent(filePath, buildResults.webpackConfig, buildResults.webpackStats, buildResults.stage, buildResults.options);
        page.outputFilePath = file.write(buildResults.inputPath, buildResults.outputPath, path.basename(filePath), page.html, buildResults.options);
      });
      resolve();
    });
  });
}

module.exports = {
  watch               : watch,
  build               : build,
  buildWebpackEntries
};













