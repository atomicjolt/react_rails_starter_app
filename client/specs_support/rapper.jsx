"use strict";

import React                    from 'react';
import { connect }              from 'react-redux';

export default class Rapper extends React.Component{

  render(){
    if(this.props.child) return <div><this.props.child ref="original" {...this.props.childProps}/></div>;
    return <div>{this.props.children}</div>;
  }
}