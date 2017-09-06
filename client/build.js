const apps = require('./libs/build/apps');
const log = require('./libs/build/log');
const argv = require('minimist')(process.argv.slice(2));

const stage = argv.release ? 'production' : 'development';
const port = parseInt(process.env.ASSETS_PORT, 10) || 8080;
const options = {
  port,
  stage,
  onlyPack: argv.onlyPack,
  noClean: argv.noClean,
  rootOutput: argv.rootOutput
};

apps.buildAppsForOneServer(options).webpackCompiler.run((err) => {
  if (err) {
    log.error(err);
  }
});
