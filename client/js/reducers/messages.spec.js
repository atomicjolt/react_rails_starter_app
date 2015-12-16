"use strict";

import _           from "lodash";
import Immutable   from "immutable";
import ActionTypes from "../constants/action_types";
import ErrorTypes  from "../constants/error";
import messages    from "./messages";

describe("message reducer", () => {

  describe("initial state", () => {
    
    it("has no messages", () => {
      const state = messages(undefined, {});
      expect(state.toJS()).toEqual([]);
    });
    
  });

  describe("TIMEOUT", () => {

    it("adds a timeout message", () => {
      const initialState = Immutable.fromJS([]);
      const state = messages(initialState, {
        type: ErrorTypes.TIMEOUT,
        payload: {
          message: "No response"
        }
      });
      expect(_.contains(state.get(0),"Request timed out")).toBe(true);
    });

  });

  describe("NOT_AUTHORIZED", () => {

    it("Adds a not authorized error", () => {
      const initialState = Immutable.fromJS([]);
      const state = messages(initialState, {
        type: ErrorTypes.NOT_AUTHORIZED,
        payload: {
          message: "Not authorized"
        }
      });
      expect(_.contains(state.get(0),"Request not authorized")).toBe(true);
    });

  });

  describe("ERROR", () => {

    it("Adds an error", () => {
      const initialState = Immutable.fromJS([]);
      const state = messages(initialState, {
        type: ErrorTypes.ERROR,
        payload: {
          message: "Error"
        }
      });
      expect(_.contains(state.get(0),"Request error")).toBe(true);
    });

  });

  describe("ADD_MESSAGE", () => {

    it("Adds a message", () => {
      const initialState = Immutable.fromJS([]);
      const action = {
        type: ActionTypes.ADD_MESSAGE,
        payload: {
          message: "Things are great"
        }
      }
      const state = messages(initialState, action);
      expect(_.contains(state.get(0),action.payload.message)).toBe(true);
    });

  });

  
  describe("REMOVE_MESSAGE", () => {

    it("Removes message", () => {
      const action = {
        type: ActionTypes.ADD_MESSAGE,
        payload: {
          message: "Things are great"
        }
      };
      const removeAction = {
        type: ActionTypes.REMOVE_MESSAGE,
        payload: {
          message: "Things are great"
        }
      };
      const initialState = Immutable.fromJS([action.payload.message]);
      const state = messages(initialState, action);
      expect(_.contains(state.get(0),action.payload.message)).toBe(true);
      const newState = messages(state, removeAction);
      expect(newState.toJS()).toEqual([]);
    });

  });

  describe("CLEAR_MESSAGES", () => {

    it("Removes message", () => {
      const action = {
        type: ActionTypes.ADD_MESSAGE,
        payload: {
          message: "Things are great"
        }
      };
      const removeAction = {
        type: ActionTypes.CLEAR_MESSAGES
      };
      const initialState = Immutable.fromJS([action.payload.message]);
      const state = messages(initialState, action);
      expect(_.contains(state.get(0),action.payload.message)).toBe(true);
      const newState = messages(state, removeAction);
      expect(newState.toJS()).toEqual([]);
    });

  });


});