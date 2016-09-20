//
// Quiz Submissions
//
// Get all quiz submissions.
// Get a list of all submissions for this quiz. Users who can view or manage
// grades for a course will have submissions from multiple users returned. A
// user who can only submit will have only their own submissions returned. When
// a user has an in-progress submission, only that submission is returned. When
// there isn't an in-progress quiz_submission, all completed submissions,
// including previous attempts, are returned.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_quiz_submissions, {course_id, quiz_id}, query);
export const get_all_quiz_submissions = { type: "GET_ALL_QUIZ_SUBMISSIONS", method: "get", key: "get_all_quiz_submissionsget_all_quiz_submissions_{course_id}_{quiz_id}", required: ["course_id","quiz_id"] };

// Get the quiz submission.
// Get the submission for this quiz for the current user.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submission
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_quiz_submission, {course_id, quiz_id}, query);
export const get_quiz_submission = { type: "GET_QUIZ_SUBMISSION", method: "get", key: "get_quiz_submissionget_quiz_submission_{course_id}_{quiz_id}", required: ["course_id","quiz_id"] };

// Get a single quiz submission.
// Get a single quiz submission.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_quiz_submission, {course_id, quiz_id, id}, query);
export const get_single_quiz_submission = { type: "GET_SINGLE_QUIZ_SUBMISSION", method: "get", key: "get_single_quiz_submissionget_single_quiz_submission_{course_id}_{quiz_id}_{id}", required: ["course_id","quiz_id","id"] };

// Create the quiz submission (start a quiz-taking session)
// Start taking a Quiz by creating a QuizSubmission which you can use to answer
// questions and submit your answers.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>400 Bad Request</b> if the quiz is locked
// * <b>403 Forbidden</b> if an invalid access code is specified
// * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
// * <b>409 Conflict</b> if a QuizSubmission already exists for this user and quiz
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions
//
// Example:
// const query = {
//   access_code
//   preview
// }
// return canvasRequest(create_quiz_submission_start_quiz_taking_session, {course_id, quiz_id}, query);
export const create_quiz_submission_start_quiz_taking_session = { type: "CREATE_QUIZ_SUBMISSION_START_QUIZ_TAKING_SESSION", method: "post", key: "create_quiz_submission_start_quiz_taking_sessioncreate_quiz_submission_start_quiz_taking_session_{course_id}_{quiz_id}", required: ["course_id","quiz_id"] };

// Update student question scores and comments.
// Update the amount of points a student has scored for questions they've
// answered, provide comments for the student about their answer(s), or simply
// fudge the total score by a specific amount of points.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not a teacher in this course
// * <b>400 Bad Request</b> if the attempt parameter is missing or invalid
// * <b>400 Bad Request</b> if the specified QS attempt is not yet complete
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}
//
// Example:
// const query = {
//   attempt (required)
//   fudge_points
//   questions
// }
// return canvasRequest(update_student_question_scores_and_comments, {course_id, quiz_id, id}, query);
export const update_student_question_scores_and_comments = { type: "UPDATE_STUDENT_QUESTION_SCORES_AND_COMMENTS", method: "put", key: "update_student_question_scores_and_commentsupdate_student_question_scores_and_comments_{course_id}_{quiz_id}_{id}", required: ["course_id","quiz_id","id"] };

// Complete the quiz submission (turn it in).
// Complete the quiz submission by marking it as complete and grading it. When
// the quiz submission has been marked as complete, no further modifications
// will be allowed.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if an invalid access code is specified
// * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
// * <b>403 Forbidden</b> if an invalid token is specified
// * <b>400 Bad Request</b> if the QS is already complete
// * <b>400 Bad Request</b> if the attempt parameter is missing
// * <b>400 Bad Request</b> if the attempt parameter is not the latest attempt
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/complete
//
// Example:
// const query = {
//   attempt (required)
//   validation_token (required)
//   access_code
// }
// return canvasRequest(complete_quiz_submission_turn_it_in, {course_id, quiz_id, id}, query);
export const complete_quiz_submission_turn_it_in = { type: "COMPLETE_QUIZ_SUBMISSION_TURN_IT_IN", method: "post", key: "complete_quiz_submission_turn_it_incomplete_quiz_submission_turn_it_in_{course_id}_{quiz_id}_{id}", required: ["course_id","quiz_id","id"] };

// Get current quiz submission times.
// Get the current timing data for the quiz attempt, both the end_at timestamp
// and the time_left parameter.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/time
//
// Example:
// return canvasRequest(get_current_quiz_submission_times, {course_id, quiz_id, id});
export const get_current_quiz_submission_times = { type: "GET_CURRENT_QUIZ_SUBMISSION_TIMES", method: "get", key: "get_current_quiz_submission_timesget_current_quiz_submission_times_{course_id}_{quiz_id}_{id}", required: ["course_id","quiz_id","id"] };