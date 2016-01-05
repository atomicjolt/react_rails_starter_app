import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

  course_external_feeds(course_id) {
    return {
      type: CanvasConstants.COURSE_EXTERNAL_FEEDS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/external_feeds`
    };
  },

  group_external_feeds(group_id) {
    return {
      type: CanvasConstants.GROUP_EXTERNAL_FEEDS,
      method: Network.GET,
      url: `/api/v1/groups/${groups_id}/external_feeds`
    };
  },

  course_external_feed(course_id, external_feed_id) {
    return {
      type: CanvasConstants.COURSE_EXTERNAL_FEED,
      method: Network.DEL,
      url: `/api/v1/courses/${course_id}/external_feeds/${external_feed_id}`
    };
  },

  group_external_feed(group_id, external_feed_id) {
    return {
      type: CanvasConstants.GROUP_EXTERNAL_FEED,
      method: Network.DEL,
      url: `/api/v1/groups/${groups_id}/external_feeds/${external_feed_id}`
    };
  },

};