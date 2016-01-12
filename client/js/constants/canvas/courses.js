
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {

  //COURSE
  "COURSES_PER_USER": Network.GET,
  "COURSES_SINGLE_USER": Network.GET,
  "STUDENTS_IN_COURSE": Network.GET,
  "USERS_IN_COURSE": Network.GET,
  "SEARCH_USERS_IN_COURSE": Network.GET,
  "RECENT_STUDENTS_IN_COURSE": Network.GET,
  "GET_SINGLE_USER": Network.GET,
  "COURSE_ACTIVITY_STREAM": Network.GET,
  "COURSE_ACTIVITY_STREAM_SUMMARY": Network.GET,
  "COURSE_TODO_ITEMS": Network.GET,
  "CONCLUDE_COURSE": Network.DEL,
  "COURSE_SETTINGS": Network.GET,
  "UPDATE_COURSE_SETTINGS": Network.PUT,
  "GET_SINGLE_COURSE": Network.GET,
  "GET_SINGLE_COURSE_FROM_ACCOUNT": Network.GET,
  "UPDATE_SINGLE_COURSE": Network.PUT,
  "UPDATE_COURSES": Network.PUT,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);