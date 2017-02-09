const path = require('path');
const fs   = require('fs-extra');

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function makeOutputFilePath(inputPath, outputPath, fileName, options, cb) {
  const relPath = inputPath.replace(options.rootInputPath, ''); // build relative path for output file
  const out = path.join(outputPath, relPath, fileName);
  const dir = path.dirname(out);
  fs.mkdirs(dir, {}, () => {
    cb(out);
  });
  return out;
}

// -----------------------------------------------------------------------------
// write file
// -----------------------------------------------------------------------------
function write(inputPath, outputPath, fileName, content, options) {
  return makeOutputFilePath(inputPath, outputPath, fileName, options, (out) => {
    fs.writeFile(out, content, (err) => {
      if (err) { console.log(err); }
    });
  });
}

// -----------------------------------------------------------------------------
// copy file
// -----------------------------------------------------------------------------
function copy(inputPath, outputPath, fileName, options) {
  return makeOutputFilePath(inputPath, outputPath, fileName, options, (out) => {
    fs.copy(path.join(inputPath, fileName), out, (err) => {
      if (err) { console.log(err); }
    });
  });
}

module.exports = {
  write,
  copy
};
