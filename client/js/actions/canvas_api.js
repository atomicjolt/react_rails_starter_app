import _      from 'lodash';
import Api    from './api';

function proxyUrl(url){
  return `api/canvas?url=${encodeURIComponent(url)}`;
}

function get_next_url(link){
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

  static get(url, key, cb){
    Api.get(key, proxyUrl(url)).then(
    (response) => {
      if(cb) { cb(response.body || JSON.parse(response.text)); }
      if(response.header){
        var next_url = get_next_url(response.headers['link']);
        if(next_url){
          this.get(next_url, key, cb);
        } else {
          return;
        }
      }
    },
    (error) => {
      console.log(error);
    });
  }

  static post(url, body, key){
    return Api.post(key, proxyUrl(url), body);
  }

  static put(url, body, key){
    return Api.put(key, proxyUrl(url), body);
  }

}