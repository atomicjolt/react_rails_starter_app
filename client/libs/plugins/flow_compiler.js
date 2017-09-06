const execFile = require('child_process').execFile;
const output = require('friendly-errors-webpack-plugin/src/output');

module.exports = class FlowCompilerPlugin {
  constructor(app, options) {
    this.app = app;
    this.options = options;
    this.promise = new Promise(() => {});
  }

  apply(compiler) {
    this.promise = this.flowCheckTypes();
    compiler.plugin('after-emit', (compilation, callback) => {
      this.promise.then((res) => {
        if (res.error) {
          output.title('info', 'FLOW ERROR', 'There was a flow type error');
          output.log(res.out);
        } else {
          output.title('success', 'FLOW SUCCESS', 'No type errors found');
        }
        // eventually we will could provide the option to fail the build
        // when flow fails
        callback();
      });
    });
    compiler.plugin('invalid', () => {
      this.promise = this.flowCheckTypes();
    });
  }

  flowCheckTypes() {
    return new Promise((resolve) => {
      execFile(
        require('flow-bin'),
        [this.app.path, '--show-all-errors'],
        (error, out) => {
          resolve({
            out,
            error,
          });
        }
      );
    });
  }
};
