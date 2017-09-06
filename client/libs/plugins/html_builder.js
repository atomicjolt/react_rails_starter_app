const build = require('../build/build');
const output = require('friendly-errors-webpack-plugin/src/output');

class HtmlBuilderPlugin {
  constructor(app, options) {
    this.app = app;
    this.options = options;
    this.shouldBuild = true;
  }

  buildAppParts() {
    if (!this.options.onlyPack) {
      const result = build.build(this.app, (...args) => output.title(...args));
      output.title('info', 'BUILD', `Built ${result.pages.length} html pages for ${this.app.name}.`);
    }
  }

  apply(compiler) {
    compiler.plugin('after-emit', (compilation, callback) => {
      // we kick off the initial build but then handle the watching and
      // rebuilding of the html ourselves
      if (this.shouldBuild) {
        try {
          this.buildAppParts();
          this.shouldBuild = false;
          output.title('success', 'DONE', `Finished compiling html for ${this.app.name}`);
        } catch (err) {
          output.title('error', 'ERROR', err);
        }
      }
      callback();
    });
  }
}

module.exports = HtmlBuilderPlugin;
