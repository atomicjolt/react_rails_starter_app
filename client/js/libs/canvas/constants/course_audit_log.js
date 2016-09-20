//
// Course Audit log
//
// Query by course.
// List course change events for a given course.
//
// API Docs: https://canvas.instructure.com/doc/api/course_audit_log.html
// API Url: audit/course/courses/{course_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(course_audit_log_query_by_course, {course_id}, query);
export const course_audit_log_query_by_course = { type: "COURSE_AUDIT_LOG_QUERY_BY_COURSE", method: "get", key: "course_audit_log_query_by_coursecourse_audit_log_query_by_course_course_id", required: ["course_id"] };