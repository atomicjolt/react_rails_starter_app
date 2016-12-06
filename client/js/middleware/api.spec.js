import api from './api';
import Network from '../constants/network';
import Helper from '../../specs_support/helper';

describe('api middleware', () => {
  Helper.stubAjax();

  it('implements Redux middleware interface', () => {
    const store = { getState: () => {} };
    const middleware = api(store);
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);

    // api middleware takes one arg
    expect(api.length).toBe(1);
    // api middleware must return a function to handle next
    expect(typeof middleware).toBe('function');
    // next handler returned by api middleware must take one argument
    expect(middleware.length).toBe(1);
    // next handler must return a function to handle action
    expect(typeof actionHandler).toBe('function');
    // action handler must take one argument
    expect(actionHandler.length).toBe(1);
  });

  it('passes action on to next middleware', () => {
    const store = { getState: () => {} };
    const action = {
      type: 'TEST',
    };
    const nextHandler = api(store);
    const next = (actionPassed) => {
      expect(actionPassed).toBe(action);
    };
    const actionHandler = nextHandler(next);
    actionHandler(action);
  });

  it('calls the api library', () => {
    const action = {
      type: 'TEST',
      method: Network.GET,
      url: 'http://www.example.com/api/stuff.json',
    };
    const middleware = api(Helper.makeStore());
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);
    actionHandler(action);
  });
});
