"use strict";

export function getNextUrl(link){
  if(link){
    const url = _.find(link.split(','), (l) => {
      return _.trim(l.split(";")[1]) == 'rel="next"';
    });
    if(url){
      return url.split(';')[0].replace(/[\<\>\s]/g, "");
    }
  }
}

export function parseParams(url){
  const parts = url.split('?');
  if(parts.length > 1){
    return _.reduce(parts[1].split('&'), (params, pair) => {
      const query = pair.split('=');
      params[query[0]]= query[1];
      return params;
    }, {});
  }
}