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


// Set a device type based on window width, so that we can write media queries in javascript
// by calling if (this.props.deviceType === "mobile")
var deviceType;

if (window.matchMedia("(max-width: 639px)").matches){
  deviceType = "mobile";
} else if (window.matchMedia("(max-width: 768px)").matches){
  deviceType = "tablet";
} else {
  deviceType = "desktop";
}

// Initialize store singletons
SettingsAction.load(window.DEFAULT_SETTINGS);

ReactDOM.render((<Router history={history}>{Routes}</Router>), document.getElementById("main"));