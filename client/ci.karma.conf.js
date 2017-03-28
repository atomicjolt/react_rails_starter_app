const karmaConfig = require('./config/karma');

module.exports = (config) => {
  const testConfig = karmaConfig();
  testConfig.singleRun = true;
  testConfig.autoWatch = false;
  testConfig.customLaunchers = {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox'],
    },
  };
  testConfig.browsers = ['Chrome_travis_ci'];
  console.log(testConfig)
  config.set(testConfig);
};
