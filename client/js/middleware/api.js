import api         from "../libs/api";
import actionTypes from "../constants/action_types";

const API = store => next => action => {
  var promise;
  var state = store.getState();

  // send the api request
  if(action.method){
    promise = api.execRequest(action.method, action.url, state.settings.get("apiUrl"), state.settings.get("jwt"), state.settings.get("csrfToken"), action.params, action.body);
    if(promise){
      promise.then((response, error) => {
        store.dispatch({
          type:     action.type + actionTypes.DONE,
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

export { API as default };
