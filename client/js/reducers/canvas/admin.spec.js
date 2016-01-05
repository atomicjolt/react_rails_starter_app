"use strict";

import _               from "lodash";
import Immutable       from "immutable";
import ErrorTypes      from "../../constants/error";
import CanvasConstants     from "../../constants/canvas";
import admin           from "./admin";

describe("canvas admins reducer", () => {

  describe("initial state", () => {

    it("has no admins", () => {
      const state = admin(undefined, {});
      expect(state.getIn(['account_admins', 0])).toEqual(undefined);
    });
  });

  describe("ACCOUNT_ADMINS_DONE", () => {

    it("Adds new admin", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.ACCOUNT_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Bobby Flay"
        }]
      }
      const state = admin(initialState, action);
      expect(state.getIn(['account_admins', 0, 'name'])).toEqual('Bobby Flay');
    });
  });

  describe("REMOVE_ADMINS_DONE", () => {

    it("Deletes an admin", () => {

      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.REMOVE_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Bobby"
        }]
      }
      const state = admin(initialState, action);
      expect(state.getIn(['account_admins', 0, 'name'])).toEqual('Bobby');
    });
  });

});