
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments.destroy)
  //`return canvasRequest(CanvasConstants.DELETE_ASSIGNMENT, {courseId, assignmnetId}, query);`
  "DELETE_ASSIGNMENT": Network.DEL,


    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.index)
  //`return canvasRequest(CanvasConstants.LIST_ASSIGNMENT, {courseId}, query);`
  "LIST_ASSIGNMENT": Network.GET,


    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.show)
  //`return canvasRequest(CanvasConstants.SINGLE_ASSIGNMENT, {courseId, assignmnetId}, query);`
  "SINGLE_ASSIGNMENT": Network.GET,


    //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.update)
  //`return canvasRequest(CanvasConstants.EDIT_ASSIGNMENT, {courseId, assignmnetId}, query);`
  "EDIT_ASSIGNMENT": Network.PUT,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);