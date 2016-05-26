var path          = require("path");
var _             = require("lodash");
var fs            = require("fs");
var frontMatter   = require("front-matter");
var truncate      = require("html-truncate");
var ejs           = require("ejs");

var utils           = require("./utils");
var marked          = require("./markdown");
var templates       = require("./templates");
var applyProduction = require("./production");

// -----------------------------------------------------------------------------
// build a single file
// -----------------------------------------------------------------------------
module.exports = function(fullPath, webpackConfig, webpackStats, stage, options){
  var content     = fs.readFileSync(fullPath, "utf8");
  var parsed      = frontMatter(content);
  var metadata    = parsed.attributes;
  var title       = metadata.title;
  var destination = metadata.permalink;
  var data        = _.merge({
    "_"      : _,
    title    : title,
    metadata : metadata,
    url      : destination
  }, options.templateData);

  var html = parsed.body;

  // Parse any markdown in the resulting html
  html = marked(html);

  try{
    // Allow ejs code in content
    html = ejs.compile(html, {
      cache: false,
      filename: fullPath
    })(data);
  } catch(err){
    console.log("Unable to compile html from " + fullPath);
    console.log(err);
    console.log("Call stack");
    console.log(err.stack);
  }

  // Apply template
  data.content = html; // Pass in generated html
  html = templates.apply(data, fullPath, options.templateMap, options.templateDirs);
  html = applyProduction(html, stage, webpackConfig, webpackStats, options);

  return {
    title       : title,
    metadata    : metadata,
    source      : fullPath,
    destination : destination,
    html        : html,
    url         : destination
  };

};
