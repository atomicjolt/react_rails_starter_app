// Discussion Topics

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
    
// List Available Reports
// Returns the list of reports for the current context.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports[]
// return canvasRequest(CanvasConstants.list_available_reports, {account_id}, query);
export const list_available_reports = { type: "LIST_AVAILABLE_REPORTS", method: "get", reducer: 'account_reports'};
    
// Start a Report
// Generates a report instance for the account.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}
// Query Params:
//   [parameters]
// return canvasRequest(CanvasConstants.start_report, {account_id, report}, query);
export const start_report = { type: "START_REPORT", method: "post", reducer: 'account_reports'};
    
// Index of Reports
// Shows all reports that have been run for the account of a specific type.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}[]
// return canvasRequest(CanvasConstants.index_of_reports, {account_id, report}, query);
export const index_of_reports = { type: "INDEX_OF_REPORTS", method: "get", reducer: 'account_reports'};
    
// Status of a Report
// Returns the status of a report.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}[]
// return canvasRequest(CanvasConstants.status_of_report, {account_id, report, id}, query);
export const status_of_report = { type: "STATUS_OF_REPORT", method: "get", reducer: 'account_reports'};
    
// Delete a Report
// Deletes a generated report instance.
// API Docs: https://canvas.instructure.com/doc/api/account_reports.html
// API Url: accounts/{account_id}/reports/{report}/{id}[]
// return canvasRequest(CanvasConstants.delete_report, {account_id, report, id}, query);
export const delete_report = { type: "DELETE_REPORT", method: "delete", reducer: 'account_reports'};
    
// List accounts
// List accounts that the current user can view or manage.  Typically,
// students and even teachers will get an empty list in response, only
// account admins can view the accounts that they are in.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts
// Query Params:
//   include
// return canvasRequest(CanvasConstants.list_accounts, {}, query);
export const list_accounts = { type: "LIST_ACCOUNTS", method: "get", reducer: 'accounts'};
    
// List accounts for course admins
// List accounts that the current user can view through their admin course enrollments.
// (Teacher, TA, or designer enrollments).
// Only returns "id", "name", "workflow_state", "root_account_id" and "parent_account_id"
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: course_accounts
// return canvasRequest(CanvasConstants.list_accounts_for_course_admins, {}, query);
export const list_accounts_for_course_admins = { type: "LIST_ACCOUNTS_FOR_COURSE_ADMINS", method: "get", reducer: 'accounts'};
    
// Get a single account
// Retrieve information on an individual account, given by id or sis
// sis_account_id.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}[]
// return canvasRequest(CanvasConstants.get_single_account, {id}, query);
export const get_single_account = { type: "GET_SINGLE_ACCOUNT", method: "get", reducer: 'accounts'};
    
// Get the sub-accounts of an account
// List accounts that are sub-accounts of the given account.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
// Query Params:
//   recursive
// return canvasRequest(CanvasConstants.get_sub_accounts_of_account, {account_id}, query);
export const get_sub_accounts_of_account = { type: "GET_SUB_ACCOUNTS_OF_ACCOUNT", method: "get", reducer: 'accounts'};
    
// List active courses in an account
// Retrieve the list of courses in this account.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/courses
// Query Params:
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
// return canvasRequest(CanvasConstants.list_active_courses_in_account, {account_id}, query);
export const list_active_courses_in_account = { type: "LIST_ACTIVE_COURSES_IN_ACCOUNT", method: "get", reducer: 'accounts'};
    
// Update an account
// Update an existing account.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{id}
// Query Params:
//   account[name]
//   account[default_time_zone]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
//   account[settings][restrict_student_past_view]
//   account[settings][restrict_student_future_view]
// return canvasRequest(CanvasConstants.update_account, {id}, query);
export const update_account = { type: "UPDATE_ACCOUNT", method: "put", reducer: 'accounts'};
    
// Delete a user from the root account
// Delete a user record from a Canvas root account. If a user is associated
// with multiple root accounts (in a multi-tenant instance of Canvas), this
// action will NOT remove them from the other accounts.
// 
// WARNING: This API will allow a user to remove themselves from the account.
// If they do this, they won't be able to make API calls or log into Canvas at
// that account.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/users/{user_id}[]
// return canvasRequest(CanvasConstants.delete_user_from_root_account, {account_id, user_id}, query);
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
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts
// Query Params:
//   account[name]
//   account[domain]
//   account[services]
//   account[settings]
//   account[external_integration_keys][salesforce_account_id]
// return canvasRequest(CanvasConstants.create_new_root_account, {}, query);
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
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/root_accounts
// Query Params:
//   account[name]
//   account[domain]
//   account[services]
//   account[settings]
//   account[external_integration_keys][salesforce_account_id]
// return canvasRequest(CanvasConstants.create_new_root_account_account_id, {account_id}, query);
export const create_new_root_account_account_id = { type: "CREATE_NEW_ROOT_ACCOUNT_ACCOUNT_ID", method: "post", reducer: 'accounts'};
    
// Create a new sub-account
// Add a new sub-account to a given account.
// API Docs: https://canvas.instructure.com/doc/api/accounts.html
// API Url: accounts/{account_id}/sub_accounts
// Query Params:
//   account[name]
//   account[sis_account_id]
//   account[default_storage_quota_mb]
//   account[default_user_storage_quota_mb]
//   account[default_group_storage_quota_mb]
// return canvasRequest(CanvasConstants.create_new_sub_account, {account_id}, query);
export const create_new_sub_account = { type: "CREATE_NEW_SUB_ACCOUNT", method: "post", reducer: 'accounts'};
    
// Make an account admin
// Flag an existing user as an admin within the account.
// API Docs: https://canvas.instructure.com/doc/api/admins.html
// API Url: accounts/{account_id}/admins
// Query Params:
//   user_id
//   role
//   role_id
//   send_confirmation
// return canvasRequest(CanvasConstants.make_account_admin, {account_id}, query);
export const make_account_admin = { type: "MAKE_ACCOUNT_ADMIN", method: "post", reducer: 'admins'};
    
// Remove account admin
// Remove the rights associated with an account admin role from a user.
// API Docs: https://canvas.instructure.com/doc/api/admins.html
// API Url: accounts/{account_id}/admins/{user_id}
// Query Params:
//   role
//   role_id
// return canvasRequest(CanvasConstants.remove_account_admin, {account_id, user_id}, query);
export const remove_account_admin = { type: "REMOVE_ACCOUNT_ADMIN", method: "delete", reducer: 'admins'};
    
// List account admins
// List the admins in the account
// API Docs: https://canvas.instructure.com/doc/api/admins.html
// API Url: accounts/{account_id}/admins
// Query Params:
//   user_id
// return canvasRequest(CanvasConstants.list_account_admins, {account_id}, query);
export const list_account_admins = { type: "LIST_ACCOUNT_ADMINS", method: "get", reducer: 'admins'};
    
// Get department-level participation data
// Returns page view hits summed across all courses in the department. Two
// groupings of these counts are returned; one by day (+by_date+), the other
// by category (+by_category+). The possible categories are announcements,
// assignments, collaborations, conferences, discussions, files, general,
// grades, groups, modules, other, pages, and quizzes.
// 
// This and the other department-level endpoints have three variations which
// all return the same style of data but for different subsets of courses. All
// share the prefix /api/v1/accounts/<account_id>/analytics. The possible
// suffixes are:
// 
//  * /current: includes all available courses in the default term
//  * /completed: includes all concluded courses in the default term
//  * /terms/<term_id>: includes all available or concluded courses in the
//    given term.
// 
// Courses not yet offered or which have been deleted are never included.
// 
// /current and /completed are intended for use when the account has only one
// term. /terms/<term_id> is intended for use when the account has multiple
// terms.
// 
// The action follows the suffix.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/terms/{term_id}/activity[]
// return canvasRequest(CanvasConstants.get_department_level_participation_data_terms, {account_id, term_id}, query);
export const get_department_level_participation_data_terms = { type: "GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_TERMS", method: "get", reducer: 'analytics'};
    
// Get department-level participation data
// Returns page view hits summed across all courses in the department. Two
// groupings of these counts are returned; one by day (+by_date+), the other
// by category (+by_category+). The possible categories are announcements,
// assignments, collaborations, conferences, discussions, files, general,
// grades, groups, modules, other, pages, and quizzes.
// 
// This and the other department-level endpoints have three variations which
// all return the same style of data but for different subsets of courses. All
// share the prefix /api/v1/accounts/<account_id>/analytics. The possible
// suffixes are:
// 
//  * /current: includes all available courses in the default term
//  * /completed: includes all concluded courses in the default term
//  * /terms/<term_id>: includes all available or concluded courses in the
//    given term.
// 
// Courses not yet offered or which have been deleted are never included.
// 
// /current and /completed are intended for use when the account has only one
// term. /terms/<term_id> is intended for use when the account has multiple
// terms.
// 
// The action follows the suffix.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/current/activity[]
// return canvasRequest(CanvasConstants.get_department_level_participation_data_current, {account_id}, query);
export const get_department_level_participation_data_current = { type: "GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_CURRENT", method: "get", reducer: 'analytics'};
    
// Get department-level participation data
// Returns page view hits summed across all courses in the department. Two
// groupings of these counts are returned; one by day (+by_date+), the other
// by category (+by_category+). The possible categories are announcements,
// assignments, collaborations, conferences, discussions, files, general,
// grades, groups, modules, other, pages, and quizzes.
// 
// This and the other department-level endpoints have three variations which
// all return the same style of data but for different subsets of courses. All
// share the prefix /api/v1/accounts/<account_id>/analytics. The possible
// suffixes are:
// 
//  * /current: includes all available courses in the default term
//  * /completed: includes all concluded courses in the default term
//  * /terms/<term_id>: includes all available or concluded courses in the
//    given term.
// 
// Courses not yet offered or which have been deleted are never included.
// 
// /current and /completed are intended for use when the account has only one
// term. /terms/<term_id> is intended for use when the account has multiple
// terms.
// 
// The action follows the suffix.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/completed/activity[]
// return canvasRequest(CanvasConstants.get_department_level_participation_data_completed, {account_id}, query);
export const get_department_level_participation_data_completed = { type: "GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_COMPLETED", method: "get", reducer: 'analytics'};
    
// Get department-level grade data
// Returns the distribution of grades for students in courses in the
// department.  Each data point is one student's current grade in one course;
// if a student is in multiple courses, he contributes one value per course,
// but if he's enrolled multiple times in the same course (e.g. a lecture
// section and a lab section), he only constributes on value for that course.
// 
// Grades are binned to the nearest integer score; anomalous grades outside
// the 0 to 100 range are ignored. The raw counts are returned, not yet
// normalized by the total count.
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/terms/{term_id}/grades[]
// return canvasRequest(CanvasConstants.get_department_level_grade_data_terms, {account_id, term_id}, query);
export const get_department_level_grade_data_terms = { type: "GET_DEPARTMENT_LEVEL_GRADE_DATA_TERMS", method: "get", reducer: 'analytics'};
    
// Get department-level grade data
// Returns the distribution of grades for students in courses in the
// department.  Each data point is one student's current grade in one course;
// if a student is in multiple courses, he contributes one value per course,
// but if he's enrolled multiple times in the same course (e.g. a lecture
// section and a lab section), he only constributes on value for that course.
// 
// Grades are binned to the nearest integer score; anomalous grades outside
// the 0 to 100 range are ignored. The raw counts are returned, not yet
// normalized by the total count.
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/current/grades[]
// return canvasRequest(CanvasConstants.get_department_level_grade_data_current, {account_id}, query);
export const get_department_level_grade_data_current = { type: "GET_DEPARTMENT_LEVEL_GRADE_DATA_CURRENT", method: "get", reducer: 'analytics'};
    
// Get department-level grade data
// Returns the distribution of grades for students in courses in the
// department.  Each data point is one student's current grade in one course;
// if a student is in multiple courses, he contributes one value per course,
// but if he's enrolled multiple times in the same course (e.g. a lecture
// section and a lab section), he only constributes on value for that course.
// 
// Grades are binned to the nearest integer score; anomalous grades outside
// the 0 to 100 range are ignored. The raw counts are returned, not yet
// normalized by the total count.
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/completed/grades[]
// return canvasRequest(CanvasConstants.get_department_level_grade_data_completed, {account_id}, query);
export const get_department_level_grade_data_completed = { type: "GET_DEPARTMENT_LEVEL_GRADE_DATA_COMPLETED", method: "get", reducer: 'analytics'};
    
// Get department-level statistics
// Returns numeric statistics about the department and term (or filter).
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/terms/{term_id}/statistics[]
// return canvasRequest(CanvasConstants.get_department_level_statistics_terms, {account_id, term_id}, query);
export const get_department_level_statistics_terms = { type: "GET_DEPARTMENT_LEVEL_STATISTICS_TERMS", method: "get", reducer: 'analytics'};
    
// Get department-level statistics
// Returns numeric statistics about the department and term (or filter).
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/current/statistics[]
// return canvasRequest(CanvasConstants.get_department_level_statistics_current, {account_id}, query);
export const get_department_level_statistics_current = { type: "GET_DEPARTMENT_LEVEL_STATISTICS_CURRENT", method: "get", reducer: 'analytics'};
    
// Get department-level statistics
// Returns numeric statistics about the department and term (or filter).
// 
// Shares the same variations on endpoint as the participation data.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: accounts/{account_id}/analytics/completed/statistics[]
// return canvasRequest(CanvasConstants.get_department_level_statistics_completed, {account_id}, query);
export const get_department_level_statistics_completed = { type: "GET_DEPARTMENT_LEVEL_STATISTICS_COMPLETED", method: "get", reducer: 'analytics'};
    
