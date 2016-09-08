//
// Accounts
//
// List accounts
// List accounts that the current user can view or manage.  Typically,
// students and even teachers will get an empty list in response, only
// account admins can view the accounts that they are in.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_accounts, {}, query);
export const list_accounts = { type: "LIST_ACCOUNTS", method: "get", reducer: 'accounts'};

// List accounts for course admins
// List accounts that the current user can view through their admin course enrollments.
// (Teacher, TA, or designer enrollments).
// Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: course_accounts
//
// Example:
// return canvasRequest(list_accounts_for_course_admins, {});
export const list_accounts_for_course_admins = { type: "LIST_ACCOUNTS_FOR_COURSE_ADMINS", method: "get", reducer: 'accounts'};

// Get a single account
// Retrieve information on an individual account, given by id or sis
// sis_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}
//
// Example:
// return canvasRequest(get_single_account, {id});
export const get_single_account = { type: "GET_SINGLE_ACCOUNT", method: "get", reducer: 'accounts'};

// Get the sub-accounts of an account
// List accounts that are sub-accounts of the given account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
//
// Example:
// const query = {
//   recursive
// }
// return canvasRequest(get_sub_accounts_of_account, {account_id}, query);
export const get_sub_accounts_of_account = { type: "GET_SUB_ACCOUNTS_OF_ACCOUNT", method: "get", reducer: 'accounts'};

// List active courses in an account
// Retrieve the list of courses in this account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/courses
//
// Example:
// const query = {
//   with_enrollments
//   enrollment_type
//   published
//   completed
//   by_teachers
//   by_subaccounts
//   hide_enrollmentless_courses
//   state
//   enrollment_term_id
//   search_term
//   include
// }
// return canvasRequest(list_active_courses_in_account, {account_id}, query);
export const list_active_courses_in_account = { type: "LIST_ACTIVE_COURSES_IN_ACCOUNT", method: "get", reducer: 'accounts'};

// Update an account
// Update an existing account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}
//
// Example:
// const query = {
//   account[name]
//   account[default_time_zone]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
//   account[settings][restrict_student_past_view][value]
//   account[settings][restrict_student_past_view][locked]
//   account[settings][restrict_student_future_view][value]
//   account[settings][restrict_student_future_view][locked]
//   account[settings][restrict_student_future_listing][value]
//   account[settings][restrict_student_future_listing][locked]
// }
// return canvasRequest(update_account, {id}, query);
export const update_account = { type: "UPDATE_ACCOUNT", method: "put", reducer: 'accounts'};

// Delete a user from the root account
// Delete a user record from a Canvas root account. If a user is associated
// with multiple root accounts (in a multi-tenant instance of Canvas), this
// action will NOT remove them from the other accounts.
// 
// WARNING: This API will allow a user to remove themselves from the account.
// If they do this, they won't be able to make API calls or log into Canvas at
// that account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/users/{user_id}
//
// Example:
// return canvasRequest(delete_user_from_root_account, {account_id, user_id});
export const delete_user_from_root_account = { type: "DELETE_USER_FROM_ROOT_ACCOUNT", method: "delete", reducer: 'accounts'};

// Create a new root account
// to '1', service will be enabled. If '0', service will be disabled.
// Available services are:
//   * skype
//   * diigo
//   * delicious
//   * google_docs_previews
//   * avatars
// '1,' setting will be enabled. If '0,' setting will be disabled.
// The Salesforce Account Id to relate to the new account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts
//
// Example:
// const query = {
//   account[name]
//   account[domain]
//   account[services]
//   account[settings]
//   account[external_integration_keys][salesforce_account_id]
// }
// return canvasRequest(create_new_root_account, {}, query);
export const create_new_root_account = { type: "CREATE_NEW_ROOT_ACCOUNT", method: "post", reducer: 'accounts'};

// Create a new root account
// to '1', service will be enabled. If '0', service will be disabled.
// Available services are:
//   * skype
//   * diigo
//   * delicious
//   * google_docs_previews
//   * avatars
// '1,' setting will be enabled. If '0,' setting will be disabled.
// The Salesforce Account Id to relate to the new account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/root_accounts
//
// Example:
// const query = {
//   account[name]
//   account[domain]
//   account[services]
//   account[settings]
//   account[external_integration_keys][salesforce_account_id]
// }
// return canvasRequest(create_new_root_account_account_id, {account_id}, query);
export const create_new_root_account_account_id = { type: "CREATE_NEW_ROOT_ACCOUNT_ACCOUNT_ID", method: "post", reducer: 'accounts'};

// Search all users in consortium
// Returns the list of users with the provided search term.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/consortium_users
//
// Example:
// const query = {
//   search_term (required)
//   include
// }
// return canvasRequest(search_all_users_in_consortium_accounts, {account_id}, query);
export const search_all_users_in_consortium_accounts = { type: "SEARCH_ALL_USERS_IN_CONSORTIUM_ACCOUNTS", method: "get", reducer: 'accounts'};

// Search all users in consortium
// Returns the list of users with the provided search term.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: site_admin/users
//
// Example:
// const query = {
//   search_term (required)
//   include
// }
// return canvasRequest(search_all_users_in_consortium_site_admin, {}, query);
export const search_all_users_in_consortium_site_admin = { type: "SEARCH_ALL_USERS_IN_CONSORTIUM_SITE_ADMIN", method: "get", reducer: 'accounts'};

// Create a new sub-account
// Add a new sub-account to a given account.
//
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
//
// Example:
// const query = {
//   account[name] (required)
//   account[sis_account_id]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
// }
// return canvasRequest(create_new_sub_account, {account_id}, query);
export const create_new_sub_account = { type: "CREATE_NEW_SUB_ACCOUNT", method: "post", reducer: 'accounts'};