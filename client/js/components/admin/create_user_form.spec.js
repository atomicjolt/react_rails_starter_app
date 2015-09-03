"use strict";

import React           from 'react';
import TestUtils       from 'react/lib/ReactTestUtils';
import CreateUserForm    from './create_user_form';
import SettingsActions from '../../actions/settings';
import StubContext     from '../../../specs_support/stub_context';

describe('create_user_form', function() {
  helpStubAjax(SettingsActions);

  var Subject;
  var result;

  beforeEach(()=>{
    Subject = StubContext(CreateUserForm, { accountId: "1"});
    result = TestUtils.renderIntoDocument(<Subject />);
    result.refs.originalComponent.refs.information.show();
  });

  it("renders the form to edit the users", ()=>{
    expect(React.findDOMNode(result).textContent).toContain("CREATE NEW USER");
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});
