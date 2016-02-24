// Account Notifications

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
    
