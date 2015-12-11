"use strict";

import React                    from 'react';
import { Component }            from 'react';
import { connect }              from 'react-redux';

@connect((state) => (state))
class Index extends Component {
  
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