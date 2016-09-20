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
// return canvasRequest(quiz_extensions_set_extensions_for_student_quiz_submissions, {course_id, quiz_id}, query);
export const quiz_extensions_set_extensions_for_student_quiz_submissions = { type: "QUIZ_EXTENSIONS_SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS", method: "post", key: "quiz_extensions_set_extensions_for_student_quiz_submissionsquiz_extensions_set_extensions_for_student_quiz_submissions_{course_id}_{quiz_id}", required: ["course_id","quiz_id"] };