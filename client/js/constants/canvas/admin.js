export default {

  // [List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)
  // `return canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);`
  "ACCOUNT_ADMINS": Network.GET,


  // [Remove account admin](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)
  // `return canvasRequest(CanvasConstants.REMOVE_ADMINS, {account_id, user_id}, query);`
  "REMOVE_ADMINS": Network.DEL
  
};
