"use strict";

import React         from "react";
import Validator     from "validator";
import UserActions   from "../../actions/user";
import UserStore     from "../../stores/user";
import BaseComponent from "../base_component";
import _             from "lodash";
import assign        from "object-assign";
import Defines       from "../defines";
import { Paper, TextField, FlatButton, RaisedButton, FontIcon } from "material-ui";

class Login extends BaseComponent {

  constructor(props, context){
    super(props, context);

    this.stores = [UserStore];
    this.state = this.getState();

    this._bind("handleLogin", "validateAll", "validate", "validateEmail");
    if(this.state.loggedIn) {
      context.router.transitionTo("home");
    }
  }

  getState() {
    return {
      loggedIn: UserStore.loggedIn(),
      validations: {}
    };
  }

  // Method to update state based upon store changes
  storeChanged(){
    super.storeChanged();
    if(this.state.loggedIn) {
      this.context.router.transitionTo("home");
      return null;
    }
  }

  handleLogin(e){
    e.preventDefault();
    if(this.validateAll()){
      UserActions.login({
        user: {
          email: this.refs.email.getValue(),
          password: this.refs.password.getValue()
        }
      });
    }
  }

  validateAll(){
    return _.every([
      this.validateEmail()
    ], (v)=> { return v; });
  }

  validate(isValid, invalidState, emptyState){
    if(!isValid){
      this.setState(assign(this.state.validations, invalidState));
    } else {
      this.setState(assign(this.state.validations, emptyState));
    }
    return isValid;
  }

  validateEmail(){
    return this.validate(
      Validator.isEmail(this.refs.email.getValue()),
      { email: "Invalid email" },
      { email: "" }
    );
  }

  getStyles() {
    return {
      paper: {
        backgroundColor: Defines.colors.white,
      },

      container: {
        width: "345px",
        margin: "auto"
      },

      button: {
        backgroundColor : Defines.colors.white,
        color           : Defines.colors.teal,
      },

      form: {
        padding: "10px"
      }
    };
  }

  render(){
    var styles = this.getStyles();
    return( 
    <div style={styles.container}>
      <h3>Login</h3>
        <Paper style={styles.paper} zDepth={0}>
          <form style={styles.form} action="/users/sign_in" method="post" onSubmit={(e) => this.handleLogin(e)}>
            <div>
              <TextField hintText="johndoe@example.com" floatingLabelText="Email" ref="email" onBlur={this.validateEmail} errorText={this.state.validations.email} />
              <TextField type="password" hintText="******" floatingLabelText="Password" ref="password" />
            </div>
            <div>
              <FlatButton style={styles.button} label="Login" primary={true} ref="submit-button" />
            </div>
          </form>
        </Paper>
      </div>);
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

module.exports = Login;
