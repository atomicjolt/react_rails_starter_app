"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import Login              from './login';
import Utils              from '../../../specs_support/utils';
import StubContext        from '../../../specs_support/stub_context';

describe ('Login', function(){
  var login;
  var loginDOM;
  var labels;
  var form;
  var Subject;
  var result;

  beforeEach(function(){
    Subject = StubContext(Login);
    result = TestUtils.renderIntoDocument(<Subject />);
    login = result.originalComponent();
    loginDOM = React.findDOMNode(result);
    labels = TestUtils.scryRenderedDOMComponentsWithTag(result, 'label');
    form = TestUtils.findRenderedDOMComponentWithTag(result, 'form');
  });

  it('Renders the login component', function(){
    expect(loginDOM).toBeDefined();

    var email = Utils.findTextField(labels, 'email');
    expect(email).toBeDefined();

    var password = Utils.findTextField(labels, 'password');
    expect(password).toBeDefined();
  });

  it('outputs a validation error if no email is provided', function(){
    TestUtils.Simulate.submit(form);
    expect(form.getDOMNode().textContent).toContain('Invalid email');
  });

  it('It calls the handleLogin method when the form is submitted', function(){ //The submit has to be called twice, for reasons unknown
    spyOn(login, 'handleLogin');
    TestUtils.Simulate.submit(form);
    expect(login.handleLogin).toHaveBeenCalled();
  });

  it('It calls the handleLogin method with an email address in the form', function(){  //Trying to figure out double submit issue
    spyOn(login, 'handleLogin');
    var email = Utils.findTextField(labels, 'email');
    email.getDOMNode().value = 'johndoe@example.com';
    TestUtils.Simulate.submit(form);
    expect(login.handleLogin).toHaveBeenCalled();
  });

  it('It calls the validateEmail when the form is submitted', function(){
    spyOn(login, 'validateEmail');
    TestUtils.Simulate.submit(form);
    expect(login.validateEmail).toHaveBeenCalled();
  });

  it('It calls the validateEmail method with an email address in the form', function(){
    spyOn(login, 'validateEmail');
    var email = Utils.findTextField(labels, 'email');
    email.getDOMNode().value = 'johndoe@example.com';
    TestUtils.Simulate.submit(form);
    expect(login.validateEmail).toHaveBeenCalled();
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});

