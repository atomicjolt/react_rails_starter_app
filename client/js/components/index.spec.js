"use strict";

import React       from 'react';
import TestUtils   from 'react/lib/ReactTestUtils';
import Index       from './index';
import StubContext from '../../specs_support/stub_context';

describe('index', function() {
  var Subject;
  var result;

  beforeEach(()=>{
    Subject = StubContext(Index, {});
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it('renders the index', function() {
    expect(React.findDOMNode(result)).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});