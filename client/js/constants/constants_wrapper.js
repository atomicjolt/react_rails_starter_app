"use strict";

import _ from "lodash";

const done = "_DONE";

export default function(actionTypes, asyncActionTypes){

  var types = _.reduce(actionTypes, (result, key) => {
    result[key] = key;
    return result
  }, {});

  types = _.reduce(asyncActionTypes, (result, key) => {
    result[key] = key;
    result[`${key}${done}`] = `${key}${done}`;
    return result
  }, types);

  types.DONE = done;

  return types;
}