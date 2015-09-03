"use strict";

import React            from "react";
import AdminActions     from "../../actions/admin";
import { RaisedButton, IconButton, Checkbox } from "material-ui";

export default class UserControls extends React.Component {

  constructor(props, context){
    super(props);
    this.edit = this.edit.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  edit(id){
    this.context.router.transitionTo("userEdit", {accountId: this.props.metadata.accountId, userId: id});
  }

  destroy(id){
    AdminActions.deleteUser(user);
  }

  render(){
    var styles = this.props.styles;
    var user = this.props.data;
    return <div style={styles.icons}>
      <span style={styles.span}>
        <div >
          <RaisedButton  label="SHOW DETAILS" onClick={()=>{this.props.toggleExpandable()}} />
        </div>
      </span>
      <span style={styles.span}>
        <div style={styles.button}>
          <IconButton iconStyle={styles.iconStyle} iconClassName="material-icons-action-create" onTouchTap={()=>{this.edit(user.id)}}/>
        </div>
      </span>
      <span style={styles.span}>
        <div style={styles.button}>
          <IconButton iconStyle={styles.iconStyle} iconClassName="material-icons-action-delete" onTouchTap={()=>{this.destroy(user.id)}} />
        </div>
      </span>
      <span style={styles.span}>
        <div style={styles.button}>
          <Checkbox />
        </div>
      </span>
    </div>;
  }
}

UserControls.contextTypes = {
  router: React.PropTypes.func.isRequired
};