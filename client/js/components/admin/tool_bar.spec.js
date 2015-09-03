"use strict";

import React          from 'react';
import TestUtils      from 'react/lib/ReactTestUtils';
import ToolBar        from './tool_bar';
import StubContext    from '../../../specs_support/stub_context'; 

describe('toolBar', function(){
  var toolBar;
  var toolBarDOM;
  var Subject;
  var result;

  beforeEach(function(){
    Subject = StubContext(ToolBar, {});
    result = TestUtils.renderIntoDocument(<Subject />);
    toolBarDOM = React.findDOMNode(result);
    toolBar = result.originalComponent();
  });

  it('It renders the toolbar', function(){
    expect(toolBarDOM).toBeDefined();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});