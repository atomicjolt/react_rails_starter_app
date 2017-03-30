const argv = require('minimist')(process.argv.slice(2));

const apps = require('./libs/build/apps');

//const stage = argv.release ? 'production' : 'development';

const stage = 'production';
apps.buildApps(stage, argv.onlyPack);
