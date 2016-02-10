"use strict";

import _                      from "lodash";
import Immutable              from "immutable";
import { CanvasConstants }    from "../../constants/canvas";
import assignment_group       from "./assignment_group";
import Store                  from "../../store/configure_store";
// import Mock                   from "../../specs_support/helper";


describe("canvas assignment_group reducer", () => {

    // var store;

    // beforeEach(function(){
    //   store = Store(Immutable.fromJS({}))
    // Mock.mockClock();
    // })


    it("has no groups", () => {
      const state = assignment_group(undefined, {});
      expect(state.getIn(['assignment_group', 0])).toEqual(undefined);
    });


    it("Adds new group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.COURSE_ASSIGNMENT_GROUPS_DONE,
        payload: [{
          id: 11,
          name: "Group13"
        },
        {
          id: 2,
          name: "Group15"
        }]
      }

      const state = assignment_group(initialState, action);
      expect(state.getIn([11]).family).toBe("Group13");
      expect(state.getIn([2]).name).toBe("Group15");
    });


    it("Adds new single group", () => {
      const initialState = Immutable.fromJS({});
      const action = {
        type: CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_DONE,
        payload: [{
          id: 7,
          name: "Group14"
        }]
      }
      const state = assignment_group(initialState, action);
      expect(state.getIn([7]).id).toBe(7);
    });


    it("Deletes a group", () => {
      const initialState = Immutable.fromJS({});
      debugger
      const action = {
        type: CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_DEL_DONE,
        payload: [{
          id: 1,
          name: "Group16"
        }]
      }
      const state = assignment_group(initialState, action);
      expect(state.getIn([1])).toEqual(undefined);
    });

});