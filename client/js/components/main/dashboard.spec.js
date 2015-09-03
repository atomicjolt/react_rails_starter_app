"use strict";

import React        from 'react';
import TestUtils    from 'react/lib/ReactTestUtils';
import StubContext  from '../../../specs_support/stub_context';
import Dashboard    from './dashboard';

describe('Dashboard', ()=>{
  var Instance = StubContext(Dashboard);
  var dash;


  beforeEach(()=>{
    dash = TestUtils.renderIntoDocument(<Instance />);
  });

  it('Renders the Dashboard', ()=>{
    expect(React.findDOMNode(dash).textContent).toContain('I am the Dashboard');
    expect(React.findDOMNode(dash).textContent).toContain('Logout');
  });
});