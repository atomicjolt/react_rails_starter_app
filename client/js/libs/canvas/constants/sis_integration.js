//
// SIS Integration
//
// Retrieve assignments enabled for grade export to SIS
// Retrieve a list of published assignments flagged as "post_to_sis". Assignment group and section information are
// included for convenience.
// 
// Each section includes course information for the origin course and the cross-listed course, if applicable. The
// `origin_course` is the course to which the section belongs or the course from which the section was cross-listed.
// Generally, the `origin_course` should be preferred when performing integration work. The `xlist_course` is provided
// for consistency and is only present when the section has been cross-listed.
// 
// The `override` is only provided if the Differentiated Assignments course feature is turned on and the assignment
// has an override for that section. When there is an override for the assignment the override object's keys/values can
// be merged with the top level assignment object to create a view of the assignment object specific to that section.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_integration.html
// API Url: /sis/accounts/{account_id}/assignments
//
// Example:
// const query = {
//   course_id
//   starts_before
//   ends_after
// }
// return canvasRequest(retrieve_assignments_enabled_for_grade_export_to_sis_accounts, {account_id}, query);
export const retrieve_assignments_enabled_for_grade_export_to_sis_accounts = { type: "RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS_ACCOUNTS", method: "get", reducer: 'sis_integration'};

// Retrieve assignments enabled for grade export to SIS
// Retrieve a list of published assignments flagged as "post_to_sis". Assignment group and section information are
// included for convenience.
// 
// Each section includes course information for the origin course and the cross-listed course, if applicable. The
// `origin_course` is the course to which the section belongs or the course from which the section was cross-listed.
// Generally, the `origin_course` should be preferred when performing integration work. The `xlist_course` is provided
// for consistency and is only present when the section has been cross-listed.
// 
// The `override` is only provided if the Differentiated Assignments course feature is turned on and the assignment
// has an override for that section. When there is an override for the assignment the override object's keys/values can
// be merged with the top level assignment object to create a view of the assignment object specific to that section.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_integration.html
// API Url: /sis/courses/{course_id}/assignments
//
// Example:
// const query = {
//   account_id
//   starts_before
//   ends_after
// }
// return canvasRequest(retrieve_assignments_enabled_for_grade_export_to_sis_courses, {course_id}, query);
export const retrieve_assignments_enabled_for_grade_export_to_sis_courses = { type: "RETRIEVE_ASSIGNMENTS_ENABLED_FOR_GRADE_EXPORT_TO_SIS_COURSES", method: "get", reducer: 'sis_integration'};