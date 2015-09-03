"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import LeftNav   from './left_nav';
import SettingsActions    from '../../actions/settings';
import StubContext        from '../../../specs_support/stub_context';

describe('left_nav', function() {
  // TO RUN MORE TESTS YOU WILL HAVE TO SIMULATE LOGGING IN
  helpStubAjax(SettingsActions);
  var Subject;
  var result;

  beforeEach(()=>{
    Subject = new StubContext(LeftNav, {});
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it('renders signed in nav', function() {
    localStorage.setItem('jwt', "aoeuaoeu");
    result = TestUtils.renderIntoDocument(<Subject />);
    expect(React.findDOMNode(result).textContent).toContain("Dashboard");
    expect(React.findDOMNode(result).textContent).toContain("Logout");
    localStorage.removeItem('jwt');
  });

  it('does not render the signed in nav if you are not logged in', function() {
    expect(React.findDOMNode(result).textContent).not.toContain("Dashboard");
    expect(React.findDOMNode(result).textContent).not.toContain("Logout");
  });

  it('renders the signed in nav if you are not logged in', function() {
    expect(React.findDOMNode(result).textContent).toContain("Sign In");
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });

});
