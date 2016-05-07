var path          = require("path");
var _             = require("lodash");
var fs            = require("fs");
var frontMatter   = require("front-matter");
var minify        = require('html-minifier').minify;
var truncate      = require("html-truncate");
var ejs           = require("ejs");

var webpackUtils  = require("./webpack_utils");
var utils         = require("./utils");
var marked        = require("./markdown");
var templates     = require("./templates");


// -----------------------------------------------------------------------------
// build a single file
// -----------------------------------------------------------------------------
module.exports = function(fullPath, webpackConfig, webpackStats, stage, options){
  var content  = fs.readFileSync(fullPath, "utf8");
  var parsed   = frontMatter(content);
  var metadata = parsed.attributes;
  var data     = templates.buildData(metadata, options.templateData);

  // Allow ejs code in content
  var html = ejs.compile(parsed.body, {
    cache: false,
    filename: fullPath
  })(data);

  // Parse any markdown in the resulting html
  var html = marked(html);

  // Generate summary of content
  var summary  = _.includes(html, options.summaryMarker) ?
    html.split(options.summaryMarker)[0] :
    truncate(html, options.truncateSummaryAt, { keepImageTag: true });

  // Apply template
  html = templates.apply(html, fullPath, metadata, options.templateMap, options.templateData, options.templateDirs);

  if(stage == "production"){
    html = webpackUtils.apply(html, webpackStats, webpackConfig, options.entries, options.cssEntries, options.buildSuffix);
    html = minify(html, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    });
  }

  var result = utils.filename2date(fullPath);

  return {
    title       : metadata.title || result.title,
    date        : result.date,
    metadata    : metadata,
    summary     : summary,
    source      : fullPath,
    destination : metadata.permalink || result.url,
    html        : html
  };

};
