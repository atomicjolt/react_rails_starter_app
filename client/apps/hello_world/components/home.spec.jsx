import React        from 'react';
import TestUtils    from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import Helper       from '../../../specs_support/helper';
import Home         from './home';

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
