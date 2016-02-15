"use strict";

import _ from "lodash";

export const DONE = "_DONE";

export default function(actionTypes, asyncActionTypes){

  var types = _.reduce(actionTypes, (result, key) => {
    result[key] = key;
    return result
  }, {});

  types = _.reduce(asyncActionTypes, (result, key) => {
    result[key] = key;
    result[`${key}${DONE}`] = `${key}${DONE}`;
    return result
  }, types);

  types.DONE = DONE;

  return types;
}