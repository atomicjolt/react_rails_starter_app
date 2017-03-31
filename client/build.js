const argv = require('minimist')(process.argv.slice(2));

const apps = require('./libs/build/apps');

const stage = argv.release ? 'production' : 'development';

const options = { stage, onlyPack: argv.onlyPack };

apps.buildApps(options);
