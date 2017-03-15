const express              = require('express');
const webpack              = require('webpack');
const webpackMiddleware    = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const settings             = require('./config/settings');
const webpackConfig        = require('./config/webpack.config')('hot');
const path                 = require('path');
const build                = require('./tools/build');

const app                  = express();

const localIp = '0.0.0.0';

function launch() {

  const compiler = webpack(webpackConfig);
  const webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watch: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  });

  app.use(express.static(settings.devOutput));

  app.use(webpackMiddlewareInstance);

  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    res.sendFile(path.join(settings.devOutput, req.url));
  });

  app.listen(settings.hotPort, localIp, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on: http://${localIp}:${settings.hotPort}${webpackConfig.output.publicPath}`);
    console.log(`Serving content from: ${settings.devOutput}`);
  });
}

build.watch().then(launch);
