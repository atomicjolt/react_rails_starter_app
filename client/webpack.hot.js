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
  // Run a single app. Note that when using yarn hot in order to run a single
  // application you will need to type 'yarn hot -- --app=my-app'
  const result = clientApps.buildApp(appName, options);
  result.buildPromise.then(() => launch(result.app));
} else if (hotPack) {
  // Only run webpack. Do not run the rest of the build process
  options.onlyPack = true;
  options.rootOutput = true;
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
  // Run and serve all applications
  clientApps.buildApps(options).then((results) => {
    _.each(results, (result) => {
      result.buildPromise.then(() => launch(result.app));
    });
  });
}
