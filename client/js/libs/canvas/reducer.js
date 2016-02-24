"use strict";

import Immutable           from "immutable";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  if(action.canvas && _.endsWith(action.type, "_DONE")){
    switch(action.method){
      case 'get':
        const result = _.reduce(action.payload, (result, item) => {
          return result[item.id] = item;
        }, {});
        return state.set(action.reducer, result);
      case 'post':
      case 'put':
      case 'delete'
    }
    
  }
  return state;

};