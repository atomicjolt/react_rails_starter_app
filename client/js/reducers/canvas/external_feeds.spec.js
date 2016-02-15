"use strict";

import _                      from "lodash";
import Immutable              from "immutable";
import ErrorTypes             from "../../constants/error";
import { CanvasConstants }    from "../../libs/canvas/constants";
import external_feed          from "./external_feeds";


describe("canvas external_feed reducer", () => {

  describe("initial state", () => {

    it("has no groups", () => {
      const state = external_feed(undefined, {});
      expect(state.toJS()).toEqual({});
    });
  });


  describe("COURSE_EXTERNAL_FEEDS_DONE", () => {

    it("Adds new feed", () => {
      const initialState = Immutable.fromJS({});

      const action = {
        type: CanvasConstants.COURSE_EXTERNAL_FEEDS,
        payload: [{
          id: 10,
          display_name: "Feed10"
        }]
      }
      const state = external_feed(initialState, action);
      expect(state.getIn(['external_feeds', 1]).display_name).toBe("Feed10");
    });
  });


  describe("COURSE_EXTERNAL_FEED_DONE", () => {

    it("Adds new group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.COURSE_EXTERNAL_FEED,
        payload: [{
          id: 7,
          name: "Group13"
        }]
      }
      const state = external_feed(initialState, action);
      expect(state.getIn(['external_feeds', 1]).id).toBe(7);
    });
  });


  describe("GROUP_EXTERNAL_FEEDS_DONE", () => {

    it("Deletes a group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.GROUP_EXTERNAL_FEEDS_DONE,
        payload: [{
          id: 1,
          name: "Group13"
        }]
      }
      const state = external_feed(initialState, action);
      expect(state.getIn(['external_feeds', 1]).name).toEqual({});
    });
  });

  describe("GROUP_EXTERNAL_FEED_DONE", () => {

    it("Deletes a group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.GROUP_EXTERNAL_FEED_DONE,
        payload: [{
          id: 1,
          name: "Group13"
        }]
      }
      const state = external_feed(initialState, action);
      expect(state.getIn(['external_feeds', 1]).name).toEqual({});
    });
  });

});