// Get course-level participation data
// Returns page view hits and participation numbers grouped by day through the
// entire history of the course. Page views is returned as a hash, where the
// hash keys are dates in the format "YYYY-MM-DD". The page_views result set
// includes page views broken out by access category. Participations is
// returned as an array of dates in the format "YYYY-MM-DD".
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/activity[]
// return canvasRequest(CanvasConstants.get_course_level_participation_data, {course_id}, query);
export const get_course_level_participation_data = { type: "GET_COURSE_LEVEL_PARTICIPATION_DATA", method: "get", reducer: 'analytics'};
    
// Get course-level assignment data
// Returns a list of assignments for the course sorted by due date. For
// each assignment returns basic assignment information, the grade breakdown,
// and a breakdown of on-time/late status of homework submissions.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/assignments
// Query Params:
//   async
// return canvasRequest(CanvasConstants.get_course_level_assignment_data, {course_id}, query);
export const get_course_level_assignment_data = { type: "GET_COURSE_LEVEL_ASSIGNMENT_DATA", method: "get", reducer: 'analytics'};
    
// Get course-level student summary data
// Returns a summary of per-user access information for all students in
// a course. This includes total page views, total participations, and a
// breakdown of on-time/late status for all homework submissions in the course.
// The data is returned as a list in lexical order on the student name.
// 
// Each student's summary also includes the maximum number of page views and
// participations by any student in the course, which may be useful for some
// visualizations (since determining maximums client side can be tricky with
// pagination).
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/student_summaries[]
// return canvasRequest(CanvasConstants.get_course_level_student_summary_data, {course_id}, query);
export const get_course_level_student_summary_data = { type: "GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA", method: "get", reducer: 'analytics'};
    
// Get user-in-a-course-level participation data
// Returns page view hits grouped by hour, and participation details through the
// entire history of the course.
// 
// `page_views` are returned as a hash, where the keys are iso8601 dates, bucketed by the hour.
// `participations` are returned as an array of hashes, sorted oldest to newest.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/users/{student_id}/activity[]
// return canvasRequest(CanvasConstants.get_user_in_a_course_level_participation_data, {course_id, student_id}, query);
export const get_user_in_a_course_level_participation_data = { type: "GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA", method: "get", reducer: 'analytics'};
    
// Get user-in-a-course-level assignment data
// Returns a list of assignments for the course sorted by due date. For
// each assignment returns basic assignment information, the grade breakdown
// (including the student's actual grade), and the basic submission
// information for the student's submission if it exists.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/users/{student_id}/assignments[]
// return canvasRequest(CanvasConstants.get_user_in_a_course_level_assignment_data, {course_id, student_id}, query);
export const get_user_in_a_course_level_assignment_data = { type: "GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA", method: "get", reducer: 'analytics'};
    
// Get user-in-a-course-level messaging data
// Returns messaging "hits" grouped by day through the entire history of the
// course. Returns a hash containing the number of instructor-to-student messages,
// and student-to-instructor messages, where the hash keys are dates
// in the format "YYYY-MM-DD". Message hits include Conversation messages and
// comments on homework submissions.
// API Docs: https://canvas.instructure.com/doc/api/analytics.html
// API Url: courses/{course_id}/analytics/users/{student_id}/communication[]
// return canvasRequest(CanvasConstants.get_user_in_a_course_level_messaging_data, {course_id, student_id}, query);
export const get_user_in_a_course_level_messaging_data = { type: "GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA", method: "get", reducer: 'analytics'};
    
// List external feeds
// Returns the list of External Feeds this course or group.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds[]
// return canvasRequest(CanvasConstants.list_external_feeds_courses, {course_id}, query);
export const list_external_feeds_courses = { type: "LIST_EXTERNAL_FEEDS_COURSES", method: "get", reducer: 'announcement_external_feeds'};
    
// List external feeds
// Returns the list of External Feeds this course or group.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds[]
// return canvasRequest(CanvasConstants.list_external_feeds_groups, {group_id}, query);
export const list_external_feeds_groups = { type: "LIST_EXTERNAL_FEEDS_GROUPS", method: "get", reducer: 'announcement_external_feeds'};
    
// Create an external feed
// Create a new external feed for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds
// Query Params:
//   url
//   header_match
//   verbosity
// return canvasRequest(CanvasConstants.create_external_feed_courses, {course_id}, query);
export const create_external_feed_courses = { type: "CREATE_EXTERNAL_FEED_COURSES", method: "post", reducer: 'announcement_external_feeds'};
    
// Create an external feed
// Create a new external feed for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds
// Query Params:
//   url
//   header_match
//   verbosity
// return canvasRequest(CanvasConstants.create_external_feed_groups, {group_id}, query);
export const create_external_feed_groups = { type: "CREATE_EXTERNAL_FEED_GROUPS", method: "post", reducer: 'announcement_external_feeds'};
    
// Delete an external feed
// Deletes the external feed.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds/{external_feed_id}[]
// return canvasRequest(CanvasConstants.delete_external_feed_courses, {course_id, external_feed_id}, query);
export const delete_external_feed_courses = { type: "DELETE_EXTERNAL_FEED_COURSES", method: "delete", reducer: 'announcement_external_feeds'};
    
// Delete an external feed
// Deletes the external feed.
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds/{external_feed_id}[]
// return canvasRequest(CanvasConstants.delete_external_feed_groups, {group_id, external_feed_id}, query);
export const delete_external_feed_groups = { type: "DELETE_EXTERNAL_FEED_GROUPS", method: "delete", reducer: 'announcement_external_feeds'};
    
// List appointment groups
// Retrieve the list of appointment groups that can be reserved or managed by
// the current user.
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups
// Query Params:
//   scope
//   context_codes
//   include_past_appointments
//   include
// return canvasRequest(CanvasConstants.list_appointment_groups, {}, query);
export const list_appointment_groups = { type: "LIST_APPOINTMENT_GROUPS", method: "get", reducer: 'appointment_groups'};
    
// Create an appointment group
// Create and return a new appointment group. If new_appointments are
// specified, the response will return a new_appointments array (same format
// as appointments array, see "List appointment groups" action)
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups
// Query Params:
//   appointment_group[context_codes]
//   appointment_group[sub_context_codes]
//   appointment_group[title]
//   appointment_group[description]
//   appointment_group[location_name]
//   appointment_group[location_address]
//   appointment_group[publish]
//   appointment_group[participants_per_appointment]
//   appointment_group[min_appointments_per_participant]
//   appointment_group[max_appointments_per_participant]
//   appointment_group[new_appointments][X]
//   appointment_group[participant_visibility]
// return canvasRequest(CanvasConstants.create_appointment_group, {}, query);
export const create_appointment_group = { type: "CREATE_APPOINTMENT_GROUP", method: "post", reducer: 'appointment_groups'};
    
// Get a single appointment group
// Returns information for a single appointment group
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_single_appointment_group, {id}, query);
export const get_single_appointment_group = { type: "GET_SINGLE_APPOINTMENT_GROUP", method: "get", reducer: 'appointment_groups'};
    
// Update an appointment group
// Update and return an appointment group. If new_appointments are specified,
// the response will return a new_appointments array (same format as
// appointments array, see "List appointment groups" action).
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
// Query Params:
//   appointment_group[context_codes]
//   appointment_group[sub_context_codes]
//   appointment_group[title]
//   appointment_group[description]
//   appointment_group[location_name]
//   appointment_group[location_address]
//   appointment_group[publish]
//   appointment_group[participants_per_appointment]
//   appointment_group[min_appointments_per_participant]
//   appointment_group[max_appointments_per_participant]
//   appointment_group[new_appointments][X]
//   appointment_group[participant_visibility]
// return canvasRequest(CanvasConstants.update_appointment_group, {id}, query);
export const update_appointment_group = { type: "UPDATE_APPOINTMENT_GROUP", method: "put", reducer: 'appointment_groups'};
    
// Delete an appointment group
// Delete an appointment group (and associated time slots and reservations)
// and return the deleted group
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}
// Query Params:
//   cancel_reason
// return canvasRequest(CanvasConstants.delete_appointment_group, {id}, query);
export const delete_appointment_group = { type: "DELETE_APPOINTMENT_GROUP", method: "delete", reducer: 'appointment_groups'};
    
// List user participants
// List users that are (or may be) participating in this appointment group.
// Refer to the Users API for the response fields. Returns no results for
// appointment groups with the "Group" participant_type.
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}/users
// Query Params:
//   registration_status
// return canvasRequest(CanvasConstants.list_user_participants, {id}, query);
export const list_user_participants = { type: "LIST_USER_PARTICIPANTS", method: "get", reducer: 'appointment_groups'};
    
// List student group participants
// List student groups that are (or may be) participating in this appointment
// group. Refer to the Groups API for the response fields. Returns no results
// for appointment groups with the "User" participant_type.
// API Docs: https://canvas.instructure.com/doc/api/appointment_groups.html
// API Url: appointment_groups/{id}/groups
// Query Params:
//   registration_status
// return canvasRequest(CanvasConstants.list_student_group_participants, {id}, query);
export const list_student_group_participants = { type: "LIST_STUDENT_GROUP_PARTICIPANTS", method: "get", reducer: 'appointment_groups'};
    
// List assignment groups
// Returns the list of assignment groups for the current context. The returned
// groups are sorted by their position field.
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
// Query Params:
//   include
//   override_assignment_dates
//   grading_period_id
//   scope_assignments_to_student
// return canvasRequest(CanvasConstants.list_assignment_groups, {course_id}, query);
export const list_assignment_groups = { type: "LIST_ASSIGNMENT_GROUPS", method: "get", reducer: 'assignment_groups'};
    
// Get an Assignment Group
// Returns the assignment group with the given id.
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
// Query Params:
//   include
//   override_assignment_dates
//   grading_period_id
// return canvasRequest(CanvasConstants.get_assignment_group, {course_id, assignment_group_id}, query);
export const get_assignment_group = { type: "GET_ASSIGNMENT_GROUP", method: "get", reducer: 'assignment_groups'};
    
// Create an Assignment Group
// Create a new assignment group for this course.
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
// Query Params:
//   name
//   position
//   group_weight
//   rules
// return canvasRequest(CanvasConstants.create_assignment_group, {course_id}, query);
export const create_assignment_group = { type: "CREATE_ASSIGNMENT_GROUP", method: "post", reducer: 'assignment_groups'};
    
// Edit an Assignment Group
// Modify an existing Assignment Group.
// Accepts the same parameters as Assignment Group creation
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}[]
// return canvasRequest(CanvasConstants.edit_assignment_group, {course_id, assignment_group_id}, query);
export const edit_assignment_group = { type: "EDIT_ASSIGNMENT_GROUP", method: "put", reducer: 'assignment_groups'};
    
// Destroy an Assignment Group
// Deletes the assignment group with the given id.
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
// Query Params:
//   move_assignments_to
// return canvasRequest(CanvasConstants.destroy_assignment_group, {course_id, assignment_group_id}, query);
export const destroy_assignment_group = { type: "DESTROY_ASSIGNMENT_GROUP", method: "delete", reducer: 'assignment_groups'};
    
// Delete an assignment
// Delete the given assignment.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}[]
// return canvasRequest(CanvasConstants.delete_assignment, {course_id, id}, query);
export const delete_assignment = { type: "DELETE_ASSIGNMENT", method: "delete", reducer: 'assignments'};
    
// List assignments
// Returns the list of assignments for the current context.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
// Query Params:
//   include
//   search_term
//   override_assignment_dates
//   needs_grading_count_by_section
//   bucket
// return canvasRequest(CanvasConstants.list_assignments, {course_id}, query);
export const list_assignments = { type: "LIST_ASSIGNMENTS", method: "get", reducer: 'assignments'};
    
// List assignments for user
// Returns the list of assignments for the specified user if the current user has rights to view.
// See {api:AssignmentsApiController#index List assignments} for valid arguments.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: users/{user_id}/courses/{course_id}/assignments[]
// return canvasRequest(CanvasConstants.list_assignments_for_user, {user_id, course_id}, query);
export const list_assignments_for_user = { type: "LIST_ASSIGNMENTS_FOR_USER", method: "get", reducer: 'assignments'};
    
// Get a single assignment
// Returns the assignment with the given id.
//  "observed_users" is passed, submissions for observed users will also be included.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
// Query Params:
//   include
//   override_assignment_dates
//   needs_grading_count_by_section
//   all_dates
// return canvasRequest(CanvasConstants.get_single_assignment, {course_id, id}, query);
export const get_single_assignment = { type: "GET_SINGLE_ASSIGNMENT", method: "get", reducer: 'assignments'};
    
// Create an assignment
// Create a new assignment for this course. The assignment is created in the
// active state.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
// Query Params:
//   assignment[name]
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[turnitin_settings]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[muted]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
// return canvasRequest(CanvasConstants.create_assignment, {course_id}, query);
export const create_assignment = { type: "CREATE_ASSIGNMENT", method: "post", reducer: 'assignments'};
    
// Edit an assignment
// Modify an existing assignment.
// 
// If the assignment [assignment_overrides] key is absent, any existing
// overrides are kept as is. If the assignment [assignment_overrides] key is
// present, existing overrides are updated or deleted (and new ones created,
// as necessary) to match the provided list.
// 
// NOTE: The assignment overrides feature is in beta.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
// Query Params:
//   assignment[name]
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[turnitin_settings]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[muted]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
// return canvasRequest(CanvasConstants.edit_assignment, {course_id, id}, query);
export const edit_assignment = { type: "EDIT_ASSIGNMENT", method: "put", reducer: 'assignments'};
    
