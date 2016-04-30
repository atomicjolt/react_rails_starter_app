var path          = require("path");
var fs            = require('fs-extra')

// -----------------------------------------------------------------------------
// write file
// -----------------------------------------------------------------------------
function write(inputPath, outputPath, fileName, content, options){
  return makeOutputFilePath(inputPath, outputPath, fileName, options, function(out){
    fs.writeFile(out, content, function(err){
      if(err){ return console.log(err); }
    });
  });
}

// -----------------------------------------------------------------------------
// copy file
// -----------------------------------------------------------------------------
function copy(inputPath, outputPath, fileName, options){
  return makeOutputFilePath(inputPath, outputPath, fileName, options, function(out){
    fs.copy(path.join(inputPath, fileName), out, function(err){
      if(err){ return console.log(err); }
    });
  });
}

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function makeOutputFilePath(inputPath, outputPath, fileName, options, cb){
  var relPath = inputPath.replace(options.rootInputPath, ""); // build relative path for output file
  var dir = path.join(outputPath, relPath);
  var out = path.join(dir, fileName);
  fs.mkdirs(dir, {}, function(){
    cb(out);
  });
  return out;
}

module.exports = {
  write : write,
  copy  : copy
};