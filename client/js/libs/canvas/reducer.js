"use strict";

import Immutable           from "immutable";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  if(action.canvas){
    const state = state.get(action.canvas.key);

    if(_.endsWith(action.type, "_DONE")){

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
    } else {

      // Optimistic updates
      switch(action.canvas.method){
        case 'post':
          return state;
        case 'put':
          return state;
        case 'delete':
          return state;
      }
    }
  }

  return state;

};