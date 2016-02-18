import { combineReducers }              from 'redux';
import settings                         from './settings'
import application                      from './application';
import messages                         from './messages';
import { routeReducer }                 from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routeReducer,
  settings,
  application,
  messages
});

export default rootReducer;