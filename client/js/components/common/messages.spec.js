import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import Messages           from './messages';
import MessagesActions    from '../../actions/messages';
import StubContext        from '../../../specs_support/stub_context'; 

describe('messages', () => {
  
  beforeEach(() => {
    jasmine.clock().install(); // Mock out the built in timers
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
  
  describe('no messages', () => {
    it('renders nothing', () => {
      var Subject = StubContext(Messages, {});
      var result = TestUtils.renderIntoDocument(<Subject />);
      expect(React.findDOMNode(result)).toBe(null);
    });
  });
  
  describe('messages exist', () => {
    var message = "A test message";

    beforeEach(() => {
      MessagesActions.addMessage(message);
      jasmine.clock().tick(); // Advance the clock to the next tick
    });

    it('renders a list of messages', () => {
      var Subject = StubContext(Messages, {});
      var result = TestUtils.renderIntoDocument(<Subject />);
      expect(React.findDOMNode(result).textContent).toContain(message);
    });

    it('re-renders with new messages', () => {
      var newMessage = "A new message to make sure the messages re-renders when the store changes";
      MessagesActions.addMessage(newMessage);
      jasmine.clock().tick(); // Advance the clock to the next tick
      var Subject = StubContext(Messages, {});
      var result = TestUtils.renderIntoDocument(<Subject />);
      expect(React.findDOMNode(result).textContent).toContain(newMessage);
    });

  });

});