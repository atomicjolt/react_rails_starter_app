"use strict";

// Test helper. Load libraries and polyfills

// Function.prototype.bind polyfill used by PhantomJS
if (typeof Function.prototype.bind != 'function') {
  Function.prototype.bind = function bind(obj) {
    var args = Array.prototype.slice.call(arguments, 1),
      self = this,
      nop = function() {
      },
      bound = function() {
        return self.apply(
          this instanceof nop ? this : (obj || {}), args.concat(
            Array.prototype.slice.call(arguments)
          )
        );
      };
    nop.prototype = this.prototype || {};
    bound.prototype = new nop();
    return bound;
  };
}

function helpStubAjax(SettingsActions){

  helpLoadSettings(SettingsActions);

  beforeEach(function(){
    jasmine.Ajax.install();

    // Stub request to load problems
    var accounts_payload = JSON.stringify([{
      "id":1,
      "name":"Canvas Starter App",
      "domain":"bfcoderServer.ngrok.io",
      "lti_key":"canvasstarterapp",
      "lti_secret":"d52ca2",
      "canvas_uri":"https://canvas.instructure.com",
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

var helpDefaultSettings = {
  apiUrl: "http://www.example.com/api"
};

function helpLoadSettings(SettingsActions){

  helpMockClock();

  beforeEach(function(){
    SettingsActions.load(helpDefaultSettings);
    jasmine.clock().tick(); // Advance the clock to the next tick
  });

}

function helpMockClock(){

  beforeEach(function(){
    jasmine.clock().install(); // Mock out the built in timers
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

}
