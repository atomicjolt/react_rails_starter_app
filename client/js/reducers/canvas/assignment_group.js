"use strict";

import Immutable   from "immutable";
import CanvasConstants  from "../constants/canvas";
import ErrorTypes  from "../constants/error";
import _ from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case ActionTypes.COURSE_ASSIGNMENT_GROUPS_DONE:
      return state.set("course_assignment_groups", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.COURSE_ASSIGNMENT_SINGLE_GROUP_DONE:
      return state.set("course_assignment_groups", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.COURSE_ASSIGNMENT_SINGLE_GROUP_DEL_DONE:
      var deletedGroup = action.response.body
      var newState = state.get("course_assignment_groups").filter(group=>group.get("id") != deletedGroup.id)
      return state.set("course_assignment_groups", Immutable.fromJS(newState));
      break;

    default:
      return state;

  }
}