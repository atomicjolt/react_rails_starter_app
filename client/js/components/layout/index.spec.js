"use strict";

import React        from 'react';
import ReactDOM     from 'react-dom';
import TestUtils    from 'react/lib/ReactTestUtils';
import { Provider } from 'react-redux'
import Helper       from '../../../specs_support/helper';
import Index        from './index';

describe('index', function() {
  var result;
  var props;

  beforeEach(()=>{
    props = {};
    result = TestUtils.renderIntoDocument(<Provider store={Helper.makeStore()}><Index {...props} /></Provider>);
  });

  it('renders the index', function() {
    expect(ReactDOM.findDOMNode(result)).toBeDefined();
  });
});