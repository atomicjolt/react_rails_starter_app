import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

jest.mock('../libs/assets.js');

describe('home', () => {
  let result;
  let props;

  beforeEach(() => {
    props = {};
    result = shallow(<Home {...props} />);
  });

  it('renders the home component', () => {
    expect(result).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(result).toMatchSnapshot();
  });
});
