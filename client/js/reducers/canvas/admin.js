"use strict";

import Immutable   from "immutable";
import CanvasConstants  from "../constants/canvas";
import ErrorTypes  from "../constants/error";
import _ from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case ActionTypes.ACCOUNT_ADMINS_DONE:
      const account_admins = _.reduce(action.payload, (result, account_admins) => {
        return result[account.id] = account_admins;
      }, {});
      return state.set("account_admins", account_admins);
      break;

      case ActionTypes.REMOVE_ADMINS_DONE:
      const remove_admins = _.reduce(action.payload, (result, account) => {
        return result[account.id] = account;
      }, {});
      return state.set("remove_admins", remove_admins);
      break;

    default:
      return state;

  }
}