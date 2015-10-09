var webpack           = require('webpack');
var webpackDevServer  = require('webpack-dev-server');
var release           = false;
var settings          = require('./config/settings.js');
var webpackConfig     = require('./config/webpack.config.js')(release);

new webpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  watch: true,
  hot: true,
  inline: true,
  progress: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  filename: '[name]_web_pack_bundle.js',
}).listen(settings.hotPort, 'localhost', function(err, result){
  if(err){
    console.log('webpack-dev-server', err);
  }
  console.log('Webpack hot load server listening on: ' + webpackConfig.output.publicPath);
});