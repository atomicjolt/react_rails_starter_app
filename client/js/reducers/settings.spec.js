import settings        from "./settings";

describe('settings reducer', () => {

  describe("initial state", () => {
    
    it("returns empty state", () => {
      const state = settings();
      expect(state.toJS()).toEqual({});
    });
    
  });

});
