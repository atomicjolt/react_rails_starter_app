import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";
import { canvasRequest }    from "../../libs/canvas"

export default {

  account_admins(account_id) {
    canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);
  },

  remove_admins(account_id, user_id) {
    canvasRequest(CanvasConstants.REMOVE_ADMINS, {account_id, user_id}, query);
  }

};