"use strict";

import _             from "lodash";
import Immutable     from "immutable";
import CanvasConstants   from "../../constants/canvas";
import accounts      from "./accounts";

describe("canvas accounts reducer", () => {

  describe("initial state", () => {

    it("has no accounts", () => {
      const state = accounts(undefined, {});
      expect(state.toJS()).toEqual({});
    });

  });

  describe("ACCOUNTS_LOAD_DONE", () => {

    it("Adds new accounts", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.ACCOUNTS_LOAD_DONE,
        payload: [{
          id: 1,
          name: "test"
        }]
      }
      const state = accounts(initialState, action);
      expect(state.getIn(['accounts', 1]).name).toBe("test");
    });
  });

});