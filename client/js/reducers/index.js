import { combineReducers }  from 'redux';
import settings             from './settings';
import application          from './application';
import messages             from './messages';
import jwt                  from './jwt';
import canvas               from '../libs/canvas/reducer';

const rootReducer = combineReducers({
  settings,
  jwt,
  application,
  messages,
  canvas
});

export default rootReducer;