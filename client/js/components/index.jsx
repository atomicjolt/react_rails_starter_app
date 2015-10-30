"use strict";

import React          from "react";
import Messages       from "./common/messages";
import LeftNav        from "./layout/left_nav";
import UsersStore     from "../stores/user";
import history        from '../history';

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var { AppCanvas } = mui;

class Index extends React.Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.stores = [UsersStore];
    this.state = this.getState(props, context);
    if(!this.state.loggedIn){
      history.pushState({}, '/login');
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
        <h1>React Starter App</h1>
        {this.props.children}
        <div className="footer">
          <p>
            Built by <a href="http://www.atomicjolt.com">Atomic Jolt</a>.
          </p>
        </div>
      </AppCanvas>
    );
  }

}

module.exports = Index;