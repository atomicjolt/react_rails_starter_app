import api               from "../api";
import { CanvasMethods } from "./constants";
import Network           from "../../constants/network";
import { DONE }          from "../../constants/wrapper";
import getNextUrl        from "../urls";

const canvasProxyUrl = "";

function proxyCanvas(store, action, params){
  
  const state = store.getState();
  
  api.execRequest(
    CanvasMethods[action.type], 
    canvasProxyUrl, 
    state.settings.get("apiUrl"), 
    state.settings.get("jwt"), 
    state.settings.get("csrfToken"), 
    { ...action.params, ...params, type: action.type },
    action.body
  ).then((response, error) => {

    if(CanvasMethods[action.type] == Network.GET && response.header){
      const nextUrl = getNextUrl(response.headers['link']);
      if(nextUrl){
        // TODO parse  params from nextUrl and make a new call to the canvas proxy endpoint
        params = nextUrl;
        proxyCanvas(store, action, params);
      }
    }

    store.dispatch({
      type:     action.type + DONE,
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
