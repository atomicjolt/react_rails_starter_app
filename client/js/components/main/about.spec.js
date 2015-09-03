"use strict";

import React        from 'react';
import TestUtils    from 'react/lib/ReactTestUtils';
import About        from './about';

describe('About', ()=> {
  it('renders the about heading', ()=> {

    var result = TestUtils.renderIntoDocument(<About/>);
    expect(React.findDOMNode(result).textContent).toEqual('About');

  });
});
