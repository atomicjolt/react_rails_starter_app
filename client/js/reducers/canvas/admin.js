"use strict";

import Immutable   from "immutable";
import { CanvasConstants }  from "../../constants/canvas";
import ErrorTypes  from "../../constants/error";
import _ from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case CanvasConstants.ACCOUNT_ADMINS_DONE:
      return state.set("account_admins", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.REMOVE_ADMINS_DONE:
      //var deletedPerson = action.response.body
      // var currentAdmins = state.get("account_admins").filter(admin=>admin.get("id") != deletedPerson.id)
      //return state.set("account_admins", Immutable.fromJS(currentAdmins));
      return state.delete(action.payload.id);
      break;

    default:
      return state;

  }
}