const path          = require('path');
const fs            = require('fs-extra');
const webpack       = require('webpack');
const nodeWatch     = require('node-watch');

const file          = require('./file');
const content       = require('./content');

// Settings
const webpackConfigBuilder = require('../../config/webpack.config');
const settings             = require('../../config/settings');

const argv                 = require('minimist')(process.argv.slice(2));

const release              = argv.release;
const stage                = release ? 'production' : 'development';

const inputPath            = path.join(__dirname, '../../html');
const templateDirs         = [path.join(inputPath, 'layouts')];
const outputPath           = stage === 'production' ? settings.prodOutput : settings.devOutput;


const options              = {
  truncateSummaryAt : 1000,
  buildExtensions   : ['.html', '.htm', '.md', '.markdown'], // file types to build (others will just be copied)
  rootInputPath     : inputPath,            // Original input path
  buildSuffix       : settings.buildSuffix, // Webpack build suffix. ie _bundle.js
  templateData      : {}, // Object that will be passed to every page as it is rendered
  templateMap       : {}, // Used to specify specific templates on a per file basis
  templateDirs            // Directories to look in for template
};

// -----------------------------------------------------------------------------
// run webpack to build entry points
// -----------------------------------------------------------------------------
function buildWebpackEntries(isHot) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(stage);
    if (!isHot) {
      const bundler = webpack(webpackConfig);
      const bundle = (err, stats) => {
        if (err) {
          console.log('webpack error', err);
          reject(err);
        }
        // console.log('webpack', stats.toString({ colors: true }));
        resolve({
          webpackConfig,
          webpackStats: stats.toJson()
        });
      };
      bundler.run(bundle);
    } else {
      resolve(webpackConfig, null);
    }
  });
}


// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(isHot) {
  return new Promise((resolve) => {

    // Delete everything in the output path
    fs.emptydir(outputPath, () => {

      // Copy static files to build directory
      try {
        // const stats = fs.statSync(settings.staticDir);
        console.log(`Copying static files in ${settings.staticDir}`);
        fs.copySync(settings.staticDir, outputPath);
      } catch (err) {
        // No static dir. Do nothing
      }

      // Build files
      console.log(`Building files in: ${inputPath}`);
      buildWebpackEntries(isHot).then((packResults) => {
        let webpackAssets;
        if (stage === 'production') {
          webpackAssets = fs.readJsonSync(`${packResults.webpackConfig.output.path}/webpack-assets.json`);
        }
        const pages = content.buildContents(
          inputPath,
          outputPath,
          webpackAssets,
          stage,
          options
        );

        resolve({
          pages,
          inputPath,
          outputPath,
          webpackConfig : packResults.webpackConfig,
          webpackAssets,
          stage,
          options
        });
      });
    });
  });
}

// -----------------------------------------------------------------------------
// watch
// -----------------------------------------------------------------------------
function watch() {
  return new Promise((resolve) => {
    build(true).then((buildResults) => {

      // Watch content
      nodeWatch(buildResults.inputPath, (filePath) => {
        // Build the page
        const page = content.buildContent(
          filePath,
          buildResults.webpackAssets,
          buildResults.stage,
          buildResults.options
        );
        page.outputFilePath = file.write(
          buildResults.inputPath,
          buildResults.outputPath,
          path.basename(filePath),
          page.html,
          buildResults.options
        );
      });
      resolve();
    });
  });
}

module.exports = {
  watch,
  build,
  buildWebpackEntries
};
