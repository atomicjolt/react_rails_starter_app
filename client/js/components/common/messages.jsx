"use strict";

import React         from "react";
import { connect }   from 'react-redux';
import Immutable     from 'immutable';

import Message       from "./message";

const select = (state) => {
  return { 
    messages: state.messages
  };
};

@connect(select, null, null, {withRef: true})
export default class Messages extends React.Component{

  render() {

    if(this.props.messages.size <= 0){
      return null;
    }

    return (
      <ul>
        {this.props.messages.map((message, i) => {
          return <Message key={`message_${i}`}>{message}</Message>;
        })}
      </ul>
    );
  }
}
