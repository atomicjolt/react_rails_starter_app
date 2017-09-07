const webpack              = require('webpack');
const path                 = require('path');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const ChunkManifestPlugin  = require('chunk-manifest-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AssetsPlugin         = require('assets-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlBuilderPlugin    = require('../libs/plugins/html_builder');
const FlowCompilerPlugin   = require('../libs/plugins/flow_compiler');
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
const outputSourceMaps = true;

module.exports = function webpackConfig(app, options = {}) {

  const jsLoaders = ['babel-loader'];
  if (app.shouldLint) {
    jsLoaders.push('atomic-lint-loader');
  }

  const cssLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: outputSourceMaps,
        includePaths: [
          `${app.path}/node_modules`
        ],
        import: true,
        importLoaders: 1
      }
    }, {
      loader: 'postcss-loader',
      options: { sourceMap: outputSourceMaps }
    }
  ];

  if (app.extractCssOff) {
    cssLoaders.unshift({
      loader: 'style-loader',
      options: {
        sourceMap: outputSourceMaps,
      }
    });
  }

  const scssLoaders = cssLoaders.slice(0);
  scssLoaders.push({
    loader: 'sass-loader',
    options: {
      sourceMap: outputSourceMaps,
      includePaths: [
        `${app.path}/node_modules`
      ],
      outputStyle: (app.production ? 'compressed' : 'expanded'),
    }
  });
  scssLoaders[0].options.importLoaders = 2;

  const lessLoaders = cssLoaders.slice(0);
  lessLoaders.push({
    loader: 'less-loader',
    options: {
      sourceMap: outputSourceMaps,
      includePaths: [
        `${app.path}/node_modules`
      ]
    }
  });
  lessLoaders[0].options.importLoaders = 2;

  const extractCSS = new ExtractTextPlugin(app.production ? '[name]-[chunkhash].css' : '[name].css');

  let plugins = [
    new HtmlBuilderPlugin(app, options),
  ];

  if (!app.codeSplittingOff) {
    plugins = _.concat(plugins, [
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
      })
    ]);
  }

  if (!app.extractCssOff) {
    plugins.push(extractCSS);
  }

  if (!app.production) {
    plugins = _.concat(plugins, [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', __DEV__: true }),
      new FriendlyErrorsPlugin({ clearConsole: false }),
      new FlowCompilerPlugin(app),
    ]);
  }

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
      }),
    ]);
  }
  // TODO fix the hot reload
  //  else if (app.stage === 'hot') {
  //   plugins = _.concat(plugins, [
  //     // new webpack.HotModuleReplacementPlugin(),
  //     // new webpack.NoEmitOnErrorsPlugin(),
  //   ]);
  // }

  const rules = [
    { test: /\.js$/, use: jsLoaders, exclude: /node_modules/ },
    { test: /\.jsx?$/, use: jsLoaders, exclude: /node_modules/ },
    { test: /\.s[ac]ss$/i, use: app.extractCssOff ? scssLoaders : extractCSS.extract(scssLoaders) },
    { test: /\.css$/i, use: app.extractCssOff ? cssLoaders : extractCSS.extract(cssLoaders) },
    { test: /\.less$/i, use: app.extractCssOff ? lessLoaders : extractCSS.extract(lessLoaders) },
    { test: /.*\.(gif|png|jpg|jpeg|svg)$/, use: ['url-loader?limit=500&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]'] },
    { test: /.*\.(eot|woff2|woff|ttf)$/, use: ['url-loader?limit=500&hash=sha512&digest=hex&size=16&name=[name]-[hash].[ext]'] },
    { test: /\.tpl$/, loader: 'lodash-template-webpack-loader' }
  ];

  const entryPath = path.join(app.path, app.file);
  const entry = { [app.name]: entryPath };

  if (app.stage === 'hot') {
    // Add hot reload to entry
    entry[app.name] = [
      'eventsource-polyfill',
      // `webpack-hot-middleware/client?name=${app.name}`,
      entryPath
    ];
  }

  const resolve = {
    extensions: ['.js', '.json', '.jsx', '.scss', '.less', '.css'],
    modules: ['node_modules', `${app.path}/node_modules`]
  };

  if (app.preact) {
    resolve.alias = {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    };
  }

  return {
    context: path.resolve('../apps', __dirname),
    name: app.name,
    entry,
    output: {
      publicPath: app.publicPath,
      // Location where generated files will be output
      path: app.outputPath,
      filename: `${app.filename}${app.buildSuffix}`,
      chunkFilename: `${app.chunkFilename}${app.buildSuffix}`,
      sourceMapFilename: '[name].map',
      // http://webpack.github.io/docs/configuration.html#output-pathinfo
      pathinfo: !app.production
    },
    resolve,
    cache: true,
    devtool: app.production ? 'source-map' : 'cheap-module-eval-source-map', // https://webpack.js.org/configuration/devtool/
    stats: 'minimal',
    plugins,
    module: { rules },
  };
};
