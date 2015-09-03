"use strict";

import React            from "react";
import BaseComponent    from "../base_component";
import AdminStore       from "../../stores/admin";

export default class Container extends BaseComponent {

  constructor(props, context){
    super(props);
    this.state = this.getState();
    this.stores = [AdminStore];
  }

  getState(){
    return {
      navStatus : AdminStore.navStatus()
    };
  }

  getStyles(status){
    var marginLeft = status ? "156px" : "0px";
    return {
      div: {
        marginLeft: marginLeft,
        transition: "margin .3s"
      }
    };
  }

  render(){
    var styles = this.getStyles(this.state.navStatus);
    return <div style={styles.div}>
      {this.props.children}
    </div>;
  }

}