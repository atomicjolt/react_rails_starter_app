const path      = require('path');
const fs        = require('fs-extra');
const _         = require('lodash');
const webpack   = require('webpack');
const nodeWatch = require('node-watch');

const file      = require('./file');
const content   = require('./content');

// Settings
const webpackConfigBuilder = require('../../config/webpack.config');

// -----------------------------------------------------------------------------
// run webpack to build entries
// -----------------------------------------------------------------------------
function buildWebpackEntries(webpackOptions) {
  return new Promise((resolve, reject) => {
    const webpackConfig = webpackConfigBuilder(webpackOptions);
    if (webpackOptions.stage !== 'hot') {
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
// main build
// -----------------------------------------------------------------------------
function build(rootBuildPath, webpackOptions, htmlOptions) {

  return new Promise((resolve) => {

    // Copy static files to build directory
    try {
      const staticDir = `${webpackOptions.appPath}/static`;
      console.log(`Copying static files in ${staticDir}`);
      fs.copySync(staticDir, rootBuildPath);
    } catch (err) {
      // No static dir. Do nothing
    }

    // Webpack build
    console.log(`Webpacking ${webpackOptions.appName}`);

    buildWebpackEntries(webpackOptions).then((packResults) => {
      let webpackAssets = null;
      const webpackAssetsFilePath = `${packResults.webpackConfig.output.path}/${webpackOptions.appName}-webpack-assets.json`;
      if (fs.existsSync(webpackAssetsFilePath)) {
        webpackAssets = fs.readJsonSync(webpackAssetsFilePath);
      }

      // Build html
      console.log(`Building html for ${webpackOptions.appName}`);
      const inputPath = path.join(webpackOptions.appPath, 'html');
      const templateDirs = _.map(htmlOptions.templateDirs,
        templateDir => path.join(inputPath, templateDir)
      );

      const pages = content.buildContents(
        inputPath,
        inputPath,
        path.join(rootBuildPath, webpackOptions.appName),
        webpackAssets,
        webpackOptions.stage,
        webpackOptions.buildSuffix,
        templateDirs,
        htmlOptions
      );

      resolve({
        webpackConfig : packResults.webpackConfig,
        webpackAssets,
        pages,
      });
    });

  });
}

// -----------------------------------------------------------------------------
// watch
// -----------------------------------------------------------------------------
function appWatch(rootBuildPath, webpackOptions, htmlOptions, buildResults) {

  // Watch for content to change
  nodeWatch(webpackOptions.appPath, { recursive: true }, (evt, filePath) => {

    const templateDirs = _.map(htmlOptions.templateDirs,
      templateDir => path.join(webpackOptions.appPath, 'html', templateDir)
    );

    const outputPath = path.join(rootBuildPath, webpackOptions.appName);
    const originalInputPath = path.join(webpackOptions.appPath, 'html');

    // Build the page
    const page = content.buildContent(
      filePath,
      templateDirs,
      buildResults.webpackAssets,
      webpackOptions.stage,
      htmlOptions
    );

    page.outputFilePath = file.write(
      content.outFilePath(page, outputPath, filePath, originalInputPath),
      page.html
    );

  });
}

function watch(rootBuildPath, webpackOptions, htmlOptions) {
  return new Promise((resolve) => {
    build(rootBuildPath, webpackOptions, htmlOptions).then((buildResults) => {
      appWatch(rootBuildPath, webpackOptions, htmlOptions, buildResults);
      resolve();
    });
  });
}

module.exports = {
  watch,
  build,
  buildWebpackEntries
};
