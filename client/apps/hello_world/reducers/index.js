import { combineReducers } from 'redux';
import settings            from 'atomic-fuel/libs/reducers/settings';
import jwt                 from 'atomic-fuel/libs/reducers/jwt';
import application         from './application';

const rootReducer = combineReducers({
  settings,
  jwt,
  application,
});

export default rootReducer;
