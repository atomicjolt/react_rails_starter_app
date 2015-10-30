"use strict";

import React          from 'react';
import ReactDOM       from 'react-dom';
import Router         from 'react-router';
import Routes         from './routes';
import SettingsAction from './actions/settings';
import history        from './history';

// Initialize store singletons
SettingsAction.load(window.DEFAULT_SETTINGS);

ReactDOM.render((<Router history={history}>{Routes}</Router>), document.getElementById("main"));