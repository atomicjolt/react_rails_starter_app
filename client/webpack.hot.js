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

function setupMiddleware(buildOptions) {

  const webpackConfig = webpackConfigBuilder(buildOptions);

  const compiler = webpack(webpackConfig);
  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });

  app.use(express.static(buildOptions.appOutputPath));
  app.use(webpackMiddlewareInstance);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildOptions.appOutputPath, req.url));
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

function launch(buildOptions) {
  setupMiddleware(buildOptions);
  runServer(buildOptions.port, buildOptions.appOutputPath);
}

const options = { stage: 'hot', onlyPack: false };
if (appName) {
  const result = clientApps.buildApp(appName, options);
  launch(result.buildOptions);
} else if (hotPack) {
  options.onlyPack = true;
  const results = clientApps.buildApps(options);
  _.each(results, (result) => {
    setupMiddleware(_.merge({},
      result.buildOptions,
      { publicPath: `/${result.buildOptions.appName}` }
    ));
  });
  runServer(settings.hotPort, settings.devOutput);
} else {
  _.each(clientApps.buildApps(options), (result) => {
    launch(result.buildOptions);
  });
}
