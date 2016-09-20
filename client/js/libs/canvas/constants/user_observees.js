//
// User Observees
//
// List observees
// List the users that the given user is observing.
// 
// *Note:* all users are allowed to list their own observees. Administrators can list
// other users' observees.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_observees, {user_id}, query);
export const list_observees = { type: "LIST_OBSERVEES", method: "get", key: "list_observeeslist_observees_user_id", required: ["user_id"] };

// Add an observee with credentials
// Register the given user to observe another user, given the observee's credentials.
// 
// *Note:* all users are allowed to add their own observees, given the observee's
// credentials or access token are provided. Administrators can add observees given credentials, access token or
// the {api:UserObserveesController#update observee's id}.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees
//
// Example:
// const query = {
//   observee[unique_id]
//   observee[password]
//   access_token
// }
// return canvasRequest(add_observee_with_credentials, {user_id}, query);
export const add_observee_with_credentials = { type: "ADD_OBSERVEE_WITH_CREDENTIALS", method: "post", key: "add_observee_with_credentialsadd_observee_with_credentials_user_id", required: ["user_id"] };

// Show an observee
// Gets information about an observed user.
// 
// *Note:* all users are allowed to view their own observees.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// return canvasRequest(show_observee, {user_id, observee_id});
export const show_observee = { type: "SHOW_OBSERVEE", method: "get", key: "show_observeeshow_observee_{user_id}_{observee_id}", required: ["user_id","observee_id"] };

// Add an observee
// Registers a user as being observed by the given user.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// return canvasRequest(add_observee, {user_id, observee_id});
export const add_observee = { type: "ADD_OBSERVEE", method: "put", key: "add_observeeadd_observee_{user_id}_{observee_id}", required: ["user_id","observee_id"] };

// Remove an observee
// Unregisters a user as being observed by the given user.
//
// API Docs: https://canvas.instructure.com/doc/api/user_observees.html
// API Url: users/{user_id}/observees/{observee_id}
//
// Example:
// return canvasRequest(remove_observee, {user_id, observee_id});
export const remove_observee = { type: "REMOVE_OBSERVEE", method: "delete", key: "remove_observeeremove_observee_{user_id}_{observee_id}", required: ["user_id","observee_id"] };