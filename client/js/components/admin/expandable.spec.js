"use strict";

import React           from "react";
import TestUtils       from 'react/lib/ReactTestUtils';
import Router          from "react-router";
import assign          from "object-assign";
import Expandable      from "./expandable";


describe('expandable', function() {
  var result;

  beforeEach(()=>{

    result = TestUtils.renderIntoDocument(<table><Expandable /></table>);
  });
  
  it('renders the epandable component', function() {

    expect(React.findDOMNode(result)).toBeDefined()
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode);
  })

});