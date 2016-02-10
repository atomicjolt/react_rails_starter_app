export default {

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_assignments)

  //`return canvasRequest(CanvasConstants.ACCOUNT_TERM_ANALYTICS, {account_id, term_id}, query);`
  "ACCOUNT_TERM_ANALYTICS": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_CURRENT_ANALYTICS, {account_id}, query);`
  "ACCOUNT_CURRENT_ANALYTICS": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_TERM_ANALYTICS, {account_id}, query);`
  "ACCOUNT_COMPLETED_ANALYTICS": Network.GET,


  //##########
  //GRADES
  //##########
  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_grades)

  //`return canvasRequest(CanvasConstants.ACCOUNT_TERM_ANALYTICS_GRADES, {account_id, term_id}, query);`
  "ACCOUNT_TERM_ANALYTICS_GRADES": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_CURRENT_ANALYTICS_GRADES, {account_id}, query);`
  "ACCOUNT_CURRENT_ANALYTICS_GRADES": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_COMPLETED_ANALYTICS_GRADES, {account_id}, query);`
  "ACCOUNT_COMPLETED_ANALYTICS_GRADES": Network.GET,


  //##############
  //STATISTICS
  //##############
  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.department_statistics)

  //`return canvasRequest(CanvasConstants.ACCOUNT_TERM_ANALYTICS_STATISTICS, {account_id, term_id}, query);`
  "ACCOUNT_TERM_ANALYTICS_STATISTICS": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_CURRENT_ANALYTICS_GRADE, {account_id}, query);`
  "ACCOUNT_CURRENT_ANALYTICS_GRADES": Network.GET,

  //`return canvasRequest(CanvasConstants.ACCOUNT_COMPLETED_ANALYTICS_STATISTICS, {account_id}, query);`
  "ACCOUNT_COMPLETED_ANALYTICS_STATISTICS": Network.GET,


  //################
  //COURSE-LEVEL
  //################

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_participation)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS, {course_id}, query);`
  "COURSE_ANALYTICS": Network.GET,

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_assignments)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS_ASSIGNMENTS, {course_Id}, query);`
  "COURSE_ANALYTICS_ASSIGNMENTS": Network.GET,

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.course_student_summaries)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS_ASSIGNMENTS, {course_id}, query);`
  "COURSE_ANALYTICS_STUDENt_SUMMARIES": Network.GET,

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_participation)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS_STUDENT_ID, {course_id, student_id}, query);`
  "COURSE_ANALYTICS_STUDENT_ID": Network.GET,

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_assignments)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS_STUDENT_ASSIGNMENTS, {course_id, student_id}, query);`
  "COURSE_ANALYTICS_STUDENT_ASSIGNMENTS": Network.GET,

  //[List account admins](https://canvas.instructure.com/doc/api/analytics.html#method.analytics_api.student_in_course_messaging)
  //`return canvasRequest(CanvasConstants.COURSE_ANALYTICS_STUDENT_MESSAGE, {course_id, student_id}, query);`
  "COURSE_ANALYTICS_STUDENT_MESSAGE": Network.GET

};