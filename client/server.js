const path = require('path');
const express = require('express');

const settings = require('./config/settings');

const serverApp = express();

const localIp = '0.0.0.0';

function launch(servePath, port) {
  serverApp.use(express.static(servePath));

  serverApp.get('*', (req, res) => {
    res.sendFile(path.join(servePath, req.url));
  });

  serverApp.listen(port, localIp, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('*****************************************************************************************');
    console.log('Note that you must run "yarn build" before running "yarn live" to build production files.');
    console.log('Also note that if you have set "prodAssetsUrl" in settings.js to a CDN or other public ');
    console.log('server value you will need to change it to an empty string to serve files from your ');
    console.log('local computer.');
    console.log(`Listening on: http://${localIp}:${port}`);
    console.log(`Serving content from: ${servePath}`);
  });
}

launch(settings.prodOutput, settings.hotPort);
