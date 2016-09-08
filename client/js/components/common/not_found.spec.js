import React     from 'react';
import ReactDOM  from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import NotFound  from './not_found';

describe('not found', () => {
  it('renders a "not found" message', () => {
    let result = TestUtils.renderIntoDocument(<div><NotFound /></div>);
    expect(ReactDOM.findDOMNode(result).textContent).toContain("Page Not Found");
  });
});