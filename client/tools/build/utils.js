var path  = require("path");
var _     = require("lodash");


// -----------------------------------------------------------------------------
// Make tags snake case
// -----------------------------------------------------------------------------
function cleanTag(tag){
  return _.snakeCase(tag);
}


// Regex used to parse date from file name
var dateRegEx = /(\d{4})-(\d{1,2})-(\d{1,2})-(.*)/;

// -----------------------------------------------------------------------------
// Use the filename to build a directory structure using the date
// -----------------------------------------------------------------------------
function filename2date(filePath){
  var result = {};
  var basename = path.basename(filePath, '.md');
  var match = dateRegEx.exec(basename);
  if(match) {
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var basename = match[4];
    result.date = moment(month + '-' + day + '-' + year, "MM-DD-YYYY");
    result.url = '/' + year + '/' + month + '/' + day + '/' + basename + '.html';
    if(!result.title){
      result.title = basename.replace(/_/g, ' ');
    }
  }
  return result;
}

module.exports = {
  cleanTag: cleanTag,
  filename2date: filename2date
};