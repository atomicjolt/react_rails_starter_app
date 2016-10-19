//
// Quiz Submission Questions
//
// Get all quiz submission questions.
// Get a list of all the question records for this quiz submission.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_quiz_submission_questions, {quiz_submission_id}, query);
export const get_all_quiz_submission_questions = { type: "GET_ALL_QUIZ_SUBMISSION_QUESTIONS", method: "get", key: "get_all_quiz_submission_questionsget_all_quiz_submission_questions_quiz_submission_id", required: ["quiz_submission_id"] };

// Answering questions
// Provide or update an answer to one or more QuizQuestions.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
//
// Example:
// const query = {
//   attempt (required)
//   validation_token (required)
//   access_code
//   quiz_questions
// }
// return canvasRequest(answering_questions, {quiz_submission_id}, query);
export const answering_questions = { type: "ANSWERING_QUESTIONS", method: "post", key: "answering_questionsanswering_questions_quiz_submission_id", required: ["quiz_submission_id"] };

// Flagging a question.
// Set a flag on a quiz question to indicate that you want to return to it
// later.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/flag
//
// Example:
// const query = {
//   attempt (required)
//   validation_token (required)
//   access_code
// }
// return canvasRequest(flagging_question, {quiz_submission_id, id}, query);
export const flagging_question = { type: "FLAGGING_QUESTION", method: "put", key: "flagging_questionflagging_question_{quiz_submission_id}_{id}", required: ["quiz_submission_id","id"] };

// Unflagging a question.
// Remove the flag that you previously set on a quiz question after you've
// returned to it.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/unflag
//
// Example:
// const query = {
//   attempt (required)
//   validation_token (required)
//   access_code
// }
// return canvasRequest(unflagging_question, {quiz_submission_id, id}, query);
export const unflagging_question = { type: "UNFLAGGING_QUESTION", method: "put", key: "unflagging_questionunflagging_question_{quiz_submission_id}_{id}", required: ["quiz_submission_id","id"] };