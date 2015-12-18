import CanvasConstants  from "../constants/canvas";
import Network          from "../constants/network";

const CanvasActions = {

  accounts() {
    return {
      type: CanvasConstants.ACCOUNTS_LOAD,
      method: Network.GET,
      url: `/api/canvas/accounts`
    };
  },

  account(accountId) {
    return {
      type: CanvasConstants.ACCOUNTS_LOAD,
      method: Network.GET,
      url: `/api/canvas/accounts/${accountId}`
    };
  }

};

export default CanvasActions;
