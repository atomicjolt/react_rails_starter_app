import { combineReducers }              from 'redux';
import { routerStateReducer as router } from 'redux-router';
import settings                         from './settings'
import application                      from './application';
import messages                         from './messages';

const rootReducer = combineReducers({
  router,
  settings,
  application,
  messages
});

export default rootReducer;