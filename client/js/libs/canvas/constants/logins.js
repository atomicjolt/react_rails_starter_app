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
export const list_user_logins_accounts = { type: "LIST_USER_LOGINS_ACCOUNTS", method: "get", key: "list_user_logins_accountslist_user_logins_accounts_account_id", required: ["account_id"] };

// List user logins
// Given a user ID, return that user's logins for the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins
//
// Example:
// return canvasRequest(list_user_logins_users, {user_id});
export const list_user_logins_users = { type: "LIST_USER_LOGINS_USERS", method: "get", key: "list_user_logins_userslist_user_logins_users_user_id", required: ["user_id"] };

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
export const create_user_login = { type: "CREATE_USER_LOGIN", method: "post", key: "create_user_logincreate_user_login_account_id", required: ["account_id"] };

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
export const edit_user_login = { type: "EDIT_USER_LOGIN", method: "put", key: "edit_user_loginedit_user_login_{account_id}_{id}", required: ["account_id","id"] };

// Delete a user login
// Delete an existing login.
//
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins/{id}
//
// Example:
// return canvasRequest(delete_user_login, {user_id, id});
export const delete_user_login = { type: "DELETE_USER_LOGIN", method: "delete", key: "delete_user_logindelete_user_login_{user_id}_{id}", required: ["user_id","id"] };