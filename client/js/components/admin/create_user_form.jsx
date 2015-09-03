"use strict";

import React                                                                              from "react";
import User                                                                               from "../../stores/user";
import { Paper, FlatButton, RaisedButton, FontIcon, Dialog, DropDownMenu, TextField }     from "material-ui";
import AdminActions                                                                       from "../../actions/admin";

class CreateUserForm extends React.Component {
  
  constructor(){
    super();
    this.state = {
      dropDownItems: [
        {payload: 0, text: 'End User', selectedIndex: 0},
        {payload: 1, text: 'Instructor', selectedIndex: 1},
        {payload: 2, text: 'Admin', selectedIndex: 2}
      ]
    };
  }

  show(){
    this.refs.information.show();
  }

  createUser(){
    //Generate an action to reset the password and email the user to sign in again.
    var name = this.refs.name.getValue();
    var email = this.refs.email.getValue();
    var role = this.refs.role.state.selectedIndex;
    var payload = {user:{name: name, email: email, role: role}};
    AdminActions.createUser(this.props.accountId, payload);
    this.refs.information.dismiss();
  }

  // if they didnt set a value then return the current value
  getNewValue(currentVal, newVal){
    var toReturn;
    if(newVal == "")
      toReturn = currentVal;
    else 
      toReturn = newVal;

    return toReturn;
  }

  render(){

    var updateActions = [
      { text: 'Cancel' },
      { text: 'CREATE USER', onClick: ()=>{this.createUser()}, ref: 'submit' }
    ];
    
    return(
        <Dialog ref="information" title="CREATE NEW USER" actions={updateActions} actionFocus="submit" modal={false} dismissOnClickAway={true}>
          <div>
            <h3>Account Name</h3>
            <TextField hintText="John Doe" floatingLabelText="Name" ref="name" />
          </div>
          <div>
            <TextField hintText="johndoe@example.com" floatingLabelText="Email" ref="email" />
          </div>
          <div>
            <h4>Role</h4>
            <DropDownMenu ref="role" menuItems={this.state.dropDownItems}  />
          </div>
        </Dialog>
    );

  }

}

CreateUserForm.propTypes = {
  accountId: React.PropTypes.string.isRequired
};


module.exports = CreateUserForm;