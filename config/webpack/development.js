process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');

const host = `${process.env.ASSETS_SUBDOMAIN}.${process.env.APP_ROOT_DOMAIN}`;
const port = process.env.ASSETS_PORT;
environment.config.devServer.port = port;
environment.config.devServer.host = host;
environment.config.devServer.public = `${host}:${port}`;

module.exports = environment.toWebpackConfig();
