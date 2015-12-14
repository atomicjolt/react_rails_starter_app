import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import Message   from './message';

describe('message', () => {
  
  describe('messages exist', () => {
    var message = "A test message";

    it('renders a single message', () => {
      var result = TestUtils.renderIntoDocument(<Message>{message}</Message>);
      expect(ReactDOM.findDOMNode(result).textContent).toContain(message);
    });
  });

});