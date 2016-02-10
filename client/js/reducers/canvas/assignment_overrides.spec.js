"use strict";

import _                   from "lodash";
import Immutable           from "immutable";
import { CanvasConstants } from "../../constants/canvas";
import ErrorTypes          from "../../constants/error";
import override            from "./assignment_overrides";

describe("canvas assignment_overrides reducer", () => {

  describe("initial state", () => {

    it("has no list_override_assignment", () => {
      const state = override(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });


    it("Adds new override", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.LIST_OVERRIDE_ASSIGNMENT_DONE,
        payload: [{
          id: 4,
          assignment_id: 45,
          group_id: 2
        }]
      }
      const state = override(initialState, action);
      expect(state.getIn(['override_assignment', 1]).id).toEqual(4);
    });


    it("Adds new override", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.OVERRIDE_ASSIGNMENT_DONE,
        payload: [{
          id: 4,
          assignment_id: 45,
          group_id: 2
        }]
      }
      const state = override(initialState, action);
      expect(state.getIn(['override_assignment', 1]).assignment_id).toEqual(45);
    });


//Responds with a redirect to the override for the given group, if any. (404 otherwise).
    it("Adds new override", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.LIST_OVERRIDE_ASSIGNMENT_GROUP_DONE,
        payload: [{
          id: 4,
          assignment_id: 45,
          group_id: 2
        }]
      }
      const state = override(initialState, action);
      expect(state.getIn(['override_assignment', 1]).group_id).toEqual(2);
    });


});