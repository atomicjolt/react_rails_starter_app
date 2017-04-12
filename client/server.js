const path = require('path');
const _ = require('lodash');
const express = require('express');

const settings = require('./config/settings');

const serverApp = express();
const argv = require('minimist')(process.argv.slice(2));

const appName = _.trim(argv._[0]);

function launch(servePath, port) {
  serverApp.use(express.static(servePath));

  serverApp.get('*', (req, res) => {
    res.sendFile(path.join(servePath, req.url));
  });

  serverApp.listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on: ${port}`);
    console.log(`Serving content from: ${servePath}`);
  });
}

if (appName) {
  launch(path.join(settings.prodOutput, appName), settings.hotPort);
} else {
  const options = { stage: 'production', onlyPack: false, port: settings.hotPort };
  _.each(settings.apps(options), (app) => {
    launch(app.outputPath, app.port);
  });
}
