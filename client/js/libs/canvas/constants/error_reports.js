//
// Error Reports
//
// Create Error Report
// Create a new error report documenting an experienced problem
// 
// Performs the same action as when a user uses the "help -> report a problem"
// dialog.
//
// API Docs: https://canvas.instructure.com/doc/api/error_reports.html
// API Url: error_reports
//
// Example:
// const query = {
//   error[subject] (required)
//   error[url]
//   error[email]
//   error[comments]
//   error[http_env]
// }
// return canvasRequest(create_error_report, {}, query);
export const create_error_report = { type: "CREATE_ERROR_REPORT", method: "post", key: 'create_error_report'};