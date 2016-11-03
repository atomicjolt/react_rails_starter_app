var webpack             = require('webpack');
var path                = require('path');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var settings            = require('./settings.js');
var _                   = require('lodash');

module.exports = function(stage){

  var production  = stage == "production";
  var development = stage == "development";
  var test        = stage == "test";

  // Public path indicates where the assets will be served from. In dev this will likely be localhost or a local domain.
  // In production this could be a CDN. In developerment this will point to whatever public url is serving
  // dev assets.
  var publicPath = production ? settings.prodAssetsUrl + settings.prodRelativeOutput : settings.devAssetsUrl + settings.devRelativeOutput;

  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
  ];

  var autoprefix = '{browsers:["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

  var plugins = 'plugins[]=transform-runtime' +             // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.
                ',plugins[]=transform-decorators-legacy' +  // A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5. Decorators aren't part of the standard yet. This gives us a good enough solution for now.
                ',plugins[]=transform-class-properties';    // Allows class instance fields and class static properties.

  var presets = 'presets[]=react' +  // Include all plugins needed for React
                ',presets[]=es2015' + // Include all plugins needed to handle es2015 syntax
                ',presets[]=stage-0'; // Enables experimental ES features.

  if(development){
    plugins = plugins + ',plugins[]=react-hot-loader/babel';
  } else if (production) {
    plugins = plugins + ',plugins[]=transform-react-constant-elements'; // Hoists static React components to reduce calls to createElement
    plugins = plugins + ',plugins[]=transform-react-remove-prop-types'; // Removes prop types from code
  }

  var babel   = 'babel?' + plugins + '&' + presets;

  var jsLoaders = [babel];

  var cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];

  var scssLoaders = cssLoaders.slice(0);
    scssLoaders.push('sass-loader?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './node_modules/bootstrap-sass')));

  var lessLoaders = cssLoaders.slice(0);
      lessLoaders.push('less-loader');

  var entries = _.cloneDeep(settings.entries);

  var cssEntries = settings.cssEntries;
  for(var name in cssEntries){
    entries[name] = cssEntries[name];
  }

  if(development){
    entries = _.reduce(entries, function(result, entry, key){
      result[key] = [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?path=' + publicPath + '__webpack_hmr&timeout=20000&reload=true',
        entry
      ];
      return result;
    }, {});
  }

  var extractCSS = new ExtractTextPlugin(production ? '[name]-[chunkhash].css' : '[name].css');

  var plugins = [];

  if(production){
    plugins = [
      new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"', '__DEV__': false}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ChunkManifestPlugin({
        filename: 'webpack-common-manifest.json',
        manfiestVariable: 'webpackBundleManifest'
      }),
      extractCSS
      //new webpack.optimize.CommonsChunkPlugin('init.js') // Use to extract common code from multiple entry points into a single init.js
    ];
  } else if (development){
    plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      extractCSS
    ];
  } else if (test){
    plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true }),
      extractCSS
    ];
  }

  var loaders = [
    { test: /\.js$/,              loaders: jsLoaders, exclude: /node_modules/ },
    { test: /\.jsx?$/,            loaders: jsLoaders, exclude: /node_modules/ },
    { test: /\.scss$/i,           loader: extractCSS.extract(scssLoaders) },
    { test: /\.css$/i ,           loader: extractCSS.extract(cssLoaders) },
    { test: /\.less$/i ,          loader: extractCSS.extract(lessLoaders) },
    { test: /.*\.(gif|png|jpg|jpeg|svg)$/, loaders: ['url?limit=5000&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]']}, //'image-webpack-loader?optimizationLevel=7&interlaced=false'
    { test: /.*\.(eot|woff2|woff|ttf)$/,   loaders: ['url?limit=5000&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]']}
  ];

  return {
    context: __dirname,
    entry: entries,
    output: {
      path: production ? settings.prodOutput : settings.devOutput, // Location where generated files will be output
      filename: production ? '[name]-[chunkhash]' + settings.buildSuffix : '[name]' + settings.buildSuffix,
      chunkFilename: production ? '[id]-[chunkhash]' + settings.buildSuffix : '[id]' + settings.buildSuffix,
      publicPath: publicPath,
      sourceMapFilename: 'debugging/[file].map',
      pathinfo: !production // http://webpack.github.io/docs/configuration.html#output-pathinfo
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ['node_modules', 'vendor']
    },
    cache: true,
    quiet: false,
    noInfo: false,
    debug: false,
    outputPathinfo: !production,
    devtool: production ? false : 'eval',  // http://webpack.github.io/docs/configuration.html#devtool
    stats: {
      colors: true
    },
    plugins: plugins,
    module: {
      loaders: loaders
    },
    devServer: {
      stats: {
        cached: false,
        exclude: excludeFromStats
      }
    }
  };
};
