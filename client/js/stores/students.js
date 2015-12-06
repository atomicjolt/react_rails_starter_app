"use strict";

import Dispatcher     from "../dispatcher";
import Constants      from "../constants";
import StoreCommon    from "./store_common";
import _              from "lodash";

var _students = [];


function loadStudents(payload){
  _students = JSON.parse(payload.data.text);
}

// Extend Student Store with EventEmitter to add eventing capabilities
var StudentsStore = {...StoreCommon, ...{

  students(){
    return _students;
  },

}};

// Register callback with Dispatcher
Dispatcher.register((payload) => {
  var action = payload.action;

  switch(action){

    case Constants.STUDENTS_LOADED:
      loadStudents(payload);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  StudentsStore.emitChange();

  return true;

});

export default StudentsStore;

