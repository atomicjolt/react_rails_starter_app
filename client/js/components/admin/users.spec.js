"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import UsersList          from './users';
import SettingsActions    from '../../actions/settings';
import StubContext        from '../../../specs_support/stub_context';

describe('users_list', function() {
  helpStubAjax(SettingsActions);

  var Subject;
  var result;
  var styles;
  var params;

  beforeEach(()=>{
    params = {accountId: "1"};

    styles = {
      body: {},
      titleStyle:{},
      paper:{},
    };

    Subject = StubContext(UsersList,
      { params: params, styles: styles },
      { getCurrentRoutes: () => { return [{ name: "userEdit" }]; } }
    );
    result = TestUtils.renderIntoDocument(<Subject />);
  });

  it("renders the users list", function() {
    expect(React.findDOMNode(result).textContent).toContain("Users");
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });

});