// List assignment overrides
// Returns the list of overrides for this assignment that target
// sections/groups/students visible to the current user.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides[]
// return canvasRequest(CanvasConstants.list_assignment_overrides, {course_id, assignment_id}, query);
export const list_assignment_overrides = { type: "LIST_ASSIGNMENT_OVERRIDES", method: "get", reducer: 'assignments'};
    
// Get a single assignment override
// Returns details of the the override with the given id.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}[]
// return canvasRequest(CanvasConstants.get_single_assignment_override, {course_id, assignment_id, id}, query);
export const get_single_assignment_override = { type: "GET_SINGLE_ASSIGNMENT_OVERRIDE", method: "get", reducer: 'assignments'};
    
// Redirect to the assignment override for a group
// Responds with a redirect to the override for the given group, if any
// (404 otherwise).
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: groups/{group_id}/assignments/{assignment_id}/override[]
// return canvasRequest(CanvasConstants.redirect_to_assignment_override_for_group, {group_id, assignment_id}, query);
export const redirect_to_assignment_override_for_group = { type: "REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_GROUP", method: "get", reducer: 'assignments'};
    
// Redirect to the assignment override for a section
// Responds with a redirect to the override for the given section, if any
// (404 otherwise).
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: sections/{course_section_id}/assignments/{assignment_id}/override[]
// return canvasRequest(CanvasConstants.redirect_to_assignment_override_for_section, {course_section_id, assignment_id}, query);
export const redirect_to_assignment_override_for_section = { type: "REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_SECTION", method: "get", reducer: 'assignments'};
    
// Create an assignment override
// One of student_ids, group_id, or course_section_id must be present. At most
// one should be present; if multiple are present only the most specific
// (student_ids first, then group_id, then course_section_id) is used and any
// others are ignored.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides
// Query Params:
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[group_id]
//   assignment_override[course_section_id]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// return canvasRequest(CanvasConstants.create_assignment_override, {course_id, assignment_id}, query);
export const create_assignment_override = { type: "CREATE_ASSIGNMENT_OVERRIDE", method: "post", reducer: 'assignments'};
    
// Update an assignment override
// All current overridden values must be supplied if they are to be retained;
// e.g. if due_at was overridden, but this PUT omits a value for due_at,
// due_at will no longer be overridden. If the override is adhoc and
// student_ids is not supplied, the target override set is unchanged. Target
// override sets cannot be changed for group or section overrides.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
// Query Params:
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// return canvasRequest(CanvasConstants.update_assignment_override, {course_id, assignment_id, id}, query);
export const update_assignment_override = { type: "UPDATE_ASSIGNMENT_OVERRIDE", method: "put", reducer: 'assignments'};
    
// Delete an assignment override
// Deletes an override and returns its former details.
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}[]
// return canvasRequest(CanvasConstants.delete_assignment_override, {course_id, assignment_id, id}, query);
export const delete_assignment_override = { type: "DELETE_ASSIGNMENT_OVERRIDE", method: "delete", reducer: 'assignments'};
    
// List authentication providers
// Returns the list of authentication providers
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/authentication_providers[]
// return canvasRequest(CanvasConstants.list_authentication_providers_authentication_providers, {account_id}, query);
export const list_authentication_providers_authentication_providers = { type: "LIST_AUTHENTICATION_PROVIDERS_AUTHENTICATION_PROVIDERS", method: "get", reducer: 'authentication_providers'};
    
// List authentication providers
// Returns the list of authentication providers
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs[]
// return canvasRequest(CanvasConstants.list_authentication_providers_account_authorization_configs, {account_id}, query);
export const list_authentication_providers_account_authorization_configs = { type: "LIST_AUTHENTICATION_PROVIDERS_ACCOUNT_AUTHORIZATION_CONFIGS", method: "get", reducer: 'authentication_providers'};
    
// Add authentication provider
// Add external authentication provider(s) for the account.
// Services may be CAS, Facebook, GitHub, Google, LDAP, OpenID Connect,
// LinkedIn, SAML, or Twitter.
// 
// Each authentication provider is specified as a set of parameters as
// described below. A provider specification must include an 'auth_type'
// parameter with a value of 'canvas', 'cas', 'facebook', 'github', 'google',
// 'ldap', 'linkedin', 'openid_connect', 'saml', or 'twitter'. The other recognized
// parameters depend on this auth_type; unrecognized parameters are discarded.
// Provider specifications not specifying a valid auth_type are ignored.
// 
// _Deprecated_[2015-05-08] Any provider specification may include an
// optional 'login_handle_name' parameter. This parameter specifies the
// label used for unique login identifiers; for example: 'Login',
// 'Username', 'Student ID', etc. The default is 'Email'.
// _Deprecated_[2015-05-20] Any provider specification besides LDAP may include
// an optional 'unknown_user_url' parameters. This parameters specifies a url
// to redirect to when a user is authorized but is not found in Canvas.
// _Deprecated_ [Use update_sso_settings instead]
// 
// You can set the 'position' for any configuration. The config in the 1st position
// is considered the default. You can set 'jit_provisioning' for any configuration
// besides Canvas.
// 
// For Canvas, the additional recognized parameter is:
// 
// - self_registration
// 
//   'all', 'none', or 'observer' - who is allowed to register as a new user
// 
// For CAS, the additional recognized parameters are:
// 
// - auth_base
// 
//   The CAS server's URL.
// 
// - log_in_url [Optional]
// 
//   An alternate SSO URL for logging into CAS. You probably should not set
//   this.
// 
// - unknown_user_url [Optional] _Deprecated_ [2015-05-20: use update_sso_settings instead]
// 
//   A url to redirect to when a user is authorized through CAS but is not
//   found in Canvas.
// 
// For Facebook, the additional recognized parameters are:
// 
// - app_id [Required]
// 
//   The Facebook App ID. Not available if configured globally for Canvas.
// 
// - app_secret [Required]
// 
//   The Facebook App Secret. Not available if configured globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'email'
// 
// For GitHub, the additional recognized parameters are:
// 
// - domain [Optional]
// 
//   The domain of a GitHub Enterprise installation. I.e.
//   github.mycompany.com. If not set, it will default to the public
//   github.com.
// 
// - client_id [Required]
// 
//   The GitHub application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The GitHub application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'login'
// 
// For Google, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The Google application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The Google application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - hosted_domain [Optional]
// 
//   A Google Apps domain to restrict logins to. See
//   https://developers.google.com/identity/protocols/OpenIDConnect?hl=en#hd-param
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'sub' (the default), or 'email'
// 
// For LDAP, the additional recognized parameters are:
// 
// - auth_host
// 
//   The LDAP server's URL.
// 
// - auth_port [Optional, Integer]
// 
//   The LDAP server's TCP port. (default: 389)
// 
// - auth_over_tls [Optional]
// 
//   Whether to use TLS. Can be '', 'simple_tls', or 'start_tls'. For backwards
//   compatibility, booleans are also accepted, with true meaning simple_tls.
//   If not provided, it will default to start_tls.
// 
// - auth_base [Optional]
// 
//   A default treebase parameter for searches performed against the LDAP
//   server.
// 
// - auth_filter
// 
//   LDAP search filter. Use !{{login}} as a placeholder for the username
//   supplied by the user. For example: "(sAMAccountName=!{{login}})".
// 
// - identifier_format [Optional]
// 
//   The LDAP attribute to use to look up the Canvas login. Omit to use
//   the username supplied by the user.
// 
// - auth_username
// 
//   Username
// 
// - auth_password
// 
//   Password
// 
// - change_password_url [Optional] _Deprecated_ [2015-05-08: use update_sso_settings instead]
// 
//   Forgot Password URL. Leave blank for default Canvas behavior.
// 
// For LinkedIn, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The LinkedIn application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The LinkedIn application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'emailAddress'
// 
// For OpenID Connect, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The application's Client ID.
// 
// - client_secret [Required]
// 
//   The application's Client Secret.
// 
// - authorize_url [Required]
// 
//   The URL for getting starting the OAuth 2.0 web flow
// 
// - token_url [Required]
// 
//   The URL for exchanging the OAuth 2.0 authorization code for an access
//   token and id token
// 
// - scope [Optional]
// 
//   Space separated additional scopes to request for the token.
// 
// - login_attribute [Optional]
// 
//   The attribute of the ID token to look up the user's login in Canvas.
//   Defaults to 'sub'.
// 
// For SAML, the additional recognized parameters are:
// 
// - idp_entity_id
// 
//   The SAML IdP's entity ID
// 
// - log_in_url
// 
//   The SAML service's SSO target URL
// 
// - log_out_url
// 
//   The SAML service's SLO target URL
// 
// - certificate_fingerprint
// 
//   The SAML service's certificate fingerprint.
// 
// - change_password_url [Optional] _Deprecated_ [2015-05-08: use update_sso_settings instead]
// 
//   Forgot Password URL. Leave blank for default Canvas behavior.
// 
// - unknown_user_url [Optional] _Deprecated_ [2015-05-20: use update_sso_settings instead]
// 
//   A url to redirect to when a user is authorized through SAML but is not
//   found in Canvas.
// 
// - identifier_format
// 
//   The SAML service's identifier format. Must be one of:
// 
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:entity
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:transient
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName
// 
// - requested_authn_context
// 
//   The SAML AuthnContext
// 
// For Twitter, the additional recognized parameters are:
// 
// - consumer_key [Required]
// 
//   The Twitter Consumer Key. Not available if configured globally for Canvas.
// 
// - consumer_secret [Required]
// 
//   The Twitter Consumer Secret. Not available if configured globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'user_id' (the default), or 'screen_name'
// 
// - parent_registration [Optional]
// 
//   Accepts a boolean value, true designates the authentication service
//   for use on parent registrations.  Only one service can be selected
//   at a time so if set to true all others will be set to false
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/authentication_providers[]
// return canvasRequest(CanvasConstants.add_authentication_provider_authentication_providers, {account_id}, query);
export const add_authentication_provider_authentication_providers = { type: "ADD_AUTHENTICATION_PROVIDER_AUTHENTICATION_PROVIDERS", method: "post", reducer: 'authentication_providers'};
    
