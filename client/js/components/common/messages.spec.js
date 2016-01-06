import React     from "react";
import ReactDOM  from "react-dom";
import TestUtils from "react/lib/ReactTestUtils";
import Helper    from "../../../specs_support/helper";
import Messages  from "./messages";
import Immutable from "immutable";


describe('messages', () => {
  
  describe('empty state', () => {
    it('renders nothing', () => {
      const store = Helper.mockStore({ messages: Immutable.fromJS([]) })
      const result = TestUtils.renderIntoDocument(<Messages store={store}/>);
      expect(ReactDOM.findDOMNode(result)).toBe(null);
    });
  });
  
  describe('messages exist', () => {
    it('renders a list of messages', () => {
      const message = "A test message";
      const store = Helper.mockStore({ messages: Immutable.fromJS([message]) })
      const result = TestUtils.renderIntoDocument(<Messages store={store}/>);
      expect(ReactDOM.findDOMNode(result).textContent).toContain(message);
    });

  });

});