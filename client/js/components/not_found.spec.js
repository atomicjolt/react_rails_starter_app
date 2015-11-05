"use strict";

import React              from 'react';
import ReactDOM           from 'react-dom';
import TestUtils          from 'react/lib/ReactTestUtils';
import NotFound           from './not_found';

describe('not_found', function() {
  var result;

  beforeEach(()=>{
    result = TestUtils.renderIntoDocument(<NotFound/>);
  });

  it('renders a not found message', function() {
    expect(ReactDOM.findDOMNode(result).textContent).toEqual('Not Found');
  });

  afterEach(()=>{
    React.unmountComponentAtNode(ReactDOM.findDOMNode(result).parentNode)
  });
});