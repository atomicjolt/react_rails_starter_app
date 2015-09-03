"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import AccountSelection   from './account_selection';
import AccountsActions  from '../../actions/admin';
import AccountsStore    from "../../stores/accounts";
import SettingsActions    from '../../actions/settings';
import StubContext        from '../../../specs_support/stub_context';

describe('account_selection', function() {
  // TO RUN MORE TESTS YOU WILL HAVE TO SIMULATE LOGGING IN
  var Subject = new StubContext(AccountSelection, {});
  var result;

  helpStubAjax(SettingsActions);

  beforeEach(()=>{
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it('renders account selection page', function() {
    localStorage.setItem('jwt', "asdfasdfasf");
    AccountsActions.loadAccounts();
    jasmine.clock().tick(); // Advance the clock to the next tick
    var currentAccounts = AccountsStore.current();
    currentAccounts.forEach((currentAccount) => {
      expect(React.findDOMNode(result).textContent).toContain(currentAccount.name);
    });
    localStorage.removeItem('jwt');
  });

  xit('does not render the page if you are not logged in', function() {
    // TODO if the user is not logged in, the component will abort the transition
    AccountsActions.loadAccounts();
    jasmine.clock().tick(); // Advance the clock to the next tick
    var currentAccounts = AccountsStore.current();
    currentAccounts.forEach((currentAccount) => {
      expect(React.findDOMNode(result).textContent).not.toContain(currentAccount.name);
    });
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode);
  });

});
