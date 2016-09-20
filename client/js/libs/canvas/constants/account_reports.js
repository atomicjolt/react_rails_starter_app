//
// Account Reports
//
// List Available Reports
// Returns the list of reports for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports
//
// Example:
// return canvasRequest(list_available_reports, {account_id});
export const list_available_reports = { type: "LIST_AVAILABLE_REPORTS", method: "get", key: "list_available_reportslist_available_reports_account_id", required: ["account_id"] };

// Start a Report
// Generates a report instance for the account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}
//
// Example:
// const query = {
//   [parameters]
// }
// return canvasRequest(start_report, {account_id, report}, query);
export const start_report = { type: "START_REPORT", method: "post", key: "start_reportstart_report_{account_id}_{report}", required: ["account_id","report"] };

// Index of Reports
// Shows all reports that have been run for the account of a specific type.
//
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}
//
// Example:
// return canvasRequest(index_of_reports, {account_id, report});
export const index_of_reports = { type: "INDEX_OF_REPORTS", method: "get", key: "index_of_reportsindex_of_reports_{account_id}_{report}", required: ["account_id","report"] };

// Status of a Report
// Returns the status of a report.
//
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}
//
// Example:
// return canvasRequest(status_of_report, {account_id, report, id});
export const status_of_report = { type: "STATUS_OF_REPORT", method: "get", key: "status_of_reportstatus_of_report_{account_id}_{report}_{id}", required: ["account_id","report","id"] };

// Delete a Report
// Deletes a generated report instance.
//
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}
//
// Example:
// return canvasRequest(delete_report, {account_id, report, id});
export const delete_report = { type: "DELETE_REPORT", method: "delete", key: "delete_reportdelete_report_{account_id}_{report}_{id}", required: ["account_id","report","id"] };