// Add authentication provider
// Add external authentication provider(s) for the account.
// Services may be CAS, Facebook, GitHub, Google, LDAP, OpenID Connect,
// LinkedIn, SAML, or Twitter.
// 
// Each authentication provider is specified as a set of parameters as
// described below. A provider specification must include an 'auth_type'
// parameter with a value of 'canvas', 'cas', 'facebook', 'github', 'google',
// 'ldap', 'linkedin', 'openid_connect', 'saml', or 'twitter'. The other recognized
// parameters depend on this auth_type; unrecognized parameters are discarded.
// Provider specifications not specifying a valid auth_type are ignored.
// 
// _Deprecated_[2015-05-08] Any provider specification may include an
// optional 'login_handle_name' parameter. This parameter specifies the
// label used for unique login identifiers; for example: 'Login',
// 'Username', 'Student ID', etc. The default is 'Email'.
// _Deprecated_[2015-05-20] Any provider specification besides LDAP may include
// an optional 'unknown_user_url' parameters. This parameters specifies a url
// to redirect to when a user is authorized but is not found in Canvas.
// _Deprecated_ [Use update_sso_settings instead]
// 
// You can set the 'position' for any configuration. The config in the 1st position
// is considered the default. You can set 'jit_provisioning' for any configuration
// besides Canvas.
// 
// For Canvas, the additional recognized parameter is:
// 
// - self_registration
// 
//   'all', 'none', or 'observer' - who is allowed to register as a new user
// 
// For CAS, the additional recognized parameters are:
// 
// - auth_base
// 
//   The CAS server's URL.
// 
// - log_in_url [Optional]
// 
//   An alternate SSO URL for logging into CAS. You probably should not set
//   this.
// 
// - unknown_user_url [Optional] _Deprecated_ [2015-05-20: use update_sso_settings instead]
// 
//   A url to redirect to when a user is authorized through CAS but is not
//   found in Canvas.
// 
// For Facebook, the additional recognized parameters are:
// 
// - app_id [Required]
// 
//   The Facebook App ID. Not available if configured globally for Canvas.
// 
// - app_secret [Required]
// 
//   The Facebook App Secret. Not available if configured globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'email'
// 
// For GitHub, the additional recognized parameters are:
// 
// - domain [Optional]
// 
//   The domain of a GitHub Enterprise installation. I.e.
//   github.mycompany.com. If not set, it will default to the public
//   github.com.
// 
// - client_id [Required]
// 
//   The GitHub application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The GitHub application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'login'
// 
// For Google, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The Google application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The Google application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - hosted_domain [Optional]
// 
//   A Google Apps domain to restrict logins to. See
//   https://developers.google.com/identity/protocols/OpenIDConnect?hl=en#hd-param
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'sub' (the default), or 'email'
// 
// For LDAP, the additional recognized parameters are:
// 
// - auth_host
// 
//   The LDAP server's URL.
// 
// - auth_port [Optional, Integer]
// 
//   The LDAP server's TCP port. (default: 389)
// 
// - auth_over_tls [Optional]
// 
//   Whether to use TLS. Can be '', 'simple_tls', or 'start_tls'. For backwards
//   compatibility, booleans are also accepted, with true meaning simple_tls.
//   If not provided, it will default to start_tls.
// 
// - auth_base [Optional]
// 
//   A default treebase parameter for searches performed against the LDAP
//   server.
// 
// - auth_filter
// 
//   LDAP search filter. Use !{{login}} as a placeholder for the username
//   supplied by the user. For example: "(sAMAccountName=!{{login}})".
// 
// - identifier_format [Optional]
// 
//   The LDAP attribute to use to look up the Canvas login. Omit to use
//   the username supplied by the user.
// 
// - auth_username
// 
//   Username
// 
// - auth_password
// 
//   Password
// 
// - change_password_url [Optional] _Deprecated_ [2015-05-08: use update_sso_settings instead]
// 
//   Forgot Password URL. Leave blank for default Canvas behavior.
// 
// For LinkedIn, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The LinkedIn application's Client ID. Not available if configured globally
//   for Canvas.
// 
// - client_secret [Required]
// 
//   The LinkedIn application's Client Secret. Not available if configured
//   globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'id' (the default), or 'emailAddress'
// 
// For OpenID Connect, the additional recognized parameters are:
// 
// - client_id [Required]
// 
//   The application's Client ID.
// 
// - client_secret [Required]
// 
//   The application's Client Secret.
// 
// - authorize_url [Required]
// 
//   The URL for getting starting the OAuth 2.0 web flow
// 
// - token_url [Required]
// 
//   The URL for exchanging the OAuth 2.0 authorization code for an access
//   token and id token
// 
// - scope [Optional]
// 
//   Space separated additional scopes to request for the token.
// 
// - login_attribute [Optional]
// 
//   The attribute of the ID token to look up the user's login in Canvas.
//   Defaults to 'sub'.
// 
// For SAML, the additional recognized parameters are:
// 
// - idp_entity_id
// 
//   The SAML IdP's entity ID
// 
// - log_in_url
// 
//   The SAML service's SSO target URL
// 
// - log_out_url
// 
//   The SAML service's SLO target URL
// 
// - certificate_fingerprint
// 
//   The SAML service's certificate fingerprint.
// 
// - change_password_url [Optional] _Deprecated_ [2015-05-08: use update_sso_settings instead]
// 
//   Forgot Password URL. Leave blank for default Canvas behavior.
// 
// - unknown_user_url [Optional] _Deprecated_ [2015-05-20: use update_sso_settings instead]
// 
//   A url to redirect to when a user is authorized through SAML but is not
//   found in Canvas.
// 
// - identifier_format
// 
//   The SAML service's identifier format. Must be one of:
// 
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:entity
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
//   - urn:oasis:names:tc:SAML:2.0:nameid-format:transient
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName
//   - urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName
// 
// - requested_authn_context
// 
//   The SAML AuthnContext
// 
// For Twitter, the additional recognized parameters are:
// 
// - consumer_key [Required]
// 
//   The Twitter Consumer Key. Not available if configured globally for Canvas.
// 
// - consumer_secret [Required]
// 
//   The Twitter Consumer Secret. Not available if configured globally for Canvas.
// 
// - login_attribute [Optional]
// 
//   The attribute to use to look up the user's login in Canvas. Either
//   'user_id' (the default), or 'screen_name'
// 
// - parent_registration [Optional]
// 
//   Accepts a boolean value, true designates the authentication service
//   for use on parent registrations.  Only one service can be selected
//   at a time so if set to true all others will be set to false
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs[]
// return canvasRequest(CanvasConstants.add_authentication_provider_account_authorization_configs, {account_id}, query);
export const add_authentication_provider_account_authorization_configs = { type: "ADD_AUTHENTICATION_PROVIDER_ACCOUNT_AUTHORIZATION_CONFIGS", method: "post", reducer: 'authentication_providers'};
    
// Update authentication provider
// Update an authentication provider using the same options as the create endpoint.
// You can not update an existing provider to a new authentication type.
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/authentication_providers/{id}[]
// return canvasRequest(CanvasConstants.update_authentication_provider_authentication_providers, {account_id, id}, query);
export const update_authentication_provider_authentication_providers = { type: "UPDATE_AUTHENTICATION_PROVIDER_AUTHENTICATION_PROVIDERS", method: "put", reducer: 'authentication_providers'};
    
// Update authentication provider
// Update an authentication provider using the same options as the create endpoint.
// You can not update an existing provider to a new authentication type.
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/{id}[]
// return canvasRequest(CanvasConstants.update_authentication_provider_account_authorization_configs, {account_id, id}, query);
export const update_authentication_provider_account_authorization_configs = { type: "UPDATE_AUTHENTICATION_PROVIDER_ACCOUNT_AUTHORIZATION_CONFIGS", method: "put", reducer: 'authentication_providers'};
    
// Get authentication provider
// Get the specified authentication provider
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/authentication_providers/{id}[]
// return canvasRequest(CanvasConstants.get_authentication_provider_authentication_providers, {account_id, id}, query);
export const get_authentication_provider_authentication_providers = { type: "GET_AUTHENTICATION_PROVIDER_AUTHENTICATION_PROVIDERS", method: "get", reducer: 'authentication_providers'};
    
// Get authentication provider
// Get the specified authentication provider
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/{id}[]
// return canvasRequest(CanvasConstants.get_authentication_provider_account_authorization_configs, {account_id, id}, query);
export const get_authentication_provider_account_authorization_configs = { type: "GET_AUTHENTICATION_PROVIDER_ACCOUNT_AUTHORIZATION_CONFIGS", method: "get", reducer: 'authentication_providers'};
    
// Delete authentication provider
// Delete the config
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/authentication_providers/{id}[]
// return canvasRequest(CanvasConstants.delete_authentication_provider_authentication_providers, {account_id, id}, query);
export const delete_authentication_provider_authentication_providers = { type: "DELETE_AUTHENTICATION_PROVIDER_AUTHENTICATION_PROVIDERS", method: "delete", reducer: 'authentication_providers'};
    
// Delete authentication provider
// Delete the config
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/{id}[]
// return canvasRequest(CanvasConstants.delete_authentication_provider_account_authorization_configs, {account_id, id}, query);
export const delete_authentication_provider_account_authorization_configs = { type: "DELETE_AUTHENTICATION_PROVIDER_ACCOUNT_AUTHORIZATION_CONFIGS", method: "delete", reducer: 'authentication_providers'};
    
// GET discovery url _Deprecated_[2015-05-08]
// Get the discovery url _Deprecated_[2015-05-08]
// 
// [Use update_sso_settings instead]
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/discovery_url[]
// return canvasRequest(CanvasConstants.get_discovery_url_deprecated, {account_id}, query);
export const get_discovery_url_deprecated = { type: "GET_DISCOVERY_URL_DEPRECATED", method: "get", reducer: 'authentication_providers'};
    
// Set discovery url _Deprecated_[2015-05-08]
// [Use update_sso_settings instead]
// 
// If you have multiple IdPs configured, you can set a `discovery_url`.
// If that is set, canvas will forward all users to that URL when they need to
// be authenticated. That page will need to then help the user figure out where
// they need to go to log in.
// 
// If no discovery url is configured, the 1st auth config will be used to
// attempt to authenticate the user.
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/discovery_url[]
// return canvasRequest(CanvasConstants.set_discovery_url_deprecated, {account_id}, query);
export const set_discovery_url_deprecated = { type: "SET_DISCOVERY_URL_DEPRECATED", method: "put", reducer: 'authentication_providers'};
    
// Delete discovery url _Deprecated_[2015-05-08]
// Clear discovery url _Deprecated_[2015-05-08]
// 
// [Use update_sso_settings instead]
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/account_authorization_configs/discovery_url[]
// return canvasRequest(CanvasConstants.delete_discovery_url_deprecated, {account_id}, query);
export const delete_discovery_url_deprecated = { type: "DELETE_DISCOVERY_URL_DEPRECATED", method: "delete", reducer: 'authentication_providers'};
    
// show account auth settings
// The way to get the current state of each account level setting
// that's relevant to Single Sign On configuration
// 
// You can list the current state of each setting with "update_sso_settings"
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/sso_settings[]
// return canvasRequest(CanvasConstants.show_account_auth_settings, {account_id}, query);
export const show_account_auth_settings = { type: "SHOW_ACCOUNT_AUTH_SETTINGS", method: "get", reducer: 'authentication_providers'};
    
// update account auth settings
// For various cases of mixed SSO configurations, you may need to set some
// configuration at the account level to handle the particulars of your
// setup.
// 
// This endpoint accepts a PUT request to set several possible account
// settings. All setting are optional on each request, any that are not
// provided at all are simply retained as is.  Any that provide the key but
// a null-ish value (blank string, null, undefined) will be UN-set.
// 
// You can list the current state of each setting with "show_sso_settings"
// API Docs: https://canvas.instructure.com/doc/api/authentication_providers.html
// API Url: accounts/{account_id}/sso_settings[]
// return canvasRequest(CanvasConstants.update_account_auth_settings, {account_id}, query);
export const update_account_auth_settings = { type: "UPDATE_ACCOUNT_AUTH_SETTINGS", method: "put", reducer: 'authentication_providers'};
    
// Query by login.
// List authentication events for a given login.
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/logins/{login_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_login, {login_id}, query);
export const query_by_login = { type: "QUERY_BY_LOGIN", method: "get", reducer: 'authentications_log'};
    
// Query by account.
// List authentication events for a given account.
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/accounts/{account_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_account, {account_id}, query);
export const query_by_account = { type: "QUERY_BY_ACCOUNT", method: "get", reducer: 'authentications_log'};
    
// Query by user.
// List authentication events for a given user.
// API Docs: https://canvas.instructure.com/doc/api/authentications_log.html
// API Url: audit/authentication/users/{user_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_user, {user_id}, query);
export const query_by_user = { type: "QUERY_BY_USER", method: "get", reducer: 'authentications_log'};
    
// List bookmarks
// Returns the list of bookmarks.
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
// return canvasRequest(CanvasConstants.list_bookmarks, {}, query);
export const list_bookmarks = { type: "LIST_BOOKMARKS", method: "get", reducer: 'bookmarks'};
    
// Create bookmark
// Creates a bookmark.
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
// Query Params:
//   name
//   url
//   position
//   data
// return canvasRequest(CanvasConstants.create_bookmark, {}, query);
export const create_bookmark = { type: "CREATE_BOOKMARK", method: "post", reducer: 'bookmarks'};
    
// Get bookmark
// Returns the details for a bookmark.
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}[]
// return canvasRequest(CanvasConstants.get_bookmark, {id}, query);
export const get_bookmark = { type: "GET_BOOKMARK", method: "get", reducer: 'bookmarks'};
    
// Update bookmark
// Updates a bookmark
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
// Query Params:
//   name
//   url
//   position
//   data
// return canvasRequest(CanvasConstants.update_bookmark, {id}, query);
export const update_bookmark = { type: "UPDATE_BOOKMARK", method: "put", reducer: 'bookmarks'};
    
// Delete bookmark
// Deletes a bookmark
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}[]
// return canvasRequest(CanvasConstants.delete_bookmark, {id}, query);
export const delete_bookmark = { type: "DELETE_BOOKMARK", method: "delete", reducer: 'bookmarks'};
    
// List calendar events
// Retrieve the list of calendar events or assignments for the current user
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
// Query Params:
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
// return canvasRequest(CanvasConstants.list_calendar_events, {}, query);
export const list_calendar_events = { type: "LIST_CALENDAR_EVENTS", method: "get", reducer: 'calendar_events'};
    
// List calendar events for a user
// Retrieve the list of calendar events or assignments for the specified user.
// To view calendar events for a user other than yourself,
// you must either be an observer of that user or an administrator.
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: users/{user_id}/calendar_events
// Query Params:
//   type
//   start_date
//   end_date
//   undated
//   all_events
//   context_codes
//   excludes
// return canvasRequest(CanvasConstants.list_calendar_events_for_user, {user_id}, query);
export const list_calendar_events_for_user = { type: "LIST_CALENDAR_EVENTS_FOR_USER", method: "get", reducer: 'calendar_events'};
    
// Create a calendar event
// Create and return a new calendar event
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events
// Query Params:
//   calendar_event[context_code]
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
//   calendar_event[duplicate][count]
//   calendar_event[duplicate][interval]
//   calendar_event[duplicate][frequency]
//   calendar_event[duplicate][append_iterator]
// return canvasRequest(CanvasConstants.create_calendar_event, {}, query);
export const create_calendar_event = { type: "CREATE_CALENDAR_EVENT", method: "post", reducer: 'calendar_events'};
    
// Get a single calendar event or assignment
// 
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}[]
// return canvasRequest(CanvasConstants.get_single_calendar_event_or_assignment, {id}, query);
export const get_single_calendar_event_or_assignment = { type: "GET_SINGLE_CALENDAR_EVENT_OR_ASSIGNMENT", method: "get", reducer: 'calendar_events'};
    
// Reserve a time slot
// Reserves a particular time slot and return the new reservation
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations
// Query Params:
//   participant_id
//   comments
//   cancel_existing
// return canvasRequest(CanvasConstants.reserve_time_slot, {id}, query);
export const reserve_time_slot = { type: "RESERVE_TIME_SLOT", method: "post", reducer: 'calendar_events'};
    
// Reserve a time slot
// Reserves a particular time slot and return the new reservation
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}/reservations/{participant_id}
// Query Params:
//   comments
//   cancel_existing
// return canvasRequest(CanvasConstants.reserve_time_slot_participant_id, {id, participant_id}, query);
export const reserve_time_slot_participant_id = { type: "RESERVE_TIME_SLOT_PARTICIPANT_ID", method: "post", reducer: 'calendar_events'};
    
