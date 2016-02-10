"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../constants/canvas";
import admin               from "./admin";

describe("canvas admins reducer", () => {


    it("has no admins", () => {
      const state = admin(undefined, {});
      expect(state.getIn(['account_admins', 0])).toEqual(undefined);
    });


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
      expect(state.getIn([1])).toEqual(undefined);
    });


});