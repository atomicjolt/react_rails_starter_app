"use strict";

import _ from "lodash";

const done = "_DONE";

// These action types will have a _DONE action added
const actionTypes = [

  // MESSAGES  
  "ADD_MESSAGE",
  "REMOVE_MESSAGE",
  "CLEAR_MESSAGES"

];

// These types will receive a _DONE
const asyncActionTypes = [
];

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

export default types;