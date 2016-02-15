"use strict";

import Immutable           from "immutable";
import { CanvasConstants } from "../../libs/canvas/constants";

const initialState = Immutable.fromJS({});

export default (state = initialState, action) => {

  switch(action.type){

    case CanvasConstants.COURSE_EXTERNAL_FEEDS_DONE:
      return state.set("external_feeds", Immutable.fromJS(action.payload));
      break;

      case CanvasConstants.COURSE_EXTERNAL_FEED_DONE:
      return state.set("external_feeds", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.GROUP_EXTERNAL_FEEDS_DONE:
      return state.set("external_feeds", Immutable.fromJS(action.payload));
      break;

    case CanvasConstants.GROUP_EXTERNAL_FEED_DONE:
      var deletedFeed = action.response.body
      var newState = state.get("external_feeds").filter(feed=>feed.get("id") != deletedFeed.id)
      return state.set("external_feeds", Immutable.fromJS(newState));
      break;

    default:
      return state;

  }
}