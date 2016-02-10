"use strict";

import wrapper    from "../constants/wrapper";

// Local actions
const actions = [];

// Actions that make an api request
const requests = [
  "ADD_MESSAGE",
  "REMOVE_MESSAGE",
  "CLEAR_MESSAGES"
];

export const Constants = wrapper(actions, requests);

export function addMessage(message){
  return { 
    type: Constants.ADD_MESSAGE,
    data: message
  };
}

export function removeMessage(message){
  return { 
    type: Constants.REMOVE_MESSAGE,
    data: message
  };
}

export function clearMessages(){
  return { 
    type: Constants.CLEAR_MESSAGES
  };
}