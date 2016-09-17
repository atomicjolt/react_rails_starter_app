//
// Content Migrations
//
// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_accounts, {account_id, content_migration_id});
export const list_migration_issues_accounts = { type: "LIST_MIGRATION_ISSUES_ACCOUNTS", method: "get"};

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_courses, {course_id, content_migration_id});
export const list_migration_issues_courses = { type: "LIST_MIGRATION_ISSUES_COURSES", method: "get"};

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_groups, {group_id, content_migration_id});
export const list_migration_issues_groups = { type: "LIST_MIGRATION_ISSUES_GROUPS", method: "get"};

// List migration issues
// Returns paginated migration issues
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues
//
// Example:
// return canvasRequest(list_migration_issues_users, {user_id, content_migration_id});
export const list_migration_issues_users = { type: "LIST_MIGRATION_ISSUES_USERS", method: "get"};

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_accounts, {account_id, content_migration_id, id});
export const get_migration_issue_accounts = { type: "GET_MIGRATION_ISSUE_ACCOUNTS", method: "get"};

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_courses, {course_id, content_migration_id, id});
export const get_migration_issue_courses = { type: "GET_MIGRATION_ISSUE_COURSES", method: "get"};

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_groups, {group_id, content_migration_id, id});
export const get_migration_issue_groups = { type: "GET_MIGRATION_ISSUE_GROUPS", method: "get"};

// Get a migration issue
// Returns data on an individual migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// return canvasRequest(get_migration_issue_users, {user_id, content_migration_id, id});
export const get_migration_issue_users = { type: "GET_MIGRATION_ISSUE_USERS", method: "get"};

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const query = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_accounts, {account_id, content_migration_id, id}, query);
export const update_migration_issue_accounts = { type: "UPDATE_MIGRATION_ISSUE_ACCOUNTS", method: "put"};

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const query = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_courses, {course_id, content_migration_id, id}, query);
export const update_migration_issue_courses = { type: "UPDATE_MIGRATION_ISSUE_COURSES", method: "put"};

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const query = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_groups, {group_id, content_migration_id, id}, query);
export const update_migration_issue_groups = { type: "UPDATE_MIGRATION_ISSUE_GROUPS", method: "put"};

// Update a migration issue
// Update the workflow_state of a migration issue
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}
//
// Example:
// const query = {
//   workflow_state (required)
// }
// return canvasRequest(update_migration_issue_users, {user_id, content_migration_id, id}, query);
export const update_migration_issue_users = { type: "UPDATE_MIGRATION_ISSUE_USERS", method: "put"};

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_accounts, {account_id});
export const list_content_migrations_accounts = { type: "LIST_CONTENT_MIGRATIONS_ACCOUNTS", method: "get"};

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_courses, {course_id});
export const list_content_migrations_courses = { type: "LIST_CONTENT_MIGRATIONS_COURSES", method: "get"};

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_groups, {group_id});
export const list_content_migrations_groups = { type: "LIST_CONTENT_MIGRATIONS_GROUPS", method: "get"};

// List content migrations
// Returns paginated content migrations
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations
//
// Example:
// return canvasRequest(list_content_migrations_users, {user_id});
export const list_content_migrations_users = { type: "LIST_CONTENT_MIGRATIONS_USERS", method: "get"};

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_accounts, {account_id, id});
export const get_content_migration_accounts = { type: "GET_CONTENT_MIGRATION_ACCOUNTS", method: "get"};

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_courses, {course_id, id});
export const get_content_migration_courses = { type: "GET_CONTENT_MIGRATION_COURSES", method: "get"};

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_groups, {group_id, id});
export const get_content_migration_groups = { type: "GET_CONTENT_MIGRATION_GROUPS", method: "get"};

