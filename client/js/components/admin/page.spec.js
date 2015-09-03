"use strict";

import React       from 'react';
import TestUtils   from 'react/lib/ReactTestUtils';
import Page        from './page';
import StubContext from '../../../specs_support/stub_context';

describe('page', function() {
  var Subject;
  var result;

  beforeEach(()=>{
    var getCurrentRoutes = () => {
      return [{ name: 'home' }];
    };
    Subject = new StubContext(Page, {}, { getCurrentRoutes });
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it('renders the page', function() {
    expect(React.findDOMNode(result)).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode);
  });
});
