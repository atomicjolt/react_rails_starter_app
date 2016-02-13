import api               from "../libs/api";
import { CanvasMethods } from "../../constants/canvas";
import { DONE }          from "../constants/wrapper";

const canvasProxyUrl = "";

const CanvasApi = store => next => action => {
  
  // send the api request
  if(action.canvas){
    const state = store.getState();
    const promise = api.execRequest(
      CanvasMethods[action.type], 
      canvasProxyUrl, 
      state.settings.get("apiUrl"), 
      state.settings.get("jwt"), 
      state.settings.get("csrfToken"), 
      { ...action.params, type: action.type },
      action.body
    );
    if(promise){
      promise.then((response, error) => {
        store.dispatch({
          type:     action.type + DONE,
          payload:  response.body,
          original: action,
          response,
          error
        }); // Dispatch the new data
      });
    }
  }

  // call the next middleWare
  next(action);

};

export { CanvasApi as default };
