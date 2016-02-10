"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../constants/canvas";
import _                   from "lodash";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case CanvasConstants.ACCOUNTS_LOAD_DONE:
      const accounts = _.reduce(action.payload, (result, account) => {
        return result[account.id] = account;
      }, {});
      return state.set("accounts", accounts);
      break;

    case CanvasConstants.ACCOUNT_LOAD_DONE:
      const account = _.reduce(action.payload, (result, account) => {
      }, {});
      return state.set("account", account);
      break;

    case CanvasConstants.COURSE_ACCOUNTS_DONE:
      const course_accounts = _.reduce(action.payload, (result, account) => {
      }, {});
      return state.set("course_accounts", course_accounts);
    break;

    case CanvasConstants.SUB_ACCOUNTS_DONE:
      const sub_accounts = _.reduce(action.payload, (result, account) => {
      }, {accountId});
      return state.set("sub_accounts", sub_accounts)
    break;

    case CanvasConstants.COURSES_DONE:
      const courses = _.reduce(action.payload, (result, account) => {
      }, {accountId});
      return state.set("courses", courses);
    break;

    case CanvasConstants.UPDATE_ACCOUNT_DONE:
      const update_account = update(action.payload, (result, update_account) => {
      }, {accountId});
      return "Updated Account";
    break;

    case CanvasConstants.DELETE_ACCOUNT_DONE:
      const delete_user_root_account = delete(action.payload, result, delete_account);
      return "Account Deleted";
    break;

    case CanvasConstants.CREATE_SUB_DONE:
      const create_sub_account = _.reduce(action.payload, (result, create_sub_account) => {
      }, {accountId});
      return state.set("create_sub_account", create_sub_account)

    default:
      return state;

  }
}
