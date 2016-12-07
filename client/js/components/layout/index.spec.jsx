import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import Helper from '../../../specs_support/helper';
import Index from './index';

describe('index', () => {
  let result;
  let props;

  beforeEach(() => {
    props = {};
    result = TestUtils.renderIntoDocument(
      <Provider store={Helper.makeStore()}>
        <Index {...props} />
      </Provider>,
    );
  });

  it('renders the index', () => {
    expect(result).toBeDefined();
  });
});
