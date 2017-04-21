const readline = require('readline');

// -----------------------------------------------------------------------------
// Output a log entry to the command line
// -----------------------------------------------------------------------------
function out(output) {
  console.log(output);
}

// -----------------------------------------------------------------------------
// Replace the current line
// -----------------------------------------------------------------------------
function replace(output) {
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0, null);
  process.stdout.write(output);
}

// -----------------------------------------------------------------------------
// Output a error entry to the command line
// -----------------------------------------------------------------------------
function error(output) {
  console.error(output);
}

module.exports = {
  out,
  replace,
  error
};
