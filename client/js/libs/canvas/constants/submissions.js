//
// Submissions
//
// Submit an assignment
// Make a submission for an assignment. You must be enrolled as a student in
// the course/section to do this.
// 
// All online turn-in submission types are supported in this API. However,
// there are a few things that are not yet supported:
// 
// * Files can be submitted based on a file ID of a user or group file. However, there is no API yet for listing the user and group files, or uploading new files via the API. A file upload API is coming soon.
// * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
// * Integration with Google Docs is not yet supported.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   comment[text_comment]
//   submission[submission_type] (required)
//   submission[body]
//   submission[url]
//   submission[file_ids]
//   submission[media_comment_id]
//   submission[media_comment_type]
// }
// return canvasRequest(submit_assignment_courses, {course_id, assignment_id}, query);
export const submit_assignment_courses = { type: "SUBMIT_ASSIGNMENT_COURSES", method: "post", reducer: 'submissions'};

// Submit an assignment
// Make a submission for an assignment. You must be enrolled as a student in
// the course/section to do this.
// 
// All online turn-in submission types are supported in this API. However,
// there are a few things that are not yet supported:
// 
// * Files can be submitted based on a file ID of a user or group file. However, there is no API yet for listing the user and group files, or uploading new files via the API. A file upload API is coming soon.
// * Media comments can be submitted, however, there is no API yet for creating a media comment to submit.
// * Integration with Google Docs is not yet supported.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   comment[text_comment]
//   submission[submission_type] (required)
//   submission[body]
//   submission[url]
//   submission[file_ids]
//   submission[media_comment_id]
//   submission[media_comment_type]
// }
// return canvasRequest(submit_assignment_sections, {section_id, assignment_id}, query);
export const submit_assignment_sections = { type: "SUBMIT_ASSIGNMENT_SECTIONS", method: "post", reducer: 'submissions'};

// List assignment submissions
// Get all existing submissions for an assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   include
//   grouped
// }
// return canvasRequest(list_assignment_submissions_courses, {course_id, assignment_id}, query);
export const list_assignment_submissions_courses = { type: "LIST_ASSIGNMENT_SUBMISSIONS_COURSES", method: "get", reducer: 'submissions'};

// List assignment submissions
// Get all existing submissions for an assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions
//
// Example:
// const query = {
//   include
//   grouped
// }
// return canvasRequest(list_assignment_submissions_sections, {section_id, assignment_id}, query);
export const list_assignment_submissions_sections = { type: "LIST_ASSIGNMENT_SUBMISSIONS_SECTIONS", method: "get", reducer: 'submissions'};

// List submissions for multiple assignments
// Get all existing submissions for a given set of students and assignments.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/students/submissions
//
// Example:
// const query = {
//   student_ids
//   assignment_ids
//   grouped
//   grading_period_id
//   include
// }
// return canvasRequest(list_submissions_for_multiple_assignments_courses, {course_id}, query);
export const list_submissions_for_multiple_assignments_courses = { type: "LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_COURSES", method: "get", reducer: 'submissions'};

// List submissions for multiple assignments
// Get all existing submissions for a given set of students and assignments.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/students/submissions
//
// Example:
// const query = {
//   student_ids
//   assignment_ids
//   grouped
//   grading_period_id
//   include
// }
// return canvasRequest(list_submissions_for_multiple_assignments_sections, {section_id}, query);
export const list_submissions_for_multiple_assignments_sections = { type: "LIST_SUBMISSIONS_FOR_MULTIPLE_ASSIGNMENTS_SECTIONS", method: "get", reducer: 'submissions'};

// Get a single submission
// Get a single submission, based on user id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_courses, {course_id, assignment_id, user_id}, query);
export const get_single_submission_courses = { type: "GET_SINGLE_SUBMISSION_COURSES", method: "get", reducer: 'submissions'};

// Get a single submission
// Get a single submission, based on user id.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_submission_sections, {section_id, assignment_id, user_id}, query);
export const get_single_submission_sections = { type: "GET_SINGLE_SUBMISSION_SECTIONS", method: "get", reducer: 'submissions'};

// Upload a file
// Upload a file to a submission.
// 
// This API endpoint is the first step in uploading a file to a submission as a student.
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then POST to submit the
// +online_upload+ assignment with these file ids.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/files
//
// Example:
// return canvasRequest(upload_file_courses, {course_id, assignment_id, user_id});
export const upload_file_courses = { type: "UPLOAD_FILE_COURSES", method: "post", reducer: 'submissions'};

