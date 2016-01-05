import _      from 'lodash';
import Api    from './api';

function proxyUrl(url){
  return `api/canvas?url=${encodeURIComponent(url)}`;
}

function getNextUrl(link){
  if(link){
    const url = _.find(link.split(','), (l) => {
      return _.trim(l.split(";")[1]) == 'rel="next"';
    }) 
    if(url){
      return url.split(';')[0].replace(/[\<\>\s]/g, "");
    }
  }
}

export default class CanvasApi{

  static get(url, key, cb, payload){

    function getNext(response){
      if(cb) { cb(response.body || JSON.parse(response.text)); }
      if(response.header){
        var nextUrl = getNextUrl(response.headers['link']);
        if(nextUrl){
          CanvasApi.get(nextUrl, key, cb, payload);
        }
      }
    }

    Api.queuedGet(key, proxyUrl(url), payload, getNext);
      
  }

  static post(url, body, key){
    return Api.post(key, proxyUrl(url), body);
  }

  static put(url, body, key){
    return Api.put(key, proxyUrl(url), body);
  }

}