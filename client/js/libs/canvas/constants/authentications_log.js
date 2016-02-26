//
// Authentications Log
//
// Query by login.
// List authentication events for a given login.
//
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/logins/{login_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_login, {login_id}, query);
export const query_by_login = { type: "QUERY_BY_LOGIN", method: "get", reducer: 'authentications_log'};

// Query by account.
// List authentication events for a given account.
//
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/accounts/{account_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_account, {account_id}, query);
export const query_by_account = { type: "QUERY_BY_ACCOUNT", method: "get", reducer: 'authentications_log'};

// Query by user.
// List authentication events for a given user.
//
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/users/{user_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_user, {user_id}, query);
export const query_by_user = { type: "QUERY_BY_USER", method: "get", reducer: 'authentications_log'};