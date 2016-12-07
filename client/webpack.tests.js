// require all modules ending in ".spec.js" from the
// js directory and all subdirectories


// Create a Webpack require context so we can dynamically require our
// project's modules. Exclude test files in this context.
const context = require.context('./js', true, /\.spec\.jsx?$/);

// Extract the module ids that Webpack uses to track modules.
const projectModuleIds = context.keys().map(module =>
  String(context.resolve(module)));

// See http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
beforeEach(() => {
  // Remove our modules from the require cache before each test case.
  projectModuleIds.forEach(id => delete require.cache[id]);
});

context.keys().forEach(context);
