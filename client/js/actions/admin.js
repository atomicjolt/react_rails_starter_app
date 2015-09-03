"use strict";

import Constants   from   "../constants";
import Dispatcher  from   "../dispatcher";
import Api         from   "./api";
export default {

  loadAccounts(){
    Dispatcher.dispatch({action: Constants.ACCOUNTS_LOADING});
    Api.get(Constants.ACCOUNTS_LOADED, "api/accounts/");
  },

  loadUsers(accountId, page){
    if(!page){
      page = 1;
    }
    var perPage = 100;
    Dispatcher.dispatch({action: Constants.USERS_LOADING, payload: accountId});
    Api.get(Constants.USERS_LOADED, "api/accounts/" + accountId + "/users?page=" + page + "&per_page=" + perPage);
  },

  changeNav(){
    Dispatcher.dispatch({action: Constants.NAV_CHANGED});
  },

  resetUsersStore(){
    Dispatcher.dispatch({action: Constants.RESET_USERS});
  },

  changeMainTab(payload){
    Dispatcher.dispatch({ action: Constants.CHANGE_MAIN_TAB_PENDING, mainTab: payload.text });
  },

  getUserData(payload){
    Dispatcher.dispatch({action: Constants.LOADING_USER_DATA, userList: payload.userList});
  },

  setCurrentSelectedUser(payload){
    Dispatcher.dispatch({action: Constants.LOADING_SELECTED_USER_DATA, currentSelectedUser: payload.currentSelectedUser});
  },

  updateUser(accountID, userID, payload){
    Dispatcher.dispatch({action: Constants.USER_UPDATING});
    Api.put(Constants.USER_UPDATED, "api/accounts/"+ accountID + "/users/" + userID, payload);
  },

  addToSelectedUsers(payload){
    Dispatcher.dispatch({action: Constants.ADD_USER, payload: payload});
  },

  removeFromSelectedUsers(payload){
    Dispatcher.dispatch({action: Constants.REMOVE_USER, payload: payload});
  },

  // deleteUsers(payload){
  //   for(var i=0; i<payload.length; i++){
  //     var url = "api/accounts/" + payload[i].account_id + "/users/" + payload[i].id;
  //     Dispatcher.dispatch({action: Constants.DELETING_USERS});
  //     Api.del(Constants.DELETE_USERS, url);
  //   }
  //   this.loadUsers(payload[0].account_id, 1);
  // },
  deleteUser(user){
    var url = "api/accounts/" + user.account_id + "/users/" + user.id;
    Dispatcher.dispatch({action: Constants.DELETING_USERS});
    Api.del(Constants.DELETE_USERS, url);
  },

  createUser(accountId, payload){
    Dispatcher.dispatch({action: Constants.CREATING_USER});
    Api.post(Constants.CREATED_USER, '/api/accounts/'+ accountId +'/users', payload);
  },
};