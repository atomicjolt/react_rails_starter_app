"use strict";
import React            from 'react';
import { IndexRoute, Route } from 'react-router';
import AccountsList     from './components/admin/accounts_list';
import AdminPage        from './components/admin/page';
import Login            from './components/admin/login';
import AccountDashboard from './components/admin/account_dashboard';
import UsersList        from './components/admin/users';
import Logout           from './components/admin/logout';

export default (
  <Route path="/" component={AdminPage}>
    <IndexRoute component={Login}/>
  	<Route path="home" component={AccountsList}/>
    <Route path="accounts" path="accounts/:accountId">
      <Route path="users">
        <Route path="userEdit" component={UsersList} path=":userId/edit" />
        <IndexRoute component={UsersList} />
      </Route>
      <IndexRoute component={AccountDashboard} />
    </Route>
    <Route path="logout" path="/logout/" component={Logout}/>
  </Route>
);