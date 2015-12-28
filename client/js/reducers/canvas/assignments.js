"use strict";

import Immutable   from "immutable";
import CanvasConstants  from "../../constants/canvas";
import ErrorTypes  from "../../constants/error";
import _ from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case ActionTypes.DELETE_ASSIGNMENT_DONE:
      var deletedAssignment = action.response.body
      var currentAssignment = state.get("assignments").filter(assignment=>assignment.get("id") != deletedAssignment.id)
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.LIST_ASSIGNMENT_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.SINGLE_ASSIGNMENT_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.EDIT_ASSIGNMENT_DONE:
      return state.set("assignments", Immutable.fromJS(action.payload));
      break;

    default:
      return state;

  }
}

