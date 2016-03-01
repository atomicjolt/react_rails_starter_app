//
// Quiz Extensions
//
// Set extensions for student quiz submissions
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_extensions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/extensions
//
// Example:
// const query = {
//   user_id (required)
//   extra_attempts
//   extra_time
//   manually_unlocked
//   extend_from_now
//   extend_from_end_at
// }
// return canvasRequest(set_extensions_for_student_quiz_submissions, {course_id, quiz_id}, query);
export const set_extensions_for_student_quiz_submissions = { type: "SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS", method: "post", reducer: 'quiz_extensions'};