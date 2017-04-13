const minify        = require('html-minifier').minify;
const webpackUtils  = require('./webpack_utils');

module.exports = function applyProduction(html, stage, webpackAssets, buildSuffix) {

  let productionHtml = html;

  if (stage === 'production') {
    productionHtml = webpackUtils.apply(
      html,
      webpackAssets,
      buildSuffix
    );

    return minify(productionHtml, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    });
  }

  return productionHtml;

};
