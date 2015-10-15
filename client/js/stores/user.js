"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";

var _user = {};

// log the user in
function login(payload){
  _user.id = payload.userId;
  _user.email = payload.email;
  _user.displayName = payload.displayName;
}

// Register
function register(user){
  _user.id = user.id;
  _user.email = user.email;
  _user.displayName = user.displayName;
}

// Retrieve user from default settings
function loadUserFromSettings(payload) {
  _user.id = payload.data.userId;
  _user.email = payload.data.email;
  _user.displayName = payload.data.displayName;
}

function logout(){
  _user = {};
}

// Extend User Store with EventEmitter to add eventing capabilities
var UserStore = assign({}, StoreCommon, {

  // Return current user
  current(){
    return _user;
  },

  loggedIn(){
    return _user.id !== undefined;
  }

});

// Register callback with Dispatcher
Dispatcher.register((payload) => {
  var action = payload.action;

  switch(action){

    // Respond to LOGIN action
    case Constants.LOGIN:
      login(payload);
      break;

    // Respond to REGISTER action
    case Constants.REGISTER:
      register(payload.user);
      break;

    case Constants.LOGOUT:
      logout(payload);
      break;

    case Constants.SETTINGS_LOAD:
      loadUserFromSettings(payload);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  UserStore.emitChange();

  return true;

});

export default UserStore;

