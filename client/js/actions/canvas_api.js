import _   from 'lodash';
import Api from './api';

function proxyUrl(url){
  return `api/canvas?url=${encodeURIComponent(url)}`;
}

function get_next_url(link){
  if(link){
    const url = _.find(link.split(','), (l) => {
      return _.trim(l.split(";")[1]) == 'rel="next"';
    }) 
    if(url){
      return url.split(';')[0].gsub(/[\<\>\s]/, "");
    }
  }
}

var CanvasApi = {

  get(url, key){
    Api.get(key, proxyUrl(url)).then((response) => {
      if(response.header){
        next_url = get_next_url(response.headers['link']);
        if(next_url){
          CanvasApi.get(next_url, key);
        }
      }
    });
    return promise;
  },

  post(url, body, key){
    return Api.post(key, proxyUrl(url), body);
  },

  put(url, body, key){
    return Api.put(key, proxyUrl(url), body);
  }

}

export default CanvasApi;