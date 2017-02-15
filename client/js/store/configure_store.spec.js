import configureStore from './configure_store';

describe('configure store', () => {
  it('setups up initial state', () => {
    const settings = {
      csrf   : 'csrf_token',
      api_url : 'http://www.example.com',
    };
    const initialState = {
      jwt: 'jwt_token',
      settings,
    };
    const store = configureStore(initialState);
    expect(store.getState().settings).toBe(settings);
    expect(store.getState().jwt).toBe('jwt_token');
  });
});
