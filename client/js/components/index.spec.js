"use strict";

import React       from 'react';
import ReactDOM    from 'react-dom';
import TestUtils   from 'react/lib/ReactTestUtils';
import Index       from './index';

describe('index', function() {
  var result;

  beforeEach(()=>{
    result = TestUtils.renderIntoDocument(<Index />);
  });

  it('renders the index', function() {
    expect(ReactDOM.findDOMNode(result)).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(ReactDOM.findDOMNode(result).parentNode)
  });
});

