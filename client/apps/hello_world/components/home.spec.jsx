import React        from 'react';
import TestUtils    from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Helper       from 'atomic-fuel/libs/specs_support/helper';

import Home         from './home';

jest.mock('../libs/assets.js');

describe('home', () => {
  let result;
  let props;

  beforeEach(() => {
    props = {};
    result = TestUtils.renderIntoDocument(
      <Provider store={Helper.makeStore()}>
        <Home {...props} />
      </Provider>,
    );
  });

  it('renders the home component', () => {
    expect(result).toBeDefined();
  });
});
