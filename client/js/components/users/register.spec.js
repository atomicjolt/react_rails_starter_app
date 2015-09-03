"use strict";

import React              from 'react';
import TestUtils          from 'react/lib/ReactTestUtils';
import Register           from './register';
import StubContext        from '../../../specs_support/stub_context';
import Utils              from '../../../specs_support/utils';
import UserActions        from '../../actions/user';

describe('register', function() {
  var register;
  var registerDOM;
  var result;
  var Subject;
  var form;
  
  beforeEach(function() {
    // Render component wrapped in router context
    Subject = StubContext(Register, {});
    result = TestUtils.renderIntoDocument(<Subject/>);
    register = result.originalComponent();
    registerDOM = React.findDOMNode(result);
    form = TestUtils.findRenderedDOMComponentWithTag(register, 'form');
  });

  it('renders the register component', function() {
    expect(registerDOM).toBeDefined();

    var labels = TestUtils.scryRenderedDOMComponentsWithTag(register, 'label');

    var emailLabel = Utils.findTextField(labels, 'email');
    expect(emailLabel).toBeDefined();

    var passwordLabel = Utils.findTextField(labels, 'password');
    expect(passwordLabel).toBeDefined();

    var confirmPasswordLabel = Utils.findTextField(labels, 'confirm password');
    expect(confirmPasswordLabel).toBeDefined();
  });

  it('submits the login via the button', function(){
    // In the application clicking the button submits the form even though it's not a submit button
    // Need to figure out why and then add an appropriate test for submitting via the button
    //var button = TestUtils.findRenderedDOMComponentWithTag(register, 'button');
    //This only triggers the onTouchTap event for the button, not the form submit.
    //TestUtils.Simulate.click(React.findDOMNode(button));
  });

  it('outputs a validation error if no email is provided', function(){
    TestUtils.Simulate.submit(form);
    expect(React.findDOMNode(register).textContent).toContain('Invalid email');
  });

  it('clears the email error after the user enters a valid email', function(){

    // Submit the form to put it into an invalid state
    TestUtils.Simulate.submit(form);

    // Find the email material ui component and it's input field
    var email = register.refs.email;
    var emailInput = TestUtils.findRenderedDOMComponentWithTag(email, 'input');

    // Set a valid email and blur the field
    React.findDOMNode(emailInput).value = "johndoe@example.com";
    TestUtils.Simulate.blur(emailInput);

    // Test to make sure the email error is gone
    expect(React.findDOMNode(register).textContent).not.toContain('Invalid email');
  });

  it('ensures the password is at least 5 chars', function(){
    var password = register.refs.password;
    var passwordInput = TestUtils.findRenderedDOMComponentWithTag(password, 'input');

    React.findDOMNode(passwordInput).value = "test";
    TestUtils.Simulate.blur(React.findDOMNode(passwordInput));

    expect(React.findDOMNode(register).textContent).toContain("at least 5 characters");

  });

  it('clears the password error after the user enters a valid password', function(){
    var password = register.refs.password;
    var passwordInput = TestUtils.findRenderedDOMComponentWithTag(password, 'input');

    TestUtils.Simulate.blur(React.findDOMNode(passwordInput));

    expect(React.findDOMNode(password).textContent).toContain('Password must be at least 5 characters');

    React.findDOMNode(passwordInput).value = "aoeuaoeu";

    TestUtils.Simulate.blur(React.findDOMNode(passwordInput));

    expect(React.findDOMNode(password).textContent).not.toContain('Password must be at least 5 characters');

  });

  it('ensures the password confirmation matches', function(){
    var form = TestUtils.findRenderedDOMComponentWithTag(register, 'form');
    var password = register.refs.password;
    var passwordInput = TestUtils.findRenderedDOMComponentWithTag(password, 'input');
    var confirmPassword = register.refs.confirmPassword;
    var confirmPasswordInput = TestUtils.findRenderedDOMComponentWithTag(confirmPassword, 'input');
    var email = register.refs.email;
    var emailInput = TestUtils.findRenderedDOMComponentWithTag(email, 'input');
    var expectedRegisterObject ={
      email: "johndoe@example.com",
      password: "aoeuaoeu",
      badpassword: "asdfasdf"
    };

    React.findDOMNode(emailInput).value = expectedRegisterObject.email;
    React.findDOMNode(passwordInput).value = expectedRegisterObject.password;
    React.findDOMNode(confirmPasswordInput).value = expectedRegisterObject.badpassword;
    TestUtils.Simulate.blur(confirmPasswordInput);

    // Test to make sure the password is not valid
    expect(React.findDOMNode(register).textContent).toContain('Passwords do not match');

    React.findDOMNode(confirmPasswordInput).value = expectedRegisterObject.password;

    TestUtils.Simulate.blur(React.findDOMNode(confirmPasswordInput));

    // Test to make sure the password is now valid
    expect(React.findDOMNode(register).textContent).not.toContain('Passwords do not match');
  });

  it('Doesn\'t allow form submission if there are validation errors', function(){
    //arrange
    var form = TestUtils.findRenderedDOMComponentWithTag(register, 'form');
    var password = register.refs.password;
    var passwordInput = TestUtils.findRenderedDOMComponentWithTag(password, 'input');
    var confirmPassword = register.refs.confirmPassword;
    var confirmPasswordInput = TestUtils.findRenderedDOMComponentWithTag(confirmPassword, 'input');
    var email = register.refs.email;
    var emailInput = TestUtils.findRenderedDOMComponentWithTag(email, 'input');
    var badRegisterObject ={
      email: "johndoe",
      password: "asdf"
    };

    React.findDOMNode(emailInput).value = badRegisterObject.email;
    React.findDOMNode(passwordInput).value = badRegisterObject.password;
    React.findDOMNode(confirmPasswordInput).value = badRegisterObject.password;
    spyOn(UserActions, 'register');

    //act
    TestUtils.Simulate.submit(form);

    //assert
    expect(React.findDOMNode(register).textContent).toContain('Invalid email');
    expect(React.findDOMNode(register).textContent).toContain("at least 5 characters");
    expect(UserActions.register).not.toHaveBeenCalledWith(badRegisterObject);
  });

  it('submits the form if all fields are valid', function(){
    //arrange
    var form = TestUtils.findRenderedDOMComponentWithTag(register, 'form');
    var password = register.refs.password;
    var passwordInput = TestUtils.findRenderedDOMComponentWithTag(password, 'input');
    var confirmPassword = register.refs.confirmPassword;
    var confirmPasswordInput = TestUtils.findRenderedDOMComponentWithTag(confirmPassword, 'input');
    var email = register.refs.email;
    var emailInput = TestUtils.findRenderedDOMComponentWithTag(email, 'input');
    var expectedRegisterObject ={
      email: "johndoe@example.com",
      password: "aoeuaoeu"
    };

    React.findDOMNode(emailInput).value = expectedRegisterObject.email;
    React.findDOMNode(passwordInput).value = expectedRegisterObject.password;
    React.findDOMNode(confirmPasswordInput).value = expectedRegisterObject.password;
    spyOn(UserActions, 'register');

    //act
    TestUtils.Simulate.submit(form);

    //assert
    expect(UserActions.register).toHaveBeenCalledWith(expectedRegisterObject);
  });

  afterEach(()=>{
    React.unmountComponentAtNode(React.findDOMNode(result).parentNode)
  });
});
