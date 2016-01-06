"use strict";

import React         from "react";
import { connect }   from 'react-redux';
import Message       from "./message";
import Immutable     from 'immutable';

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
