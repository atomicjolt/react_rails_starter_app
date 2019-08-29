import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import waitForExpect from 'wait-for-expect';
import Home, { GET_WELCOME } from './home';

jest.mock('../libs/assets.js');

const mocks = [
  {
    request: {
      query: GET_WELCOME,
    },
    result: {
      data: {
        welcomeMessage: 'Hello World!',
      },
    },
  },
];

describe('home', () => {
  it('should render loading state initially', () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    const tree = testRenderer.toJSON();
    expect(JSON.stringify(tree).indexOf('Hello World!') === -1).toBe(true);
  });

  it('renders the home component', async() => {
    let testRenderer;
    act(() => {
      testRenderer = TestRenderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>,
      );
    });

    await waitForExpect(() => {
      expect(JSON.stringify(testRenderer.toJSON()).indexOf('Hello World!') >= 0).toBe(true);
    });
  });
});
