const postCss = require('postcss-smart-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postCss({ /* ...options */ }),
    autoprefixer({ /* ...options */ })
  ]
};
