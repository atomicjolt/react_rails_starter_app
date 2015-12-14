import messages        from "./messages";

describe("message reducer", () => {

  describe("initial state", () => {
    
    it("has no messages", () => {
      const state = messages(undefined, {});
      expect(state.toJS()).toEqual([]);
    });
    
  });
  
});