import React    from 'react';
import Router   from 'react-router';

import AccountsStore   from './accounts';
import AccountsActions from '../actions/admin';
import SettingsActions from '../actions/settings';
import Dispatcher      from '../dispatcher';

describe('AccountsStore', () => {

  beforeEach(()=>{
    jasmine.Ajax.install();
    AccountsActions.loadAccounts();
    jasmine.Ajax.requests.mostRecent().respondWith({
      "status"        : 200,
      "contentType"     : "text/plain",
      "responseText" : JSON.stringify({
        code: "reactstarterapp",
        created_at: "2015-05-08T19:06:02.755Z",
        domain: "reactstarterapp.ngrok.io",
        id: 1,
        name: "Starter App",
        updated_at: "2015-05-08T19:06:02.755Z"})
    })
  });
  afterEach(()=>{
    jasmine.Ajax.uninstall();
  });

  it('Does Something',()=>{

  });
});
