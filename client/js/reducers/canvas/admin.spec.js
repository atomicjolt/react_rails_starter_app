"use strict";

import _           from "lodash";
import Immutable   from "immutable";
import ErrorTypes  from "../../constants/error";
import admin       from "./admin";

describe("canvas admins reducer", () => {

  describe("initial state", () => {

    it("has no admins", () => {
      const state = account_admins(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });

  describe("ACCOUNT_ADMINS_DONE", () => {

    it("Adds new admin", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: ActionTypes.ACCOUNT_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Bobby"
        }]
      }
      const state = accounts(initialState, action);
      expect(state.getIn(['account_admins', 1]).name).toBe("Bobby");
    });

  describe("REMOVE_ADMINS_DONE", () => {

    it("Deletes an admin", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: ActionTypes.REMOVE_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Bobby"
        }]
      }
      const state = accounts(initialState, action);
      expect(state.getIn(['account_admins', 1]).name).toEqual({});
    });
  });

});