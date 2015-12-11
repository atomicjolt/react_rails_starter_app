import Immutable  from 'immutable';
import constants  from '../constants/action_types';

const initialState = Immutable.fromJS({});

export default function settings(state = initialState, action) {
  return state; // the settings state should never changed depending on action 
}