
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups.indexv)
  //`return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {courseId}, query);`
  "COURSE_ASSIGNMENT_GROUPS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.show)
  //`return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {courseId, assignmentGroupId}, query);`
  "COURSE_ASSIGNMENT_SINGLE_GROUP": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.update)
  //`return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {courseId, assignmentGroupId}, query);`
  "COURSE_ASSIGNMENT_SINGLE_GROUP_EDIT": Network.PUT,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.destroy)
  //`return canvasRequest(CanvasConstants.LIST_APPOINTMENT_GROUPS, {courseId, assignmentGroupId}, query);`
  "COURSE_ASSIGNMENT_SINGLE_GROUP_DEL": Network.DEL,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);