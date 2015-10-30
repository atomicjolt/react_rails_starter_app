"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import QueryString    from '../utils/query_string';

var _settings = {};

// Grab the jwt from the payload
function login(payload){
  _settings.jwt = payload.data.body.jwt_token;
}

function loadSettings(defaultSettings){

  defaultSettings = defaultSettings || {};

  var bestValue = function(settings_prop, params_prop, default_prop){
    return defaultSettings[settings_prop] || QueryString.params()[params_prop] || default_prop;
  };

  _settings = {
    apiUrl           : bestValue('apiUrl', 'api_url', '/'),
    csrfToken        : defaultSettings.csrfToken || null,
    jwt              : defaultSettings.jwt
  };

}

function refreshJwt(payload){
  _settings.jwt = JSON.parse(payload.data.text).jwt;
}

// Extend Message Store with EventEmitter to add eventing capabilities
var SettingsStore = {...StoreCommon, ...{

  // Return current messages
  current(){
    return _settings;
  }

}};

// Register callback with Dispatcher
Dispatcher.register(function(payload) {

  switch(payload.action){

    case Constants.SETTINGS_LOAD:
      loadSettings(payload.data);
      break;

    case Constants.LOGIN:
      login(payload);
      break;

    case Constants.LOGOUT:
      logout(payload);
      break;

    case Constants.REFRESH_JWT:
      refreshJwt(payload)
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  SettingsStore.emitChange();

  return true;

});

export default SettingsStore;

