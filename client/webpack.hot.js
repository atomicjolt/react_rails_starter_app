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

function setupMiddleware(app) {

  const webpackConfig = webpackConfigBuilder(app);

  const compiler = webpack(webpackConfig);
  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });

  serverApp.use(express.static(app.outputPath));
  serverApp.use(webpackMiddlewareInstance);
  serverApp.use(webpackHotMiddleware(compiler));
  serverApp.get('*', (req, res) => {
    res.sendFile(path.join(app.outputPath, req.url));
  });
}

function runServer(port, servePath) {
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
  setupMiddleware(app);
  runServer(app.port, app.outputPath);
}

const options = { hotPack, stage: 'hot', onlyPack: false, port: settings.hotPort };
if (appName) {
  const result = clientApps.buildApp(appName, options);
  launch(result.app);
} else if (hotPack) {
  options.onlyPack = true;
  const results = clientApps.buildApps(options);
  _.each(results, (result) => {
    setupMiddleware(result.app);
  });
  runServer(settings.hotPort, settings.paths.devOutput);
} else {
  _.each(clientApps.buildApps(options), (result) => {
    launch(result.app);
  });
}
