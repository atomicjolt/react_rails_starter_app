"use strict";

import React                                                                              from "react";
import User                                                                               from "../../stores/user";
import { Paper, FlatButton, RaisedButton, FontIcon, Dialog, DropDownMenu, TextField }     from "material-ui";
import AdminActions                                                                       from "../../actions/admin";

class EditUserForm extends React.Component {
  
  constructor(){
    super();
    this.state = {
      dropDownItems: [
        {payload: 0, text: 'End User', selectedIndex: 0},
        {payload: 1, text: 'Instructor', selectedIndex: 1},
        {payload: 2, text: 'Admin', selectedIndex: 2}
      ]
    };
    this.dismiss = this.dismiss.bind(this);
  }

  updateUser(){
    //Generate an action to reset the password and email the user to sign in again.
    var name = this.getNewValue(this.props.user.name, this.refs.name.getValue());
    var email = this.getNewValue(this.props.user.email, this.refs.email.getValue());
    var role = this.refs.newRole.state.selectedIndex;
    var payload = {user: {name: name, email: email, role: role}};
    AdminActions.updateUser(this.props.user.account_id, this.props.user.id, payload);
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

  dismiss(){
    this.context.router.transitionTo("users", { accountId: this.props.accountId });
  }

  componentDidUpdate(){
    if(this.props.editing){
      this.refs.information.show();
    }
  }

  render(){

    var updateActions = [
      { text: 'Cancel' },
      { text: 'Update', onClick: ()=> { this.updateUser() }, ref: 'submit' }
    ];

    var title = "Edit Info for " + this.props.user.name;
    
    return(
      <Dialog ref="information" 
        title={title} 
        actions={updateActions} 
        actionFocus="submit" 
        modal={true} 
        dismissOnClickAway={false} 
        openImmediately={this.props.editing}
        onDismiss={this.dismiss}>
        <div>
          <h4>Name</h4>
          <TextField hintText={this.props.user.name} floatingLabelText="Name" ref="name" />
        </div>
        <div>
          <h4>Email</h4>
          <TextField hintText={this.props.user.email} floatingLabelText="Email" ref="email" />
        </div>
        <div>
          <h4>Role</h4>
          <DropDownMenu ref="newRole" menuItems={this.state.dropDownItems} />
        </div>
      </Dialog>
    );

  }

}

EditUserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  accountId: React.PropTypes.string.isRequired,
};

EditUserForm.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = EditUserForm;