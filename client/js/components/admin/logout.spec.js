"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import Logout             from './logout';
import SettingsActions    from '../../actions/settings';
import StubContext  from '../../../specs_support/stub_context'; 

describe('logout', function() {
  var Context;
  var logout;

  helpStubAjax(SettingsActions);

  beforeEach(function(){
    Context = StubContext(Logout);
    logout = TestUtils.renderIntoDocument(<Context />);
  });
  
  it("renders the logout page", function() {
    expect(logout).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(logout).parentNode)
  });
});