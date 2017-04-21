const webpack              = require('webpack');
const path                 = require('path');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const ChunkManifestPlugin  = require('chunk-manifest-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AssetsPlugin         = require('assets-webpack-plugin');
const _                    = require('lodash');

//
// Generates a webpack config file based on an app.
// app:
//    name: The name of the application i.e. hello_world
//    app: An object containing the path and file name of the entry
//         i.e. path: client/apps/hello_world, file: app.jsx
//    buildSuffix: The suffix to append onto the end of the build. i.e. _bundle.js
//    stage:
//      'production'
//      'staging' (Will result in same output as production but will output to /staging)
//      'hot' (Development mode with hot reload)
//      'test'
module.exports = function webpackConfig(app) {

  let babelPlugins = 'plugins[]=transform-runtime' +        // Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals.
                ',plugins[]=transform-decorators-legacy' +  // A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5. Decorators aren't part of the standard yet. This gives us a good enough solution for now.
                ',plugins[]=transform-class-properties';    // Allows class instance fields and class static properties.

  const presets = 'presets[]=react' +  // Include all plugins needed for React
                  ',presets[]=es2015' + // Include all plugins needed to handle es2015 syntax
                  ',presets[]=stage-0'; // Enables experimental ES features.

  if (app.production) {
    babelPlugins += ',plugins[]=transform-react-constant-elements'; // Hoists static React components to reduce calls to createElement
    babelPlugins += ',plugins[]=transform-react-remove-prop-types'; // Removes prop types from code
  } else if (app.stage === 'hot') {
    babelPlugins += ',plugins[]=react-hot-loader/babel';
  } else if (app.stage === 'test') {
    // Add test plugins as needed
  }

  const babelLoader = `babel-loader?${babelPlugins}&${presets}`;

  const jsLoaders = [babelLoader];
  if (app.shouldLint) {
    jsLoaders.push('atomic-lint-loader');
  }

  const cssLoaders = ['css-loader?importLoaders=1', 'postcss-loader'];

  const scssLoaders = cssLoaders.slice(0);
  scssLoaders.push(`sass-loader?outputStyle=expanded&includePaths[]=${(path.resolve(__dirname, './node_modules/bootstrap-sass'))}`);

  const lessLoaders = cssLoaders.slice(0);
  lessLoaders.push('less-loader');

  const extractCSS = new ExtractTextPlugin(app.production ? '[name]-[chunkhash].css' : '[name].css');

  let plugins = [
    // Use to extract common code from multiple entry points into a single init.js
    new webpack.optimize.CommonsChunkPlugin({
      name: `${app.name}_vendor`,
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: `${app.name}_manifest`,
      minChunks: Infinity
    }),
    // Generate webpack-assets.json to map path to assets generated with hashed names
    new AssetsPlugin({
      path: app.outputPath,
      fullPath: false,
      filename: `${app.name}-webpack-assets.json`
    }),
    extractCSS
  ];

  if (app.production) {
    plugins = _.concat(plugins, [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"', __DEV__: false }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ChunkManifestPlugin({
        filename: `${app.name}-webpack-common-manifest.json`,
        manfiestVariable: 'webpackBundleManifest'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
    ]);
  } else if (app.stage === 'hot') {
    plugins = _.concat(plugins, [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', __DEV__: true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]);
  } else if (app.stage === 'development') {
    plugins = _.concat(plugins, [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', __DEV__: true })
    ]);
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

  const entryPath = path.join(app.path, app.file);
  const entry = { [app.name]: entryPath };

  if (app.stage === 'hot') {
    // Add hot reload to entry
    entry[app.name] = [
      'eventsource-polyfill',
      entryPath
    ];
  }

  return {
    context: path.resolve('../apps', __dirname),
    entry,
    output: {
      publicPath: app.publicPath,
      // Location where generated files will be output
      path: app.outputPath,
      filename: app.production ? `[name]-[chunkhash]${app.buildSuffix}` : `[name]${app.buildSuffix}`,
      chunkFilename: app.production ? `[id]-[chunkhash]${app.buildSuffix}` : `[id]${app.buildSuffix}`,
      sourceMapFilename: '[name].map',
      // http://webpack.github.io/docs/configuration.html#output-pathinfo
      pathinfo: !app.production
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.scss', '.less', '.css'],
      modules: ['node_modules', `${app.path}/node_modules`]
    },
    cache: true,
    devtool: app.production ? 'source-map' : 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
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
