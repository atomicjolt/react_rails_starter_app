"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';

class Home extends React.Component {

  render(){

    const img = assets("./images/atomicjolt.jpg");

    return<div>
    <img src={img} />
    </div>;
  }

}

export { Home as default };