var _    = require("lodash");
var path = require("path");

// -----------------------------------------------------------------------------
// Finds the has value for a given entry point in the provided webpack stats
// -----------------------------------------------------------------------------
function getHashed(webpackStats, entryPoint, ext){
  return _.find(webpackStats.assetsByChunkName[entryPoint], function(hashEntry){
    return path.extname(hashEntry).toLowerCase() === '.' + ext;
  });
}

// -----------------------------------------------------------------------------
// Changes webpack paths as needed.
// -----------------------------------------------------------------------------
function apply(html, webpackStats, webpackConfig, entries, cssEntries, buildSuffix){
  var result = html;
  _.each(webpackConfig.entry, function(path, entry){
    if(_.has(entries, entry)){
      result = result.replace(entry + buildSuffix, getHashed(webpackStats, entry, 'js'));
    } else if(_.has(cssEntries, entry)){
      result = result.replace(entry + '.css', getHashed(webpackStats, entry, 'css'));
    }
  });
  return result;
}

module.exports = {
  apply:     apply,
  getHashed: getHashed
};