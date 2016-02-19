"use strict";

function getNextUrl(link){
  if(link){
    const url = _.find(link.split(','), (l) => {
      return _.trim(l.split(";")[1]) == 'rel="next"';
    });
    if(url){
      return url.split(';')[0].replace(/[\<\>\s]/g, "");
    }
  }
}

export { getNextUrl as default };