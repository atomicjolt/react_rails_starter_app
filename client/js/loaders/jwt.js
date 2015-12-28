"use strict";

import { refreshJwt }           from "../actions/jwt";

export default function(dispatch, currentUserId){

    var refresh = 1000 * 60 * 20; // every 20 minutes
    setInterval(function(){ 
      dispatch(refreshJwt(currentUserId));
    }, refresh);

}