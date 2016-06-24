import settings                from "./settings";
import { getInitialSettings }  from "./settings";

describe('settings reducer', () => {

  describe("initial state", () => {

    it("returns empty state", () => {
      const initialState = {};
      const state = settings(initialState, {});
      expect(state).toEqual({});
    });

  });

  describe("getInitialSettings", () => {

    it("Returns the state provided by the server", () => {
      const serverSettings = { foo: 1 };
      const settings = getInitialSettings(serverSettings);
      expect(settings).toEqual(serverSettings);
    });

  });

});