// Upload a file
// Upload a file to a submission.
// 
// This API endpoint is the first step in uploading a file to a submission as a student.
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then POST to submit the
// +online_upload+ assignment with these file ids.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/files
//
// Example:
// return canvasRequest(upload_file_sections, {section_id, assignment_id, user_id});
export const upload_file_sections = { type: "UPLOAD_FILE_SECTIONS", method: "post", reducer: 'submissions'};

// Grade or comment on a submission
// Comment on and/or update the grading for a student's assignment submission.
// If any submission or rubric_assessment arguments are provided, the user
// must have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_courses, {course_id, assignment_id, user_id}, query);
export const grade_or_comment_on_submission_courses = { type: "GRADE_OR_COMMENT_ON_SUBMISSION_COURSES", method: "put", reducer: 'submissions'};

// Grade or comment on a submission
// Comment on and/or update the grading for a student's assignment submission.
// If any submission or rubric_assessment arguments are provided, the user
// must have permission to manage grades in the appropriate context (course or
// section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}
//
// Example:
// const query = {
//   comment[text_comment]
//   comment[group_comment]
//   comment[media_comment_id]
//   comment[media_comment_type]
//   comment[file_ids]
//   include[visibility]
//   submission[posted_grade]
//   submission[excuse]
//   rubric_assessment
// }
// return canvasRequest(grade_or_comment_on_submission_sections, {section_id, assignment_id, user_id}, query);
export const grade_or_comment_on_submission_sections = { type: "GRADE_OR_COMMENT_ON_SUBMISSION_SECTIONS", method: "put", reducer: 'submissions'};

// List gradeable students
// List students eligible to submit the assignment. The caller must have permission to view grades.
// 
// Section-limited instructors will only see students in their own sections.
// 
// returns [UserDisplay]
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/gradeable_students
//
// Example:
// return canvasRequest(list_gradeable_students, {course_id, assignment_id});
export const list_gradeable_students = { type: "LIST_GRADEABLE_STUDENTS", method: "get", reducer: 'submissions'};

// Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/submissions/update_grades
//
// Example:
// const query = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_courses_submissions, {course_id}, query);
export const grade_or_comment_on_multiple_submissions_courses_submissions = { type: "GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_SUBMISSIONS", method: "post", reducer: 'submissions'};

// Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/update_grades
//
// Example:
// const query = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_courses_assignments, {course_id, assignment_id}, query);
export const grade_or_comment_on_multiple_submissions_courses_assignments = { type: "GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_COURSES_ASSIGNMENTS", method: "post", reducer: 'submissions'};

// Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/submissions/update_grades
//
// Example:
// const query = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_sections_submissions, {section_id}, query);
export const grade_or_comment_on_multiple_submissions_sections_submissions = { type: "GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_SUBMISSIONS", method: "post", reducer: 'submissions'};

// Grade or comment on multiple submissions
// Update the grading and comments on multiple student's assignment
// submissions in an asynchronous job.
// 
// The user must have permission to manage grades in the appropriate context
// (course or section).
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/update_grades
//
// Example:
// const query = {
//   grade_data[<student_id>][posted_grade]
//   grade_data[<student_id>][rubric_assessment]
//   grade_data[<student_id>][text_comment]
//   grade_data[<student_id>][group_comment]
//   grade_data[<student_id>][media_comment_id]
//   grade_data[<student_id>][media_comment_type]
//   grade_data[<student_id>][file_ids]
// }
// return canvasRequest(grade_or_comment_on_multiple_submissions_sections_assignments, {section_id, assignment_id}, query);
export const grade_or_comment_on_multiple_submissions_sections_assignments = { type: "GRADE_OR_COMMENT_ON_MULTIPLE_SUBMISSIONS_SECTIONS_ASSIGNMENTS", method: "post", reducer: 'submissions'};

// Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_courses, {course_id, assignment_id, user_id});
export const mark_submission_as_read_courses = { type: "MARK_SUBMISSION_AS_READ_COURSES", method: "put", reducer: 'submissions'};

// Mark submission as read
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_read_sections, {section_id, assignment_id, user_id});
export const mark_submission_as_read_sections = { type: "MARK_SUBMISSION_AS_READ_SECTIONS", method: "put", reducer: 'submissions'};

// Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_courses, {course_id, assignment_id, user_id});
export const mark_submission_as_unread_courses = { type: "MARK_SUBMISSION_AS_UNREAD_COURSES", method: "delete", reducer: 'submissions'};

// Mark submission as unread
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/submissions.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/read
//
// Example:
// return canvasRequest(mark_submission_as_unread_sections, {section_id, assignment_id, user_id});
export const mark_submission_as_unread_sections = { type: "MARK_SUBMISSION_AS_UNREAD_SECTIONS", method: "delete", reducer: 'submissions'};