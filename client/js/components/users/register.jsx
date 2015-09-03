"use strict";

import React        from 'react';
import { Link }     from 'react-router';
import Validator    from "validator";
import UserActions  from "../../actions/user";
import _            from "lodash";
import assign       from "object-assign";
import { Paper, TextField, FlatButton, RaisedButton, FontIcon } from "material-ui";

class Register extends React.Component {

  constructor(){
    super()
    this.state = {
      validations: {}
    };
  }

  validateEmail(e){
    return this.validate(
      Validator.isEmail(this.refs.email.getValue()),
      { email: "Invalid email" },
      { email: "" }
    );
  }

  validatePassword(e){
    return this.validate(
      Validator.isLength(this.refs.password.getValue(), 5),
      { password: "Password must be at least 5 characters" },
      { password: "" }
    );
  }

  validateConfirmPassword(){
    return this.validate(
      (this.refs.password.getValue() == this.refs.confirmPassword.getValue()),
      { confirmPassword: "Passwords do not match" },
      { confirmPassword: "" }
    );
  }

  validate(isValid, invalidState, emptyState){
    if(!isValid){
      this.setState(assign(this.state.validations, invalidState));
    } else {
      this.setState(assign(this.state.validations, emptyState));
    }
    return isValid;
  }

  validateAll(){
    return _.every([
      this.validateEmail(),
      this.validatePassword(),
      this.validateConfirmPassword()
    ], (v)=> { return v; });
  }

  handleRegister(e){
    e.preventDefault();
    if(this.validateAll()){
      UserActions.register({
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      });
    }
  }

  getStyles(){
    return {
      register: {
        width: "400px",
        margin: "5% auto"  
      },
      signUpButton: {
        marginTop: "20px"
      }
    };
  }

  render(){
    var styles = this.getStyles();
    return (<div>
      <Paper style={styles.register}>
        <h1><span className="fa fa-sign-in"></span> Signup</h1>
        <form action="/signup" method="post" onSubmit={(e) => this.handleRegister(e)}>
          <TextField hintText="johndoe@example.com" floatingLabelText="Email" errorText={this.state.validations.email} ref="email" onBlur={(e) => this.validateEmail(e)} />
          <TextField type="password" hintText="******" floatingLabelText="Password" errorText={this.state.validations.password} ref="password" onBlur={(e)=>this.validatePassword(e)} />
          <TextField type="password" hintText="******" floatingLabelText="Confirm Password" errorText={this.state.validations.confirmPassword} ref="confirmPassword" onBlur={(e)=>this.validateConfirmPassword(e)} />
          <RaisedButton style={styles.signUpButton} label="Signup" primary={true} />
        </form>
        <p>
          Already have an account? <Link to="login">Login</Link>
        </p>
      </Paper>
    </div>);
  }
}

module.exports = Register;
