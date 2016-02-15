"use strict";

import _ from "lodash";

export const DONE = "_DONE";

export default function(actions, requests){

  var types = _.reduce(actions, (result, key) => {
    result[key] = key;
    return result
  }, {});

  types = _.reduce(requests, (result, key) => {
    result[key] = key;
    result[`${key}${DONE}`] = `${key}${DONE}`;
    return result
  }, types);

  types.DONE = DONE;

  return types;
}