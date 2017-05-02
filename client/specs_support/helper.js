import _ from 'lodash';
import { combineReducers } from 'redux';

import API from '../libs/middleware/api';
import settings from '../libs/reducers/settings';
import configureStore from '../libs/store/configure_store';

export default class Helper {

  // Create a fake store for testing
  static mockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({ ...state })
    };
  }

  // Create a real store that can be used for testing
  static makeStore(initial) {
    const initialState = {
      settings: _.assign({
        csrf: 'csrf_token',
        api_url: 'http://www.example.com'
      }, initial)
    };
    const rootReducer = combineReducers({
      settings,
    });
    const middleware = [API];
    return configureStore(initialState, rootReducer, middleware);
  }

  static testPayload() {
    return JSON.stringify([{
      id: 1,
      name: 'Starter App'
    }]);
  }

  static stubAjax() {
    beforeEach(() => {
      jasmine.Ajax.install();

      jasmine.Ajax.stubRequest(
          RegExp('.*/api/test')
        ).andReturn({
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: Helper.testPayload()
        });

      jasmine.Ajax.stubRequest(
          RegExp('.*/api/test/.+')
        ).andReturn({
          status: 200,
          contentType: 'application/json',
          statusText: 'OK',
          responseText: Helper.testPayload()
        });
    });

    afterEach(() => {
      jasmine.Ajax.uninstall();
    });
  }

  static mockClock() {
    beforeEach(() => {
      jasmine.clock().install(); // Mock out the built in timers
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });
  }

}
