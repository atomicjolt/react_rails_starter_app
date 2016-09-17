//
// Moderated Grading
//
// List students selected for moderation
// 
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students
//
// Example:
// return canvasRequest(list_students_selected_for_moderation, {course_id, assignment_id});
export const list_students_selected_for_moderation = { type: "LIST_STUDENTS_SELECTED_FOR_MODERATION", method: "get"};

// Select students for moderation
// Returns an array of users that were selected for moderation
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students
//
// Example:
// const query = {
//   student_ids
// }
// return canvasRequest(select_students_for_moderation, {course_id, assignment_id}, query);
export const select_students_for_moderation = { type: "SELECT_STUDENTS_FOR_MODERATION", method: "post"};

// Show provisional grade status for a student
// Tell whether the student's submission needs one or more provisional grades.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/status
//
// Example:
// const query = {
//   student_id
// }
// return canvasRequest(show_provisional_grade_status_for_student, {course_id, assignment_id}, query);
export const show_provisional_grade_status_for_student = { type: "SHOW_PROVISIONAL_GRADE_STATUS_FOR_STUDENT", method: "get"};

// Select provisional grade
// Choose which provisional grade the student should receive for a submission.
// The caller must have :moderate_grades rights.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select
//
// Example:
// return canvasRequest(select_provisional_grade, {course_id, assignment_id, provisional_grade_id});
export const select_provisional_grade = { type: "SELECT_PROVISIONAL_GRADE", method: "put"};

// Copy provisional grade
// Given a provisional grade, copy the grade (and associated submission comments and rubric assessments)
// to a "final" mark which can be edited or commented upon by a moderator prior to publication of grades.
// 
// Notes:
// * The student must be in the moderation set for the assignment.
// * The newly created grade will be selected.
// * The caller must have "Moderate Grades" rights in the course.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/copy_to_final_mark
//
// Example:
// return canvasRequest(copy_provisional_grade, {course_id, assignment_id, provisional_grade_id});
export const copy_provisional_grade = { type: "COPY_PROVISIONAL_GRADE", method: "post"};

// Publish provisional grades for an assignment
// Publish the selected provisional grade for all submissions to an assignment.
// Use the "Select provisional grade" endpoint to choose which provisional grade to publish
// for a particular submission.
// 
// Students not in the moderation set will have their one and only provisional grade published.
// 
// WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
//
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish
//
// Example:
// return canvasRequest(publish_provisional_grades_for_assignment, {course_id, assignment_id});
export const publish_provisional_grades_for_assignment = { type: "PUBLISH_PROVISIONAL_GRADES_FOR_ASSIGNMENT", method: "post"};