//
// Enrollments
//
// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   user_id
//   grading_period_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_courses, {course_id}, query);
export const list_enrollments_courses = { type: "LIST_ENROLLMENTS_COURSES", method: "get", key: "list_enrollments_courseslist_enrollments_courses_course_id", required: ["course_id"] };

// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   user_id
//   grading_period_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_sections, {section_id}, query);
export const list_enrollments_sections = { type: "LIST_ENROLLMENTS_SECTIONS", method: "get", key: "list_enrollments_sectionslist_enrollments_sections_section_id", required: ["section_id"] };

// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: users/{user_id}/enrollments
//
// Example:
// const query = {
//   type
//   role
//   state
//   include
//   grading_period_id
//   sis_account_id
//   sis_course_id
//   sis_section_id
//   sis_user_id
// }
// return canvasRequest(list_enrollments_users, {user_id}, query);
export const list_enrollments_users = { type: "LIST_ENROLLMENTS_USERS", method: "get", key: "list_enrollments_userslist_enrollments_users_user_id", required: ["user_id"] };

// Enrollment by ID
// Get an Enrollment object by Enrollment ID
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: accounts/{account_id}/enrollments/{id}
//
// Example:
// return canvasRequest(enrollment_by_id, {account_id, id});
export const enrollment_by_id = { type: "ENROLLMENT_BY_ID", method: "get", key: "enrollment_by_idenrollment_by_id_{account_id}_{id}", required: ["account_id","id"] };

// Enroll a user
// Create a new user enrollment for a course or section.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
//
// Example:
// const query = {
//   enrollment[user_id] (required)
//   enrollment[type] (required)
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
//   enrollment[associated_user_id]
// }
// return canvasRequest(enroll_user_courses, {course_id}, query);
export const enroll_user_courses = { type: "ENROLL_USER_COURSES", method: "post", key: "enroll_user_coursesenroll_user_courses_course_id", required: ["course_id"] };

// Enroll a user
// Create a new user enrollment for a course or section.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
//
// Example:
// const query = {
//   enrollment[user_id] (required)
//   enrollment[type] (required)
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
//   enrollment[associated_user_id]
// }
// return canvasRequest(enroll_user_sections, {section_id}, query);
export const enroll_user_sections = { type: "ENROLL_USER_SECTIONS", method: "post", key: "enroll_user_sectionsenroll_user_sections_section_id", required: ["section_id"] };

// Conclude, deactivate, or delete an enrollment
// Conclude, deactivate, or delete an enrollment. If the +task+ argument isn't given, the enrollment
// will be concluded.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}
//
// Example:
// const query = {
//   task
// }
// return canvasRequest(conclude_deactivate_or_delete_enrollment, {course_id, id}, query);
export const conclude_deactivate_or_delete_enrollment = { type: "CONCLUDE_DEACTIVATE_OR_DELETE_ENROLLMENT", method: "delete", key: "conclude_deactivate_or_delete_enrollmentconclude_deactivate_or_delete_enrollment_{course_id}_{id}", required: ["course_id","id"] };

// Re-activate an enrollment
// Activates an inactive enrollment
//
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}/reactivate
//
// Example:
// return canvasRequest(re_activate_enrollment, {course_id, id});
export const re_activate_enrollment = { type: "RE_ACTIVATE_ENROLLMENT", method: "put", key: "re_activate_enrollmentre_activate_enrollment_{course_id}_{id}", required: ["course_id","id"] };