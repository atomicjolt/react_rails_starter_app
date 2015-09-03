"use strict";

export default {
  
  // User 
  LOGIN: "login",
  LOGIN_PENDING: "login_pending",
  REGISTER: "register",
  REGISTER_PENDING: "register_pending",
  LOGOUT_PENDING: "logout_pending",
  LOGOUT: "logout",

  ADD_MESSAGE: "add_message",
  REMOVE_MESSAGE: "remove_message",
  CLEAR_MESSAGES: "clear_messages",

  // settings
  SETTINGS_LOAD: "settings_load",

  // Errors
  TIMEOUT: "timeout",
  ERROR: "error",
  NOT_AUTHORIZED: "not_authorized",

  // Admin
  CHANGE_MAIN_TAB_PENDING: "change_main_tab_pending",
  
  // Accounts
  ACCOUNTS_LOADING: "accounts_loading",
  ACCOUNTS_LOADED: "accounts_loaded",
  
  USERS_LOADING: "users_loading",
  USERS_LOADED: "users_loaded",
  LOADING_SELECTED_USER_DATA: "loading_selected_user_data",

  USER_UPDATING: "user_updating",
  USER_UPDATED: "user_updated",

  RESET_USERS: "reset_users",

  ADD_USER: "add_user",
  REMOVE_USER: "remove_user",

  DELETE_USERS: "delete_users",
  DELETING_USERS: "deleting_users",
  NAV_CHANGED: "nav_changed",
  CREATED_USER: "created_user"
};
