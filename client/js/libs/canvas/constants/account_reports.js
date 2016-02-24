// Account Reports

// Search account domains
// Returns a list of up to 5 matching account domains
// 
// Partial match on name / domain are supported
// API Docs: https://canvas.instructure.com/doc/api/account_domain_lookups.html
// API Url: accounts/search
// Query Params:
//   name
//   domain
//   latitude
//   longitude
// return canvasRequest(CanvasConstants.search_account_domains, {}, query);
export const search_account_domains = { type: "SEARCH_ACCOUNT_DOMAINS", method: "get", reducer: 'account_domain_lookups'};
    
// Index of active global notification for the user
// Returns a list of all global notifications in the account for this user
// Any notifications that have been closed by the user will not be returned
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/users/{user_id}/account_notifications[]
// return canvasRequest(CanvasConstants.index_of_active_global_notification_for_user, {account_id, user_id}, query);
export const index_of_active_global_notification_for_user = { type: "INDEX_OF_ACTIVE_GLOBAL_NOTIFICATION_FOR_USER", method: "get", reducer: 'account_notifications'};
    
// Close notification for user
// If the user no long wants to see this notification it can be excused with this call
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/users/{user_id}/account_notifications/{id}[]
// return canvasRequest(CanvasConstants.close_notification_for_user, {account_id, user_id, id}, query);
export const close_notification_for_user = { type: "CLOSE_NOTIFICATION_FOR_USER", method: "delete", reducer: 'account_notifications'};
    
// Create a global notification
// Create and return a new global notification for an account.
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications
// Query Params:
//   account_notification[subject]
//   account_notification[message]
//   account_notification[start_at]
//   account_notification[end_at]
//   account_notification[icon]
//   account_notification_roles
// return canvasRequest(CanvasConstants.create_global_notification, {account_id}, query);
export const create_global_notification = { type: "CREATE_GLOBAL_NOTIFICATION", method: "post", reducer: 'account_notifications'};
    
// List Available Reports
// Returns the list of reports for the current context.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports[]
// return canvasRequest(CanvasConstants.list_available_reports, {account_id}, query);
export const list_available_reports = { type: "LIST_AVAILABLE_REPORTS", method: "get", reducer: 'account_reports'};
    
// Start a Report
// Generates a report instance for the account.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}
// Query Params:
//   [parameters]
// return canvasRequest(CanvasConstants.start_report, {account_id, report}, query);
export const start_report = { type: "START_REPORT", method: "post", reducer: 'account_reports'};
    
// Index of Reports
// Shows all reports that have been run for the account of a specific type.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}[]
// return canvasRequest(CanvasConstants.index_of_reports, {account_id, report}, query);
export const index_of_reports = { type: "INDEX_OF_REPORTS", method: "get", reducer: 'account_reports'};
    
// Status of a Report
// Returns the status of a report.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}[]
// return canvasRequest(CanvasConstants.status_of_report, {account_id, report, id}, query);
export const status_of_report = { type: "STATUS_OF_REPORT", method: "get", reducer: 'account_reports'};
    
// Delete a Report
// Deletes a generated report instance.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}[]
// return canvasRequest(CanvasConstants.delete_report, {account_id, report, id}, query);
export const delete_report = { type: "DELETE_REPORT", method: "delete", reducer: 'account_reports'};
    
