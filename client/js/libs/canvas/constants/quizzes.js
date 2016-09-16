//
// Quizzes
//
// List quizzes in a course
// Returns the list of Quizzes in this course.
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes
//
// Example:
// const query = {
//   search_term
// }
// return canvasRequest(list_quizzes_in_course, {course_id}, query);
export const list_quizzes_in_course = { type: "LIST_QUIZZES_IN_COURSE", method: "get", key: 'list_quizzes_in_course'};

// Get a single quiz
// Returns the quiz with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}
//
// Example:
// return canvasRequest(get_single_quiz, {course_id, id});
export const get_single_quiz = { type: "GET_SINGLE_QUIZ", method: "get", key: 'get_single_quiz'};

// Create a quiz
// Create a new quiz for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes
//
// Example:
// const query = {
//   quiz[title] (required)
//   quiz[description]
//   quiz[quiz_type]
//   quiz[assignment_group_id]
//   quiz[time_limit]
//   quiz[shuffle_answers]
//   quiz[hide_results]
//   quiz[show_correct_answers]
//   quiz[show_correct_answers_last_attempt]
//   quiz[show_correct_answers_at]
//   quiz[hide_correct_answers_at]
//   quiz[allowed_attempts]
//   quiz[scoring_policy]
//   quiz[one_question_at_a_time]
//   quiz[cant_go_back]
//   quiz[access_code]
//   quiz[ip_filter]
//   quiz[due_at]
//   quiz[lock_at]
//   quiz[unlock_at]
//   quiz[published]
//   quiz[one_time_results]
// }
// return canvasRequest(create_quiz, {course_id}, query);
export const create_quiz = { type: "CREATE_QUIZ", method: "post", key: 'create_quiz'};

// Edit a quiz
// Modify an existing quiz. See the documentation for quiz creation.
// 
// Additional arguments:
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}
//
// Example:
// const query = {
//   quiz[notify_of_update]
// }
// return canvasRequest(edit_quiz, {course_id, id}, query);
export const edit_quiz = { type: "EDIT_QUIZ", method: "put", key: 'edit_quiz'};

// Delete a quiz
// 
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}
//
// Example:
// return canvasRequest(delete_quiz, {course_id, id});
export const delete_quiz = { type: "DELETE_QUIZ", method: "delete", key: 'delete_quiz'};

// Reorder quiz items
// Change order of the quiz questions or groups within the quiz
// 
// <b>204 No Content</b> response code is returned if the reorder was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}/reorder
//
// Example:
// const query = {
//   order[id] (required)
//   order[type]
// }
// return canvasRequest(reorder_quiz_items, {course_id, id}, query);
export const reorder_quiz_items = { type: "REORDER_QUIZ_ITEMS", method: "post", key: 'reorder_quiz_items'};

// Validate quiz access code
// Accepts an access code and returns a boolean indicating whether that access code is correct
//
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}/validate_access_code
//
// Example:
// const query = {
//   access_code (required)
// }
// return canvasRequest(validate_quiz_access_code, {course_id, id}, query);
export const validate_quiz_access_code = { type: "VALIDATE_QUIZ_ACCESS_CODE", method: "post", key: 'validate_quiz_access_code'};