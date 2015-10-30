"use strict";

import React          from "react";

export default class Index extends React.Component {

  render(){

    return (
      <div>
        <h1>React Starter App</h1>
        {this.props.children}
        <div className="footer">
          <p>
            Built by <a href="http://www.atomicjolt.com">Atomic Jolt</a>.
          </p>
        </div>
      </div>
    );
  }

}
