
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

 // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // `return canvasRequest(CanvasConstants.LIST_ASSIGNMENT_SUBMISSIONS, {courseId, assignmentId}, query);`
"LIST_ASSIGNMENT_SUBMISSIONS": Network.GET,


};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);