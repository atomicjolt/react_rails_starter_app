"use strict";

import Constants   from   "../constants";
import Dispatcher  from   "../dispatcher";
import Api         from   "./api";

export default {

  load(defaultSettings){
    Dispatcher.dispatch({ action: Constants.SETTINGS_LOAD, data: defaultSettings });
    if(defaultSettings.userId){
      // Add timeout to refresh jwt token
      var refresh = 1000 * 60 * 20; // every 20 minutes
      setInterval(function(){ 
        Api.get(Constants.REFRESH_JWT, `api/sessions/${defaultSettings.userId}`);
      }, refresh);
    }
  }

};