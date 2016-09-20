//
// Quiz Statistics
//
// Fetching the latest quiz statistics
// This endpoint provides statistics for all quiz versions, or for a specific
// quiz version, in which case the output is guaranteed to represent the
// _latest_ and most current version of the quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_statistics.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/statistics
//
// Example:
// const query = {
//   all_versions
// }
// return canvasRequest(fetching_latest_quiz_statistics, {course_id, quiz_id}, query);
export const fetching_latest_quiz_statistics = { type: "FETCHING_LATEST_QUIZ_STATISTICS", method: "get", key: "fetching_latest_quiz_statisticsfetching_latest_quiz_statistics_{course_id}_{quiz_id}", required: ["course_id","quiz_id"] };