// Get a content migration
// Returns data on an individual content migration
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(get_content_migration_users, {user_id, id});
export const get_content_migration_users = { type: "GET_CONTENT_MIGRATION_USERS", method: "get"};

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations
//
// Example:
// const query = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
// }
// return canvasRequest(create_content_migration_accounts, {account_id}, query);
export const create_content_migration_accounts = { type: "CREATE_CONTENT_MIGRATION_ACCOUNTS", method: "post"};

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations
//
// Example:
// const query = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
// }
// return canvasRequest(create_content_migration_courses, {course_id}, query);
export const create_content_migration_courses = { type: "CREATE_CONTENT_MIGRATION_COURSES", method: "post"};

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations
//
// Example:
// const query = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
// }
// return canvasRequest(create_content_migration_groups, {group_id}, query);
export const create_content_migration_groups = { type: "CREATE_CONTENT_MIGRATION_GROUPS", method: "post"};

// Create a content migration
// Create a content migration. If the migration requires a file to be uploaded
// the actual processing of the file will start once the file upload process is completed.
// File uploading works as described in the {file:file_uploads.html File Upload Documentation}
// except that the values are set on a *pre_attachment* sub-hash.
// 
// For migrations that don't require a file to be uploaded, like course copy, the
// processing will begin as soon as the migration is created.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the migration. The migration's progress is linked to with the
// _progress_url_ value.
// 
// The two general workflows are:
// 
// If no file upload is needed:
// 
// 1. POST to create
// 2. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
// For file uploading:
// 
// 1. POST to create with file info in *pre_attachment*
// 2. Do {file:file_uploads.html file upload processing} using the data in the *pre_attachment* data
// 3. {api:ContentMigrationsController#show GET} the ContentMigration
// 4. Use the {api:ProgressController#show Progress} specified in _progress_url_ to monitor progress
// 
//  (required if doing .zip file upload)
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations
//
// Example:
// const query = {
//   migration_type (required)
//   pre_attachment[name]
//   pre_attachment[*]
//   settings[file_url]
//   settings[source_course_id]
//   settings[folder_id]
//   settings[overwrite_quizzes]
//   settings[question_bank_id]
//   settings[question_bank_name]
//   date_shift_options[shift_dates]
//   date_shift_options[old_start_date]
//   date_shift_options[old_end_date]
//   date_shift_options[new_start_date]
//   date_shift_options[new_end_date]
//   date_shift_options[day_substitutions][X]
//   date_shift_options[remove_dates]
// }
// return canvasRequest(create_content_migration_users, {user_id}, query);
export const create_content_migration_users = { type: "CREATE_CONTENT_MIGRATION_USERS", method: "post"};

// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_accounts, {account_id, id});
export const update_content_migration_accounts = { type: "UPDATE_CONTENT_MIGRATION_ACCOUNTS", method: "put"};

// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_courses, {course_id, id});
export const update_content_migration_courses = { type: "UPDATE_CONTENT_MIGRATION_COURSES", method: "put"};

// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_groups, {group_id, id});
export const update_content_migration_groups = { type: "UPDATE_CONTENT_MIGRATION_GROUPS", method: "put"};

// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}
//
// Example:
// return canvasRequest(update_content_migration_users, {user_id, id});
export const update_content_migration_users = { type: "UPDATE_CONTENT_MIGRATION_USERS", method: "put"};

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_accounts, {account_id});
export const list_migration_systems_accounts = { type: "LIST_MIGRATION_SYSTEMS_ACCOUNTS", method: "get"};

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_courses, {course_id});
export const list_migration_systems_courses = { type: "LIST_MIGRATION_SYSTEMS_COURSES", method: "get"};

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_groups, {group_id});
export const list_migration_systems_groups = { type: "LIST_MIGRATION_SYSTEMS_GROUPS", method: "get"};

// List Migration Systems
// Lists the currently available migration types. These values may change.
//
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/migrators
//
// Example:
// return canvasRequest(list_migration_systems_users, {user_id});
export const list_migration_systems_users = { type: "LIST_MIGRATION_SYSTEMS_USERS", method: "get"};