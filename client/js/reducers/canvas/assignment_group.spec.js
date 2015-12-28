"use strict";

import _                      from "lodash";
import Immutable              from "immutable";
import ErrorTypes             from "../../constants/error";
import assignment_group       from "./assignment_group";


describe("canvas assignment_group reducer", () => {

  describe("initial state", () => {

    it("has no groups", () => {
      const state = assignment_group(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });


  describe("COURSE_ASSIGNMENT_GROUPS_DONE", () => {

    it("Adds new group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: ActionTypes.ACCOUNT_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Group13"
        }]
      }
      const state = assignment_group(initialState, action);
      expect(state.getIn(['course_assignment_groups', 1]).name).toBe("Group13");
    });


  describe("COURSE_ASSIGNMENT_SINGLE_GROUP_DONE", () => {

    it("Adds new group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: ActionTypes.ACCOUNT_ADMINS_DONE,
        payload: [{
          id: 7,
          name: "Group13"
        }]
      }
      const state = assignment_group(initialState, action);
      expect(state.getIn(['course_assignment_groups', 1]).id).toBe(7);
    });


  describe("COURSE_ASSIGNMENT_SINGLE_GROUP_DEL_DONE", () => {

    it("Deletes a group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: ActionTypes.REMOVE_ADMINS_DONE,
        payload: [{
          id: 1,
          name: "Group13"
        }]
      }
      const state = assignment_group(initialState, action);
      expect(state.getIn(['course_assignment_groups', 1]).name).toEqual({});
    });
  });

});