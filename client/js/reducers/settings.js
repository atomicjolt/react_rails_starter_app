import Immutable                     from 'immutable';
import { Constants as JwtConstants } from "../actions/jwt";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case JwtConstants.REFRESH_JWT:
      return state.set('jwt', action.payload);
      break;

    default:
      return state;

  }
  
}