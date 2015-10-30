// require all modules ending in ".spec.js" from the
// js directory and all subdirectories


// Create a Webpack require context so we can dynamically require our
// project's modules. Exclude test files in this context.
var context = require.context("./js", true, /\.spec\.js$/);

// Extract the module ids that Webpack uses to track modules.
var projectModuleIds = context.keys().map(module =>
  String(context.resolve(module)));

// See http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
beforeEach(() => {
  // Remove our modules from the require cache before each test case.
  projectModuleIds.forEach(id => delete require.cache[id]);
});

context.keys().forEach(context);