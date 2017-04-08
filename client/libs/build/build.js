const path      = require('path');
const fs        = require('fs-extra');
const webpack   = require('webpack');
const nodeWatch = require('node-watch');

const content   = require('./content');

// Settings
const webpackConfigBuilder = require('../../config/webpack.config');

// -----------------------------------------------------------------------------
// run webpack to build entries
// -----------------------------------------------------------------------------
function buildWebpackEntries(buildOptions) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(buildOptions);
    if (buildOptions.stage !== 'hot') {
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
      resolve({
        webpackConfig,
        webpackStats: null
      });
    }
  });
}

// -----------------------------------------------------------------------------
// copy over static files to build directory
// -----------------------------------------------------------------------------
function buildStatic(staticInputPath, outputPath) {
  try {
    console.log(`Copying static files in ${staticInputPath}`);
    fs.copy(staticInputPath, outputPath);
  } catch (err) {
    // No static dir. Do nothing
  }
}

// -----------------------------------------------------------------------------
// watchStatic
// Used to copy over static files if they change
// -----------------------------------------------------------------------------
function watchStatic(staticInputPath, buildOptions) {
  console.log(`Watching static files in ${staticInputPath}`);
  nodeWatch(staticInputPath, { recursive: true }, (evt, filePath) => {
    console.log(`Change in static file ${filePath}`);
    fs.copySync(filePath, buildOptions.outputPath);
  });
}

// -----------------------------------------------------------------------------
// watchHtml
// Used to rebuild html or templates if files change.
// -----------------------------------------------------------------------------
function watchHtml(htmlInputPath, webpackAssets, buildOptions) {
  console.log(`Watching html files in ${htmlInputPath}`);
  nodeWatch(htmlInputPath, { recursive: true }, (evt, fullInputPath) => {
    console.log(`Change in html file ${fullInputPath}`);
    content.writeContent(
      htmlInputPath,
      fullInputPath,
      webpackAssets,
      buildOptions);
  });
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function build(buildOptions) {

  return new Promise((resolve) => {

    // Copy static files to build directory
    const staticInputPath = path.join(buildOptions.app.path, buildOptions.app.staticPath);
    buildStatic(staticInputPath, buildOptions.outputPath);

    // Webpack build
    console.log(`Webpacking ${buildOptions.appName}`);

    buildWebpackEntries(buildOptions).then((packResults) => {
      let webpackAssets = null;
      const webpackAssetsFilePath = `${packResults.webpackConfig.output.path}/${buildOptions.appName}-webpack-assets.json`;
      if (fs.existsSync(webpackAssetsFilePath)) {
        webpackAssets = fs.readJsonSync(webpackAssetsFilePath);
      }

      // Build html
      console.log(`Building html for ${buildOptions.appName}`);
      const htmlInputPath = path.join(buildOptions.app.path, buildOptions.app.htmlPath);

      const pages = content.buildContents(
        htmlInputPath,
        htmlInputPath,
        buildOptions,
        webpackAssets
      );

      if (buildOptions.stage === 'hot') {
        watchStatic(staticInputPath, buildOptions);
        watchHtml(htmlInputPath, webpackAssets, buildOptions);
        // TODO figure out how to watch template files - requires rebuild of all html
      }

      resolve({
        webpackConfig : packResults.webpackConfig,
        webpackAssets,
        pages,
      });
    });

  });
}

module.exports = {
  build,
  buildWebpackEntries
};
