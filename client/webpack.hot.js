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

const localIp = '0.0.0.0';
const appName = argv.app;
const hotPack = argv.hotPack;
const shouldLint = argv.lint;

function setupMiddleware(serverApp, apps) {

  const webpackConfigs = _.map(apps, app => webpackConfigBuilder(app));

  const compiler = webpack(webpackConfigs);

  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });
  serverApp.use(webpackMiddlewareInstance);
  serverApp.use(webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2000,
    timeout: 20000,
    reload: true
  }));

}

function runServer(serverApp, port, servePath) {
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
  const serverApp = express();
  setupMiddleware(serverApp, [app]);
  runServer(serverApp, app.port, app.outputPath);
}

const options = { hotPack, shouldLint, stage: 'hot', onlyPack: false, port: settings.hotPort, appPerPort: true };

if (appName) {
  const result = clientApps.buildApp(appName, options);
  result.buildPromise.then(() => launch(result.app));
} else if (hotPack) {
  options.onlyPack = true;
  options.appPerPort = false;
  clientApps.buildApps(options).then((results) => {
    const apps = _.map(results, result => result.app);
    const promises = _.map(results, result => result.buildPromise);
    const serverApp = express();
    Promise.all(promises).then(() => {
      setupMiddleware(serverApp, apps);
      runServer(serverApp, settings.hotPort, settings.paths.devOutput);
    });
  });
} else {
  clientApps.buildApps(options).then((results) => {
    _.each(results, (result) => {
      result.buildPromise.then(() => launch(result.app));
    });
  });
}
