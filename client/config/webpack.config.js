'use strict';

var webpack             = require('webpack');
var path                = require('path');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var settings            = require('./settings.js');

module.exports = function(release){

  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
  ];

  var autoprefix = '{browsers:["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';
  var jsLoaders = ["babel-loader?stage=0&optional=runtime"]; // include the runtime 

  var cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];

  var scssLoaders = cssLoaders.slice(0);
    scssLoaders.push('sass-loader?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './node_modules/bootstrap-sass')));

  var lessLoaders = cssLoaders.slice(0);
      lessLoaders.push("less-loader");
 
  var entries;

  if(release){
    entries = settings.entries;
  } else {
    jsLoaders.unshift("react-hot-loader");

    // Configure entries with hotloader
    var originalEntries = settings.entries;
    entries = {};
    for(var name in originalEntries){
      entries[name] = ['webpack-dev-server/client?' + settings.devAssetsUrl, 'webpack/hot/only-dev-server', originalEntries[name]];
    }
  }

  var cssEntries = settings.cssEntries;
  for(var name in cssEntries){
    entries[name] = cssEntries[name];
  }

  var extractCSS = new ExtractTextPlugin('[name]-[chunkhash].css');

  return {
    context: __dirname,
    entry: entries,
    output: {
      path: release ? settings.prodOutput : settings.devOutput,
      filename: release ? '[name]-[chunkhash]' + settings.buildSuffix : '[name]' + settings.buildSuffix,
      chunkFilename: release ? '[id]-[chunkhash]' + settings.buildSuffix : "[id].js",
      publicPath: release ? settings.prodRelativeOutput : settings.devAssetsUrl + settings.devRelativeOutput,
      sourceMapFilename: "debugging/[file].map",
      pathinfo: !release // http://webpack.github.io/docs/configuration.html#output-pathinfo
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ["node_modules", "vendor"]
    },
    cache: true,
    quiet: false,
    noInfo: false,
    debug: false,
    outputPathinfo: !release,
    devtool: release ? false : "eval",  // http://webpack.github.io/docs/configuration.html#devtool
    stats: {
      colors: true
    },
    plugins: release ? [
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"', '__DEV__': false}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ChunkManifestPlugin({
        filename: 'webpack-common-manifest.json',
        manfiestVariable: 'webpackBundleManifest'
      }),
      extractCSS
      //new webpack.optimize.CommonsChunkPlugin('init.js') // Use to extract common code from multiple entry points into a single init.js
    ] : [
      extractCSS,
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        { test: /\.js$/,              loaders: jsLoaders, exclude: /node_modules/ },
        { test: /\.jsx?$/,            loaders: jsLoaders, exclude: /node_modules/ },
        { test: /\.scss$/i,           loader: extractCSS.extract(scssLoaders) },
        { test: /\.css$/i ,           loader: extractCSS.extract(cssLoaders) },
        { test: /\.less$/i ,          loader: extractCSS.extract(lessLoaders) },
        //{ test: /\.html$/,            loader: 'webpack-compile-templates' }, // Add if you need to compile underscore.js - https://www.npmjs.com/package/webpack-compile-templates
        { test: /.*\.(gif|png|jpg|jpeg|svg)$/, loaders: ['url?limit=5000&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]']}, //'image-webpack-loader?optimizationLevel=7&interlaced=false'
        { test: /.*\.(eot|woff2|woff|ttf)$/,   loaders: ['url?limit=5000&hash=sha512&digest=hex&size=16&name=cd [name]-[hash].[ext]']}
      ]
    },
    devServer: {
      stats: {
        cached: false,
        exclude: excludeFromStats
      }
    }
  };
};
