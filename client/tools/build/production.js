var minify        = require('html-minifier').minify;
var webpackUtils  = require("./webpack_utils");

module.exports = function(html, stage, webpackConfig, webpackStats, options){
  if(stage == "production"){
    html = webpackUtils.apply(html, webpackConfig, webpackStats, options.entries, options.cssEntries, options.buildSuffix);
    return minify(html, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    });
  } else {
    return html;
  }
};