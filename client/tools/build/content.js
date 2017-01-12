const _             = require('lodash');
const fs            = require('fs');
const frontMatter   = require('front-matter');
const ejs           = require('ejs');

const marked          = require('./markdown');
const templates       = require('./templates');
const applyProduction = require('./production');

// -----------------------------------------------------------------------------
// build a single file
// -----------------------------------------------------------------------------
module.exports = function buildContent(fullPath, webpackConfig, webpackStats, stage, options) {
  const content     = fs.readFileSync(fullPath, 'utf8');
  const parsed      = frontMatter(content);
  const metadata    = parsed.attributes;
  const title       = metadata.title;
  const destination = metadata.permalink;
  const data        = _.merge({
    _,
    title,
    metadata,
    url: destination
  }, options.templateData);

  let html = parsed.body;

  // Parse any markdown in the resulting html
  html = marked(html);

  try {
    // Allow ejs code in content
    html = ejs.compile(html, {
      cache    : false,
      filename : fullPath
    })(data);
  } catch (err) {
    console.log(`Unable to compile html from ${fullPath}`);
    console.log(err);
    console.log('Call stack');
    console.log(err.stack);
  }

  // Apply template
  data.content = html; // Pass in generated html
  html = templates.apply(data, fullPath, options.templateMap, options.templateDirs);
  html = applyProduction(html, stage, webpackConfig, webpackStats, options);

  return {
    title,
    metadata,
    destination,
    html,
    source : fullPath,
    url    : destination
  };

};
