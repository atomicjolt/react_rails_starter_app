var release              = false;
var express              = require("express");
var webpack              = require("webpack");
var webpackMiddleware    = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var settings             = require("./config/settings.js");
var webpackConfig        = require("./config/webpack.config")("development");
var path                 = require("path");
var app                  = express();

var build                = require("./tools/build");

function launch(){

  var compiler                  = webpack(webpackConfig);
  var webpackMiddlewareInstance = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watch: true,
    noInfo: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  });

  app.use(express.static(settings.devOutput));

  app.use(webpackMiddlewareInstance);

  app.use(webpackHotMiddleware(compiler));

  app.get("*", function response(req, res) {
    res.sendFile(path.join(settings.devOutput, req.url));
  });

  app.listen(settings.hotPort, "localhost", function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Listening on: " + webpackConfig.output.publicPath);
    console.log("Serving content from: " + settings.devOutput);
  });
}

build.watch().then(launch);
