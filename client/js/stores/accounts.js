"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import assign         from "object-assign";
import _              from "lodash";

var _accounts = [];
var _users = [];
var _selectedUsers = [];
var _currentAccountId = null;

function loadAccounts(data){
  _accounts = JSON.parse(data);
}

function loadUsers(data){
  _users = JSON.parse(data);
}
function addUser(data){
  _users.push(JSON.parse(data));
}

function addToSelectedUsers(payload){
  if(checkUniquness(payload))
    _selectedUsers.push(payload);
}

function updateUsers(data){
  var user = JSON.parse(data);
  for(var i=0; i<_users.length; i++){
    if(_users[i].id == user.id){
      _users[i] = user;
      break;
    }
  }
}

function removeFromSelectedUsers(payload){
  for(var i=0; i<_selectedUsers.length; i++){
    if(_selectedUsers[i].id == payload.id){
      _selectedUsers.splice(i, 1);
    }
  }
}

function checkUniquness(payload){
  for(var i=0; i< _selectedUsers.length; i++){
    if(payload.id == _selectedUsers[i].id)
      return false;
  }
  return true;
}

// Extend User Store with EventEmitter to add eventing capabilities
var AccountsStore = assign({}, StoreCommon, {

  // Return the accounts
  current(){
    return _accounts;
  },

  currentId(){
    return _currentAccountId;
  },

  // Return current users
  currentUsers(){
    return _users;
  },
  
  accountById(id){
    var account =  _.find(_accounts, function(account){
      return account.id == id;
    });
  return account;
  },

  userById(id){
    var user =  _.find(_users, function(user){
      return user.id == id;
    });

  return user;
  },

  getSelectedUsers(){
    return _selectedUsers;
  }

});
 
// Register callback with Dispatcher
Dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action){

    case Constants.ACCOUNTS_LOADED:
      loadAccounts(payload.data.text);

      break;
    case Constants.CREATED_USER:
      addUser(payload.data.text);

      break;
    case Constants.USERS_LOADED:
      loadUsers(payload.data.text);

      break;
    case Constants.USER_UPDATED:
      // UPDATE THE USERS LIST AND SUCH
      updateUsers(payload.data.text)
      break;
    case Constants.RESET_USERS:
      // reset the users list to prepare for a different account
      _users = [];
      break;
    case Constants.ADD_USER:
      addToSelectedUsers(payload.payload);
      break; 

    case Constants.REMOVE_USER:
      removeFromSelectedUsers(payload.payload);
      break;

    case Constants.DELETE_USERS:
      _selectedUsers = [];
      var userToRemove = JSON.parse(payload.data.text);
      _.remove(_users,(user)=>{
        return user.id == userToRemove.id;
      })
      //_users.find(payload.data.user)
      break;
      
    case Constants.USERS_LOADING:

      _currentAccountId = payload.payload;
      break;

    default:
      return true;
  }
  // If action was responded to, emit change event
  AccountsStore.emitChange();
  
  return true;

});

export default AccountsStore;

