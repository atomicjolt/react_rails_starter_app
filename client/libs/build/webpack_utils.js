const fs = require('fs-extra');
const _ = require('lodash');

// -----------------------------------------------------------------------------
// Loads webpack assets file
// -----------------------------------------------------------------------------
function loadWebpackAssets(app) {
  let webpackAssets = null;
  const webpackAssetsFilePath = `${app.outputPath}/${app.name}-webpack-assets.json`;
  if (fs.existsSync(webpackAssetsFilePath)) {
    webpackAssets = fs.readJsonSync(webpackAssetsFilePath);
  }
  return webpackAssets;
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
  loadWebpackAssets
};
