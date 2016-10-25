import { Constants as JwtConstants } from "../actions/jwt";

const initialState = {};

export default (state = initialState, action) => {

  switch(action.type){

    case JwtConstants.REFRESH_JWT:
      return action.payload.jwt;
      break;

    default:
      return state;

  }

};