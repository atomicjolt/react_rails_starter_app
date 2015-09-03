"use strict";

import Constants   from   "../constants";
import Dispatcher  from   "../dispatcher";

export default {

  addMessage(message){
    Dispatcher.dispatch({ 
      action: Constants.ADD_MESSAGE,
      data: message
    });
  },

  clearMessages(){
    Dispatcher.dispatch({ 
      action: Constants.CLEAR_MESSAGES
    });
  },
  
  removeMessage(messageID) {
    Dispatcher.dispatch({
      action: Constants.REMOVE_MESSAGE,
      data: messageID
    });
  }

};