// Update a calendar event
// Update and return a calendar event
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
// Query Params:
//   calendar_event[context_code]
//   calendar_event[title]
//   calendar_event[description]
//   calendar_event[start_at]
//   calendar_event[end_at]
//   calendar_event[location_name]
//   calendar_event[location_address]
//   calendar_event[time_zone_edited]
//   calendar_event[child_event_data][X][start_at]
//   calendar_event[child_event_data][X][end_at]
//   calendar_event[child_event_data][X][context_code]
// return canvasRequest(CanvasConstants.update_calendar_event, {id}, query);
export const update_calendar_event = { type: "UPDATE_CALENDAR_EVENT", method: "put", reducer: 'calendar_events'};
    
// Delete a calendar event
// Delete an event from the calendar and return the deleted event
// API Docs: https://canvas.instructure.com/doc/api/calendar_events.html
// API Url: calendar_events/{id}
// Query Params:
//   cancel_reason
// return canvasRequest(CanvasConstants.delete_calendar_event, {id}, query);
export const delete_calendar_event = { type: "DELETE_CALENDAR_EVENT", method: "delete", reducer: 'calendar_events'};
    
// List members of a collaboration.
// List the collaborators of a given collaboration
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: collaborations/{id}/members[]
// return canvasRequest(CanvasConstants.list_members_of_collaboration, {id}, query);
export const list_members_of_collaboration = { type: "LIST_MEMBERS_OF_COLLABORATION", method: "get", reducer: 'collaborations'};
    
// List of CommMessages for a user
// Retrieve messages sent to a user.
// API Docs: https://canvas.instructure.com/doc/api/comm_messages.html
// API Url: comm_messages
// Query Params:
//   user_id
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.list_of_commmessages_for_user, {}, query);
export const list_of_commmessages_for_user = { type: "LIST_OF_COMMMESSAGES_FOR_USER", method: "get", reducer: 'comm_messages'};
    
// List user communication channels
// Returns a list of communication channels for the specified user, sorted by
// position.
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels[]
// return canvasRequest(CanvasConstants.list_user_communication_channels, {user_id}, query);
export const list_user_communication_channels = { type: "LIST_USER_COMMUNICATION_CHANNELS", method: "get", reducer: 'communication_channels'};
    
// Create a communication channel
// Creates a new communication channel for the specified user.
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels
// Query Params:
//   communication_channel[address]
//   communication_channel[type]
//   communication_channel[token]
//   skip_confirmation
// return canvasRequest(CanvasConstants.create_communication_channel, {user_id}, query);
export const create_communication_channel = { type: "CREATE_COMMUNICATION_CHANNEL", method: "post", reducer: 'communication_channels'};
    
// Delete a communication channel
// Delete an existing communication channel.
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels/{id}[]
// return canvasRequest(CanvasConstants.delete_communication_channel_id, {user_id, id}, query);
export const delete_communication_channel_id = { type: "DELETE_COMMUNICATION_CHANNEL_ID", method: "delete", reducer: 'communication_channels'};
    
// Delete a communication channel
// Delete an existing communication channel.
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels/{type}/{address}[]
// return canvasRequest(CanvasConstants.delete_communication_channel_type, {user_id, type, address}, query);
export const delete_communication_channel_type = { type: "DELETE_COMMUNICATION_CHANNEL_TYPE", method: "delete", reducer: 'communication_channels'};
    
// List conferences
// Retrieve the list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: courses/{course_id}/conferences[]
// return canvasRequest(CanvasConstants.list_conferences_courses, {course_id}, query);
export const list_conferences_courses = { type: "LIST_CONFERENCES_COURSES", method: "get", reducer: 'conferences'};
    
// List conferences
// Retrieve the list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: groups/{group_id}/conferences[]
// return canvasRequest(CanvasConstants.list_conferences_groups, {group_id}, query);
export const list_conferences_groups = { type: "LIST_CONFERENCES_GROUPS", method: "get", reducer: 'conferences'};
    
// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports[]
// return canvasRequest(CanvasConstants.list_content_exports_courses, {course_id}, query);
export const list_content_exports_courses = { type: "LIST_CONTENT_EXPORTS_COURSES", method: "get", reducer: 'content_exports'};
    
// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports[]
// return canvasRequest(CanvasConstants.list_content_exports_groups, {group_id}, query);
export const list_content_exports_groups = { type: "LIST_CONTENT_EXPORTS_GROUPS", method: "get", reducer: 'content_exports'};
    
// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports[]
// return canvasRequest(CanvasConstants.list_content_exports_users, {user_id}, query);
export const list_content_exports_users = { type: "LIST_CONTENT_EXPORTS_USERS", method: "get", reducer: 'content_exports'};
    
// Show content export
// Get information about a single content export.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports/{id}[]
// return canvasRequest(CanvasConstants.show_content_export_courses, {course_id, id}, query);
export const show_content_export_courses = { type: "SHOW_CONTENT_EXPORT_COURSES", method: "get", reducer: 'content_exports'};
    
// Show content export
// Get information about a single content export.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports/{id}[]
// return canvasRequest(CanvasConstants.show_content_export_groups, {group_id, id}, query);
export const show_content_export_groups = { type: "SHOW_CONTENT_EXPORT_GROUPS", method: "get", reducer: 'content_exports'};
    
// Show content export
// Get information about a single content export.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports/{id}[]
// return canvasRequest(CanvasConstants.show_content_export_users, {user_id, id}, query);
export const show_content_export_users = { type: "SHOW_CONTENT_EXPORT_USERS", method: "get", reducer: 'content_exports'};
    
// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports
// Query Params:
//   export_type
//   skip_notifications
// return canvasRequest(CanvasConstants.export_content_courses, {course_id}, query);
export const export_content_courses = { type: "EXPORT_CONTENT_COURSES", method: "post", reducer: 'content_exports'};
    
// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports
// Query Params:
//   export_type
//   skip_notifications
// return canvasRequest(CanvasConstants.export_content_groups, {group_id}, query);
export const export_content_groups = { type: "EXPORT_CONTENT_GROUPS", method: "post", reducer: 'content_exports'};
    
// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports
// Query Params:
//   export_type
//   skip_notifications
// return canvasRequest(CanvasConstants.export_content_users, {user_id}, query);
export const export_content_users = { type: "EXPORT_CONTENT_USERS", method: "post", reducer: 'content_exports'};
    
// List migration issues
// Returns paginated migration issues
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues[]
// return canvasRequest(CanvasConstants.list_migration_issues_accounts, {account_id, content_migration_id}, query);
export const list_migration_issues_accounts = { type: "LIST_MIGRATION_ISSUES_ACCOUNTS", method: "get", reducer: 'content_migrations'};
    
// List migration issues
// Returns paginated migration issues
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues[]
// return canvasRequest(CanvasConstants.list_migration_issues_courses, {course_id, content_migration_id}, query);
export const list_migration_issues_courses = { type: "LIST_MIGRATION_ISSUES_COURSES", method: "get", reducer: 'content_migrations'};
    
// List migration issues
// Returns paginated migration issues
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues[]
// return canvasRequest(CanvasConstants.list_migration_issues_groups, {group_id, content_migration_id}, query);
export const list_migration_issues_groups = { type: "LIST_MIGRATION_ISSUES_GROUPS", method: "get", reducer: 'content_migrations'};
    
// List migration issues
// Returns paginated migration issues
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues[]
// return canvasRequest(CanvasConstants.list_migration_issues_users, {user_id, content_migration_id}, query);
export const list_migration_issues_users = { type: "LIST_MIGRATION_ISSUES_USERS", method: "get", reducer: 'content_migrations'};
    
// Get a migration issue
// Returns data on an individual migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}[]
// return canvasRequest(CanvasConstants.get_migration_issue_accounts, {account_id, content_migration_id, id}, query);
export const get_migration_issue_accounts = { type: "GET_MIGRATION_ISSUE_ACCOUNTS", method: "get", reducer: 'content_migrations'};
    
// Get a migration issue
// Returns data on an individual migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}[]
// return canvasRequest(CanvasConstants.get_migration_issue_courses, {course_id, content_migration_id, id}, query);
export const get_migration_issue_courses = { type: "GET_MIGRATION_ISSUE_COURSES", method: "get", reducer: 'content_migrations'};
    
// Get a migration issue
// Returns data on an individual migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}[]
// return canvasRequest(CanvasConstants.get_migration_issue_groups, {group_id, content_migration_id, id}, query);
export const get_migration_issue_groups = { type: "GET_MIGRATION_ISSUE_GROUPS", method: "get", reducer: 'content_migrations'};
    
// Get a migration issue
// Returns data on an individual migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}[]
// return canvasRequest(CanvasConstants.get_migration_issue_users, {user_id, content_migration_id, id}, query);
export const get_migration_issue_users = { type: "GET_MIGRATION_ISSUE_USERS", method: "get", reducer: 'content_migrations'};
    
// Update a migration issue
// Update the workflow_state of a migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}
// Query Params:
//   workflow_state
// return canvasRequest(CanvasConstants.update_migration_issue_accounts, {account_id, content_migration_id, id}, query);
export const update_migration_issue_accounts = { type: "UPDATE_MIGRATION_ISSUE_ACCOUNTS", method: "put", reducer: 'content_migrations'};
    
// Update a migration issue
// Update the workflow_state of a migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{content_migration_id}/migration_issues/{id}
// Query Params:
//   workflow_state
// return canvasRequest(CanvasConstants.update_migration_issue_courses, {course_id, content_migration_id, id}, query);
export const update_migration_issue_courses = { type: "UPDATE_MIGRATION_ISSUE_COURSES", method: "put", reducer: 'content_migrations'};
    
// Update a migration issue
// Update the workflow_state of a migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{content_migration_id}/migration_issues/{id}
// Query Params:
//   workflow_state
// return canvasRequest(CanvasConstants.update_migration_issue_groups, {group_id, content_migration_id, id}, query);
export const update_migration_issue_groups = { type: "UPDATE_MIGRATION_ISSUE_GROUPS", method: "put", reducer: 'content_migrations'};
    
// Update a migration issue
// Update the workflow_state of a migration issue
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}
// Query Params:
//   workflow_state
// return canvasRequest(CanvasConstants.update_migration_issue_users, {user_id, content_migration_id, id}, query);
export const update_migration_issue_users = { type: "UPDATE_MIGRATION_ISSUE_USERS", method: "put", reducer: 'content_migrations'};
    
// List content migrations
// Returns paginated content migrations
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations[]
// return canvasRequest(CanvasConstants.list_content_migrations_accounts, {account_id}, query);
export const list_content_migrations_accounts = { type: "LIST_CONTENT_MIGRATIONS_ACCOUNTS", method: "get", reducer: 'content_migrations'};
    
// List content migrations
// Returns paginated content migrations
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations[]
// return canvasRequest(CanvasConstants.list_content_migrations_courses, {course_id}, query);
export const list_content_migrations_courses = { type: "LIST_CONTENT_MIGRATIONS_COURSES", method: "get", reducer: 'content_migrations'};
    
// List content migrations
// Returns paginated content migrations
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations[]
// return canvasRequest(CanvasConstants.list_content_migrations_groups, {group_id}, query);
export const list_content_migrations_groups = { type: "LIST_CONTENT_MIGRATIONS_GROUPS", method: "get", reducer: 'content_migrations'};
    
// List content migrations
// Returns paginated content migrations
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations[]
// return canvasRequest(CanvasConstants.list_content_migrations_users, {user_id}, query);
export const list_content_migrations_users = { type: "LIST_CONTENT_MIGRATIONS_USERS", method: "get", reducer: 'content_migrations'};
    
// Get a content migration
// Returns data on an individual content migration
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.get_content_migration_accounts, {account_id, id}, query);
export const get_content_migration_accounts = { type: "GET_CONTENT_MIGRATION_ACCOUNTS", method: "get", reducer: 'content_migrations'};
    
// Get a content migration
// Returns data on an individual content migration
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.get_content_migration_courses, {course_id, id}, query);
export const get_content_migration_courses = { type: "GET_CONTENT_MIGRATION_COURSES", method: "get", reducer: 'content_migrations'};
    
// Get a content migration
// Returns data on an individual content migration
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.get_content_migration_groups, {group_id, id}, query);
export const get_content_migration_groups = { type: "GET_CONTENT_MIGRATION_GROUPS", method: "get", reducer: 'content_migrations'};
    
// Get a content migration
// Returns data on an individual content migration
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.get_content_migration_users, {user_id, id}, query);
export const get_content_migration_users = { type: "GET_CONTENT_MIGRATION_USERS", method: "get", reducer: 'content_migrations'};
    
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
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations
// Query Params:
//   migration_type
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
// return canvasRequest(CanvasConstants.create_content_migration_accounts, {account_id}, query);
export const create_content_migration_accounts = { type: "CREATE_CONTENT_MIGRATION_ACCOUNTS", method: "post", reducer: 'content_migrations'};
    
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
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations
// Query Params:
//   migration_type
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
// return canvasRequest(CanvasConstants.create_content_migration_courses, {course_id}, query);
export const create_content_migration_courses = { type: "CREATE_CONTENT_MIGRATION_COURSES", method: "post", reducer: 'content_migrations'};
    
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
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations
// Query Params:
//   migration_type
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
// return canvasRequest(CanvasConstants.create_content_migration_groups, {group_id}, query);
export const create_content_migration_groups = { type: "CREATE_CONTENT_MIGRATION_GROUPS", method: "post", reducer: 'content_migrations'};
    
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
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations
// Query Params:
//   migration_type
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
// return canvasRequest(CanvasConstants.create_content_migration_users, {user_id}, query);
export const create_content_migration_users = { type: "CREATE_CONTENT_MIGRATION_USERS", method: "post", reducer: 'content_migrations'};
    
// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.update_content_migration_accounts, {account_id, id}, query);
export const update_content_migration_accounts = { type: "UPDATE_CONTENT_MIGRATION_ACCOUNTS", method: "put", reducer: 'content_migrations'};
    
// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.update_content_migration_courses, {course_id, id}, query);
export const update_content_migration_courses = { type: "UPDATE_CONTENT_MIGRATION_COURSES", method: "put", reducer: 'content_migrations'};
    
// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.update_content_migration_groups, {group_id, id}, query);
export const update_content_migration_groups = { type: "UPDATE_CONTENT_MIGRATION_GROUPS", method: "put", reducer: 'content_migrations'};
    
// Update a content migration
// Update a content migration. Takes same arguments as create except that you
// can't change the migration type. However, changing most settings after the
// migration process has started will not do anything. Generally updating the
// content migration will be used when there is a file upload problem. If the
// first upload has a problem you can supply new _pre_attachment_ values to
// start the process again.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/{id}[]
// return canvasRequest(CanvasConstants.update_content_migration_users, {user_id, id}, query);
export const update_content_migration_users = { type: "UPDATE_CONTENT_MIGRATION_USERS", method: "put", reducer: 'content_migrations'};
    
// List Migration Systems
// Lists the currently available migration types. These values may change.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: accounts/{account_id}/content_migrations/migrators[]
// return canvasRequest(CanvasConstants.list_migration_systems_accounts, {account_id}, query);
export const list_migration_systems_accounts = { type: "LIST_MIGRATION_SYSTEMS_ACCOUNTS", method: "get", reducer: 'content_migrations'};
    
// List Migration Systems
// Lists the currently available migration types. These values may change.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: courses/{course_id}/content_migrations/migrators[]
// return canvasRequest(CanvasConstants.list_migration_systems_courses, {course_id}, query);
export const list_migration_systems_courses = { type: "LIST_MIGRATION_SYSTEMS_COURSES", method: "get", reducer: 'content_migrations'};
    
// List Migration Systems
// Lists the currently available migration types. These values may change.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: groups/{group_id}/content_migrations/migrators[]
// return canvasRequest(CanvasConstants.list_migration_systems_groups, {group_id}, query);
export const list_migration_systems_groups = { type: "LIST_MIGRATION_SYSTEMS_GROUPS", method: "get", reducer: 'content_migrations'};
    
// List Migration Systems
// Lists the currently available migration types. These values may change.
// API Docs: https://canvas.instructure.com/doc/api/content_migrations.html
// API Url: users/{user_id}/content_migrations/migrators[]
// return canvasRequest(CanvasConstants.list_migration_systems_users, {user_id}, query);
export const list_migration_systems_users = { type: "LIST_MIGRATION_SYSTEMS_USERS", method: "get", reducer: 'content_migrations'};
    
// List conversations
// Returns the list of conversations for the current user, most recent ones first.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
// Query Params:
//   scope
//   filter
//   filter_mode
//   interleave_submissions
//   include_all_conversation_ids
// return canvasRequest(CanvasConstants.list_conversations, {}, query);
export const list_conversations = { type: "LIST_CONVERSATIONS", method: "get", reducer: 'conversations'};
    
// Create a conversation
// Create a new conversation with one or more recipients. If there is already
// an existing private conversation with the given recipients, it will be
// reused.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
// Query Params:
//   recipients
//   subject
//   body
//   group_conversation
//   attachment_ids
//   media_comment_id
//   media_comment_type
//   user_note
//   mode
//   scope
//   filter
//   filter_mode
//   context_code
// return canvasRequest(CanvasConstants.create_conversation, {}, query);
export const create_conversation = { type: "CREATE_CONVERSATION", method: "post", reducer: 'conversations'};
    
// Get running batches
// Returns any currently running conversation batches for the current user.
// Conversation batches are created when a bulk private message is sent
// asynchronously (see the mode argument to the {api:ConversationsController#create create API action}).
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/batches
// return canvasRequest(CanvasConstants.get_running_batches, {}, query);
export const get_running_batches = { type: "GET_RUNNING_BATCHES", method: "get", reducer: 'conversations'};
    
// Get a single conversation
// Returns information for a single conversation. Response includes all
// fields that are present in the list/index action as well as messages
// and extended participant information.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}
// Query Params:
//   interleave_submissions
//   scope
//   filter
//   filter_mode
//   auto_mark_as_read
// return canvasRequest(CanvasConstants.get_single_conversation, {id}, query);
export const get_single_conversation = { type: "GET_SINGLE_CONVERSATION", method: "get", reducer: 'conversations'};
    
// Edit a conversation
// Updates attributes for a single conversation.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}
// Query Params:
//   conversation[subject]
//   conversation[workflow_state]
//   conversation[subscribed]
//   conversation[starred]
//   scope
//   filter
//   filter_mode
// return canvasRequest(CanvasConstants.edit_conversation, {id}, query);
export const edit_conversation = { type: "EDIT_CONVERSATION", method: "put", reducer: 'conversations'};
    
// Mark all as read
// Mark all conversations as read.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/mark_all_as_read
// return canvasRequest(CanvasConstants.mark_all_as_read, {}, query);
export const mark_all_as_read = { type: "MARK_ALL_AS_READ", method: "post", reducer: 'conversations'};
    
// Delete a conversation
// Delete this conversation and its messages. Note that this only deletes
// this user's view of the conversation.
// 
// Response includes same fields as UPDATE action
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}[]
// return canvasRequest(CanvasConstants.delete_conversation, {id}, query);
export const delete_conversation = { type: "DELETE_CONVERSATION", method: "delete", reducer: 'conversations'};
    
// Add recipients
// Add recipients to an existing group conversation. Response is similar to
// the GET/show action, except that only includes the
// latest message (e.g. "joe was added to the conversation by bob")
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/add_recipients
// Query Params:
//   recipients
// return canvasRequest(CanvasConstants.add_recipients, {id}, query);
export const add_recipients = { type: "ADD_RECIPIENTS", method: "post", reducer: 'conversations'};
    
// Add a message
// Add a message to an existing conversation. Response is similar to the
// GET/show action, except that only includes the
// latest message (i.e. what we just sent)
// 
// An array of user ids. Defaults to all of the current conversation
// recipients. To explicitly send a message to no other recipients,
// this array should consist of the logged-in user id.
// 
// An array of message ids from this conversation to send to recipients
// of the new message. Recipients who already had a copy of included
// messages will not be affected.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/add_message
// Query Params:
//   body
//   attachment_ids
//   media_comment_id
//   media_comment_type
//   recipients
//   included_messages
//   user_note
// return canvasRequest(CanvasConstants.add_message, {id}, query);
export const add_message = { type: "ADD_MESSAGE", method: "post", reducer: 'conversations'};
    
// Delete a message
// Delete messages from this conversation. Note that this only affects this
// user's view of the conversation. If all messages are deleted, the
// conversation will be as well (equivalent to DELETE)
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/remove_messages
// Query Params:
//   remove
// return canvasRequest(CanvasConstants.delete_message, {id}, query);
export const delete_message = { type: "DELETE_MESSAGE", method: "post", reducer: 'conversations'};
    
// Batch update conversations
// Perform a change on a set of conversations. Operates asynchronously; use the {api:ProgressController#show progress endpoint}
// to query the status of an operation.
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
// Query Params:
//   conversation_ids
//   event
// return canvasRequest(CanvasConstants.batch_update_conversations, {}, query);
export const batch_update_conversations = { type: "BATCH_UPDATE_CONVERSATIONS", method: "put", reducer: 'conversations'};
    
// Find recipients
// Deprecated, see the {api:SearchController#recipients Find recipients endpoint} in the Search API
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/find_recipients
// return canvasRequest(CanvasConstants.find_recipients, {}, query);
export const find_recipients = { type: "FIND_RECIPIENTS", method: "get", reducer: 'conversations'};
    
// Unread count
// Get the number of unread conversations for the current user
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/unread_count
// return canvasRequest(CanvasConstants.unread_count, {}, query);
export const unread_count = { type: "UNREAD_COUNT", method: "get", reducer: 'conversations'};
    
// Query by course.
// List course change events for a given course.
// API Docs: https://canvas.instructure.com/doc/api/course_audit_log.html
// API Url: audit/course/courses/{course_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_course, {course_id}, query);
export const query_by_course = { type: "QUERY_BY_COURSE", method: "get", reducer: 'course_audit_log'};
    
// Set extensions for student quiz submissions
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not allowed to extend quizzes for this course
// API Docs: https://canvas.instructure.com/doc/api/course_quiz_extensions.html
// API Url: courses/{course_id}/quiz_extensions
// Query Params:
//   user_id
//   extra_attempts
//   extra_time
//   manually_unlocked
//   extend_from_now
//   extend_from_end_at
// return canvasRequest(CanvasConstants.set_extensions_for_student_quiz_submissions, {course_id}, query);
export const set_extensions_for_student_quiz_submissions = { type: "SET_EXTENSIONS_FOR_STUDENT_QUIZ_SUBMISSIONS", method: "post", reducer: 'course_quiz_extensions'};
    
// List your courses
// Returns the list of active courses for the current user.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses
// Query Params:
//   enrollment_type
//   enrollment_role
//   enrollment_role_id
//   include
//   state
// return canvasRequest(CanvasConstants.list_your_courses, {}, query);
export const list_your_courses = { type: "LIST_YOUR_COURSES", method: "get", reducer: 'courses'};
    
// List courses for a user
// Returns a list of active courses for this user. To view the course list for a user other than yourself, you must be either an observer of that user or an administrator.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: users/{user_id}/courses
// Query Params:
//   include
//   state
// return canvasRequest(CanvasConstants.list_courses_for_user, {user_id}, query);
export const list_courses_for_user = { type: "LIST_COURSES_FOR_USER", method: "get", reducer: 'courses'};
    
// Create a new course
// Create a new course
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: accounts/{account_id}/courses
// Query Params:
//   course[name]
//   course[course_code]
//   course[start_at]
//   course[end_at]
//   course[license]
//   course[is_public]
//   course[is_public_to_auth_users]
//   course[public_syllabus]
//   course[public_description]
//   course[allow_student_wiki_edits]
//   course[allow_wiki_comments]
//   course[allow_student_forum_attachments]
//   course[open_enrollment]
//   course[self_enrollment]
//   course[restrict_enrollments_to_course_dates]
//   course[term_id]
//   course[sis_course_id]
//   course[integration_id]
//   course[hide_final_grades]
//   course[apply_assignment_group_weights]
//   offer
//   enroll_me
//   course[syllabus_body]
//   course[grading_standard_id]
//   course[course_format]
//   enable_sis_reactivation
// return canvasRequest(CanvasConstants.create_new_course, {account_id}, query);
export const create_new_course = { type: "CREATE_NEW_COURSE", method: "post", reducer: 'courses'};
    
// Upload a file
// Upload a file to the course.
// 
// This API endpoint is the first step in uploading a file to a course.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Only those with the "Manage Files" permission on a course can upload files
// to the course. By default, this is Teachers, TAs and Designers.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/files[]
// return canvasRequest(CanvasConstants.upload_file, {course_id}, query);
export const upload_file = { type: "UPLOAD_FILE", method: "post", reducer: 'courses'};
    
// List students
// Returns the list of students enrolled in this course.
// 
// DEPRECATED: Please use the {api:CoursesController#users course users} endpoint
// and pass "student" as the enrollment_type.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/students[]
// return canvasRequest(CanvasConstants.list_students, {course_id}, query);
export const list_students = { type: "LIST_STUDENTS", method: "get", reducer: 'courses'};
    
// List users in course
// Returns the list of users in this course. And optionally the user's enrollments in the course.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/users
// Query Params:
//   search_term
//   enrollment_type
//   enrollment_role
//   enrollment_role_id
//   include
//   user_id
//   user_ids
//   enrollment_state
// return canvasRequest(CanvasConstants.list_users_in_course_users, {course_id}, query);
export const list_users_in_course_users = { type: "LIST_USERS_IN_COURSE_USERS", method: "get", reducer: 'courses'};
    
// List users in course
// Returns the list of users in this course. And optionally the user's enrollments in the course.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/search_users
// Query Params:
//   search_term
//   enrollment_type
//   enrollment_role
//   enrollment_role_id
//   include
//   user_id
//   user_ids
//   enrollment_state
// return canvasRequest(CanvasConstants.list_users_in_course_search_users, {course_id}, query);
export const list_users_in_course_search_users = { type: "LIST_USERS_IN_COURSE_SEARCH_USERS", method: "get", reducer: 'courses'};
    
// List recently logged in students
// Returns the list of users in this course, ordered by how recently they have
// logged in. The records include the 'last_login' field which contains
// a timestamp of the last time that user logged into canvas.  The querying
// user must have the 'View usage reports' permission.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/recent_students[]
// return canvasRequest(CanvasConstants.list_recently_logged_in_students, {course_id}, query);
export const list_recently_logged_in_students = { type: "LIST_RECENTLY_LOGGED_IN_STUDENTS", method: "get", reducer: 'courses'};
    
