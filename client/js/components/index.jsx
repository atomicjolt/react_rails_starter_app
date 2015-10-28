"use strict";

import React          from "react";
import Messages       from "./common/messages";
import LeftNav        from "./layout/left_nav";
import {RouteHandler} from "react-router";
import UsersStore     from "../stores/user";

var mui = require('material-ui');
var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppCanvas } = mui;

class Index extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.stores = [UsersStore];
    this.state = this.getState(props, context);
    if(!this.state.loggedIn){
      context.router.transitionTo('login');
    }
  }

  getState(props, context){
    var state = {
      loggedIn: UsersStore.loggedIn()
    };
    
    return state;
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render(){

    return (
      <AppCanvas predefinedLayout={1}>
        <h1>Tmp</h1>
        <RouteHandler />
        <div className="footer">
          <p>
            Built by <a href="http://www.atomicjolt.com">Atomic Jolt</a>.
          </p>
        </div>
      </AppCanvas>
    );
  }

}

Index.contextTypes = {
  router: React.PropTypes.func
};

Index.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Index;
