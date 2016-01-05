"use strict";

import _               from "lodash";
import Immutable       from "immutable";
import ErrorTypes      from "../../constants/error";
import CanvasConstants     from "../../constants/canvas";
import admin           from "./admin";

fdescribe("canvas admins reducer", () => {

  describe("initial state", () => {

    it("has no admins", () => {
      const state = admin(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });

  describe("ACCOUNT_ADMINS_DONE", () => {

    it("Adds new admin", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.ACCOUNT_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Bobby"
        }]
      }
      const state = admin(initialState, action);
        console.log(action.payload)
        console.log("++++++++++====================")
        console.log(initialState)
        console.log("+++++++++++++++++++++++++++++++++")
        console.log(state)
      expect(state.getIn(['account_admins', 0]).name).toBe("Bobby");
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
      expect(state.getIn(['account_admins', 1]).name).toEqual({});
    });
  });

});