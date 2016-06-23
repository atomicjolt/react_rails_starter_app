"use strict";

import _                  from "lodash";
import Immutable          from 'immutable';
import configureStore     from "../js/store/configure_store";

export default class Helper{

  // Create a fake store for testing
  static mockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {
        return {...state};
      }
    };
  }

  // Create a real store that can be used for testing
  static makeStore(settings){
    var initialSettings = _.assign({
      jwt: "jwt_token",
      csrf: "csrf_token",
      apiUrl: "http://www.example.com"
    }, settings);

    return configureStore({
      settings: Immutable.fromJS(initialSettings)
    });
  }

  static stubAjax(){

    beforeEach(function(){
      jasmine.Ajax.install();

      // Stub request to load problems
      var accounts_payload = JSON.stringify([{
        "id":1,
        "name":"Starter App",
        "domain":"bfcoderServer.ngrok.io",
        "code":"bfcoderServer"
      }]);

      jasmine.Ajax.stubRequest(
          RegExp('.*/api/accounts/')
        ).andReturn({
          "status": 200,
          "contentType": "json",
          "statusText": "OK",
          "responseText": accounts_payload
        });
    });

    afterEach(function(){
      jasmine.Ajax.uninstall();
    });
  }

  static mockClock(){

    beforeEach(function(){
      jasmine.clock().install(); // Mock out the built in timers
    });

    afterEach(function(){
      jasmine.clock().uninstall();
    });

  }

}