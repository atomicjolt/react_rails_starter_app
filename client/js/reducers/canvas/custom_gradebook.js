
import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

custom_gradebook_columns(course_id) {
    return {
      type: CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/custom_gradebook_columns`
    };
  },

  create_custom_gradebook_columns(course_id) {
    return {
      type: CanvasConstants.CREATE_CUSTOM_GRADEBOOK_COLUMNS,
      method: Network.POST,
      url: `/api/v1/courses/${course_id}/custom_gradebook_columns`
    };
  },

  update_custom_gradebook_columns(course_id) {
    return {
      type: CanvasConstants.UPDATE_CUSTOM_GRADEBOOK_COLUMNS,
      method: Network.PUT,
      url: `/api/v1/courses/${course_id}/custom_gradebook_columns`
    };
  },

  delete_custom_gradebook_columns(course_id) {
    return {
      type: CanvasConstants.DELETE_CUSTOM_GRADEBOOK_COLUMNS,
      method: Network.DEL,
      url: `/api/v1/courses/${course_id}/custom_gradebook_columns`
    };
  },

};