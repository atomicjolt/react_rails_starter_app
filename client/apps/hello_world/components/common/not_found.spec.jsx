import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './not_found';

describe('not found', () => {
  it('renders a "not found" message', () => {
    const result = shallow(<NotFound />);
    expect(result).toMatchSnapshot();
  });
});
