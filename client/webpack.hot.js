var release              = false;
var express              = require('express');
var webpack              = require('webpack');
var webpackMiddleware    = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var settings             = require('./config/settings.js');
var webpackConfig        = require('./config/webpack.config.js')(release);
var path                 = require('path');
var app                  = express();
var compiler             = webpack(webpackConfig);

// new webpackDevServer(webpack(webpackConfig), {
//   contentBase: settings.devOutput,
//   publicPath: webpackConfig.output.publicPath,
//   watch: true,
//   hot: true,
//   inline: true,
//   progress: true,
//   headers: { "Access-Control-Allow-Origin": "*" },
//   filename: '[name]' + settings.buildSuffix,
// }).listen(settings.hotPort, 'localhost', function(err, result){
//   if(err){
//     console.log('webpack-dev-server', err);
//   }
//   console.log('Webpack hot load server listening on: ' + webpackConfig.output.publicPath);
//   console.log('Webpack hot load server serving content from: ' + settings.devOutput);
// });


app.use(express.static(settings.devOutput));  

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  watch: true,
  noInfo: true,
  headers: { 'Access-Control-Allow-Origin': '*' }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {  
  res.sendFile(path.join(devOutput, 'index.html'));
});

app.listen(settings.hotPort, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening on: ' + webpackConfig.output.publicPath);
  console.log('Serving content from: ' + settings.devOutput);
});




