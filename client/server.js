const path = require('path');
const express = require('express');

const settings = require('./config/settings');

const app = express();
const argv = require('minimist')(process.argv.slice(2));

const appName = argv._[0];

function launch(servePath) {
  app.use(express.static(servePath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(servePath, req.url));
  });

  app.listen(settings.hotPort, '0.0.0.0', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Listening on: ${settings.hotPort}`);
    console.log(`Serving content from: ${servePath}`);
  });
}

if (appName) {
  launch(path.join(settings.prodOutput, appName));
} else {
  launch(settings.prodOutput);
}
