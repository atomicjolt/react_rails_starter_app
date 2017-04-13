const path  = require('path');
const _     = require('lodash');

// Regex used to parse date from file name
const dateRegEx = /(\d{4})-(\d{1,2})-(\d{1,2})-(.*)/;


// -----------------------------------------------------------------------------
// Make tags snake case
// -----------------------------------------------------------------------------
function cleanTag(tag) {
  return _.snakeCase(tag);
}

// -----------------------------------------------------------------------------
// Use the filename to build a directory structure using the date
// -----------------------------------------------------------------------------
function filename2date(filePath) {
  const result = {};
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, ext);
  const match = dateRegEx.exec(basename);
  if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];
    const name = match[4];
    result.date = `${month}-${day}-${year}`;
    result.dateFormat = 'MM-DD-YYYY';
    result.url = `/${year}/${month}/${day}/${name}.html`;
    if (!result.title) {
      result.title = name.replace(/_/g, ' ');
    }
  }
  return result;
}

module.exports = {
  cleanTag,
  filename2date
};
