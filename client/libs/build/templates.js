const fs = require('fs');
const path = require('path');
const _  = require('lodash');
const ejs = require('ejs');

const utils = require('./utils');


function safeReadLayout(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (e) {
    return false;
  }
}

function firstValid(func, collection) {
  for (let i = 0; i < collection.length; i += 1) {
    const val = func(collection[i]);
    if (val) { return { value: val, item: collection[i] }; }
  }
  return false;
}

function loadTemplate(file, templateDirs) {
  const fileName = path.extname(file) ? file : `${file}.html`;

  const layouts = _(templateDirs)
    .map(location => path.join(location, fileName))
    .uniq()
    .value();

  const result = firstValid(safeReadLayout, layouts);

  if (!result) {
    throw new Error(`No template found matching ${fileName}`);
  }

  return ejs.compile(result.value, {
    cache: false,
    filename: result.item
  });
}

// -----------------------------------------------------------------------------
// Apply layouts to content
// -----------------------------------------------------------------------------
function apply(data, fullPath, templateMap, templateDirs) {

  // If the user has specified a layout in the front matter use that.
  // Then try the layout map and finally default to application.html
  const layoutFile = data.metadata.layout || templateMap[fullPath] || 'application.html';
  const template = loadTemplate(layoutFile, templateDirs);

  let html = '';

  try {
    html = template(_.merge({
      cleanTag   : utils.cleanTag,
      _
    }, data));
  } catch (err) {
    console.log(err);
    console.log(`Unable to build file: ${fullPath} Data: ${data}`);
    console.log('Stack Trace:');
    console.log(err.trace);
  }

  return html;
}

module.exports = {
  apply,
  loadTemplate
};

