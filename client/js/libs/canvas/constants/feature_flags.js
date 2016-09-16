//
// Feature Flags
//
// List features
// List all features that apply to a given Account, Course, or User.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features
//
// Example:
// return canvasRequest(list_features_courses, {course_id});
export const list_features_courses = { type: "LIST_FEATURES_COURSES", method: "get", key: 'list_features_courses'};

// List features
// List all features that apply to a given Account, Course, or User.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features
//
// Example:
// return canvasRequest(list_features_accounts, {account_id});
export const list_features_accounts = { type: "LIST_FEATURES_ACCOUNTS", method: "get", key: 'list_features_accounts'};

// List features
// List all features that apply to a given Account, Course, or User.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features
//
// Example:
// return canvasRequest(list_features_users, {user_id});
export const list_features_users = { type: "LIST_FEATURES_USERS", method: "get", key: 'list_features_users'};

// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/enabled
//
// Example:
// return canvasRequest(list_enabled_features_courses, {course_id});
export const list_enabled_features_courses = { type: "LIST_ENABLED_FEATURES_COURSES", method: "get", key: 'list_enabled_features_courses'};

// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/enabled
//
// Example:
// return canvasRequest(list_enabled_features_accounts, {account_id});
export const list_enabled_features_accounts = { type: "LIST_ENABLED_FEATURES_ACCOUNTS", method: "get", key: 'list_enabled_features_accounts'};

// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/enabled
//
// Example:
// return canvasRequest(list_enabled_features_users, {user_id});
export const list_enabled_features_users = { type: "LIST_ENABLED_FEATURES_USERS", method: "get", key: 'list_enabled_features_users'};

// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(get_feature_flag_courses, {course_id, feature});
export const get_feature_flag_courses = { type: "GET_FEATURE_FLAG_COURSES", method: "get", key: 'get_feature_flag_courses'};

// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(get_feature_flag_accounts, {account_id, feature});
export const get_feature_flag_accounts = { type: "GET_FEATURE_FLAG_ACCOUNTS", method: "get", key: 'get_feature_flag_accounts'};

// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(get_feature_flag_users, {user_id, feature});
export const get_feature_flag_users = { type: "GET_FEATURE_FLAG_USERS", method: "get", key: 'get_feature_flag_users'};

// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}
//
// Example:
// const query = {
//   state
// }
// return canvasRequest(set_feature_flag_courses, {course_id, feature}, query);
export const set_feature_flag_courses = { type: "SET_FEATURE_FLAG_COURSES", method: "put", key: 'set_feature_flag_courses'};

// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}
//
// Example:
// const query = {
//   state
// }
// return canvasRequest(set_feature_flag_accounts, {account_id, feature}, query);
export const set_feature_flag_accounts = { type: "SET_FEATURE_FLAG_ACCOUNTS", method: "put", key: 'set_feature_flag_accounts'};

// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}
//
// Example:
// const query = {
//   state
// }
// return canvasRequest(set_feature_flag_users, {user_id, feature}, query);
export const set_feature_flag_users = { type: "SET_FEATURE_FLAG_USERS", method: "put", key: 'set_feature_flag_users'};

// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(remove_feature_flag_courses, {course_id, feature});
export const remove_feature_flag_courses = { type: "REMOVE_FEATURE_FLAG_COURSES", method: "delete", key: 'remove_feature_flag_courses'};

// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(remove_feature_flag_accounts, {account_id, feature});
export const remove_feature_flag_accounts = { type: "REMOVE_FEATURE_FLAG_ACCOUNTS", method: "delete", key: 'remove_feature_flag_accounts'};

// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
//
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}
//
// Example:
// return canvasRequest(remove_feature_flag_users, {user_id, feature});
export const remove_feature_flag_users = { type: "REMOVE_FEATURE_FLAG_USERS", method: "delete", key: 'remove_feature_flag_users'};