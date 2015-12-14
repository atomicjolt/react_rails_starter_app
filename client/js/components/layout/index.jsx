"use strict";

import React                    from "react";
import { connect }              from "react-redux";

@connect((state) => (state), null, null, {withRef: true})
class Index extends React.Component {
  
  constructor(){
    super();
    this.state = {};
  }
  
  render(){
    return<div>
      {this.props.children}
    </div>;
  }

}

export default Index;