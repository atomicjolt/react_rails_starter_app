import CanvasConstants  from "../constants/canvas";
import Network          from "../constants/network";

export default {

  account_admins(account_id) {
    return {
      type: CanvasConstants.ACCOUNT_ADMINS,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/admins`
    };
  },

remove_admins(account_id, user_id) {
    return {
      type: CanvasConstants.REMOVE_ADMINS,
      method: Network.DEL,
      url: `/api/v1/accounts/${account_id}/admins/${user_id}`
    };
  },

};