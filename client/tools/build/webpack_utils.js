var _    = require("lodash");
var path = require("path");

// -----------------------------------------------------------------------------
// Finds the has value for a given entry point in the provided webpack stats
// -----------------------------------------------------------------------------
function getHashed(webpackStats, entryPoint, ext){
  var found = webpackStats.assetsByChunkName[entryPoint];
  if(_.isArray(found)){ // If there is an array of matching values we have to find the one with the right file extension.
    return _.find(found, function(hashEntry){
      return path.extname(hashEntry).toLowerCase() === '.' + ext;
    });
  } else {
    return found;
  }
}

// -----------------------------------------------------------------------------
// Changes webpack paths as needed.
// -----------------------------------------------------------------------------
function apply(html, webpackConfig, webpackStats, entries, cssEntries, buildSuffix){
  var result = html;
  _.each(webpackConfig.entry, function(path, entry){
    if(_.has(entries, entry)){
      var newPath = webpackConfig.output.publicPath + getHashed(webpackStats, entry, 'js');
      result = result.replace(entry + buildSuffix, newPath);
    } else if(_.has(cssEntries, entry)){
      var newPath = webpackConfig.output.publicPath + getHashed(webpackStats, entry, 'css');
      result = result.replace(entry + '.css', newPath);
    } else {
      console.log("Error, could not find entry: " + entry);
    }
  });
  return result;
}

module.exports = {
  apply:     apply,
  getHashed: getHashed
};