import { combineReducers }              from 'redux';
import { routerStateReducer as router } from 'redux-router';
import settings                         from './settings'

const rootReducer = combineReducers({
  router,
  settings
});

export default rootReducer;