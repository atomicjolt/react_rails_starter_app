const _    = require('lodash');
const path = require('path');

// -----------------------------------------------------------------------------
// Finds the has value for a given entry point in the provided webpack stats
// -----------------------------------------------------------------------------
function getHashed(webpackStats, entryPoint, ext) {
  const found = webpackStats.assetsByChunkName[entryPoint];
  // If there is an array of matching values we have to find the one with the right file extension.
  if (_.isArray(found)) {
    return _.find(found, hashEntry => path.extname(hashEntry).toLowerCase() === `.${ext}`);
  }
  return found;
}

// -----------------------------------------------------------------------------
// Changes webpack paths as needed.
// -----------------------------------------------------------------------------
function apply(html, webpackConfig, webpackStats, entries, cssEntries, buildSuffix) {
  let result = html;
  _.each(webpackConfig.entry, (_entryPath, entry) => {
    if (_.has(entries, entry)) {
      const newPath = webpackConfig.output.publicPath + getHashed(webpackStats, entry, 'js');
      result = result.replace(entry + buildSuffix, newPath);
    } else if (_.has(cssEntries, entry)) {
      const newPath = webpackConfig.output.publicPath + getHashed(webpackStats, entry, 'css');
      result = result.replace(`${entry}.css`, newPath);
    } else {
      console.log(`Error, could not find entry: ${entry}`);
    }
  });
  return result;
}

module.exports = {
  apply,
  getHashed
};
