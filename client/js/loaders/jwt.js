"use strict";

import { refreshJwt }           from "../actions/jwt";

export default function(dispatch, currentUserId){

  const refresh = 1000 * 60 * 20; // every 20 minutes
  setInterval(() => {
    dispatch(refreshJwt(currentUserId));
  }, refresh);

}