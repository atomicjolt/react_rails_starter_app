//
// Quiz Reports
//
// Retrieve all quiz reports
// Returns a list of all available reports.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports
//
// Example:
// const query = {
//   includes_all_versions
// }
// return canvasRequest(retrieve_all_quiz_reports, {course_id, quiz_id}, query);
export const retrieve_all_quiz_reports = { type: "RETRIEVE_ALL_QUIZ_REPORTS", method: "get", key: 'retrieve_all_quiz_reports'};

// Create a quiz report
// Create and return a new report for this quiz. If a previously
// generated report matches the arguments and is still current (i.e.
// there have been no new submissions), it will be returned.
// 
// *Responses*
// 
// * <code>400 Bad Request</code> if the specified report type is invalid
// * <code>409 Conflict</code> if a quiz report of the specified type is already being
//   generated
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports
//
// Example:
// const query = {
//   quiz_report[report_type] (required)
//   quiz_report[includes_all_versions]
//   include
// }
// return canvasRequest(create_quiz_report, {course_id, quiz_id}, query);
export const create_quiz_report = { type: "CREATE_QUIZ_REPORT", method: "post", key: 'create_quiz_report'};

// Get a quiz report
// Returns the data for a single quiz report.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_quiz_report, {course_id, quiz_id, id}, query);
export const get_quiz_report = { type: "GET_QUIZ_REPORT", method: "get", key: 'get_quiz_report'};

// Abort the generation of a report, or remove a previously generated one
// This API allows you to cancel a previous request you issued for a report to
// be generated. Or in the case of an already generated report, you'd like to
// remove it, perhaps to generate it another time with an updated version that
// provides new features.
// 
// You must check the report's generation status before attempting to use this
// interface. See the "workflow_state" property of the QuizReport's Progress
// object for more information. Only when the progress reports itself in a
// "queued" state can the generation be aborted.
// 
// *Responses*
// 
// - <code>204 No Content</code> if your request was accepted
// - <code>422 Unprocessable Entity</code> if the report is not being generated
//   or can not be aborted at this stage
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports/{id}
//
// Example:
// return canvasRequest(abort_generation_of_report_or_remove_previously_generated_one, {course_id, quiz_id, id});
export const abort_generation_of_report_or_remove_previously_generated_one = { type: "ABORT_GENERATION_OF_REPORT_OR_REMOVE_PREVIOUSLY_GENERATED_ONE", method: "delete", key: 'abort_generation_of_report_or_remove_previously_generated_one'};