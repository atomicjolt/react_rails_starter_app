"use strict";

import _ from "lodash";

const finished = "_DONE";
const actionTypes = [

  // MESSAGES  
  "ADD_MESSAGE",
  "REMOVE_MESSAGE",
  "CLEAR_MESSAGES"

];

var types = _.reduce(actionTypes, (result, key) => {
  result[key] = key;
  result[`${key}${finished}`] = `${key}${finished}`;
  return result
}, {});

types.FINISHED = finished;

export default types;