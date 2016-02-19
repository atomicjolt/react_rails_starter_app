"use strict";

import _             from "lodash";
import Immutable     from "immutable";
import { CanvasConstants }   from "../../libs/canvas/constants";
import reducer      from "./reducer";

describe("canvas reducer", () => {

  describe("initial state", () => {

    it("has no data", () => {
      const state = reducer(undefined, {});
      expect(state.toJS()).toEqual({});
    });

  });

});
