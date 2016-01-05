import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

  delete_assignment(course_id, assignment_id) {
    return {
      type: CanvasConstants.DELETE_ASSIGNMENT,
      method: Network.DEL,
      url: `/api/v1/courses/${course_id}/assignments/${assignment_id}`
    };
  },

  list_assignments(course_id) {
    return {
      type: CanvasConstants.LIST_ASSIGNMENT,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignments`
    };
  },

  single_assignment(course_id, assignment_id) {
    return {
      type: CanvasConstants.SINGLE_ASSIGNMENT,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignments/${assignment_id}`
    };
  },

  edit_assignment(course_id, assignment_id) {
    return {
      type: CanvasConstants.EDIT_ASSIGNMENT,
      method: Network.PUT,
      url: `/api/v1/courses/${course_id}/assignments/${assignment_id}`
    };
  },

};