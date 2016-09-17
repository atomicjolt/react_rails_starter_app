//
// Grade Change Log
//
// Query by assignment.
// List grade change events for a given assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/assignments/{assignment_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_assignment, {assignment_id}, query);
export const query_by_assignment = { type: "QUERY_BY_ASSIGNMENT", method: "get"};

// Query by course.
// List grade change events for a given course.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/courses/{course_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(grade_change_log_query_by_course, {course_id}, query);
export const grade_change_log_query_by_course = { type: "GRADE_CHANGE_LOG_QUERY_BY_COURSE", method: "get"};

// Query by student.
// List grade change events for a given student.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/students/{student_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_student, {student_id}, query);
export const query_by_student = { type: "QUERY_BY_STUDENT", method: "get"};

// Query by grader.
// List grade change events for a given grader.
//
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/graders/{grader_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_grader, {grader_id}, query);
export const query_by_grader = { type: "QUERY_BY_GRADER", method: "get"};