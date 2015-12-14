"use strict";

import ActionTypes from "../constants/action_types";

export function addMessage(message){
  return { 
    type: ActionTypes.ADD_MESSAGE,
    data: message
  };
}

export function clearMessages(){
  return { 
    type: ActionTypes.CLEAR_MESSAGES
  };
}