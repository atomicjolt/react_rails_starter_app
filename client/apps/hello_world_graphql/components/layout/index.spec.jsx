import React        from 'react';
import { shallow } from 'enzyme';
import Index        from './index';

jest.mock('../../libs/assets.js');

describe('index', () => {
  let result;
  let props;

  beforeEach(() => {
    props = {};
    result = shallow(<Index {...props} />);
  });

  it('renders the index', () => {
    expect(result).toBeDefined();
  });
});
