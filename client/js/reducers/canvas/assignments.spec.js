"use strict";

import _                   from "lodash";
import Immutable           from "immutable";
import { CanvasConstants } from "../../libs/canvas/constants";
import ErrorTypes          from "../../constants/error";
import assignments         from "./assignments";

describe("canvas assignments reducer", () => {

  describe("initial state", () => {

    it("has no list of assignment", () => {
      const state = assignments(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });

  describe("LIST_ASSIGNMENT_DONE", () => {

    it("Lists [] of assignments", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.LIST_ASSIGNMENT_DONE,
        payload: [{
          id: 4,
          name: "Assignment 1",
          assignment_id: 45,
          group_id: 2
        }]
      }
      const state = assignments(initialState, action);
      expect(state.getIn(['assignments', 1]).name).toBe("Assignment 1");
    });
  });


    describe("DELETE_ASSIGNMENT_DONE", () => {

    it("Deletes assignment from store", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.DELETE_ASSIGNMENT_DONE,
        payload: [{
          id: 4,
          name: "Assignment 1"
        }]
      }
      const state = assignments(initialState, action);
      expect(state.getIn(['assignments', 1]).assignment_id).toEqual({});
    });
  });


  describe("SINGLE_ASSIGNMENT_DONE", () => {
    //Responds with a redirect to the assignments for the given group, if any. (404 otherwise).
    it("Adds new assignments", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.SINGLE_ASSIGNMENT_DONE,
        payload: [{
          id: 4,
          name: "Assignment 2"
        }]
      }
      const state = assignments(initialState, action);
      expect(state.getIn(['assignments', 1]).name).toEqual("Assignment 2");
    });
  });

});