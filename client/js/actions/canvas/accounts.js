import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

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
      url: `/api/v1/accounts/${accountId}`
    };
  },

course_accounts() {
  return {
    type: CanvasConstants.COURSE_ACCOUNTS,
    method: Network.GET,
    url: `/api/v1/course_accounts`
  };
},

sub_accounts(accountId) {
  return {
    type: CanvasConstants.SUB_ACCOUNTS,
    method: Newtwork.GET,
    url: `/api/v1/accounts/${accountId}/sub_accounts`
  };
},

courses(accountId) {
  return {
    type: CanvasConstants.COURSES,
    method: Network.GET,
    url: `/api/v1/accounts/${accountId}/courses
  };
},

update_account(accountId) {
  return {
    type: CanvasConstants.UPDATE_ACCOUNT,
    method: Network.POST,
    url: `/api/v1/accounts/${accountId}`
  };
},

delete_account(accountId, userId) {
  return {
    type: CanvasConstants.DELETE_ACCOUNT,
    method: Network.DELETE,
    url: `/api/v1/accounts/${accountId}/user/${userId}`
  };
},

create_sub_account (accountId) {
  return {
    type: CanvasConstants.CREATE_SUB_ACCOUNT,
    method: Network.POST,
    url: `api/v1/accounts/${accountId}/sub_accounts`
  };
}

};
