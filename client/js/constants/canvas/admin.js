import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

  // [List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)
  // `return canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);`
  "ACCOUNT_ADMINS": Network.GET,


// [Remove account admin](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)
// `return canvasRequest(CanvasConstants.REMOVE_ADMINS, {account_id, user_id}, query);`
  "REMOVE_ADMINS": Network.DEL,
};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);