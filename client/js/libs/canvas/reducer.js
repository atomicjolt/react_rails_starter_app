"use strict";

import Immutable           from "immutable";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  if(action.canvas){
    state = state.get(action.canvas.reducer);

    // Optimistic updates
    switch(action.canvas.method){
      case 'post':
        return state;
      case 'put':
        return state;
      case 'delete':
        return state;
    }
  } else if(action.canvas && _.endsWith(action.type, "_DONE")){
    state = state.get(action.canvas.reducer);

    switch(action.canvas.method){
      case 'get':
        const mapped = _.reduce(action.payload, (result, as) => { result[as.id] = as; return result; }, {});
        return state.merge(mapped);
      case 'post':
        return state.set(action.payload.id, action.payload);
      case 'put':
        return state;
      case 'delete':
        return state;
    }
  }
  return state;

};