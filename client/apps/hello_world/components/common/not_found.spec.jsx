import React     from 'react';
import TestUtils from 'react-dom/test-utils';
import Stub      from 'atomic-fuel/libs/specs_support/stub';
import NotFound  from './not_found';

describe('not found', () => {
  it('renders a "not found" message', () => {
    const result = TestUtils.renderIntoDocument(<Stub><NotFound /></Stub>);
    const heading = TestUtils.findRenderedDOMComponentWithTag(result, 'h1');
    expect(heading.textContent).toContain('Page Not Found');
  });
});
