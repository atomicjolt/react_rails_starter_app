"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import LeftNav            from './left_nav';
import StubContext        from '../../../specs_support/stub_context';

describe('left_nav', function() {
  
  it('renders signed in nav', function() {
    var Subject = new StubContext(LeftNav, {loggedIn: true});
    var result = TestUtils.renderIntoDocument(<Subject />);
    expect(React.findDOMNode(result).textContent).toContain("Home");
    expect(React.findDOMNode(result).textContent).toContain("Dashboard");
    expect(React.findDOMNode(result).textContent).toContain("Connections");
    expect(React.findDOMNode(result).textContent).toContain("Logout");
  });

  it('does not render the signed in nav if you are not logged in', function() {
    var Subject = new StubContext(LeftNav, {});
    var result = TestUtils.renderIntoDocument(<Subject />);
    expect(React.findDOMNode(result).textContent).not.toContain("Dashboard");
    expect(React.findDOMNode(result).textContent).not.toContain("Connections");
    expect(React.findDOMNode(result).textContent).not.toContain("Logout");
  });

  it('renders the signed in nav if you are not logged in', function() {
    var Subject = new StubContext(LeftNav, {});
    var result = TestUtils.renderIntoDocument(<Subject />);
    expect(React.findDOMNode(result).textContent).toContain("Sign In");
    expect(React.findDOMNode(result).textContent).toContain("Sign Up");
  });

});
