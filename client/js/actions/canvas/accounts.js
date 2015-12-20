import CanvasConstants  from "../constants/canvas";
import Network          from "../constants/network";

export default {

  accounts() {
    return {
      type: CanvasConstants.ACCOUNTS_LOAD,
      method: Network.GET,
      url: `/api/v1/accounts`
    };
  },

  account(accountId) {
    return {
      type: CanvasConstants.ACCOUNT_LOAD,
      method: Network.GET,
      url: `/api/canvas/accounts/${accountId}`
    };
  }

};