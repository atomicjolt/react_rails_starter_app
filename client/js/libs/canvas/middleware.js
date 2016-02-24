import api               from "../api";
import Network           from "../../constants/network";
import { DONE }          from "../../constants/wrapper";
import getNextUrl        from "../urls";

const canvasProxyUrl = "";

function proxyCanvas(store, action, params){
  
  const state = store.getState();

  api.execRequest(
    action.method,
    canvasProxyUrl, 
    state.settings.get("apiUrl"), 
    state.settings.get("jwt"), 
    state.settings.get("csrfToken"), 
    { ...action.params, ...params, type: action.type },
    action.body
  ).then((response, error) => {

    if(action.method == "get" && response.header){
      const nextUrl = getNextUrl(response.headers['link']);
      if(nextUrl){
        // TODO parse  params from nextUrl and make a new call to the canvas proxy endpoint
        params = nextUrl;
        proxyCanvas(store, action, params);
      }
    }

    store.dispatch({
      type:     action.type + DONE,
      canvas:   true,
      reducer:  action.reducer,
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
