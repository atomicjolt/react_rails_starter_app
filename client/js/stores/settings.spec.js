"use strict";

import React           from "react";
import Router          from "react-router";
import assign          from "object-assign";
import SettingsStore   from "./settings";
import SettingsActions from "../actions/settings";
import Dispatcher      from "../dispatcher";

describe("SettingsStore", () => {
  
  describe("with initial state", () => {

    helpLoadSettings(SettingsActions);

    describe("current", () => {
      it("returns current settings", (done) => {
        var settings = SettingsStore.current();
        expect(settings).toEqual(assign({ csrfToken: null }, helpDefaultSettings));
        done();
      });
    });

  });

});