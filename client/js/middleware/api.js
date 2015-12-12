import api        from "../libs/api";

const API = store => next => action => {
  var promise;
  var state = store.getState();

  // send the api request
  if(action.method){
    promise = api.execRequest(action.method, action.url, state.settings.get("apiUrl"), state.settings.get("jwt"), state.settings.get("csrf"), action.params, action.body);
    if(promise){
      promise.then((res, err) => {
        store.dispatch({
          type:     action.type + "_DONE",
          res:      res.body,
          original: action,
          err:      err
        }); // Dispatch the new data
      });
    }
  }

  // call the next middleWare
  next(action);

};

export { API as default };
