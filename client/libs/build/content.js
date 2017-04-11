const path          = require('path');
const _             = require('lodash');
const fs            = require('fs');
const frontMatter   = require('front-matter');
const ejs           = require('ejs');

const marked          = require('./markdown');
const templates       = require('./templates');
const applyProduction = require('./production');
const file            = require('./file');

const ignoreFiles     = ['.DS_Store'];

// -----------------------------------------------------------------------------
// Generate the output file name and path
// -----------------------------------------------------------------------------
function outFilePath(page, outputPath, inputFilePath, originalInputPath) {
  let out = path.join(outputPath, inputFilePath.replace(originalInputPath, ''));
  if (page && page.destination && page.destination.length > 0) {
    if (_.endsWith(page.destination, '/')) {
      out = path.join(outputPath, page.destination, 'index.html');
    } else {
      out = page.destination;
    }
  }
  return out;
}

// -----------------------------------------------------------------------------
// build a single file
// -----------------------------------------------------------------------------
function buildContent(fullPath, buildOptions, webpackAssets, ext) {
  const content     = fs.readFileSync(fullPath, 'utf8');
  const parsed      = frontMatter(content);
  const metadata    = parsed.attributes;
  const title       = metadata.title;
  const destination = metadata.permalink;
  const data        = _.merge({
    _,
    title,
    metadata,
    url: destination
  }, buildOptions.templateData);

  let html = parsed.body;

  try {
    // Allow ejs code in content
    html = ejs.compile(html, {
      cache    : false,
      filename : fullPath
    })(data);

    // Parse any markdown in the resulting html
    if (_.includes(buildOptions.htmlOptions.markdownExtensions, ext)) {
      html = marked(html);
    }
  } catch (err) {
    console.log(`Unable to compile html from ${fullPath}`);
    console.log(err);
    console.log('Call stack');
    console.log(err.stack);
  }

  // Apply template
  data.content = html; // Pass in generated html
  html = templates.apply(data,
    fullPath,
    buildOptions.templateMap,
    buildOptions.templateDirs);
  html = applyProduction(html, buildOptions.stage, webpackAssets, buildOptions.buildSuffix);

  return {
    title,
    metadata,
    destination,
    html,
    source : fullPath,
    url    : destination
  };

}

// -----------------------------------------------------------------------------
// responsible for writing out html content after it's built or copying static files
// -----------------------------------------------------------------------------
function writeContent(
  originalInputPath,
  inputFilePath,
  webpackAssets,
  buildOptions) {
  const ext = path.extname(inputFilePath);
  if (_.includes(buildOptions.htmlOptions.buildExtensions, ext)) {
    const page = buildContent(
      inputFilePath,
      buildOptions,
      webpackAssets,
      ext);
    const out = outFilePath(page, buildOptions.outputPath, inputFilePath, originalInputPath);
    page.outputFilePath = file.write(out, page.html);
    return page;
  }
  const out = outFilePath(null, buildOptions.outputPath, inputFilePath, originalInputPath);
  file.copy(inputFilePath, out);
  return null;
}

// -----------------------------------------------------------------------------
// build html and markdown files in a given directory
// -----------------------------------------------------------------------------
function buildContents(
  originalInputPath,
  inputPath,
  buildOptions,
  webpackAssets) {

  let results = [];
  const files = fs.readdirSync(inputPath);

  files.forEach((fileName) => {
    const inputFilePath = path.join(inputPath, fileName);

    // Ignore template dirs
    const doOutput = buildOptions.templateDirs.indexOf(inputFilePath) < 0 &&
                  !_.includes(ignoreFiles, fileName);
    if (doOutput) {
      if (fs.statSync(inputFilePath).isDirectory()) {
        results = _.concat(results, buildContents(
          originalInputPath,
          inputFilePath,
          buildOptions,
          webpackAssets
        ));
      } else {
        const page = writeContent(
          originalInputPath,
          inputFilePath,
          webpackAssets,
          buildOptions);
        if (page) {
          results.push(page);
        }
      }
    }
  });
  return results;
}

module.exports = {
  buildContents,
  writeContent
};
