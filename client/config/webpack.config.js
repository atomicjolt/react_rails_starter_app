var webpack             = require('webpack');
var path                = require('path');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var settings            = require('./settings.js');
var _                   = require('lodash');

module.exports = function(stage){

  var release = stage == "production";

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

  if(stage == "development"){
    presets = presets + ',presets[]=react-hmre'; // Adds react hot module reload
  } else if (stage == "production") {
    plugins = plugins + ',plugins[]=transform-react-constant-elements'; // Hoists static React components to reduce calls to createElement
    plugins = plugins + ',plugins[]=transform-react-inline-elements';   // Replaces the React.createElement function with a more optimized one for production
    plugins = plugins + ',transform-react-remove-prop-types';           // Removes prop types from code
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

  if(stage == "development"){
    entries = _.reduce(entries, function(result, entry, key){
      result[key] = [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        entry
      ];
      return result;
    }, {});
  }

  var extractCSS = new ExtractTextPlugin(release ? '[name]-[chunkhash].css' : '[name].css');

  return {
    context: __dirname,
    entry: entries,
    output: {
      path: release ? settings.prodOutput : settings.devOutput,                                                // Location where generated files will be output
      filename: release ? '[name]-[chunkhash]' + settings.buildSuffix : '[name]' + settings.buildSuffix,
      chunkFilename: release ? '[id]-[chunkhash]' + settings.buildSuffix : '[id].js',
      publicPath: release ? settings.prodRelativeOutput : settings.devAssetsUrl + settings.devRelativeOutput,  // Public path indicates where the assets will be served from. In dev this will likely be localhost or a local domain. In production this could be a CDN.
      sourceMapFilename: 'debugging/[file].map',
      pathinfo: !release // http://webpack.github.io/docs/configuration.html#output-pathinfo
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
      modulesDirectories: ['node_modules', 'vendor']
    },
    cache: true,
    quiet: false,
    noInfo: false,
    debug: false,
    outputPathinfo: !release,
    devtool: release ? false : 'eval',  // http://webpack.github.io/docs/configuration.html#devtool
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
