import _ from 'lodash';
import Request from 'superagent';

import NetworkConstants from '../constants/network';

const pendingRequests = {};

export default class Api {

  static get(url, apiUrl, jwt, csrf, params, headers) {
    return Api.execRequest(NetworkConstants.GET, url, apiUrl, jwt, csrf, params, null, headers);
  }

  static post(url, apiUrl, jwt, csrf, params, body, headers) {
    return Api.execRequest(NetworkConstants.POST, url, apiUrl, jwt, csrf, params, body, headers);
  }

  static put(url, apiUrl, jwt, csrf, params, body, headers) {
    return Api.execRequest(NetworkConstants.PUT, url, apiUrl, jwt, csrf, params, body, headers);
  }

  static del(url, apiUrl, jwt, csrf, params, headers) {
    return Api.execRequest(NetworkConstants.DEL, url, apiUrl, jwt, csrf, params, null, headers);
  }

  static execRequest(method, url, apiUrl, jwt, csrf, params, body, headers) {
    return Api.doRequest(Api.makeUrl(`${url}${Api.queryStringFrom(params)}`, apiUrl), (fullUrl) => {
      let request;

      switch (method) {
        case NetworkConstants.GET:
          request = Request.get(fullUrl);
          break;
        case NetworkConstants.POST:
          request = Request.post(fullUrl).send(body);
          break;
        case NetworkConstants.PUT:
          request = Request.put(fullUrl).send(body);
          break;
        case NetworkConstants.DEL:
          request = Request.del(fullUrl);
          break;
        default:
          break;
      }

      request.set('Accept', 'application/json').timeout(NetworkConstants.TIMEOUT);

      if (!_.isNil(jwt)) { request.set('Authorization', `Bearer ${jwt}`); }
      if (!_.isNil(csrf)) { request.set('X-CSRF-Token', csrf); }

      if (!_.isNil(headers)) {
        _.each(headers, (headerValue, headerKey) => {
          request.set(headerKey, headerValue);
        });
      }

      return request;
    }, method);
  }

  /**
   * Returns a complete, absolute URL by conditionally appending `path` to
   * `apiUrl`.  If `path` already contains "http", it is returned as-is.
   */
  static makeUrl(part, apiUrl) {
    if (part.indexOf('http') >= 0) {
      return part;
    }

    const slash = _.last(apiUrl.split('')) === '/' ? '' : '/';
    let newPart = part;
    if (part[0] === '/') {
      newPart = part.slice(1);
    }
    return apiUrl + slash + newPart;
  }

  static doRequest(url, requestMethod, requestType) {
    // Prevent duplicate requests
    const wrapper = Api.wrapRequest(url, requestMethod, requestType);
    if (wrapper.promise) {
      // Existing request was found. Return promise from request
      return wrapper.promise;
    }

    // No request was found. Generate a promise, add it to the wrapper and return the promise.
    wrapper.promise = Api.promisify(wrapper.request, url);

    // Dispose of the request when the call is complete
    wrapper.promise.then(() => {
      Api.disposeRequest(url);
    }, () => {
      Api.disposeRequest(url);
    });

    return wrapper.promise;
  }

  static wrapRequest(url, requestMethod, requestType) {
    if (requestType === NetworkConstants.GET) {
      if (!pendingRequests[url]) {
        pendingRequests[url] = {
          request: requestMethod(url),
        };
      }
      return pendingRequests[url];
    }
    return {
      request: requestMethod(url),
    };
  }

  static disposeRequest(url) {
    delete pendingRequests[url];
  }

  static promisify(request) {
    return new Promise((resolve, reject) => {
      request.end((error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res);
        }
      });
    });
  }

  static queryStringFrom(params) {
    const query = _.chain(params)
      .map((val, key) => {
        if (val) {
          if (_.isArray(val)) {
            return _.map(val, subVal => `${key}[]=${subVal}`).join('&');
          }
          return `${key}=${val}`;
        }
        return '';
      })
      .compact()
      .value();

    if (query.length > 0) {
      return `?${query.join('&')}`;
    }
    return '';
  }
}


// function *doCacheRequest(url, key, requestMethod, requestType){

//   var promise;
//   var fullUrl = Api.makeUrl(url);

//   if (_cache[fullUrl]) {
//     setTimeout(() => {
//       dispatchResponse(key)(null, _cache[fullUrl]);
//     }, 1);

//     promise = new Promise((resolve, reject) => {
//       resolve(_cache[fullUrl]);
//     });

//     yield promise;
//   };

//   var wrapper = Api._wrapRequest(url, requestMethod, requestType);
//   if(wrapper.promise){
//     yield wrapper.promise;
//   } else {
//     promise = Api.promisify(wrapper.request);
//     wrapper.promise = promise;
//     promise.then((result) => {
//       Api.disposeRequest(url);
//       dispatchResponse(key)(null, result);
//       _cache[fullUrl] = result;
//       _cache[fullUrl].isCached = true;
//       return result;
//     }, (err) => {
//       dispatchResponse(key)(err, err.response);
//     });
//     yield promise;
//   }

// }

//   async cacheGet(url, jwt, csrf, params, key, store, refresh){
//     url = `${url}${Api.queryStringFrom(params)}`;
//     var request = doCacheRequest(url, jwt, csrf, key, (fullUrl, jwt, csrt) => {
//       return get(fullUrl);
//     }, GET);
//     if (key) {
//       // We have a key. Invoke the generate to get data and dispatch.
//       var response = request.next();
//       while (refresh && !response.done){
//         response = request.next();
//       }
//     } else {
//       // Return the generator and let the calling code invoke it.
//       return request;
//     }
//   }
