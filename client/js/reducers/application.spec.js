import application from './application';

describe('application reducer', () => {
  describe('initial state', () => {
    it('returns empty state', () => {
      const initialState = {};
      const state = application(initialState, {});
      expect(state).toEqual({});
    });
  });
});
