const minify        = require('html-minifier').minify;
const webpackUtils  = require('./webpack_utils');

module.exports = function applyHtmlPaths(html, production, webpackAssets, buildSuffix) {

  const updatedHtml = webpackUtils.apply(
    html,
    webpackAssets,
    buildSuffix
  );

  if (production) {
    return minify(updatedHtml, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    });
  }

  return updatedHtml;

};
