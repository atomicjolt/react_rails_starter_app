const path = require('path');
const fs = require('fs-extra');

const log = require('./log');

// -----------------------------------------------------------------------------
// main build
// -----------------------------------------------------------------------------
function makeOutputFilePath(filePath, cb) {
  const dir = path.dirname(filePath);
  fs.mkdirs(dir, {}, () => {
    cb(filePath);
  });
  return filePath;
}

// -----------------------------------------------------------------------------
// write file
// -----------------------------------------------------------------------------
function write(outFilePath, content) {
  return makeOutputFilePath(outFilePath, () => {
    fs.writeFile(outFilePath, content, (err) => {
      if (err) { log.error(err); }
    });
  });
}

// -----------------------------------------------------------------------------
// copy file
// -----------------------------------------------------------------------------
function copy(src, dest) {
  return makeOutputFilePath(dest, () => {
    fs.copy(src, dest, (err) => {
      if (err) { log.error(err); }
    });
  });
}

module.exports = {
  write,
  copy
};
