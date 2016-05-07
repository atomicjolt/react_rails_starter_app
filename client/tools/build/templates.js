var fs            = require("fs");
var path          = require("path");
var _             = require("lodash");
var ejs           = require("ejs");

// -----------------------------------------------------------------------------
// Apply layouts to content
// -----------------------------------------------------------------------------
function apply(content, fullPath, metadata, templateMap, templateData, templateDirs){

  // If the user has specified a layout in the front matter use that.
  // Then try the layout map and finally default to application.html
  var layoutFile = metadata.layout || templateMap[fullPath] || "application.html";

  var template = loadTemplate(layoutFile, templateDirs);
  var data = buildData(metadata, templateData, { content: content});

  return template(data);
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

function buildData(){
  return _.merge({ "_": _ }, ...arguments);
}

module.exports = {
  apply: apply,
  loadTemplate: loadTemplate,
  buildData: buildData
};

