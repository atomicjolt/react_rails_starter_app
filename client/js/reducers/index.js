import { combineReducers }              from 'redux';
import settings                         from './settings';
import application                      from './application';
import messages                         from './messages';
import canvas                           from '../libs/canvas/reducer';

const rootReducer = combineReducers({
  settings,
  application,
  messages,
  canvas
});

export default rootReducer;