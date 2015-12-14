import Immutable  from 'immutable';

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {
  return state; // the settings state should never changed depending on action 
}