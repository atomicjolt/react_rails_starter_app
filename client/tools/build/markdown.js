const marked        = require('marked');

const markedOptions = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
};

marked.setOptions(markedOptions);

module.exports = marked;
