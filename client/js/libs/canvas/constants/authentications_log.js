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
export const query_by_login = { type: "QUERY_BY_LOGIN", method: "get", key: "query_by_loginquery_by_login_login_id", required: ["login_id"] };

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
export const query_by_account = { type: "QUERY_BY_ACCOUNT", method: "get", key: "query_by_accountquery_by_account_account_id", required: ["account_id"] };

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
export const query_by_user = { type: "QUERY_BY_USER", method: "get", key: "query_by_userquery_by_user_user_id", required: ["user_id"] };