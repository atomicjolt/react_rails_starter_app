"use strict";

import React                    from 'react';
import { Component }            from 'react';
import assets                   from '../libs/assets';

class Home extends Component {

  render(){
    
    const img = assets("./images/atomicjolt.png");

    return<div>
      <img src={img} />
    </div>;
  }

}

export { Home as default };