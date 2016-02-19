import canvasRequest         from "./action";
import _                     from "lodash";
import CanvasApi             from "./middleware";
import Helper                from "../../../specs_support/helper";

fdescribe('Canvas Middleware', () => {

  Helper.stubAjax();


  it('implements Redux middleware interface', () => {
    const store = { getState: () => {} };
    const middleware = CanvasApi(store);
    const next = () => {};
    const action = middleware(next);

    expect(CanvasApi.length).toBe(1);                     // api middleware takes one arg
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
    const nextHandler = CanvasApi(store);
    const next = (actionPassed) => {
      expect(actionPassed).toBe(action);
    };
    const actionHandler = nextHandler(next);
    actionHandler(action);
  });

  it('calls the api library', () => {
    const action = {
      type: "ASSIGNMENTS",
      canvas: true,
      url: "http://www.example.com/api/stuff.json"
    };
    const store = Helper.makeStore();
    spyOn(store, 'dispatch');
    const middleware = CanvasApi(store);
    const nextHandler = () => {};
    const actionHandler = middleware(nextHandler);
    actionHandler(action);
    expect(store.dispatch).toHaveBeenCalled();
  });

});