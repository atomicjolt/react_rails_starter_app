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

const serverApp = express();

const localIp = '0.0.0.0';
const appName = _.trim(argv._[0]);
const hotPack = argv.hotPack;

function setupMiddleware(apps) {

  const webpackConfigs = _.map(apps, app => webpackConfigBuilder(app));

  const compiler = webpack(webpackConfigs);

  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
  serverApp.use(webpackMiddlewareInstance);
  serverApp.use(webpackHotMiddleware(compiler));
}

function runServer(port, servePath) {
  serverApp.use(express.static(servePath));
  serverApp.get('*', (req, res) => {
    res.sendFile(path.join(servePath, req.url));
  });
  serverApp.listen(port, localIp, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on: http://${localIp}:${port}`);
    console.log(`Serving content from: ${servePath}`);
  });
}

function launch(app) {
  setupMiddleware([app]);
  runServer(app.port, app.outputPath);
}

const options = { hotPack, stage: 'hot', onlyPack: false, port: settings.hotPort, appPerPort: true };
if (appName) {
  const result = clientApps.buildApp(appName, options);
  launch(result.app);
} else if (hotPack) {
  options.onlyPack = true;
  options.appPerPort = false;
  const results = clientApps.buildApps(options);
  const apps = _.map(results, result => result.app);
  setupMiddleware(apps);
  runServer(settings.hotPort, settings.paths.devOutput);
} else {
  _.each(clientApps.buildApps(options), (result) => {
    launch(result.app);
  });
}
