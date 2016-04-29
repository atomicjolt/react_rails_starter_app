var path          = require("path");
var _             = require("lodash");
var fs            = require("fs");
var frontMatter   = require("front-matter");
var minify        = require('html-minifier').minify;
var truncate      = require("html-truncate");

var webpackUtils  = require("./webpack_utils");
var utils         = require("./utils");
var marked        = require("./markdown");
var templates     = require("./templates");


// -----------------------------------------------------------------------------
// build a single file
// -----------------------------------------------------------------------------
module.exports = function(fullPath, webpackConfig, webpackStats, stage, options){
  var content  = fs.readFileSync(fullPath, "utf8");
  var ext      = path.extname(fullPath);
  var parsed   = frontMatter(content);
  var html     = marked(parsed.body);
  var metadata = parsed.attributes;
  var summary  = _.includes(content, options.summaryMarker) ? content.split(options.summaryMarker)[0] : truncate(content, 1000, { keepImageTag: true });

  summary = marked(summary);

  html = templates.apply(content, fullPath, metadata, options.templateMap, options.templateData, options.templateDirs);

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
    title:       metadata.title || result.title,
    date:        result.date,
    metadata:    metadata,
    summary:     summary,
    source:      fullPath,
    destination: metadata.permalink || result.url,
    html:        html
  };

};
