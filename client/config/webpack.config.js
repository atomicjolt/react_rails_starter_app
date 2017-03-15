const webpack             = require('webpack');
const path                = require('path');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const _                   = require('lodash');
const settings            = require('./settings');

module.exports = function webpackConfig(stage) {

  const production = stage === 'production' || stage === 'staging';

  // Public path indicates where the assets will be served from. In dev this will likely be
  // localhost or a local domain. In production this could be a CDN. In developerment this will
  // point to whatever public url is serving dev assets.
  const publicPath = production ?
    settings.prodAssetsUrl + settings.prodRelativeOutput :
    settings.devAssetsUrl + settings.devRelativeOutput;

  let babelPlugins = 'plugins[]=transform-runtime' +        // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.
                ',plugins[]=transform-decorators-legacy' +  // A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5. Decorators aren't part of the standard yet. This gives us a good enough solution for now.
                ',plugins[]=transform-class-properties';    // Allows class instance fields and class static properties.

  const presets = 'presets[]=react' +  // Include all plugins needed for React
                  ',presets[]=es2015' + // Include all plugins needed to handle es2015 syntax
                  ',presets[]=stage-0'; // Enables experimental ES features.

  if (production) {
    babelPlugins += ',plugins[]=transform-react-constant-elements'; // Hoists static React components to reduce calls to createElement
    babelPlugins += ',plugins[]=transform-react-remove-prop-types'; // Removes prop types from code
  } else if (stage === 'hot') {
    babelPlugins += ',plugins[]=react-hot-loader/babel';
  } else if (stage === 'test') {
    // Add test plugins as needed
  }

  const babelLoader = `babel-loader?${babelPlugins}&${presets}`;

  const jsLoaders = [babelLoader];

  const cssLoaders = ['css-loader?importLoaders=1', 'postcss-loader'];

  const scssLoaders = cssLoaders.slice(0);
  scssLoaders.push(`sass-loader?outputStyle=expanded&includePaths[]=${(path.resolve(__dirname, './node_modules/bootstrap-sass'))}`);

  const lessLoaders = cssLoaders.slice(0);
  lessLoaders.push('less-loader');

  let entries = _.cloneDeep(settings.entries);

  const cssEntries = settings.cssEntries;
  _.each(cssEntries, (_stylePath, name) => {
    entries[name] = cssEntries[name];
  });

  if (stage === 'hot') {
    entries = _.reduce(entries, (result, entry, key) => {
      result[key] = [
        'eventsource-polyfill',
        `webpack-hot-middleware/client?path=${publicPath}__webpack_hmr&timeout=20000&reload=true`,
        entry
      ];
      return result;
    }, {});
  }

  const extractCSS = new ExtractTextPlugin(production ? '[name]-[chunkhash].css' : '[name].css');

  let plugins = [];

  if (production) {
    plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"', __DEV__: false }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: 'cheap-source-map'
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ChunkManifestPlugin({
        filename: 'webpack-common-manifest.json',
        manfiestVariable: 'webpackBundleManifest'
      }),
      extractCSS

      // Use to extract common code from multiple entry points into a single init.js
      // new webpack.optimize.CommonsChunkPlugin('init.js');
    ];
  } else if (stage === 'hot') {
    plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', __DEV__: true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      extractCSS
    ];
  } else {
    plugins = [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', __DEV__: true }),
      extractCSS
    ];
  }

  const rules = [
    { test: /\.js$/, use: jsLoaders, exclude: /node_modules/ },
    { test: /\.jsx?$/, use: jsLoaders, exclude: /node_modules/ },
    { test: /\.scss$/i, use: extractCSS.extract(scssLoaders) },
    { test: /\.css$/i, use: extractCSS.extract(cssLoaders) },
    { test: /\.less$/i, use: extractCSS.extract(lessLoaders) },
    { test: /.*\.(gif|png|jpg|jpeg|svg)$/, use: ['url-loader?limit=5000&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]'] },
    { test: /.*\.(eot|woff2|woff|ttf)$/, use: ['url-loader?limit=5000&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]'] }
  ];

  return {
    context: path.resolve('../', __dirname),
    entry: entries,
    output: {
      publicPath,
      // Location where generated files will be output
      path: production ? settings.prodOutput : settings.devOutput,
      filename: production ? `[name]-[chunkhash]${settings.buildSuffix}` : `[name]${settings.buildSuffix}`,
      chunkFilename: production ? `[id]-[chunkhash]${settings.buildSuffix}` : `[id]${settings.buildSuffix}`,
      sourceMapFilename: 'debugging/[file].map',
      // http://webpack.github.io/docs/configuration.html#output-pathinfo
      pathinfo: !production
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
      modules: ['node_modules']
    },
    cache: true,
    devtool: production ? false : 'eval',  // http://webpack.github.io/docs/configuration.html#devtool
    stats: { colors: true },
    plugins,
    module: { rules },
    devServer: {
      stats: {
        cached: false,
        exclude: [/node_modules[\\/]react(-router)?[\\/]/]
      }
    }
  };
};
