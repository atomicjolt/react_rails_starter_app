import wrapper from "./constants_wrapper";

// These action types will have a _DONE action added
const actionTypes = [

  // MESSAGES
  "ADD_MESSAGE",
  "REMOVE_MESSAGE",
  "CLEAR_MESSAGES",

];

// These types will receive a _DONE
const asyncActionTypes = [
];

export default wrapper(actionTypes, asyncActionTypes);