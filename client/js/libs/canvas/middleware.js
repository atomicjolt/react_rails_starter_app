import api                         from "../api";
import Network                     from "../../constants/network";
import { DONE }                    from "../../constants/wrapper";
import { getNextUrl, parseParams } from "../urls";

const canvasProxyUrl = "api/canvas";

function proxyCanvas(store, action, params){

  const state = store.getState();

  api.execRequest(
    action.canvas.method,
    canvasProxyUrl,
    state.settings.get("apiUrl"),
    state.settings.get("jwt"),
    state.settings.get("csrfToken"),
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