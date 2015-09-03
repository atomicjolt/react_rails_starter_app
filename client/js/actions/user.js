"use strict";

import Constants   from   "../constants";
import Api         from   "./api";
import Dispatcher  from   "../dispatcher";

export default {

  login(payload){
    Dispatcher.dispatch({ action: Constants.LOGIN_PENDING });
    Api.post(Constants.LOGIN, "users/sign_in", payload);
  },

  register(payload) {
    Dispatcher.dispatch({ action: Constants.REGISTER_PENDING });
    Api.post(Constants.REGISTER, "users/sign_up", payload);
  },

  logout(){
    Dispatcher.dispatch({ action: Constants.LOGOUT_PENDING });
    Api.del(Constants.LOGOUT, "sign_out");
  }

};
