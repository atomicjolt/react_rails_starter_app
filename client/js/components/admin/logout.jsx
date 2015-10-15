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
      loggedIn: UserStore.loggedIn()
    };
  }

  render(){
    if (this.state.loggedIn) {
      return <h3>One Moment</h3>;
    } else {
      return (
        <div>
          <h2>You have successfully logged out</h2>
          <Link to="login">Home</Link>
        </div>
      );
    }
  }
}

module.exports = Logout;
