import _                     from "lodash";

import canvasRequest         from "./action";
import CanvasMiddlware       from "./middleware";
import Helper                from "../../../specs_support/helper";

describe('Canvas Middleware', () => {

  Helper.stubAjax();

  it('implements Redux middleware interface', () => {
    const store = { getState: () => {} };
    const middleware = CanvasMiddlware(store);
    const next = () => {};
    const action = middleware(next);

    expect(CanvasMiddlware.length).toBe(1);                     // api middleware takes one arg
    expect(typeof middleware).toBe("function");     // api middleware must return a function to handle next
    expect(middleware.length).toBe(1);              // next handler returned by api middleware must take one argument
    expect(typeof action).toBe("function");  // next handler must return a function to handle action
    expect(action.length).toBe(1);           // action handler must take one argument
  });

  it('passes action on to next middleware', () => {
    const store = { getState: () => {} };
    const action = {
      type: "TEST"
    };
    const nextHandler = CanvasMiddlware(store);
    const next = (actionPassed) => {
      expect(actionPassed).toBe(action);
    };
    const actionHandler = nextHandler(next);
    actionHandler(action);
  });

  it('calls the api library', (done) => {
    const listAccounts = { type: "LIST_ACCOUNTS", method: "get", reducer: 'accounts'};
    const action = canvasRequest(listAccounts);
    const store = Helper.makeStore();
    spyOn(store, 'dispatch');
    const middleware = CanvasMiddlware(store);
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);
    actionHandler(action);
    // store.dispatch is called async after the request from
    // the server returns. We mock the server call but the request
    // still appears to be async which means we have to check the result
    // in the next loop. We use setTimeout with 0 to do this.
    setTimeout(function(){
      expect(store.dispatch).toHaveBeenCalled();
      done();
    }, 0);
  });

});