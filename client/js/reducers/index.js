import { combineReducers }  from 'redux';
import settings             from './settings';
import application          from './application';
import messages             from './messages';
import jwt                  from './jwt';

const rootReducer = combineReducers({
  settings,
  jwt,
  application,
  messages
});

export default rootReducer;