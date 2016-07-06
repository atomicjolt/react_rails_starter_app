import { combineReducers }  from 'redux';
import settings             from './settings';
import application          from './application';
import jwt                  from './jwt';

const rootReducer = combineReducers({
  settings,
  jwt,
  application
});

export default rootReducer;