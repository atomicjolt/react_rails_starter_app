const karmaConf = require('./config/karma');

module.exports = function karmaConfig(config) {
  config.set(karmaConf());
};
