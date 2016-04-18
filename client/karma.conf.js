var karmaConf = require('./config/karma');

module.exports = function(config){
  config.set(karmaConf());
};
