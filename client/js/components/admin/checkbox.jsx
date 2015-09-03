"use strict";

import React                        from "react";
import User                         from "../../stores/user";
import {Link}                       from "react-router";
import { Menu, Paper, Checkbox }    from "material-ui";
import AdminActions                 from "../../actions/admin";

class CheckBox extends React.Component {

  isChecked(){
    return this.refs.checkbox.isChecked();
  }

  setChecked(checked){
    this.refs.checkbox.setChecked(checked);
  }

  // This is so that the check can be handle by the both the menu its in and the box itself
  handleCheck(){
    this.refs.checkbox.setChecked(!this.refs.checkbox.isChecked());
  }

  render(){
    return (
      <Checkbox ref="checkbox" onCheck={(e) => this.handleCheck(e)}/>
    );
  }

}

module.exports = CheckBox;