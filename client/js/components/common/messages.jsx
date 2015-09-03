"use strict";

import React         from "react";
import MessagesStore from "../../stores/messages";
import Message       from "./message";
import { Toolbar }   from "material-ui";
import BaseComponent from "../base_component";
import _             from "lodash";


export default class Messages extends BaseComponent{

  constructor(){
    super();
    this.stores = [MessagesStore];
    this.state = this.getState();
  }

  getState(){
    return {
      messages: MessagesStore.current(),
      hasMessages: MessagesStore.hasMessages()
    }
  }

  render() {

    if(!this.state.hasMessages){
      return null;
    }

    var messages = _.map(this.state.messages, function(message, i){
      return <Message key={i}>{message}</Message>;
    });

    return (
      <Toolbar className="error-paper">
        <ul>
          {messages}
        </ul>
      </Toolbar>
    );
  }
}
