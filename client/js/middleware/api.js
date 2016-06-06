import api         from "../libs/api";
import { DONE }    from "../constants/wrapper";

const API = store => next => action => {

  function request(method, url, params, body){
    const state = store.getState();
    const promise = api.execRequest(method, url, state.settings.get("apiUrl"), state.settings.get("jwt"), state.settings.get("csrfToken"), params, body);
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
  };

  if(action.method){
    request(action.method, action.url, action.params, action.body);
  }

  // call the next middleWare
  next(action);

};

export { API as default };
