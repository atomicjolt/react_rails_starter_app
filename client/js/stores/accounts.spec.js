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
      "responseText" : JSON.stringify({canvas_uri: "https://canvas.instructure.com",
        code: "canvasstarterapp",
        created_at: "2015-05-08T19:06:02.755Z",
        domain: "canvasstarterapp.ngrok.io",
        id: 1, lti_key: "canvasstarterapp",
        lti_secret: "d52ca2c9892975bbb9def56e68eefe8e92a338d9b74d73ec5dad64803a376b2f1f5129c0bd9f7e73684526c234e0835bd1635e09d427cd45cb0de4296278682f",
        name: "Canvas Stater App",
        updated_at: "2015-05-08T19:06:02.755Z"})
    })
  });
  afterEach(()=>{
    jasmine.Ajax.uninstall();
  });

  it('Does Something',()=>{

  });
});
