"use strict";

import React       from 'react';
import TestUtils   from 'react/lib/ReactTestUtils';
import Index       from './index';

describe('index', function() {
  var result;

  beforeEach(()=>{
    result = TestUtils.renderIntoDocument(<Index />);
  });

  it('renders the index', function() {
    expect(React.findDOMNode(result)).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});