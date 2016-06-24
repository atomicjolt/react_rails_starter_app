var info      = require('../package.json');
var path      = require('path');

var clientAppPath = path.join(__dirname, '../');

var devRelativeOutput     = '/';
var prodRelativeOutput    = '/assets/';

var devOutput     = path.join(__dirname, '../../build/dev', devRelativeOutput);
var prodOutput    = path.join(__dirname, '../../public', prodRelativeOutput);

// There is a warning if the .env file is missing
// This is fine in a production setting, where settings
// are loaded from the env and not from a file
require('dotenv').load({path: path.join(__dirname, '../../.env')});

var hotPort = process.env.ASSETS_PORT || 8080;

module.exports = {
  title: info.title,
  author: info.author,
  version: info.versions,
  build: Date.now(),

  devRelativeOutput: devRelativeOutput,
  prodRelativeOutput: prodRelativeOutput,

  devOutput: devOutput,
  prodOutput: prodOutput,

  // Dev urls
  devAssetsUrl: process.env.ASSETS_URL || '',

  hotPort: hotPort,

  buildSuffix: '_bundle.js',

  entries: {
    app: clientAppPath + 'js/app.jsx'
  },

  cssEntries: {
    styles: clientAppPath + 'styles/styles.js'
  }

};
