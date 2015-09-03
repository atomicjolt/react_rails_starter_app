"use strict";

import React            from "react";
import AccountsStore    from "../../stores/accounts";
import BaseComponent    from "../base_component";
import AdminActions     from "../../actions/admin";
import { DropDownMenu } from "material-ui";
import Defines          from "../defines";

class AccountSelection extends BaseComponent {

  constructor(props, context){
    super(props, context);
    this.stores = [AccountsStore];
    this.state = this.getState();
    this._bind("getState");
  }

  getState(){
    return {
      accounts: AccountsStore.current()
    };
  }

  getStyles(){
    return {
    };
  }

  render(){
    var styles = this.getStyles();
    var menuItems = this.state.accounts.map((account) => {
      return {
        payload: account.id,
        text:    account.name
      };
    });
    if(this.state.accounts.length > 0){
      return <DropDownMenu menuItems={menuItems} />;
    } else {
      return <div />;
    }
  }

}

AccountSelection.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = AccountSelection;
