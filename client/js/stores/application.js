"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";

var _application = {};

// Extend Application Store with EventEmitter to add eventing capabilities
var ApplicationStore = assign({}, StoreCommon, {

  // Return current tab
  currentMainTab(){
    return _application.mainTab;
  },

  clientDataList(){
    return _application.clientList;
  },

  userDataList(){
    return _application.userDataList;
  },

  currentSelectedUser(){
    return _application.currentSelectedUser;
  }

});

// Register callback with Dispatcher
Dispatcher.register(function(payload) {
  var action = payload.action;
  
  switch(action){

    case Constants.CHANGE_MAIN_TAB_PENDING:
      _application.mainTab = payload.mainTab;
      break;
    case Constants.ACCOUNTS_LOADED:
      _application.clientList = payload.clientList;
      break; 

    case Constants.USERS_LOADED:
      _application.userDataList = payload.userList;
      break; 

    case Constants.LOADING_SELECTED_USER_DATA:
      _application.currentSelectedUser = payload.currentSelectedUser;
      break;
     
    default:
      return true;
  }

  // If action was responded to, emit change event
  ApplicationStore.emitChange();

  return true;

});

export default ApplicationStore;

