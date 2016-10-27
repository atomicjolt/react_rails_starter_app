"use strict";

import React                    from "react";

export default class Index extends React.Component {

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