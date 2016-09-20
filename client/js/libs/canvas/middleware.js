import _                           from "lodash";
import api                         from "../api";
import Network                     from "../../constants/network";
import { DONE }                    from "../../constants/wrapper";
import { getNextUrl, parseParams } from "../urls";

const canvasProxyUrl = "api/canvas";

function checkRequired(action){
  if(action.canvas.required.length > 0){
    const missing = _.difference(action.canvas.required, _.keys(action.params));
    if(missing.length > 0){
      throw `Missing required parameter(s): ${missing.join(", ")}`;
    }
  }
}

function proxyCanvas(store, action, params){

  const state = store.getState();

  checkRequired(action);

  api.execRequest(
    action.canvas.method,
    canvasProxyUrl,
    state.settings.apiUrl,
    state.settings.jwt,
    state.settings.csrfToken,
    { ...action.params, ...params, type: action.canvas.type },
    action.body
  ).then((response, error) => {

    if(action.canvas.method == "get" && response.header){
      const nextUrl = getNextUrl(response.headers['link']);
      if(nextUrl){
        const params = parseParams(nextUrl);
        if(params){
          proxyCanvas(store, action, params);
        }
      }
    }

    store.dispatch({
      type:     action.canvas.type + DONE,
      payload:  response.body,
      original: action,
      response,
      error
    }); // Dispatch the new data
  });

}

const CanvasApi = store => next => action => {

  if(action.canvas){
    proxyCanvas(store, action, {});
  }

  // call the next middleWare
  next(action);

};

export { CanvasApi as default };