import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

  //`return canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);`
//[List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)
  "ACCOUNTS_LOAD": Network.GET,

  "ACCOUNT_LOAD": Network.GET,

  "COURSE_ACCOUNTS": Network.GET,

  "SUB_ACCOUNTS": Network.GET,
  "COURSES": Network.GET,
  "UPDATE_ACCOUNT": Network.POST,
  "DELETE_ACCOUNT": Network.DEL,
  "CREATE_SUB_ACCOUNT": Network.POST,

  };

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);
