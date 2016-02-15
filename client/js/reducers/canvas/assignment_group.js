"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../libs/canvas/constants";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {
debugger
  switch(action.type){

    case CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_DONE:
    case CanvasConstants.COURSE_ASSIGNMENT_GROUPS_DONE:
      _.each(action.payload, (assignment_group) => {
        state = state.set(assignment_group.id, assignment_group);
      });
      return state;
      break;

    case CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_DEL_DONE:
      return state.delete(action.response.body.id);
      break;

    default:
      return state;

  }
}