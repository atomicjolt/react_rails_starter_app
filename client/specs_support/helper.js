import _ from 'lodash';
import { combineReducers } from 'redux';
import nock from 'nock';

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
  // For any additional state provided you must also provide the corresponding
  // reducers.
  static makeStore(initialSettings, additionalState, additionalReducers) {
    const initialState = _.merge({
      settings: _.merge({
        csrf: 'csrf_token',
        apiUrl: 'http://www.example.com'
      }, initialSettings)
    }, additionalState);
    const rootReducer = combineReducers({
      settings,
      ...additionalReducers
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

  static mockRequest(method, apiUrl, url, expectedHeaders) {
    return nock(apiUrl, expectedHeaders)
    .intercept(url, method)
    .reply(
      200,
      Helper.testPayload(),
      { 'content-type': 'application/json' }
    );
  }

  static mockAllAjax() {
    beforeEach(() => {
      nock('http://www.example.com')
        .persist()
        .get(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .post(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .put(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
      nock('http://www.example.com')
        .persist()
        .delete(RegExp('.*'))
        .reply(200, Helper.testPayload(), { 'content-type': 'application/json' });
    });

    afterEach(() => {
      nock.cleanAll();
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
