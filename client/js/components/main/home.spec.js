"use strict";

import React        from 'react';
import TestUtils    from 'react/lib/ReactTestUtils';
import Home         from './home';

describe('Home', ()=> {
  it('renders the home heading', ()=> {

    var result = TestUtils.renderIntoDocument(<Home />);
    expect(React.findDOMNode(result).textContent).toEqual('Home');

  });
});