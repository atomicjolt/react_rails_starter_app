"use strict";

import Request          from "superagent";
import NetworkConstants from "../constants/network";
import _                from "lodash";
 
var _pendingRequests = {};
var _cache = {};

export default class Api{

  static get(url, apiUrl, jwt, csrf, params){
    return Api.execRequest(NetworkConstants.GET, url, apiUrl, jwt, csrf, params, null);
  }

  static post(url, apiUrl, jwt, csrf, params, body){
    return Api.execRequest(NetworkConstants.POST, url, apiUrl, jwt, csrf, params, body);
  }

  static put(url, apiUrl, jwt, csrf, params, body){
    return Api.execRequest(NetworkConstants.PUT, url, apiUrl, jwt, csrf, params, body);
  }

  static del(url, apiUrl, jwt, csrf, params){
    return Api.execRequest(NetworkConstants.DEL, url, apiUrl, jwt, csrf, params, null);
  }

  static execRequest(method, url, apiUrl, jwt, csrf, params, body){
    return Api._doRequest(Api._makeUrl(`${url}${Api.queryStringFrom(params)}`, apiUrl), (fullUrl) => {
      var request;

      switch (method){
        case NetworkConstants.GET:
          request = Request.get(url);
          break;
        case NetworkConstants.POST:
          request = Request.post(url).send(body);
          break;
        case NetworkConstants.PUT:
          request = Request.put(url).send(body);
          break;
        case NetworkConstants.DEL:
          request = Request.del(url);
          break;
      }
      
      request.set('Accept', 'application/json')
            .timeout(NetworkConstants.TIMEOUT)
            .set('Authorization', 'Bearer ' + jwt)
            .set('X-CSRF-Token', csrf);
      return request;
    }, method);
  }

  static _makeUrl(part, apiUrl){
    if(part.indexOf("http") >= 0){
      return part;
    } else {
      var slash = _.last(apiUrl.split("")) == "/" ? "" :"/";
      if(part[0] == "/"){
        part = part.slice(1);
      }
      return apiUrl + slash + part;
    }
  }

  static _doRequest(url, requestMethod, requestType){

    // Prevent duplicate requests
    var wrapper = Api._wrapRequest(url, requestMethod, requestType);
    if(wrapper.promise){
      // Existing request was found. Return promise from request
      return wrapper.promise;
    }

    // No request was found. Generate a promise, add it to the wrapper and return the promise.
    wrapper.promise = Api._promisify(wrapper.request, url);

    // Dispose of the request when the call is complete
    wrapper.promise.then((result) => {
      Api._disposeRequest(url);
    });
    
    return wrapper.promise;
  }

  static _wrapRequest(url, requestMethod, requestType){
    if (requestType === NetworkConstants.POST) {
      return {
        request: requestMethod(url)
      };
    } else if (!_pendingRequests[url]) {
      _pendingRequests[url] = {
        request: requestMethod(url)
      };
    }
    return _pendingRequests[url];
  }

  static _disposeRequest(url){
    delete _pendingRequests[url];
  }

  static _promisify(request) {
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

  static queryStringFrom(params){
    if(params){
      var query = _.chain(params)
        .map((val, key) => {
          if(val){
            return `${key}=${val}`;
          } else {
            return "";
          }
        })
        .compact()
        .value();

      if(query.length > 0){
        return `?${query.join("&")}`;
      }  
    }
    return "";
  }

}


// function *doCacheRequest(url, key, requestMethod, requestType){

//   var promise;
//   var fullUrl = Api._makeUrl(url);

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
//     promise = Api._promisify(wrapper.request);
//     wrapper.promise = promise;
//     promise.then((result) => {
//       Api._disposeRequest(url);
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


