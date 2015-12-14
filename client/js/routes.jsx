"use strict";

import React                  from 'react'; // if you use jsx, you have to have React imported
import Router                 from 'react-router';
import { Route, IndexRoute }  from 'react-router';
import { ReduxRouter }        from 'redux-router';
import Index                  from './components/containers/index';

export default (
  <ReduxRouter>
    <Route path="/" component={Index}>
    </Route>
  </ReduxRouter>
);
