"use strict";

import React from 'react';

export default class Stub extends React.Component{

  render(){
    return <div>{this.props.children}</div>;
  }
}