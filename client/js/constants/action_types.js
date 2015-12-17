"use strict";

import _ from "lodash";

const done = "_DONE";

const actionTypes = [

  // MESSAGES  
  "ADD_MESSAGE",
  "REMOVE_MESSAGE",
  "CLEAR_MESSAGES"

];

const asyncActionTypes = [
];

var types = _.reduce(asyncActionTypes, (result, key) => {
  result[key] = key;
  result[`${key}${done}`] = `${key}${done}`;
  return result
}, {});

types.DONE = done;

export default types;