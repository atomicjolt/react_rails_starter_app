import Immutable                     from 'immutable';
import { Constants as JwtConstants } from "../actions/jwt";
import settings                      from "./settings";

describe('settings reducer', () => {

  describe("initial state", () => {
    
    it("returns empty state", () => {
      const initialState = Immutable.fromJS({});
      const state = settings(initialState, {});
      expect(state.toJS()).toEqual({});
    });

    it("has a jwt token", () => {
      const initial = {jwt: 'asdf'};
      const initialState = Immutable.fromJS(initial);
      const state = settings(initialState, {});
      expect(state.toJS()).toEqual(initial);

      const newJwt = '1234';
      const newState = settings(state, {
        type: JwtConstants.REFRESH_JWT,
        payload: newJwt
      });

      expect(newState.toJS().jwt).toEqual(newJwt);
    });
    
  });

});
