import settings, { getInitialSettings } from './settings';

describe('settings reducer', () => {
  describe('initial state', () => {
    it('returns empty state', () => {
      const initialState = {};
      const state = settings(initialState, {});
      expect(state).toEqual({});
    });
  });

  describe('getInitialSettings', () => {
    it('Returns the state provided by the server', () => {
      const serverSettings = { foo: 1 };
      const newSettings = getInitialSettings(serverSettings);
      expect(newSettings).toEqual(serverSettings);
    });

    it('Returns combined state', () => {
      const serverSettings1 = { foo: 1 };
      const serverSettings2 = { bar: 2 };
      const newSettings = getInitialSettings(serverSettings1, serverSettings2);
      expect(newSettings.foo).toEqual(1);
      expect(newSettings.bar).toEqual(2);
    });
  });
});