// Get single user
// Return information on a single user.
// 
// Accepts the same include[] parameters as the :users: action, and returns a
// single user with the same fields as that action.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/users/{id}[]
// return canvasRequest(CanvasConstants.get_single_user, {course_id, id}, query);
export const get_single_user = { type: "GET_SINGLE_USER", method: "get", reducer: 'courses'};
    
// Preview processed html
// Preview html content processed for this course
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/preview_html
// Query Params:
//   html
// return canvasRequest(CanvasConstants.preview_processed_html, {course_id}, query);
export const preview_processed_html = { type: "PREVIEW_PROCESSED_HTML", method: "post", reducer: 'courses'};
    
// Course activity stream
// Returns the current user's course-specific activity stream, paginated.
// 
// For full documentation, see the API documentation for the user activity
// stream, in the user api.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/activity_stream[]
// return canvasRequest(CanvasConstants.course_activity_stream, {course_id}, query);
export const course_activity_stream = { type: "COURSE_ACTIVITY_STREAM", method: "get", reducer: 'courses'};
    
// Course activity stream summary
// Returns a summary of the current user's course-specific activity stream.
// 
// For full documentation, see the API documentation for the user activity
// stream summary, in the user api.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/activity_stream/summary[]
// return canvasRequest(CanvasConstants.course_activity_stream_summary, {course_id}, query);
export const course_activity_stream_summary = { type: "COURSE_ACTIVITY_STREAM_SUMMARY", method: "get", reducer: 'courses'};
    
// Course TODO items
// Returns the current user's course-specific todo items.
// 
// For full documentation, see the API documentation for the user todo items, in the user api.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/todo[]
// return canvasRequest(CanvasConstants.course_todo_items, {course_id}, query);
export const course_todo_items = { type: "COURSE_TODO_ITEMS", method: "get", reducer: 'courses'};
    
// Conclude a course
// Delete or conclude an existing course
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{id}
// Query Params:
//   event
// return canvasRequest(CanvasConstants.conclude_course, {id}, query);
export const conclude_course = { type: "CONCLUDE_COURSE", method: "delete", reducer: 'courses'};
    
// Get course settings
// Returns some of a course's settings.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/settings[]
// return canvasRequest(CanvasConstants.get_course_settings, {course_id}, query);
export const get_course_settings = { type: "GET_COURSE_SETTINGS", method: "get", reducer: 'courses'};
    
// Update course settings
// Can update the following course settings:
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/settings
// Query Params:
//   allow_student_discussion_topics
//   allow_student_forum_attachments
//   allow_student_discussion_editing
//   allow_student_organized_groups
//   hide_final_grades
//   hide_distribution_graphs
//   lock_all_announcements
//   restrict_student_past_view
//   restrict_student_future_view
// return canvasRequest(CanvasConstants.update_course_settings, {course_id}, query);
export const update_course_settings = { type: "UPDATE_COURSE_SETTINGS", method: "put", reducer: 'courses'};
    
// Get a single course
// Return information on a single course.
// 
// Accepts the same include[] parameters as the list action plus:
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_single_course_courses, {id}, query);
export const get_single_course_courses = { type: "GET_SINGLE_COURSE_COURSES", method: "get", reducer: 'courses'};
    
// Get a single course
// Return information on a single course.
// 
// Accepts the same include[] parameters as the list action plus:
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: accounts/{account_id}/courses/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_single_course_accounts, {account_id, id}, query);
export const get_single_course_accounts = { type: "GET_SINGLE_COURSE_ACCOUNTS", method: "get", reducer: 'courses'};
    
// Update a course
// Update an existing course.
// 
// Arguments are the same as Courses#create, with a few exceptions (enroll_me).
// 
// If a user has content management rights, but not full course editing rights, the only attribute
// editable through this endpoint will be "syllabus_body"
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{id}
// Query Params:
//   course[account_id]
//   course[name]
//   course[course_code]
//   course[start_at]
//   course[end_at]
//   course[license]
//   course[is_public]
//   course[public_syllabus]
//   course[public_description]
//   course[allow_student_wiki_edits]
//   course[allow_wiki_comments]
//   course[allow_student_forum_attachments]
//   course[open_enrollment]
//   course[self_enrollment]
//   course[restrict_enrollments_to_course_dates]
//   course[term_id]
//   course[sis_course_id]
//   course[integration_id]
//   course[hide_final_grades]
//   course[apply_assignment_group_weights]
//   offer
//   course[syllabus_body]
//   course[grading_standard_id]
//   course[course_format]
// return canvasRequest(CanvasConstants.update_course, {id}, query);
export const update_course = { type: "UPDATE_COURSE", method: "put", reducer: 'courses'};
    
// Update courses
// Update multiple courses in an account.  Operates asynchronously; use the {api:ProgressController#show progress endpoint}
// to query the status of an operation.
// 
// The action to take on each course.  Must be one of 'offer', 'conclude', 'delete', or 'undelete'.
//   * 'offer' makes a course visible to students. This action is also called "publish" on the web site.
//   * 'conclude' prevents future enrollments and makes a course read-only for all participants. The course still appears
//     in prior-enrollment lists.
//   * 'delete' completely removes the course from the web site (including course menus and prior-enrollment lists).
//     All enrollments are deleted. Course content may be physically deleted at a future date.
//   * 'undelete' attempts to recover a course that has been deleted. (Recovery is not guaranteed; please conclude
//     rather than delete a course if there is any possibility the course will be used again.) The recovered course
//     will be unpublished. Deleted enrollments will not be recovered.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: accounts/{account_id}/courses
// Query Params:
//   course_ids
//   event
// return canvasRequest(CanvasConstants.update_courses, {account_id}, query);
export const update_courses = { type: "UPDATE_COURSES", method: "put", reducer: 'courses'};
    
// Reset a course
// Deletes the current course, and creates a new equivalent course with
// no content, but all sections and users moved over.
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/reset_content[]
// return canvasRequest(CanvasConstants.reset_course, {course_id}, query);
export const reset_course = { type: "RESET_COURSE", method: "post", reducer: 'courses'};
    
// Get course copy status
// DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}
// 
// Retrieve the status of a course copy
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/course_copy/{id}[]
// return canvasRequest(CanvasConstants.get_course_copy_status, {course_id, id}, query);
export const get_course_copy_status = { type: "GET_COURSE_COPY_STATUS", method: "get", reducer: 'courses'};
    
// Copy course content
// DEPRECATED: Please use the {api:ContentMigrationsController#create Content Migrations API}
// 
// Copies content from one course into another. The default is to copy all course
// content. You can control specific types to copy by using either the 'except' option
// or the 'only' option.
// 
// The response is the same as the course copy status endpoint
// API Docs: https://canvas.instructure.com/doc/api/courses.html
// API Url: courses/{course_id}/course_copy
// Query Params:
//   source_course
//   except
//   only
// return canvasRequest(CanvasConstants.copy_course_content, {course_id}, query);
export const copy_course_content = { type: "COPY_COURSE_CONTENT", method: "post", reducer: 'courses'};
    
// List custom gradebook columns
// List all custom gradebook columns for a course
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns
// Query Params:
//   include_hidden
// return canvasRequest(CanvasConstants.list_custom_gradebook_columns, {course_id}, query);
export const list_custom_gradebook_columns = { type: "LIST_CUSTOM_GRADEBOOK_COLUMNS", method: "get", reducer: 'custom_gradebook_columns'};
    
// Create a custom gradebook column
// Create a custom gradebook column
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns
// Query Params:
//   column[title]
//   column[position]
//   column[hidden]
//   column[teacher_notes]
// return canvasRequest(CanvasConstants.create_custom_gradebook_column, {course_id}, query);
export const create_custom_gradebook_column = { type: "CREATE_CUSTOM_GRADEBOOK_COLUMN", method: "post", reducer: 'custom_gradebook_columns'};
    
// Update a custom gradebook column
// Accepts the same parameters as custom gradebook column creation
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}[]
// return canvasRequest(CanvasConstants.update_custom_gradebook_column, {course_id, id}, query);
export const update_custom_gradebook_column = { type: "UPDATE_CUSTOM_GRADEBOOK_COLUMN", method: "put", reducer: 'custom_gradebook_columns'};
    
// Delete a custom gradebook column
// Permanently deletes a custom column and its associated data
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}[]
// return canvasRequest(CanvasConstants.delete_custom_gradebook_column, {course_id, id}, query);
export const delete_custom_gradebook_column = { type: "DELETE_CUSTOM_GRADEBOOK_COLUMN", method: "delete", reducer: 'custom_gradebook_columns'};
    
// Reorder custom columns
// Puts the given columns in the specified order
// 
// <b>200 OK</b> is returned if successful
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/reorder
// Query Params:
//   order
// return canvasRequest(CanvasConstants.reorder_custom_columns, {course_id}, query);
export const reorder_custom_columns = { type: "REORDER_CUSTOM_COLUMNS", method: "post", reducer: 'custom_gradebook_columns'};
    
// List entries for a column
// This does not list entries for students without associated data.
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}/data
// Query Params:
//   include_hidden
// return canvasRequest(CanvasConstants.list_entries_for_column, {course_id, id}, query);
export const list_entries_for_column = { type: "LIST_ENTRIES_FOR_COLUMN", method: "get", reducer: 'custom_gradebook_columns'};
    
// Update column data
// Set the content of a custom column
// API Docs: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html
// API Url: courses/{course_id}/custom_gradebook_columns/{id}/data/{user_id}
// Query Params:
//   column_data[content]
// return canvasRequest(CanvasConstants.update_column_data, {course_id, id, user_id}, query);
export const update_column_data = { type: "UPDATE_COLUMN_DATA", method: "put", reducer: 'custom_gradebook_columns'};
    
// List discussion topics
// Returns the paginated list of discussion topics for this course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics
// Query Params:
//   order_by
//   scope
//   only_announcements
//   search_term
// return canvasRequest(CanvasConstants.list_discussion_topics_courses, {course_id}, query);
export const list_discussion_topics_courses = { type: "LIST_DISCUSSION_TOPICS_COURSES", method: "get", reducer: 'discussion_topics'};
    
