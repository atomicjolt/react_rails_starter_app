"use strict";

import ActionTypes from "../constants/action_types";
import Network     from "../constants/network";

export function refreshJwt(userId){
  return {
    type:   ActionTypes.REFRESH_JWT,
    method: Network.GET,
    url:    `api/sessions/${userId}`
  }
}