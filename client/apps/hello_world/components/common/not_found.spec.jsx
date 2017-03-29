import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import NotFound  from './not_found';
import Stub      from '../../../../specs_support/stub';

describe('not found', () => {
  it('renders a "not found" message', () => {
    const result = TestUtils.renderIntoDocument(<Stub><NotFound /></Stub>);
    const heading = TestUtils.findRenderedDOMComponentWithTag(result, 'h1');
    expect(heading.textContent).toContain('Page Not Found');
  });
});
