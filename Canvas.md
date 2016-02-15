
Assume:
import canvasRequest   from "libs/canvas/action";
import CanvasConstants from "libs/canvas/constants";

#Accounts
[List accounts](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.sub_accounts)





#Admins

[List account admins](https://canvas.instructure.com/doc/api/admins.html#method.admins.index)

  `return canvasRequest(CanvasConstants.ACCOUNT_ADMINS, {accountId}, query);`

[Remove account admin](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)

  `return canvasRequest(CanvasConstants.REMOVE_ADMINS, {account_id, user_id}, query);`

