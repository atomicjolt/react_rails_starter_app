"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../constants/canvas";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_DONE:
      return state;
      break;

    case CanvasConstants.CREATE_CUSTOM_GRADEBOOK_COLUMNS_DONE:
      return state;
      break;

    case CanvasConstants.UPDATE_CUSTOM_GRADEBOOK_COLUMNS_DONE:
      return state;
      break;

    case CanvasConstants.DELETE_CUSTOM_GRADEBOOK_COLUMNS_DONE:
      return state;
      break;

    default:
      return state;

  }
}


