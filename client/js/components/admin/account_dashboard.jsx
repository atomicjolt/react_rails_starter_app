"use strict";

import React            from "react";
import BaseComponent    from "../base_component";
import AdminActions     from "../../actions/admin";
import ApplicationStore from "../../stores/application";
import AccountsStore    from "../../stores/accounts";
import UserStore        from "../../stores/user";
import {Link}           from "react-router";

class AccountDashboard extends BaseComponent {

  constructor(props, context){
    super(props, context);
    this.stores = [ApplicationStore, AccountsStore];
    this.state = this.getState(props);

    if(props.params.accountId){
      AdminActions.loadUsers(props.params.accountId);
    }

  }

  willTransitionTo(transition, params, query, callback) {
    if (!UserStore.loggedIn()) {
      transition.abort();
      callback();
    }
  }

  getState(props){
    var accountId = props.params.accountId;
    var currentAccountName;
    var currentAccount = AccountsStore.accountById(accountId);
    if (currentAccount) {
      currentAccountName = currentAccount.name;
    }

    return {
      users: AccountsStore.currentUsers(),
      currentAccount: currentAccount,
      currentAccountName: currentAccountName
    };
  }

  getStyles() {
    return {
      accountDashboard: {
        marginLeft: "300px"
      }
    };
  }

  render(){

    var styles = this.getStyles();
    return (
      <div style={styles.accountDashboard}>
        <h3>{this.state.currentAccountName}</h3>
        <Link to="users" params={{accountId: this.props.params.accountId}}>Users</Link>
      </div>);
  }

}

AccountDashboard.propTypes = {
  params: React.PropTypes.object.isRequired
};

module.exports = AccountDashboard;

