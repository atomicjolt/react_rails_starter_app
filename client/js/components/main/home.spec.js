"use strict";

import React        from 'react';
import ReactDOM     from 'react-dom';
import TestUtils    from 'react/lib/ReactTestUtils';
import Home         from './home';

describe('Home', ()=> {
  it('renders the home heading', ()=> {

    var result = TestUtils.renderIntoDocument(<Home />);
    expect(ReactDOM.findDOMNode(result).textContent).toEqual('Home');

  });
});