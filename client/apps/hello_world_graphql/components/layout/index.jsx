import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../home';
import NotFound from '../common/not_found';

export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }

}
