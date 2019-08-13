import React from 'react';
import { Route } from 'react-router';
import Errors from './errors';
import Home from '../home';


export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Errors />
        <Route exact path="/" component={Home} />
      </div>
    );
  }

}
