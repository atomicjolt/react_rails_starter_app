"use strict";

import Immutable  from 'immutable';
import Constants  from '../constants/action_types';

const initialState = Immutable.fromJS([]);

export default (state = initialState, action) => {
  
  switch(action.type){

    default:
      return state;
  } 
}