import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

  course_assignment_groups(course_id) {
    return {
      type: CanvasConstants.COURSE_ASSIGNMENT_GROUPS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignment_groups`
    };
  },

  course_assignment_single_group(course_id, assignment_group_id) {
    return {
      type: CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`
    };
  },

  course_assignment_single_group_edit(course_id, assignment_group_id) {
    return {
      type: CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_EDIT,
      method: Network.PUT,
      url: `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`
    };
  },

  course_assignment_single_group_del(course_id, assignment_group_id) {
    return {
      type: CanvasConstants.COURSE_ASSIGNMENT_SINGLE_GROUP_DEL,
      method: Network.DEL,
      url: `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`
    };
  },

};