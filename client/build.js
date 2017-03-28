const argv = require('minimist')(process.argv.slice(2));

const apps = require('./libs/build/apps');

const stage = argv.release ? 'production' : 'development';

apps.buildApps(stage, argv.onlyPack);
