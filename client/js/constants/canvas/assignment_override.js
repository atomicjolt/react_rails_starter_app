export default {

  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.index)
  //`return canvasRequest(CanvasConstants.DELETE_ASSIGNMENT, {courseId, assignmnetId}, query);`
  "LIST_OVERRIDE_ASSIGNMENT": Network.GET,


    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.show)
  //`return canvasRequest(CanvasConstants.DELETE_ASSIGNMENT, {courseId, assignmnetId, overrideId}, query);`
  "OVERRIDE_ASSIGNMENT": Network.GET,


    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.group_alias)
  //`return canvasRequest(CanvasConstants.DELETE_ASSIGNMENT, {groupId, assignmnetId}, query);`
  "LIST_OVERRIDE_ASSIGNMENT_GROUP": Network.GET

};