var info      = require('../package.json');
var path      = require('path');

var clientAppPath = path.join(__dirname, '../');

var devRelativeOutput     = '/assets/';
var prodRelativeOutput    = '/assets/';

var devOutput     = path.join(__dirname, '../../app/assets/javascripts');
var prodOutput    = path.join(__dirname, '../../public/assets');

require('dotenv').load({path: '../.env'});
var hotPort = process.env.ASSETS_PORT || 8080;
var devAssetsUrl = process.env.ASSETS_URL; // null will use localhost

module.exports = {
  title: info.title,
  author: info.author,
  version: info.versions,
  build: Date.now(),

  devRelativeOutput: devRelativeOutput,
  prodRelativeOutput: prodRelativeOutput,

  devOutput: devOutput,
  prodOutput: prodOutput,

  // Used by pageSpeed. This should be the url of your production server
  applicationUrl: 'http://www.example.com',

  // Dev urls
  devAssetsUrl: devAssetsUrl || 'http://localhost:' + hotPort,

  ports: {
    hotPort: hotPort
  },
  assets: {
    paths: {
      all: clientAppPath + 'assets/**/*',
      output: {
        dev: devOutput,
        prod: prodOutput
      }
    }
  },
  fonts: {
    paths: {
      all: [
        clientAppPath + 'fonts/**'
        // './node_modules/bootstrap-sass/assets/fonts/**',
        // './node_modules/font-awesome/fonts/**'
      ],
      output: {
        dev: devOutput,
        prod: prodOutput
      }
    }
  },
  scripts: {
    paths: {
      all: clientAppPath + 'js/**/*.js',
      entries: {
        app: clientAppPath + 'js/app.jsx',
        app_admin: clientAppPath + 'js/app_admin.jsx',
        styles: clientAppPath + 'styles/styles.js'
      },
      output: {
        dev: devOutput,
        prod: prodOutput
      },
      relativeOutput: {
        dev: devRelativeOutput,
        prod: prodRelativeOutput
      }
    }
  },
  styles: {
    autoPrefix: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    paths: {
      all: clientAppPath + 'styles/**/*.scss',

      output: {
        dev: devOutput,
        prod: prodOutput
      }
    },
    sourcemaps: false
  },
  html: {
    paths: {
      all: clientAppPath + 'html/**/*.html',
      ignore: clientAppPath + '!html/**/_*.html',
      output: {
        dev: devOutput,
        prod: prodOutput
      }
    }
  },
  images: {
    paths: {
      all: [clientAppPath + 'images/*', clientAppPath + 'images/**/*.jpg', clientAppPath + 'images/**/*.jpeg', clientAppPath + 'images/**/*.gif'],
      output: {
        dev: devOutput,
        prod: prodOutput
      }
    },
    compression: 3
  }
};
