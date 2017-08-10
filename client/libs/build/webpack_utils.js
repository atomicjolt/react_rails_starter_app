const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const utils = require('./utils');

// -----------------------------------------------------------------------------
// Loads webpack assets file
// -----------------------------------------------------------------------------
function loadWebpackAssets(app) {
  return _(fs.readdirSync(app.outputPath)
  ).filter(filename =>
    _.endsWith(filename, '-webpack-assets.json')
  ).reduce((result, filename) => {
    const webpackAssetsFilePath = path.join(app.outputPath, filename);
    if (fs.existsSync(webpackAssetsFilePath)) {
      return _.merge(result, _.mapValues(fs.readJsonSync(webpackAssetsFilePath), asset =>
        _.mapValues(asset, assetFilename => utils.joinUrlOrPath(app.publicPath, assetFilename))
      ));
    }
    return {};
  }, {});
}

// -----------------------------------------------------------------------------
// Changes webpack paths as needed.
// -----------------------------------------------------------------------------
function apply(html, webpackAssets, buildSuffix) {
  let result = html;
  if (!webpackAssets) {
    throw new Error('Invalid webpack assets.');
  }
  _.each(webpackAssets, (assets, name) => {
    _.each(assets, (hashedName, ext) => {
      if (ext === 'js') {
        result = result.replace(`${name}${buildSuffix}`, hashedName);
      } else {
        result = result.replace(`${name}.${ext}`, hashedName);
      }
    });
  });
  return result;
}

module.exports = {
  apply,
  loadWebpackAssets,
};
