"use strict";

import Immutable                         from "immutable";

import { Constants as MessageConstants } from "../actions/message";
import ErrorTypes                        from "../constants/error";

const initialState = Immutable.fromJS([]);

export default (state = initialState, action) => {
  
  switch(action.type){

    case ErrorTypes.TIMEOUT:
      return state.push(`Request timed out. Response was: ${action.payload.message}`);
      break;

    case ErrorTypes.NOT_AUTHORIZED:
      return state.push(`Request not authorized: ${action.payload.message}`);
      break;

    case ErrorTypes.ERROR:
      return state.push(`Request error: ${action.payload.message}`);
      break;

    case MessageConstants.ADD_MESSAGE:
      return state.push(action.payload.message);
      break;

    case MessageConstants.REMOVE_MESSAGE:
      return state.filter((message) => message != action.payload.message);
      break;

    case MessageConstants.CLEAR_MESSAGES:
      return initialState;
      break;

    default:
      return state;

  } 
};
