"use strict";

import React         from 'react';
import {Link}        from 'react-router';
import BaseComponent from "../base_component";
import UserActions   from "../../actions/user";
import UserStore     from "../../stores/user";

class Logout extends BaseComponent {

  constructor(){
    super();

    this.stores = [UserStore];
    UserActions.logout();
    this.state = this.getState();
  }

  getState(){
    return {
      logoutState: UserStore.logoutStatus()
    };
  }

  render(){
    var content;
    if (this.state.logoutState === 1) {
      return <h3>One Moment</h3>;
    } else if (this.state.logoutState === 2) {
      return (
        <div>
          <h2>You have successfully logged out</h2>
          <Link to="login">Home</Link>
        </div>
      );
    } else {
      return <h3>There was an error logging out, please try again</h3>;
    }

    return (
      {content}
    );
  }
}

module.exports = Logout;
