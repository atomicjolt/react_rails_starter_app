import CanvasConstants  from "../../constants/canvas";
import Network          from "../../constants/network";

export default {

  courses_per_user() {
    return {
      type: CanvasConstants.COURSES_PER_USER,
      method: Network.GET,
      url: `/api/v1/courses`
    };
  },

  courses_single_user(user_id) {
    return {
      type: CanvasConstants.COURSES_SINGLE_USER,
      method: Network.GET,
      url: `/api/v1/users/${user_id}/courses`
    };
  },

  students_in_course(course_id) {
    return {
      type: CanvasConstants.STUDENTS_IN_COURSE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/students`
    };
  },

  users_in_course(course_id) {
    return {
      type: CanvasConstants.USERS_IN_COURSE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/users`
    };
  },

  search_users_in_course(course_id) {
    return {
      type: CanvasConstants.SEARCH_USERS_IN_COURSE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/search_users`
    };
  },

  recent_students_in_course(course_id) {
    return {
      type: CanvasConstants.RECENT_STUDENTS_IN_COURSE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/recent_students`
    };
  },

  get_single_user(course_id, user_id) {
    return {
      type: CanvasConstants.GET_SINGLE_USER,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/users/${user_id}`
    };
  },

  course_activity_stream(course_id) {
    return {
      type: CanvasConstants.COURSE_ACTIVITY_STREAM,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/activity_stream`
    };
  },

  course_activity_stream_summary(course_id) {
    return {
      type: CanvasConstants.COURSE_ACTIVITY_STREAM_SUMMARY,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/activity_stream/summary`
    };
  },

  course_todo_items(course_id) {
    return {
      type: CanvasConstants.COURSE_TODO_ITEMS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/todo`
    };
  },

  conclude_course(course_id) {
    return {
      type: CanvasConstants.CONCLUDE_COURSE,
      method: Network.DEL,
      url: `/api/v1/courses/${course_id}`
    };
  },

  course_settings(course_id) {
    return {
      type: CanvasConstants.COURSE_SETTINGS,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}/settings`
    };
  },

  update_course_settings(course_id) {
    return {
      type: CanvasConstants.UPDATE_COURSE_SETTINGS,
      method: Network.PUT,
      url: `/api/v1/courses/${course_id}/settings`
    };
  },

  get_single_course(course_id) {
    return {
      type: CanvasConstants.GET_SINGLE_COURSE,
      method: Network.GET,
      url: `/api/v1/courses/${course_id}`
    };
  },

  get_single_course_from_account(account_id, course_id) {
    return {
      type: CanvasConstants.GET_SINGLE_COURSE,
      method: Network.GET,
      url: `/api/v1/accounts/${account_id}/courses/${course_id}`
    };
  },

  update_single_course(course_id) {
    return {
      type: CanvasConstants.UPDATE_SINGLE_COURSE,
      method: Network.PUT,
      url: `/api/v1/courses/${course_id}`
    };
  },

  update_courses(account_id) {
    return {
      type: CanvasConstants.UPDATE_SINGLE_COURSE,
      method: Network.PUT,
      url: `/api/v1/account/${account_id}/courses`
    };
  },

};