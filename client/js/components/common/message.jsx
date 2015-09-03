"use strict";

import React          from 'react';
import MessageAction  from "../../actions/messages";
import BaseComponent  from "../base_component";

export default class Message extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this._bind('removeMessage', 'removeMessageFade', 'mouseOut', 'mouseOver');
    this.state = {
      opacity: 1,
      cancel: false,
      allowCancel: true,
      timer: setTimeout(this.removeMessageFade, this.props.displayTime, this.props.id)
    }
  }

  getState() {
    return {
    }
  }

  removeMessage(id) {
    if (!this.state.cancel) {
      MessageAction.removeMessage(id);
    }
  }

  removeMessageFade(allowCancel) {
    this.setState({opacity: 0, allowCancel: allowCancel});
    setTimeout(this.removeMessage, this.props.fadeTime, this.props.id);
  }

  mouseOver() {
    if(this.props.mouseOver){
      this.props.mouseOver();
    } else {
      if (this.state.allowCancel) {
        window.clearInterval(this.state.timer);
        this.setState({cancel: true, timer: null});
      }
    }
  }

  mouseOut(id) {
    if(this.props.mouseOut){
      this.props.mouseOut();
    } else {
      if (this.state.allowCancel) {
        this.setState({cancel: false, opacity: 1, timer: setTimeout(this.removeMessageFade, this.props.displayTime, this.props.id)});
      }
    }
  }

  getStyles() {
    return {
      opacity: this.state.opacity
    }
  }

  render() {
    var styles = this.getStyles();
    return (
      <div style={styles} data-alert className="alert-box alert radius" onMouseOver={ (e) => { this.mouseOver()} } onMouseOut={ (e) => { this.mouseOut()} }>
        {this.props.children}
        <a className="close" onClick={ (e) => { this.removeMessageFade(false)} }>&times;</a>
      </div>
    );
  }

}

Message.propTypes = { children: React.PropTypes.string };
Message.defaultProps = {
  displayTime: 4000,
  fadeTime: 1600
};