const _ = require('lodash');

const settings = require('./settings');
const webpackConfigBuilder = require('./webpack.config');
const apps = require('../libs/build/apps');

module.exports = () => {

  const webpackOptions = apps.buildWebpackOptions('fakeAppName', 'fakeAppPath', { stage: 'test', onlyPack: true });
  const webpackConfig = webpackConfigBuilder(webpackOptions);
  const plugins = webpackConfig.plugins;
  const module = webpackConfig.module;
  const resolve = webpackConfig.resolve;

  _.each(settings.apps, (appPath, appName) => {
    const appWebpackOptions = apps.buildWebpackOptions(appName, appPath, { stage: 'test', onlyPack: true });
    const appWebpackConfig = webpackConfigBuilder(appWebpackOptions);
    resolve.modules = _.union(resolve.modules, appWebpackConfig.resolve.modules);
  });

  return {

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // How long will Karma wait for a message from a browser before disconnecting from it (in ms)
    browserNoActivityTimeout: 60000,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // web server port
    port: 9876,

    files: [
      // Use webpack to build each test individually. If changed here, change in preprocessors
      // './js/**/*.spec.js'
      './webpack.tests.js',          // More performant but tests cannot be run individually
    ],

    // Transpile tests with the karma-webpack plugin
    preprocessors: {
      // Use webpack to build each test individually. If changed here, match the change in files
      // './js/**/*.spec.js': ['webpack', 'sourcemap']
      './webpack.tests.js': ['webpack', 'sourcemap', 'coverage'],      // More performant but tests cannot be run individually
      // './js/**/*.js*': 'coverage',
    },

    // Run the tests using any of the following browsers
    // - Chrome         npm install --save-dev karma-chrome-launcher
    // - ChromeCanary
    // - Firefox        npm install --save-dev karma-firefox-launcher
    // - Opera          npm install --save-dev karma-opera-launcher
    // - Safari         npm install --save-dev karma-safari-launcher  (only Mac)
    // - PhantomJS      npm install --save-dev karma-phantomjs-launcher
    // - IE             npm install karma-ie-launcher (only Windows)
    browsers: ['Chrome'],

    // Exit the test runner as well when the test suite returns.
    singleRun: false,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Use jasmine as the test framework
    frameworks: ['jasmine-ajax', 'jasmine'],

    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'spec'
    reporters: ['dots', 'coverage'],

    // karma-webpack configuration. Load and transpile js and jsx files.
    // Use istanbul-transformer post loader to generate code coverage report.
    webpack: {
      devtool : 'eval',
      plugins,
      module,
      resolve,
    },

    // Reduce the noise to the console
    webpackMiddleware: {
      noInfo : true,
      stats  : {
        colors: true,
      },
    },

    coverageReporter: {
      type : 'lcovonly',
      dir  : '../coverage/',
      file : 'coverage.info',
    },
  };
};
