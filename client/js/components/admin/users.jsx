"use strict";

import React            from "react";
import BaseComponent    from "../base_component";
import { Link }         from "react-router";
import Validator        from "validator";
import UserActions      from "../../actions/user";
import _                from "lodash";
import assign           from "object-assign";
import CreateUserForm   from "./create_user_form";
import EditUserForm     from "./edit_user_form";
import AdminActions     from "../../actions/admin";
import ApplicationStore from "../../stores/application";
import AccountsStore    from "../../stores/accounts";
import AdminStore       from "../../stores/admin";
import Defines          from "../defines";
import Container        from "./container";
import Griddle          from "griddle-react";
import UserControls     from "./user_controls";
import CustomGriddleRow from "./custom_griddle_row";
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon, RaisedButton, Paper, IconButton, Checkbox} from "material-ui";

class Users extends BaseComponent {

  constructor(props, context){
    super(props);
    this.state = this.getState(props.params.accountId);
    this.state.currentUser = {name: "", email: "", role: ""};
    this.stores = [AccountsStore, ApplicationStore];
    AdminActions.loadUsers(props.params.accountId);
  }

  getState(accountId){
    return {
      users          : AccountsStore.currentUsers(),
      currentAccount : AccountsStore.accountById(accountId),
      selectedUsers  : AccountsStore.getSelectedUsers()
    };
  }

  onMenuItemClick(e, key, payload){
    if(this.refs[payload.ref].isChecked()){
      this.refs[payload.ref].setChecked(false);
      AdminActions.removeFromSelectedUsers(payload.user);
    } else {
      this.refs[payload.ref].setChecked(true);
      AdminActions.addToSelectedUsers(payload.user);
    }
  }

  getStyles(){
    return {
      body: {
        margin: "auto 100px"
      },
      icons: {
        width: "100%"
      },
      toolbarStyle: {
        backgroundColor: Defines.colors.lightGrey
      },
      titleStyle:{
        color: Defines.colors.black
      },
      table: {
        width: "100%"
      },
      paper: {
        margin: "auto 20px",
        marginRight: "48px"
      },
      row: {
        height: "60px"
      },
      id: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "8%",
      },
      name: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "8%",
      },
      email: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "20%",
      },
      role: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "10%",
      },
      signInCount: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "16%",
      },
      lastSignIn: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        borderRight: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "18%",
      },
      controls: {
        borderBottom: "1px solid " + Defines.colors.lightGrey,
        display: "table-cell",
        width: "20%",
      },
      span: {
        display: "table-cell",
        verticalAlign: "middle",
      },
      button: {
        marginLeft: "15px"
      }
    }
  }

  addUser(){
    this.refs.createUserForm.show();
  }

  columnMetadata(){
    return {
        columnNames: ["id", "name", "email", "role", "signInCount", "lastSignIn", "controls"],
        displayNames: ["Id", "Name", "Email", "Role", "Sign In Count", "Last Sign In", ""],
        styles: this.getStyles(),
        customComponents: [{colId: 7, component: UserControls }],
        useExpandable: true,
        expandableContent: <div>This is pretty awesome</div>
      };
  }

  render() {
    var styles = this.getStyles();
    var user = _.findWhere(this.state.users, { id: this.props.params.userId }) || {};
    var editing = false;
    if(this.context.router.isActive("userEdit")){
      editing = true;
    }
    return (
      <div style={styles.body}>
        <Container>
          <Toolbar style={styles.toolbarStyle}>
            <ToolbarGroup key={0} float="left">
              <ToolbarTitle style={styles.titleStyle} text="Users" />
            </ToolbarGroup>
            <ToolbarGroup key={1} float="right">
              <FontIcon className="material-icons-action-search" />
              <RaisedButton label="Create New User" onClick={()=>{this.addUser()}} primary={true} />
            </ToolbarGroup>
          </Toolbar>
          <Paper style={styles.paper}>
            <Griddle
              metadataColumns={this.columnMetadata()}
              results={this.state.users}
              useCustomRowComponent={true}
              customRowComponent={CustomGriddleRow}
              resultsPerPage={10}
              tableClassName="table"
              showFilter={true}
              showSettings={true}
              rowHeight={70}
              columns={["id", "name", "email", "role", "signInCount", "lastSignIn", "controls"]} />
          </Paper>
        </Container>
        <EditUserForm user={user} editing={editing} accountId={this.props.params.accountId} />
        <CreateUserForm ref="createUserForm" accountId={this.props.params.accountId} />
      </div>
    );
  }
}

Users.propTypes = {
  params: React.PropTypes.object.isRequired
};

Users.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = Users;
