"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../constants/canvas";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case CanvasConstants.DELETE_ASSIGNMENT_DONE:
      var deletedAssignment = action.response.body
      var currentAssignment = state.get("assignments").filter(assignment=>assignment.get("id") != deletedAssignment.id)
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.LIST_ASSIGNMENTS_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.SINGLE_ASSIGNMENT_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.EDIT_ASSIGNMENT_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    default:
      return state;

  }
}

