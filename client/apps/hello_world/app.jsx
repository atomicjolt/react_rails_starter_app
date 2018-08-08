import 'babel-polyfill';
import es6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import DevTools from 'atomic-fuel/libs/dev/dev_tools';
import { getInitialSettings } from 'atomic-fuel/libs/reducers/settings';
import jwt from 'atomic-fuel/libs/loaders/jwt';
import configureStore from './store/configure_store';
import Index from './components/layout/index';
import appHistory from './history';

import './styles/styles';

// Polyfill es6 promises for IE
es6Promise.polyfill();

class Root extends React.Component {
  render() {
    const devTools = __DEV__ ? <DevTools /> : null;
    return (
      <Router history={appHistory}>
        <div>
          <Route component={Index} />
          {devTools}
        </div>
      </Router>
    )
  }
}

class ProviderWrapper extends React.PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <Root />
      </Provider>
    );
  }
}

hot(module)(Root);

const settings = getInitialSettings(window.DEFAULT_SETTINGS);
const store = configureStore({ settings, jwt: window.DEFAULT_JWT });
if (window.DEFAULT_JWT) { // Setup JWT refresh
  jwt(store.dispatch, settings.userId);
}

ReactDOM.render(
  <ProviderWrapper store={store} />,
  document.getElementById('main-app'),
);
