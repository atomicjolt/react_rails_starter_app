
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

 // [List assignment submissions](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // `return canvasRequest(CanvasConstants.LIIST_ASSIGNMENT_SUBMISSIONS, {courseId, assignmentId}, query);`
"LIIST_ASSIGNMENT_SUBMISSIONS": Network.GET,



"next"
"conalksdjflas"

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);