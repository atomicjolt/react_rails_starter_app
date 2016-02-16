var release           = true;
var webpackConfig     = require('./config/webpack.config.js')(release);

module.exports = webpackConfig;