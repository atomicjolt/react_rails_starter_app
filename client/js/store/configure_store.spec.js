import configureStore     from "./configure_store";
import Immutable          from 'immutable';

describe('configure store', function() {

  it('setups up initial state', function() {
    var initialState = Immutable.fromJS({
      jwt: "jwt_token",
      csrf: "csrf_token",
      apiUrl: "http://www.example.com"
    });
    var settings = {
      settings: initialState
    };
    var store = configureStore(settings);
    expect(store.getState().settings.jwt).toBe('jwt_token');
  });
});