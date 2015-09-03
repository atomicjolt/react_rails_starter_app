"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";
import _              from "lodash";

var _navStatus = true;
// Extend User Store with EventEmitter to add eventing capabilities
var AdminStore = assign({}, StoreCommon, {

navStatus(){
  return _navStatus;
},

});
 
// Register callback with Dispatcher
Dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action){

    case Constants.NAV_CHANGED:
      _navStatus = !_navStatus;
      break;

    default:
      return true;
  }
  // If action was responded to, emit change event
  AdminStore.emitChange();
  
  return true;

});

export default AdminStore;

