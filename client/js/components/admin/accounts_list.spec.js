"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import AccountsList       from './accounts_list';
import StubContext        from '../../../specs_support/stub_context';

xdescribe('accounts_list', function() {
  var accounts;
  var Subject;
  var result;

  beforeEach(()=>{
    accounts = [{ id: '1', name: "TestName"}];
    Subject = StubContext(AccountsList, { menuItems: accounts });
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it('renders the Accounts List', function() {
    expect(React.findDOMNode(result).textContent).toContain("TestName");
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode);
  })

});