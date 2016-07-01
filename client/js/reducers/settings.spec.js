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

    it("Returns combined state", () => {
      const serverSettings1 = { foo: 1 };
      const serverSettings2 = { bar: 2 };
      const settings = getInitialSettings(serverSettings1, serverSettings2);
      expect(settings.foo).toEqual(1);
      expect(settings.bar).toEqual(2);
    });

  });

});
