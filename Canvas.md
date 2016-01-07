
Assume:
import canvasRequest from "libs/canvas";

#Account Admins

[List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)

  `return canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);
  
// REMOVE_ADMINS

  `return canvasRequest(CanvasConstants.REMOVE_ADMINS, {account_id, user_id}, query);`
