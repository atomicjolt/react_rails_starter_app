const minify        = require('html-minifier').minify;
const webpackUtils  = require('./webpack_utils');

module.exports = function applyProduction(html, stage, webpackConfig, webpackStats, options) {

  let productionHtml = html;

  if (stage === 'production') {
    productionHtml = webpackUtils.apply(
      html,
      webpackConfig,
      webpackStats,
      options.entries,
      options.cssEntries,
      options.buildSuffix
    );

    return minify(productionHtml, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    });
  }

  return productionHtml;

};
