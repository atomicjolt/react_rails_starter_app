const path = require('path');
const _ = require('lodash');
const express = require('express');

const settings = require('./config/settings');

const app = express();
const argv = require('minimist')(process.argv.slice(2));

const appName = argv._[0];

function launch(servePath, port) {
  app.use(express.static(servePath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(servePath, req.url));
  });

  app.listen(port, '0.0.0.0', (err) => {
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
  let startPort = parseInt(settings.hotPort, 10);
  _.each(settings.apps, (p, name) => {
    launch(path.join(settings.prodOutput, name), startPort);
    startPort += 1;
  });
}
