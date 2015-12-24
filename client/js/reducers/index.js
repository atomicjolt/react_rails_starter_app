import { combineReducers }              from 'redux';
import { routeReducer as routing }      from 'redux-simple-router';
import settings                         from './settings'
import application                      from './application';
import messages                         from './messages';

const rootReducer = combineReducers({
  routing,
  settings,
  application,
  messages
});

export default rootReducer;