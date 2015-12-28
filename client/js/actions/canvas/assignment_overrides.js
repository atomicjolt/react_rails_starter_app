import CanvasConstants  from "../constants/canvas";
import Network          from "../constants/network";

export default {

  list_override_assignment(course_id, assignment_id) {
    return {
      type: CanvasConstants.LIST_OVERRIDE_ASSIGNMENT,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`
    };
  },

  override_assignment(course_id, assignment_id, override_id) {
    return {
      type: CanvasConstants.OVERRIDE_ASSIGNMENT,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`
    };
  },

  list_override_assignment_group(group_id, assignment_id) {
    return {
      type: CanvasConstants.LIST_OVERRIDE_ASSIGNMENT,
      method: Network.GET,
      url: `/api/v1/courses/${group_id}/assignments/${assignment_id}/override`
    };
  },

};