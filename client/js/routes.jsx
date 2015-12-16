"use strict";

import React                  from 'react'; // if you use jsx, you have to have React imported
import { Route, IndexRoute }  from 'react-router';
import { ReduxRouter }        from 'redux-router';
import Index                  from './components/layout/index';
import Home                   from './components/home';

export default (
  <ReduxRouter>
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
    </Route>
  </ReduxRouter>
);
