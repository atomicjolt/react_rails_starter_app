"use strict";

import React                from "react";
import UserStore            from "../../stores/user";
import AccountsStore        from "../../stores/accounts";
import BaseComponent        from "../base_component";
import Defines              from "../defines";
import AccountSelection     from './account_selection';
import history              from '../../history';
import { LeftNav, IconButton, FontIcon, FlatButton }          from "material-ui";

export default class LeftNavigation extends BaseComponent {

  static contextTypes = {
     muiTheme: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.stores = [UserStore, AccountsStore];
    this.state = this.getState();

    this._bind("_getSelectedIndex", "toggle", "_onLeftNavChange");
    this.selectedIndex = null;
  }

  getState(){
    var loggedIn = UserStore.loggedIn();

    var menuItems = [
      // { route: 'home', text: 'Home' }
    ];

    if(loggedIn){
      menuItems.push({ route: 'home', text: <div><i style={this.getStyles().iconStyle} className="material-icons">group</i>Accounts</div> });
      if(AccountsStore.currentId()) {
        var id = AccountsStore.currentId();
        menuItems.push({ route: 'account', accountId: id, text:<div><i style={this.getStyles().iconStyle} className="material-icons">dashboard</i>Dashboard</div>  });
        menuItems.push({ route: 'users', accountId: id, text: <div><i style={this.getStyles().iconStyle} className="material-icons">account_circle</i>Users</div> });
      }
      menuItems.push({ route: '', text: <div><i style={this.getStyles().iconStyle} className="material-icons">done</i>Assessments</div> });
      menuItems.push({ route: 'logout', text: <div><i style={this.getStyles().iconStyle} className="material-icons">exit_to_app</i>Logout</div> });
    } else {
      menuItems.push({ route: 'login', text: 'Sign In' });
    }

    return {
      menuItems: menuItems,
      account: AccountsStore.accountById(AccountsStore.currentId())
    };
  }

  _getSelectedIndex() {
    var currentItem;

    for (var i = this.state.menuItems.length - 1; i >= 0; i--) {
      currentItem = this.state.menuItems[i];
      if (currentItem.route && this.props.path == currentItem.route) return i;
    }
  }

  toggle() {
    this.refs.leftNav.toggle();
  }

  _onLeftNavChange(e, key, payload) {
    var id = payload.accountId ? {accountId: payload.accountId} : null;
    //this.context.router.transitionTo(payload.route, id);
    history.pushState({}, payload.route);
  }

  getStyles() {
    return {
      headerStyle: {
        height: "62px",
        backgroundColor: Defines.colors.grey,
        cursor: "pointer",
        fontSize: "24px",
        color: Defines.colors.white,
        paddingTop: "8px",
        marginBottom: "-6px",
        textColor: Defines.colors.white
      },
      iconStyle: {
        marginRight: "34px",
        verticalAlign: "middle",
        color: Defines.colors.darkGrey
      },
      headerText: {
        marginLeft: "10px",
        marginTop: "10px"
      }
    };
  }

  render() {

    var styles = this.getStyles();
    var name = this.state.account ? <div style={styles.headerText}>{this.state.account.name}</div>: ""
    var header =
      <div style={styles.headerStyle}>
        {name}
      </div>;

    var selectedIndex = this._getSelectedIndex();

    return (
      <LeftNav
        ref="leftNav"
        docked={true}
        isInitiallyOpen={false}
        header={header}
        menuItems={this.state.menuItems}
        selectedIndex={selectedIndex}
        onChange={(e, key, payload) => this._onLeftNavChange(e, key, payload)} />
    );
  }

}
