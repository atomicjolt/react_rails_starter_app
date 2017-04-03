const _ = require('lodash');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const settings = require('./config/settings');

const webpackConfigBuilder = require('./config/webpack.config');
const clientApps = require('./libs/build/apps');

const app = express();

const localIp = '0.0.0.0';
const appName = argv._[0];
const hotPack = argv.hotPack;

function setupMiddleware(webpackOptions) {

  const webpackConfig = webpackConfigBuilder(webpackOptions);

  const compiler = webpack(webpackConfig);
  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });

  app.use(express.static(webpackOptions.servePath));
  app.use(webpackMiddlewareInstance);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(webpackOptions.servePath, req.url));
  });
}

function runServer(port, servePath) {
  app.listen(port, localIp, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on: http://${localIp}:${port}`);
    console.log(`Serving content from: ${servePath}`);
  });
}

function launch(webpackOptions) {
  setupMiddleware(webpackOptions);
  runServer(webpackOptions.port, webpackOptions.servePath);
}

const options = { stage: 'hot', onlyPack: false };
if (appName) {
  clientApps.buildApp(appName, options, launch);
} else if (hotPack) {
  options.onlyPack = true;
  const webpackConfigs = clientApps.buildApps(options, null);
  _.each(webpackConfigs, (webpackOptions) => {
    setupMiddleware(_.merge({},
      webpackOptions,
      {
        devRelativeOutput: `/${webpackOptions.appName}`
      }
    ));
  });
  runServer(settings.hotPort, settings.devOutput);
} else {
  clientApps.buildApps(options, launch);
}
