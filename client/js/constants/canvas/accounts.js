import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {


//[List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)
//`return canvasRequest(CanvasConstants.ACCOUNTS_LOAD, {}, query);`
  "ACCOUNTS_LOAD": Network.GET,


//[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.show)
//`return canvasRequest(CanvasConstants.ACCOUNT_LOAD, {accountId}, query);`
  "ACCOUNT_LOAD": Network.GET,


//[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
 //`return canvasRequest(CanvasConstants.COURSE_ACCOUNTS, {}, query);`
  "COURSE_ACCOUNTS": Network.GET,


//[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.sub_accounts)
 //`return canvasRequest(CanvasConstants.SUB_ACCOUNTS, {accountId}, query);`
  "SUB_ACCOUNTS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.courses_api)
 //`return canvasRequest(CanvasConstants.COURSES, {accountId}, query);`
  "COURSES": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.update)
 //`return canvasRequest(CanvasConstants.UPDATE_ACCOUNT, {accountId}, query, body);`
  "UPDATE_ACCOUNT": Network.POST,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
 //`return canvasRequest(CanvasConstants.DELETE_ACCOUNT, {accountId, userId}, query);`
  "DELETE_ACCOUNT": Network.DEL,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
 //`return canvasRequest(CanvasConstants.CREATE_SUB_ACCOUNT, {accountId}, query, body);`
  "CREATE_SUB_ACCOUNT": Network.POST,

  };

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);
