"use strict";

import Immutable   from "immutable";
import CanvasConstants  from "../../constants/canvas";
import ErrorTypes  from "../constants/error";
import _ from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case ActionTypes.LIST_OVERRIDE_ASSIGNMENT_DONE:
      return state.set("override_assignment", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.OVERRIDE_ASSIGNMENT_DONE:
      return state.set("override_assignment", Immutable.fromJS(action.payload));
      break;

    case ActionTypes.LIST_OVERRIDE_ASSIGNMENT_GROUP_DONE:
      return state.set("override_assignment", Immutable.fromJS(action.payload));
      break;

    default:
      return state;

  }
}

 // var deletedPerson = action.response.body
 //      var currentAdmins = state.get("account_admins").filter(admin=>admin.get("id") != deletedPerson.id)