// List discussion topics
// Returns the paginated list of discussion topics for this course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics
// Query Params:
//   order_by
//   scope
//   only_announcements
//   search_term
// return canvasRequest(CanvasConstants.list_discussion_topics_groups, {group_id}, query);
export const list_discussion_topics_groups = { type: "LIST_DISCUSSION_TOPICS_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// Create a new discussion topic
// Create an new discussion topic for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics
// Query Params:
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
//   attachment
// return canvasRequest(CanvasConstants.create_new_discussion_topic_courses, {course_id}, query);
export const create_new_discussion_topic_courses = { type: "CREATE_NEW_DISCUSSION_TOPIC_COURSES", method: "post", reducer: 'discussion_topics'};
    
// Create a new discussion topic
// Create an new discussion topic for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics
// Query Params:
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
//   attachment
// return canvasRequest(CanvasConstants.create_new_discussion_topic_groups, {group_id}, query);
export const create_new_discussion_topic_groups = { type: "CREATE_NEW_DISCUSSION_TOPIC_GROUPS", method: "post", reducer: 'discussion_topics'};
    
// Update a topic
// Update an existing discussion topic for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}
// Query Params:
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
// return canvasRequest(CanvasConstants.update_topic_courses, {course_id, topic_id}, query);
export const update_topic_courses = { type: "UPDATE_TOPIC_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Update a topic
// Update an existing discussion topic for the course or group.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}
// Query Params:
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
// return canvasRequest(CanvasConstants.update_topic_groups, {group_id, topic_id}, query);
export const update_topic_groups = { type: "UPDATE_TOPIC_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Delete a topic
// Deletes the discussion topic. This will also delete the assignment, if it's
// an assignment discussion.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}[]
// return canvasRequest(CanvasConstants.delete_topic_courses, {course_id, topic_id}, query);
export const delete_topic_courses = { type: "DELETE_TOPIC_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Delete a topic
// Deletes the discussion topic. This will also delete the assignment, if it's
// an assignment discussion.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}[]
// return canvasRequest(CanvasConstants.delete_topic_groups, {group_id, topic_id}, query);
export const delete_topic_groups = { type: "DELETE_TOPIC_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
// Reorder pinned topics
// Puts the pinned discussion topics in the specified order.
// All pinned topics should be included.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/reorder
// Query Params:
//   order
// return canvasRequest(CanvasConstants.reorder_pinned_topics_courses, {course_id}, query);
export const reorder_pinned_topics_courses = { type: "REORDER_PINNED_TOPICS_COURSES", method: "post", reducer: 'discussion_topics'};
    
// Reorder pinned topics
// Puts the pinned discussion topics in the specified order.
// All pinned topics should be included.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/reorder
// Query Params:
//   order
// return canvasRequest(CanvasConstants.reorder_pinned_topics_groups, {group_id}, query);
export const reorder_pinned_topics_groups = { type: "REORDER_PINNED_TOPICS_GROUPS", method: "post", reducer: 'discussion_topics'};
    
// Update an entry
// Update an existing discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{id}
// Query Params:
//   message
// return canvasRequest(CanvasConstants.update_entry_courses, {course_id, topic_id, id}, query);
export const update_entry_courses = { type: "UPDATE_ENTRY_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Update an entry
// Update an existing discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{id}
// Query Params:
//   message
// return canvasRequest(CanvasConstants.update_entry_groups, {group_id, topic_id, id}, query);
export const update_entry_groups = { type: "UPDATE_ENTRY_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Delete an entry
// Delete a discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
// 
// The discussion will be marked deleted, and the user_id and message will be cleared out.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{id}[]
// return canvasRequest(CanvasConstants.delete_entry_courses, {course_id, topic_id, id}, query);
export const delete_entry_courses = { type: "DELETE_ENTRY_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Delete an entry
// Delete a discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
// 
// The discussion will be marked deleted, and the user_id and message will be cleared out.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{id}[]
// return canvasRequest(CanvasConstants.delete_entry_groups, {group_id, topic_id, id}, query);
export const delete_entry_groups = { type: "DELETE_ENTRY_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
// Get a single topic
// Returns data on an individual discussion topic. See the List action for the response formatting.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}[]
// return canvasRequest(CanvasConstants.get_single_topic_courses, {course_id, topic_id}, query);
export const get_single_topic_courses = { type: "GET_SINGLE_TOPIC_COURSES", method: "get", reducer: 'discussion_topics'};
    
// Get a single topic
// Returns data on an individual discussion topic. See the List action for the response formatting.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}[]
// return canvasRequest(CanvasConstants.get_single_topic_groups, {group_id, topic_id}, query);
export const get_single_topic_groups = { type: "GET_SINGLE_TOPIC_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// Get the full topic
// Return a cached structure of the discussion topic, containing all entries,
// their authors, and their message bodies.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// In some rare situations, this cached structure may not be available yet. In
// that case, the server will respond with a 503 error, and the caller should
// try again soon.
// 
// The response is an object containing the following keys:
// * "participants": A list of summary information on users who have posted to
//   the discussion. Each value is an object containing their id, display_name,
//   and avatar_url.
// * "unread_entries": A list of entry ids that are unread by the current
//   user. this implies that any entry not in this list is read.
// * "entry_ratings": A map of entry ids to ratings by the current user. Entries
//   not in this list have no rating. Only populated if rating is enabled.
// * "forced_entries": A list of entry ids that have forced_read_state set to
//   true. This flag is meant to indicate the entry's read_state has been
//   manually set to 'unread' by the user, so the entry should not be
//   automatically marked as read.
// * "view": A threaded view of all the entries in the discussion, containing
//   the id, user_id, and message.
// * "new_entries": Because this view is eventually consistent, it's possible
//   that newly created or updated entries won't yet be reflected in the view.
//   If the application wants to also get a flat list of all entries not yet
//   reflected in the view, pass include_new_entries=1 to the request and this
//   array of entries will be returned. These entries are returned in a flat
//   array, in ascending created_at order.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/view[]
// return canvasRequest(CanvasConstants.get_full_topic_courses, {course_id, topic_id}, query);
export const get_full_topic_courses = { type: "GET_FULL_TOPIC_COURSES", method: "get", reducer: 'discussion_topics'};
    
// Get the full topic
// Return a cached structure of the discussion topic, containing all entries,
// their authors, and their message bodies.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// In some rare situations, this cached structure may not be available yet. In
// that case, the server will respond with a 503 error, and the caller should
// try again soon.
// 
// The response is an object containing the following keys:
// * "participants": A list of summary information on users who have posted to
//   the discussion. Each value is an object containing their id, display_name,
//   and avatar_url.
// * "unread_entries": A list of entry ids that are unread by the current
//   user. this implies that any entry not in this list is read.
// * "entry_ratings": A map of entry ids to ratings by the current user. Entries
//   not in this list have no rating. Only populated if rating is enabled.
// * "forced_entries": A list of entry ids that have forced_read_state set to
//   true. This flag is meant to indicate the entry's read_state has been
//   manually set to 'unread' by the user, so the entry should not be
//   automatically marked as read.
// * "view": A threaded view of all the entries in the discussion, containing
//   the id, user_id, and message.
// * "new_entries": Because this view is eventually consistent, it's possible
//   that newly created or updated entries won't yet be reflected in the view.
//   If the application wants to also get a flat list of all entries not yet
//   reflected in the view, pass include_new_entries=1 to the request and this
//   array of entries will be returned. These entries are returned in a flat
//   array, in ascending created_at order.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/view[]
// return canvasRequest(CanvasConstants.get_full_topic_groups, {group_id, topic_id}, query);
export const get_full_topic_groups = { type: "GET_FULL_TOPIC_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// Post an entry
// Create a new entry in a discussion topic. Returns a json representation of
// the created entry (see documentation for 'entries' method) on success.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries
// Query Params:
//   message
//   attachment
// return canvasRequest(CanvasConstants.post_entry_courses, {course_id, topic_id}, query);
export const post_entry_courses = { type: "POST_ENTRY_COURSES", method: "post", reducer: 'discussion_topics'};
    
// Post an entry
// Create a new entry in a discussion topic. Returns a json representation of
// the created entry (see documentation for 'entries' method) on success.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries
// Query Params:
//   message
//   attachment
// return canvasRequest(CanvasConstants.post_entry_groups, {group_id, topic_id}, query);
export const post_entry_groups = { type: "POST_ENTRY_GROUPS", method: "post", reducer: 'discussion_topics'};
    
// List topic entries
// Retrieve the (paginated) top-level entries in a discussion topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Will include the 10 most recent replies, if any, for each entry returned.
// 
// If the topic is a root topic with children corresponding to groups of a
// group assignment, entries from those subtopics for which the user belongs
// to the corresponding group will be returned.
// 
// Ordering of returned entries is newest-first by posting timestamp (reply
// activity is ignored).
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries[]
// return canvasRequest(CanvasConstants.list_topic_entries_courses, {course_id, topic_id}, query);
export const list_topic_entries_courses = { type: "LIST_TOPIC_ENTRIES_COURSES", method: "get", reducer: 'discussion_topics'};
    
// List topic entries
// Retrieve the (paginated) top-level entries in a discussion topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Will include the 10 most recent replies, if any, for each entry returned.
// 
// If the topic is a root topic with children corresponding to groups of a
// group assignment, entries from those subtopics for which the user belongs
// to the corresponding group will be returned.
// 
// Ordering of returned entries is newest-first by posting timestamp (reply
// activity is ignored).
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries[]
// return canvasRequest(CanvasConstants.list_topic_entries_groups, {group_id, topic_id}, query);
export const list_topic_entries_groups = { type: "LIST_TOPIC_ENTRIES_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// Post a reply
// Add a reply to an entry in a discussion topic. Returns a json
// representation of the created reply (see documentation for 'replies'
// method) on success.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
// Query Params:
//   message
//   attachment
// return canvasRequest(CanvasConstants.post_reply_courses, {course_id, topic_id, entry_id}, query);
export const post_reply_courses = { type: "POST_REPLY_COURSES", method: "post", reducer: 'discussion_topics'};
    
// Post a reply
// Add a reply to an entry in a discussion topic. Returns a json
// representation of the created reply (see documentation for 'replies'
// method) on success.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
// Query Params:
//   message
//   attachment
// return canvasRequest(CanvasConstants.post_reply_groups, {group_id, topic_id, entry_id}, query);
export const post_reply_groups = { type: "POST_REPLY_GROUPS", method: "post", reducer: 'discussion_topics'};
    
// List entry replies
// Retrieve the (paginated) replies to a top-level entry in a discussion
// topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Ordering of returned entries is newest-first by creation timestamp.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies[]
// return canvasRequest(CanvasConstants.list_entry_replies_courses, {course_id, topic_id, entry_id}, query);
export const list_entry_replies_courses = { type: "LIST_ENTRY_REPLIES_COURSES", method: "get", reducer: 'discussion_topics'};
    
// List entry replies
// Retrieve the (paginated) replies to a top-level entry in a discussion
// topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Ordering of returned entries is newest-first by creation timestamp.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies[]
// return canvasRequest(CanvasConstants.list_entry_replies_groups, {group_id, topic_id, entry_id}, query);
export const list_entry_replies_groups = { type: "LIST_ENTRY_REPLIES_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// List entries
// Retrieve a paginated list of discussion entries, given a list of ids.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entry_list
// Query Params:
//   ids
// return canvasRequest(CanvasConstants.list_entries_courses, {course_id, topic_id}, query);
export const list_entries_courses = { type: "LIST_ENTRIES_COURSES", method: "get", reducer: 'discussion_topics'};
    
// List entries
// Retrieve a paginated list of discussion entries, given a list of ids.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entry_list
// Query Params:
//   ids
// return canvasRequest(CanvasConstants.list_entries_groups, {group_id, topic_id}, query);
export const list_entries_groups = { type: "LIST_ENTRIES_GROUPS", method: "get", reducer: 'discussion_topics'};
    
// Mark topic as read
// Mark the initial text of the discussion topic as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read[]
// return canvasRequest(CanvasConstants.mark_topic_as_read_courses, {course_id, topic_id}, query);
export const mark_topic_as_read_courses = { type: "MARK_TOPIC_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Mark topic as read
// Mark the initial text of the discussion topic as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read[]
// return canvasRequest(CanvasConstants.mark_topic_as_read_groups, {group_id, topic_id}, query);
export const mark_topic_as_read_groups = { type: "MARK_TOPIC_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Mark topic as unread
// Mark the initial text of the discussion topic as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read[]
// return canvasRequest(CanvasConstants.mark_topic_as_unread_courses, {course_id, topic_id}, query);
export const mark_topic_as_unread_courses = { type: "MARK_TOPIC_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Mark topic as unread
// Mark the initial text of the discussion topic as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read[]
// return canvasRequest(CanvasConstants.mark_topic_as_unread_groups, {group_id, topic_id}, query);
export const mark_topic_as_unread_groups = { type: "MARK_TOPIC_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
// Mark all entries as read
// Mark the discussion topic and all its entries as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read_all
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_all_entries_as_read_courses, {course_id, topic_id}, query);
export const mark_all_entries_as_read_courses = { type: "MARK_ALL_ENTRIES_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Mark all entries as read
// Mark the discussion topic and all its entries as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read_all
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_all_entries_as_read_groups, {group_id, topic_id}, query);
export const mark_all_entries_as_read_groups = { type: "MARK_ALL_ENTRIES_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Mark all entries as unread
// Mark the discussion topic and all its entries as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read_all
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_all_entries_as_unread_courses, {course_id, topic_id}, query);
export const mark_all_entries_as_unread_courses = { type: "MARK_ALL_ENTRIES_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Mark all entries as unread
// Mark the discussion topic and all its entries as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read_all
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_all_entries_as_unread_groups, {group_id, topic_id}, query);
export const mark_all_entries_as_unread_groups = { type: "MARK_ALL_ENTRIES_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
// Mark entry as read
// Mark a discussion entry as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_entry_as_read_courses, {course_id, topic_id, entry_id}, query);
export const mark_entry_as_read_courses = { type: "MARK_ENTRY_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Mark entry as read
// Mark a discussion entry as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_entry_as_read_groups, {group_id, topic_id, entry_id}, query);
export const mark_entry_as_read_groups = { type: "MARK_ENTRY_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Mark entry as unread
// Mark a discussion entry as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_entry_as_unread_courses, {course_id, topic_id, entry_id}, query);
export const mark_entry_as_unread_courses = { type: "MARK_ENTRY_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Mark entry as unread
// Mark a discussion entry as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
// Query Params:
//   forced_read_state
// return canvasRequest(CanvasConstants.mark_entry_as_unread_groups, {group_id, topic_id, entry_id}, query);
export const mark_entry_as_unread_groups = { type: "MARK_ENTRY_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
// Rate entry
// Rate a discussion entry.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating
// Query Params:
//   rating
// return canvasRequest(CanvasConstants.rate_entry_courses, {course_id, topic_id, entry_id}, query);
export const rate_entry_courses = { type: "RATE_ENTRY_COURSES", method: "post", reducer: 'discussion_topics'};
    
// Rate entry
// Rate a discussion entry.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating
// Query Params:
//   rating
// return canvasRequest(CanvasConstants.rate_entry_groups, {group_id, topic_id, entry_id}, query);
export const rate_entry_groups = { type: "RATE_ENTRY_GROUPS", method: "post", reducer: 'discussion_topics'};
    
// Subscribe to a topic
// Subscribe to a topic to receive notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/subscribed[]
// return canvasRequest(CanvasConstants.subscribe_to_topic_courses, {course_id, topic_id}, query);
export const subscribe_to_topic_courses = { type: "SUBSCRIBE_TO_TOPIC_COURSES", method: "put", reducer: 'discussion_topics'};
    
// Subscribe to a topic
// Subscribe to a topic to receive notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/subscribed[]
// return canvasRequest(CanvasConstants.subscribe_to_topic_groups, {group_id, topic_id}, query);
export const subscribe_to_topic_groups = { type: "SUBSCRIBE_TO_TOPIC_GROUPS", method: "put", reducer: 'discussion_topics'};
    
// Unsubscribe from a topic
// Unsubscribe from a topic to stop receiving notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/subscribed[]
// return canvasRequest(CanvasConstants.unsubscribe_from_topic_courses, {course_id, topic_id}, query);
export const unsubscribe_from_topic_courses = { type: "UNSUBSCRIBE_FROM_TOPIC_COURSES", method: "delete", reducer: 'discussion_topics'};
    
// Unsubscribe from a topic
// Unsubscribe from a topic to stop receiving notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/subscribed[]
// return canvasRequest(CanvasConstants.unsubscribe_from_topic_groups, {group_id, topic_id}, query);
export const unsubscribe_from_topic_groups = { type: "UNSUBSCRIBE_FROM_TOPIC_GROUPS", method: "delete", reducer: 'discussion_topics'};
    
