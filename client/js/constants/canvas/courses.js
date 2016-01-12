
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.index)
  //`return canvasRequest(CanvasConstants.COURSES_PER_USER, {}, query);`
  "COURSES_PER_USER": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user_index)
  //`return canvasRequest(CanvasConstants.COURSES_SINGLE_USER, {userId}, query);`
  "COURSES_SINGLE_USER": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.students)
  //`return canvasRequest(CanvasConstants.STUDENTS_IN_COURSE, {courseId}, query);`
  "STUDENTS_IN_COURSE": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  //`return canvasRequest(CanvasConstants.USERS_IN_COURSE, {courseId}, query);`
  "USERS_IN_COURSE": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  //`return canvasRequest(CanvasConstants.SEARCH_USERS_IN_COURSE, {courseId}, query);`
  "SEARCH_USERS_IN_COURSE": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.recent_students)
  //`return canvasRequest(CanvasConstants.RECENT_STUDENTS_IN_COURSE, {courseId}, query);`
  "RECENT_STUDENTS_IN_COURSE": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user)
  //`return canvasRequest(CanvasConstants.GET_SINGLE_USER, {courseId, userId}, query);`
  "GET_SINGLE_USER": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream)
  //`return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM, {courseId}, query);`
  "COURSE_ACTIVITY_STREAM": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream_summary)
  //`return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM_SUMMARY, {courseId}, query);`
  "COURSE_ACTIVITY_STREAM_SUMMARY": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.todo_items)
  //`return canvasRequest(CanvasConstants.COURSE_TODO_ITEMS, {courseId}, query);`
  "COURSE_TODO_ITEMS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.destroy)
  //`return canvasRequest(CanvasConstants.CONCLUDE_COURSE, {courseId}, query);`
  "CONCLUDE_COURSE": Network.DEL,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.settings)
  //`return canvasRequest(CanvasConstants.COURSE_SETTINGS, {courseId}, query);`
  "COURSE_SETTINGS": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update_settings)
  //`return canvasRequest(CanvasConstants.UPDATE_COURSE_SETTINGS, {courseId}, query);`
  "UPDATE_COURSE_SETTINGS": Network.PUT,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  //`return canvasRequest(CanvasConstants.GET_SINGLE_COURSE, {courseId}, query);`
  "GET_SINGLE_COURSE": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  //`return canvasRequest(CanvasConstants.GET_SINGLE_COURSE_FROM_ACCOUNT, {accountId,courseId}, query);`
  "GET_SINGLE_COURSE_FROM_ACCOUNT": Network.GET,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update)
  //`return canvasRequest(CanvasConstants.UPDATE_SINGLE_COURSE, {courseId}, query);`
  "UPDATE_SINGLE_COURSE": Network.PUT,


  //[List account admins](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.batch_update)
  //`return canvasRequest(CanvasConstants.UPDATE_COURSES, {accountID}, query);`
  "UPDATE_COURSES": Network.PUT,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);