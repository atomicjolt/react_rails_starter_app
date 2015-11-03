"use strict";

import React          from 'react';
import ReactDOM       from 'react-dom';
import Router         from 'react-router';
import Routes         from './routes';
import SettingsAction from './actions/settings';
import history        from './history';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// Initialize store singletons
SettingsAction.load(window.DEFAULT_SETTINGS);

ReactDOM.render((<Router history={history}>{Routes}</Router>), document.getElementById("main"));