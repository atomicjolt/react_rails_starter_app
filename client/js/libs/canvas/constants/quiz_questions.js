//
// Quiz Questions
//
// List questions in a quiz or a submission
// Returns the list of QuizQuestions in this quiz.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions
//
// Example:
// const query = {
//   quiz_submission_id
//   quiz_submission_attempt
// }
// return canvasRequest(list_questions_in_quiz_or_submission, {course_id, quiz_id}, query);
export const list_questions_in_quiz_or_submission = { type: "LIST_QUESTIONS_IN_QUIZ_OR_SUBMISSION", method: "get", key: 'list_questions_in_quiz_or_submission'};

// Get a single quiz question
// Returns the quiz question with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}
//
// Example:
// return canvasRequest(get_single_quiz_question, {course_id, quiz_id, id});
export const get_single_quiz_question = { type: "GET_SINGLE_QUIZ_QUESTION", method: "get", key: 'get_single_quiz_question'};

// Create a single quiz question
// Create a new quiz question for this quiz
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions
//
// Example:
// const query = {
//   question[question_name]
//   question[question_text]
//   question[quiz_group_id]
//   question[question_type]
//   question[position]
//   question[points_possible]
//   question[correct_comments]
//   question[incorrect_comments]
//   question[neutral_comments]
//   question[text_after_answers]
//   question[answers]
// }
// return canvasRequest(create_single_quiz_question, {course_id, quiz_id}, query);
export const create_single_quiz_question = { type: "CREATE_SINGLE_QUIZ_QUESTION", method: "post", key: 'create_single_quiz_question'};

// Update an existing quiz question
// Updates an existing quiz question for this quiz
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}
//
// Example:
// const query = {
//   question[question_name]
//   question[question_text]
//   question[quiz_group_id]
//   question[question_type]
//   question[position]
//   question[points_possible]
//   question[correct_comments]
//   question[incorrect_comments]
//   question[neutral_comments]
//   question[text_after_answers]
//   question[answers]
// }
// return canvasRequest(update_existing_quiz_question, {course_id, quiz_id, id}, query);
export const update_existing_quiz_question = { type: "UPDATE_EXISTING_QUIZ_QUESTION", method: "put", key: 'update_existing_quiz_question'};

// Delete a quiz question
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}
//
// Example:
// return canvasRequest(delete_quiz_question, {course_id, quiz_id, id});
export const delete_quiz_question = { type: "DELETE_QUIZ_QUESTION", method: "delete", key: 'delete_quiz_question'};