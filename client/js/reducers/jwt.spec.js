import { Constants as JwtConstants } from "../actions/jwt";
import jwt                           from "./jwt";

describe('jwt reducer', () => {

  describe("initial state", () => {

    it("has a jwt token", () => {
      const initial = { jwtValue: 'asdf' };
      const initialState = initial;
      const state = jwt(initialState, {});
      expect(state.toEqual(initial);

      const newJwt = { jwtValue: '1234' };
      const newState = jwt(state, {
        type: JwtConstants.REFRESH_JWT,
        payload: newJwt
      });

      expect(newState).toEqual(newJwt);
    });

  });

});
