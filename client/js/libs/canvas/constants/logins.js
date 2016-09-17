//
// Logins
//
// List user logins
// Given a user ID, return that user's logins for the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins
//
// Example:
// return canvasRequest(list_user_logins_accounts, {account_id});
export const list_user_logins_accounts = { type: "LIST_USER_LOGINS_ACCOUNTS", method: "get"};

// List user logins
// Given a user ID, return that user's logins for the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins
//
// Example:
// return canvasRequest(list_user_logins_users, {user_id});
export const list_user_logins_users = { type: "LIST_USER_LOGINS_USERS", method: "get"};

// Create a user login
// Create a new login for an existing user in the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins
//
// Example:
// const query = {
//   user[id] (required)
//   login[unique_id] (required)
//   login[password]
//   login[sis_user_id]
//   login[integration_id]
//   login[authentication_provider_id]
// }
// return canvasRequest(create_user_login, {account_id}, query);
export const create_user_login = { type: "CREATE_USER_LOGIN", method: "post"};

// Edit a user login
// Update an existing login for a user in the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins/{id}
//
// Example:
// const query = {
//   login[unique_id]
//   login[password]
//   login[sis_user_id]
//   login[integration_id]
// }
// return canvasRequest(edit_user_login, {account_id, id}, query);
export const edit_user_login = { type: "EDIT_USER_LOGIN", method: "put"};

// Delete a user login
// Delete an existing login.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins/{id}
//
// Example:
// return canvasRequest(delete_user_login, {user_id, id});
export const delete_user_login = { type: "DELETE_USER_LOGIN", method: "delete"};