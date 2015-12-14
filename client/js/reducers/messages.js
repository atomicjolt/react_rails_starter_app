"use strict";

import Immutable   from "immutable";
import ActionTypes from "../constants/action_types";
import ErrorTypes  from "../constants/error";
import _           from "lodash";

const initialState = Immutable.fromJS([]);

export default (state = initialState, action) => {
  
  switch(action.type){

    case ErrorTypes.TIMEOUT:
      return state.push(`Request timed out. Response was: ${action.payload}`);
      break;

    case ErrorTypes.NOT_AUTHORIZED:
      return state.push(`Request not authorized: ${action.payload}`);
      break;

    case ErrorTypes.ERROR:
      return state.push(`Request error: ${action.payload}`);
      break;

    case ActionTypes.ADD_MESSAGE:
      return state.push(action.payload);
      break;

    case ActionTypes.REMOVE_MESSAGE:
      return state.push(action.payload);
      removeMessage(payload.messageId);
      break;

    case ActionTypes.CLEAR_MESSAGES:
      clearMessages();
      break;

    default:
      return state;

  } 
}  