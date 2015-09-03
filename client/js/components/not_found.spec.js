import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import NotFound           from './not_found';

describe('not_found', function() {
  var result;

  beforeEach(()=>{
    result = TestUtils.renderIntoDocument(<NotFound/>);
  });

  it('renders a not found message', function() {
    expect(React.findDOMNode(result).textContent).toEqual('Not Found');
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});