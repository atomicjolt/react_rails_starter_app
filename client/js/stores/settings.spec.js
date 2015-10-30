"use strict";

import React           from "react";
import Router          from "react-router";
import Constants       from "../constants";
import SettingsStore   from "./settings";
import SettingsActions from "../actions/settings";
import Dispatcher      from "../dispatcher";

describe("SettingsStore", () => {
  
  describe("with initial state", () => {

    helpLoadSettings(SettingsActions);

    describe("current", () => {
      it("returns current settings", (done) => {
        var settings = SettingsStore.current();
        expect(settings).toEqual({...{ csrfToken: null, jwt: undefined }, ...helpDefaultSettings});
        done();
      });
    });

  });

  describe("jwt refresh", () => {

    helpLoadSettings(SettingsActions);

    describe("current", () => {
      var jwt = "test"; 
      beforeEach(() => {
        Dispatcher.dispatch({ action: Constants.REFRESH_JWT, data: {text: `{"jwt":"${jwt}"}`} });
        jasmine.clock().tick(); // Advance the clock to the next tick
      });
      it("returns updated jwt", (done) => {
        var settings = SettingsStore.current();
        expect(settings.jwt).toEqual(jwt);
        done();
      });
    });

  });

});