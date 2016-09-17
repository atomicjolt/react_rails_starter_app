//
// Account Notifications
//
// Index of active global notification for the user
// Returns a list of all global notifications in the account for this user
// Any notifications that have been closed by the user will not be returned
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/users/{user_id}/account_notifications
//
// Example:
// return canvasRequest(index_of_active_global_notification_for_user, {account_id, user_id});
export const index_of_active_global_notification_for_user = { type: "INDEX_OF_ACTIVE_GLOBAL_NOTIFICATION_FOR_USER", method: "get"};

// Show a global notification
// Returns a global notification
// A notification that has been closed by the user will not be returned
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/users/{user_id}/account_notifications/{id}
//
// Example:
// return canvasRequest(show_global_notification, {account_id, user_id, id});
export const show_global_notification = { type: "SHOW_GLOBAL_NOTIFICATION", method: "get"};

// Close notification for user
// If the user no long wants to see this notification it can be excused with this call
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/users/{user_id}/account_notifications/{id}
//
// Example:
// return canvasRequest(close_notification_for_user, {account_id, user_id, id});
export const close_notification_for_user = { type: "CLOSE_NOTIFICATION_FOR_USER", method: "delete"};

// Create a global notification
// Create and return a new global notification for an account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications
//
// Example:
// const query = {
//   account_notification[subject] (required)
//   account_notification[message] (required)
//   account_notification[start_at] (required)
//   account_notification[end_at] (required)
//   account_notification[icon]
//   account_notification_roles
// }
// return canvasRequest(create_global_notification, {account_id}, query);
export const create_global_notification = { type: "CREATE_GLOBAL_NOTIFICATION", method: "post"};

// Update a global notification
// Update global notification for an account.
//
// API Docs: https://canvas.instructure.com/doc/api/account_notifications.html
// API Url: accounts/{account_id}/account_notifications/{id}
//
// Example:
// const query = {
//   account_notification[subject]
//   account_notification[message]
//   account_notification[start_at]
//   account_notification[end_at]
//   account_notification[icon]
//   account_notification_roles
// }
// return canvasRequest(update_global_notification, {account_id, id}, query);
export const update_global_notification = { type: "UPDATE_GLOBAL_NOTIFICATION", method: "put"};