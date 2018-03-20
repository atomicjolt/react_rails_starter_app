import 'babel-polyfill';
import es6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import settings from './settings';

import appHistory from './history';
import Index from './components/layout/index';

import './styles/styles';

// Polyfill es6 promises for IE
es6Promise.polyfill();

class Root extends React.PureComponent {
  static propTypes = {
    client: PropTypes.object,
  };

  render() {
    const { client } = this.props;
    return (
      <ApolloProvider client={client}>
        <Router history={appHistory}>
          <Route path="/" component={Index} />
        </Router>
      </ApolloProvider>
    );
  }
}

const inCacheMemory = new InMemoryCache();

const stateLink = withClientState({
  cache: inCacheMemory,
  resolvers: {
    Mutation: {},
  },
  defaults: {
    welcomeMessage: 'Welcome to the GraphQL starter app'
  }
});

const links = [
  stateLink
];

if (!_.isEmpty(settings.api_url)) {
  const authenticationLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${window.DEFAULT_JWT}`
      }
    });
    return forward(operation);
  });
  links.push(authenticationLink);

  const httpLink = new HttpLink({
    uri: `${settings.api_url}api/graphql`,
  });
  links.push(httpLink);
}

const client = new ApolloClient({
  link: ApolloLink.from(links),
  cache: inCacheMemory,
});

ReactDOM.render(
  <Root client={client} />,
  document.getElementById('main-app'),
);
