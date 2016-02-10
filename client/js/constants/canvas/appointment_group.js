export default {

  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.index)
  //`return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {}, query);`
  "LIST_APPOINTMENT_GROUPS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.create)
  //`return canvasRequest(CanvasConstants.CREATE_APPOINTMENT_GROUP, {}, query);`
  "CREATE_APPOINTMENT_GROUP": Network.POST,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.show)
  //`return canvasRequest(CanvasConstants.SINGLE_APPOINTMENT_GROUP, {accountId}, query);`
  "SINGLE_APPOINTMENT_GROUP": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.update)
  //`return canvasRequest(CanvasConstants.UPDATE_APPOINTMENT_GROUPS, {accountId}, query);`
  "UPDATE_APPOINTMENT_GROUPS": Network.PUT,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.destroy)
  //`return canvasRequest(CanvasConstants.DELETE_APPOINTMENT_GROUP, {accountId}, query);`
  "DELETE_APPOINTMENT_GROUP": Network.DEL,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.users)
  //`return canvasRequest(CanvasConstants.LIST_USER_PARTICIPANTS, {accountId}, query);`
  "LIST_USER_PARTICIPANTS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.groups)
  //`return canvasRequest(CanvasConstants.STUDENT_GROUP_PARTICIPANTS, {accountId}, query);`
  "STUDENT_GROUP_PARTICIPANTS": Network.GET

};