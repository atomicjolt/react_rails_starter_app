"use strict";

import React          from "react";
import assign         from "object-assign";

var { func } = React.PropTypes;

export default (Component, props, stubs) => {

  function RouterStub(){ }

  assign(RouterStub, {
    makePath(){},
    makeHref(){},
    replaceWith(){},
    goBack(){},
    getCurrentPath(){},
    getCurrentRoutes(){},
    getCurrentPathname(){},
    getCurrentParams(){},
    getCurrentQuery(){},
    isActive(){},
    getRouteAtDepth(){},
    setRouteComponentAtDepth(){}
  }, stubs);

  class Stubber extends React.Component {

    // Use to get access to the component instance in case you need to spyOn a method of the component.
    originalComponent(){
      return this.refs.originalComponent;
    }

    render(){
      return <Component ref="originalComponent" {...props} />;
    }
  }

  return Stubber;

};


