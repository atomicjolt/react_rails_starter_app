var fs            = require("fs");
var path          = require("path");
var _             = require("lodash");
var ejs           = require("ejs");

var utils         = require("./utils");

// -----------------------------------------------------------------------------
// Apply layouts to content
// -----------------------------------------------------------------------------
function apply(data, fullPath, templateMap, templateDirs){

  // If the user has specified a layout in the front matter use that.
  // Then try the layout map and finally default to application.html
  var layoutFile = data.metadata.layout || templateMap[fullPath] || "application.html";
  var template = loadTemplate(layoutFile, templateDirs);

  var html = "";

  try{
    html = template(_.merge({
      cleanTag   : utils.cleanTag,
      "_"        : _
    }, data));
  } catch(err){
    console.log(err);
    console.log("Unable to build file: " + fullPath + " Data: " + data);
    console.log("Stack Trace:");
    console.log(err.trace);
  }

  return html;
}

function safeReadLayout(file){
  try{
    return fs.readFileSync(file, 'utf8');
  } catch(e){
    return false;
  }
}

function firstValid(func, collection){
  for(var i=0; i<collection.length; i++){
    var val = func(collection[i]);
    if(val){ return { value: val, item: collection[i]}; }
  }
  return false;
}

function loadTemplate(file, templateDirs){
  file = path.extname(file) ? file : file + '.html';

  var layouts = _(templateDirs)
    .map(function(location){
      return path.join(location, file);
    })
    .uniq()
    .value();

  var result = firstValid(safeReadLayout, layouts);

  if(!result){
    throw "No template found matching " + file;
  }

  return ejs.compile(result.value, {
    cache: false,
    filename: result.item
  });
}

module.exports = {
  apply: apply,
  loadTemplate: loadTemplate
};

