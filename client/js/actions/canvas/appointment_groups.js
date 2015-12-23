import CanvasConstants  from "../constants/canvas";
import Network          from "../constants/network";

export default {

  list_appointment_groups() {
    return {
      type: CanvasConstants.LIST_APPOINTMENT_GROUPS,
      method: Network.GET,
      url: `/api/v1/appointment_groups`
    };
  },

  create_appointment_group() {
    return {
      type: CanvasConstants.CREATE_APPOINTMENT_GROUP,
      method: Network.POST,
      url: `/api/v1/appointment_groups`
    };
  },

  single_appointment_group(accountId) {
    return {
      type: CanvasConstants.SINGLE_APPOINTMENT_GROUP,
      method: Network.GET,
      url: `/api/v1/appointment_groups/${accountId}`
    };
  },

  update_appointment_groups(accountId) {
    return {
      type: CanvasConstatns.UPDATE_APPOINTMENT_GROUPS,
      method: Network.PUT,
      url: `/api/v1/appointment_groups/${accountId}`
    };
  },

  delete_appointment_group(accountId) {
    return {
      type: CanvasConstants.DELETE_APPOINTMENT_GROUP,
      method: Network.DELETE,
      url: `/api/v1/appointment_groups/${accountId}`
    };
  },

  list_user_participants(accountId) {
    return {
      type: CanvasConstants.LIST_USER_PARTICIPANTS,
      method: Network.GET,
      url: `/api/v1/appointment_groups/${accountId}/users`
    };
  },

  student_group_participants(accountId) {
    return {
      type: CanvasConstants.STUDENT_GROUP_PARTICIPANTS,
      method: Network.GET,
      url: `/api/v1/appointment_groups/${accountId}`
    };
  },










}
