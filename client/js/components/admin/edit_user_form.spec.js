"use strict";

import React           from 'react';
import TestUtils       from 'react/lib/ReactTestUtils';
import EditUserForm    from './edit_user_form';
import SettingsActions from '../../actions/settings';
import StubContext     from '../../../specs_support/stub_context';

describe('edit_user_form', function() {
  helpStubAjax(SettingsActions);

  var Subject;
  var user, accountId; 
  var result;

  beforeEach(()=>{
    user = {
      name: "Joseph",
      email: "test@test.com"
    }
    accountId = "1";
    Subject = StubContext(EditUserForm, { user: user, accountId: accountId, selectedIndex: 0 });
    result = TestUtils.renderIntoDocument(<Subject />);
    result.refs.originalComponent.refs.information.show();
  });

  it("renders the form to edit the users", function() {
    expect(React.findDOMNode(result).textContent).toContain(name);
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});
