"use strict";

import React            from 'react';
import TestUtils        from 'react/lib/ReactTestUtils';
import AccountsActions  from '../../actions/admin';
import AccountsStore    from "../../stores/accounts";
import AccountDashboard from './account_dashboard';
import SettingsActions  from '../../actions/settings';
import StubContext      from '../../../specs_support/stub_context';

describe('account_dashboard', function() {
  var accountId = '1';
  var Subject = new StubContext(AccountDashboard, {params: {accountId: accountId}});
  var dashboard;
  var currentAccountName;
  var currentAccount;

  helpStubAjax(SettingsActions, 'account dashboard');

  beforeEach(() => {
    dashboard = TestUtils.renderIntoDocument(<Subject />);
    AccountsActions.loadAccounts();
    jasmine.clock().tick(); // Advance the clock to the next tick
    currentAccount = AccountsStore.accountById(accountId);
    currentAccountName = currentAccount.name;
  });

  it('renders the account dashboard', function() {
    expect(dashboard).toBeDefined();
  });

  it('renders the account name', function() {
    var result = TestUtils.renderIntoDocument(<Subject />);
    expect(React.findDOMNode(result).textContent).toContain(currentAccountName);
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(dashboard).parentNode);
  });

});
