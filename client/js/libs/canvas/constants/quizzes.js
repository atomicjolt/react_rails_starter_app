// Quizzes

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
    
// Create enrollment term
// Create a new enrollment term for the specified account.
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms
// Query Params:
//   enrollment_term[name]
//   enrollment_term[start_at]
//   enrollment_term[end_at]
//   enrollment_term[sis_term_id]
// return canvasRequest(CanvasConstants.create_enrollment_term, {account_id}, query);
export const create_enrollment_term = { type: "CREATE_ENROLLMENT_TERM", method: "post", reducer: 'enrollment_terms'};
    
// Update enrollment term
// Update an existing enrollment term for the specified account.
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms/{id}
// Query Params:
//   enrollment_term[name]
//   enrollment_term[start_at]
//   enrollment_term[end_at]
//   enrollment_term[sis_term_id]
// return canvasRequest(CanvasConstants.update_enrollment_term, {account_id, id}, query);
export const update_enrollment_term = { type: "UPDATE_ENROLLMENT_TERM", method: "put", reducer: 'enrollment_terms'};
    
// Delete enrollment term
// Delete the specified enrollment term.
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms/{id}[]
// return canvasRequest(CanvasConstants.delete_enrollment_term, {account_id, id}, query);
export const delete_enrollment_term = { type: "DELETE_ENROLLMENT_TERM", method: "delete", reducer: 'enrollment_terms'};
    
// List enrollment terms
// Return all of the terms in the account.
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms
// Query Params:
//   workflow_state
// return canvasRequest(CanvasConstants.list_enrollment_terms, {account_id}, query);
export const list_enrollment_terms = { type: "LIST_ENROLLMENT_TERMS", method: "get", reducer: 'enrollment_terms'};
    
// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
// Query Params:
//   type
//   role
//   state
//   user_id
//   grading_period_id
// return canvasRequest(CanvasConstants.list_enrollments_courses, {course_id}, query);
export const list_enrollments_courses = { type: "LIST_ENROLLMENTS_COURSES", method: "get", reducer: 'enrollments'};
    
// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
// Query Params:
//   type
//   role
//   state
//   user_id
//   grading_period_id
// return canvasRequest(CanvasConstants.list_enrollments_sections, {section_id}, query);
export const list_enrollments_sections = { type: "LIST_ENROLLMENTS_SECTIONS", method: "get", reducer: 'enrollments'};
    
// List enrollments
// Depending on the URL given, return either (1) all of the enrollments in
// a course, (2) all of the enrollments in a section or (3) all of a user's
// enrollments. This includes student, teacher, TA, and observer enrollments.
// 
// If a user has multiple enrollments in a context (e.g. as a teacher
// and a student or in multiple course sections), each enrollment will be
// listed separately.
// 
// note: Currently, only an admin user can return other users' enrollments. A
// user can, however, return his/her own enrollments.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: users/{user_id}/enrollments
// Query Params:
//   type
//   role
//   state
//   grading_period_id
// return canvasRequest(CanvasConstants.list_enrollments_users, {user_id}, query);
export const list_enrollments_users = { type: "LIST_ENROLLMENTS_USERS", method: "get", reducer: 'enrollments'};
    
// Enrollment by ID
// Get an Enrollment object by Enrollment ID
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: accounts/{account_id}/enrollments/{id}[]
// return canvasRequest(CanvasConstants.enrollment_by_id, {account_id, id}, query);
export const enrollment_by_id = { type: "ENROLLMENT_BY_ID", method: "get", reducer: 'enrollments'};
    
// Enroll a user
// Create a new user enrollment for a course or section.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments
// Query Params:
//   enrollment[user_id]
//   enrollment[type]
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
// return canvasRequest(CanvasConstants.enroll_user_courses, {course_id}, query);
export const enroll_user_courses = { type: "ENROLL_USER_COURSES", method: "post", reducer: 'enrollments'};
    
// Enroll a user
// Create a new user enrollment for a course or section.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: sections/{section_id}/enrollments
// Query Params:
//   enrollment[user_id]
//   enrollment[type]
//   enrollment[role]
//   enrollment[role_id]
//   enrollment[enrollment_state]
//   enrollment[course_section_id]
//   enrollment[limit_privileges_to_course_section]
//   enrollment[notify]
//   enrollment[self_enrollment_code]
//   enrollment[self_enrolled]
// return canvasRequest(CanvasConstants.enroll_user_sections, {section_id}, query);
export const enroll_user_sections = { type: "ENROLL_USER_SECTIONS", method: "post", reducer: 'enrollments'};
    
// Conclude or inactivate an enrollment
// Delete, conclude or inactivate an enrollment.
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}
// Query Params:
//   task
// return canvasRequest(CanvasConstants.conclude_or_inactivate_enrollment, {course_id, id}, query);
export const conclude_or_inactivate_enrollment = { type: "CONCLUDE_OR_INACTIVATE_ENROLLMENT", method: "delete", reducer: 'enrollments'};
    
// Re-activate an enrollment
// Activates an inactive enrollment
// API Docs: https://canvas.instructure.com/doc/api/enrollments.html
// API Url: courses/{course_id}/enrollments/{id}/reactivate[]
// return canvasRequest(CanvasConstants.re_activate_enrollment, {course_id, id}, query);
export const re_activate_enrollment = { type: "RE_ACTIVATE_ENROLLMENT", method: "put", reducer: 'enrollments'};
    
// Create Error Report
// Create a new error report documenting an experienced problem
// 
// Performs the same action as when a user uses the "help -> report a problem"
// dialog.
// API Docs: https://canvas.instructure.com/doc/api/error_reports.html
// API Url: error_reports
// Query Params:
//   error[subject]
//   error[url]
//   error[email]
//   error[comments]
//   error[http_env]
// return canvasRequest(CanvasConstants.create_error_report, {}, query);
export const create_error_report = { type: "CREATE_ERROR_REPORT", method: "post", reducer: 'error_reports'};
    
// List external tools
// Returns the paginated list of external tools for the current context.
// See the get request docs for a single tool for a list of properties on an external tool.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools
// Query Params:
//   search_term
//   selectable
// return canvasRequest(CanvasConstants.list_external_tools_courses, {course_id}, query);
export const list_external_tools_courses = { type: "LIST_EXTERNAL_TOOLS_COURSES", method: "get", reducer: 'external_tools'};
    
// List external tools
// Returns the paginated list of external tools for the current context.
// See the get request docs for a single tool for a list of properties on an external tool.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools
// Query Params:
//   search_term
//   selectable
// return canvasRequest(CanvasConstants.list_external_tools_accounts, {account_id}, query);
export const list_external_tools_accounts = { type: "LIST_EXTERNAL_TOOLS_ACCOUNTS", method: "get", reducer: 'external_tools'};
    
// Get a sessionless launch url for an external tool.
// Returns a sessionless launch url for an external tool.
// 
// Either the id or url must be provided.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/sessionless_launch
// Query Params:
//   id
//   url
//   assignment_id
//   launch_type
// return canvasRequest(CanvasConstants.get_sessionless_launch_url_for_external_tool_courses, {course_id}, query);
export const get_sessionless_launch_url_for_external_tool_courses = { type: "GET_SESSIONLESS_LAUNCH_URL_FOR_EXTERNAL_TOOL_COURSES", method: "get", reducer: 'external_tools'};
    
// Get a sessionless launch url for an external tool.
// Returns a sessionless launch url for an external tool.
// 
// Either the id or url must be provided.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/sessionless_launch
// Query Params:
//   id
//   url
//   assignment_id
//   launch_type
// return canvasRequest(CanvasConstants.get_sessionless_launch_url_for_external_tool_accounts, {account_id}, query);
export const get_sessionless_launch_url_for_external_tool_accounts = { type: "GET_SESSIONLESS_LAUNCH_URL_FOR_EXTERNAL_TOOL_ACCOUNTS", method: "get", reducer: 'external_tools'};
    
// Get a single external tool
// Returns the specified external tool.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.get_single_external_tool_courses, {course_id, external_tool_id}, query);
export const get_single_external_tool_courses = { type: "GET_SINGLE_EXTERNAL_TOOL_COURSES", method: "get", reducer: 'external_tools'};
    
// Get a single external tool
// Returns the specified external tool.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.get_single_external_tool_accounts, {account_id, external_tool_id}, query);
export const get_single_external_tool_accounts = { type: "GET_SINGLE_EXTERNAL_TOOL_ACCOUNTS", method: "get", reducer: 'external_tools'};
    
// Create an external tool
// Create an external tool in the specified course/account.
// The created tool will be returned, see the "show" endpoint for an example.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools
// Query Params:
//   name
//   privacy_level
//   consumer_key
//   shared_secret
//   description
//   url
//   domain
//   icon_url
//   text
//   not_selectable
//   custom_fields
//   account_navigation[url]
//   account_navigation[enabled]
//   account_navigation[text]
//   user_navigation[url]
//   user_navigation[enabled]
//   user_navigation[text]
//   course_navigation[url]
//   course_navigation[enabled]
//   course_navigation[text]
//   course_navigation[visibility]
//   course_navigation[default]
//   editor_button[url]
//   editor_button[enabled]
//   editor_button[icon_url]
//   editor_button[selection_width]
//   editor_button[selection_height]
//   resource_selection[url]
//   resource_selection[enabled]
//   resource_selection[icon_url]
//   resource_selection[selection_width]
//   resource_selection[selection_height]
//   config_type
//   config_xml
//   config_url
// return canvasRequest(CanvasConstants.create_external_tool_courses, {course_id}, query);
export const create_external_tool_courses = { type: "CREATE_EXTERNAL_TOOL_COURSES", method: "post", reducer: 'external_tools'};
    
// Create an external tool
// Create an external tool in the specified course/account.
// The created tool will be returned, see the "show" endpoint for an example.
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools
// Query Params:
//   name
//   privacy_level
//   consumer_key
//   shared_secret
//   description
//   url
//   domain
//   icon_url
//   text
//   not_selectable
//   custom_fields
//   account_navigation[url]
//   account_navigation[enabled]
//   account_navigation[text]
//   user_navigation[url]
//   user_navigation[enabled]
//   user_navigation[text]
//   course_navigation[url]
//   course_navigation[enabled]
//   course_navigation[text]
//   course_navigation[visibility]
//   course_navigation[default]
//   editor_button[url]
//   editor_button[enabled]
//   editor_button[icon_url]
//   editor_button[selection_width]
//   editor_button[selection_height]
//   resource_selection[url]
//   resource_selection[enabled]
//   resource_selection[icon_url]
//   resource_selection[selection_width]
//   resource_selection[selection_height]
//   config_type
//   config_xml
//   config_url
// return canvasRequest(CanvasConstants.create_external_tool_accounts, {account_id}, query);
export const create_external_tool_accounts = { type: "CREATE_EXTERNAL_TOOL_ACCOUNTS", method: "post", reducer: 'external_tools'};
    
// Edit an external tool
// Update the specified external tool. Uses same parameters as create
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.edit_external_tool_courses, {course_id, external_tool_id}, query);
export const edit_external_tool_courses = { type: "EDIT_EXTERNAL_TOOL_COURSES", method: "put", reducer: 'external_tools'};
    
// Edit an external tool
// Update the specified external tool. Uses same parameters as create
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.edit_external_tool_accounts, {account_id, external_tool_id}, query);
export const edit_external_tool_accounts = { type: "EDIT_EXTERNAL_TOOL_ACCOUNTS", method: "put", reducer: 'external_tools'};
    
// Delete an external tool
// Remove the specified external tool
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: courses/{course_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.delete_external_tool_courses, {course_id, external_tool_id}, query);
export const delete_external_tool_courses = { type: "DELETE_EXTERNAL_TOOL_COURSES", method: "delete", reducer: 'external_tools'};
    
// Delete an external tool
// Remove the specified external tool
// API Docs: https://canvas.instructure.com/doc/api/external_tools.html
// API Url: accounts/{account_id}/external_tools/{external_tool_id}[]
// return canvasRequest(CanvasConstants.delete_external_tool_accounts, {account_id, external_tool_id}, query);
export const delete_external_tool_accounts = { type: "DELETE_EXTERNAL_TOOL_ACCOUNTS", method: "delete", reducer: 'external_tools'};
    
// List favorite courses
// Retrieve the list of favorite courses for the current user. If the user has not chosen
// any favorites, then a selection of currently enrolled courses will be returned.
// 
// See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
// return canvasRequest(CanvasConstants.list_favorite_courses, {}, query);
export const list_favorite_courses = { type: "LIST_FAVORITE_COURSES", method: "get", reducer: 'favorites'};
    
// List favorite groups
// Retrieve the list of favorite groups for the current user. If the user has not chosen
// any favorites, then a selection of groups that the user is a member of will be returned.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
// return canvasRequest(CanvasConstants.list_favorite_groups, {}, query);
export const list_favorite_groups = { type: "LIST_FAVORITE_GROUPS", method: "get", reducer: 'favorites'};
    
// Add course to favorites
// Add a course to the current user's favorites.  If the course is already
// in the user's favorites, nothing happens.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}[]
// return canvasRequest(CanvasConstants.add_course_to_favorites, {id}, query);
export const add_course_to_favorites = { type: "ADD_COURSE_TO_FAVORITES", method: "post", reducer: 'favorites'};
    
// Add group to favorites
// Add a group to the current user's favorites.  If the group is already
// in the user's favorites, nothing happens.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}[]
// return canvasRequest(CanvasConstants.add_group_to_favorites, {id}, query);
export const add_group_to_favorites = { type: "ADD_GROUP_TO_FAVORITES", method: "post", reducer: 'favorites'};
    
// Remove course from favorites
// Remove a course from the current user's favorites.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}[]
// return canvasRequest(CanvasConstants.remove_course_from_favorites, {id}, query);
export const remove_course_from_favorites = { type: "REMOVE_COURSE_FROM_FAVORITES", method: "delete", reducer: 'favorites'};
    
// Remove group from favorites
// Remove a group from the current user's favorites.
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}[]
// return canvasRequest(CanvasConstants.remove_group_from_favorites, {id}, query);
export const remove_group_from_favorites = { type: "REMOVE_GROUP_FROM_FAVORITES", method: "delete", reducer: 'favorites'};
    
// Reset course favorites
// Reset the current user's course favorites to the default
// automatically generated list of enrolled courses
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
// return canvasRequest(CanvasConstants.reset_course_favorites, {}, query);
export const reset_course_favorites = { type: "RESET_COURSE_FAVORITES", method: "delete", reducer: 'favorites'};
    
// Reset group favorites
// Reset the current user's group favorites to the default
// automatically generated list of enrolled group
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
// return canvasRequest(CanvasConstants.reset_group_favorites, {}, query);
export const reset_group_favorites = { type: "RESET_GROUP_FAVORITES", method: "delete", reducer: 'favorites'};
    
// List features
// List all features that apply to a given Account, Course, or User.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features[]
// return canvasRequest(CanvasConstants.list_features_courses, {course_id}, query);
export const list_features_courses = { type: "LIST_FEATURES_COURSES", method: "get", reducer: 'feature_flags'};
    
// List features
// List all features that apply to a given Account, Course, or User.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features[]
// return canvasRequest(CanvasConstants.list_features_accounts, {account_id}, query);
export const list_features_accounts = { type: "LIST_FEATURES_ACCOUNTS", method: "get", reducer: 'feature_flags'};
    
// List features
// List all features that apply to a given Account, Course, or User.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features[]
// return canvasRequest(CanvasConstants.list_features_users, {user_id}, query);
export const list_features_users = { type: "LIST_FEATURES_USERS", method: "get", reducer: 'feature_flags'};
    
// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/enabled[]
// return canvasRequest(CanvasConstants.list_enabled_features_courses, {course_id}, query);
export const list_enabled_features_courses = { type: "LIST_ENABLED_FEATURES_COURSES", method: "get", reducer: 'feature_flags'};
    
// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/enabled[]
// return canvasRequest(CanvasConstants.list_enabled_features_accounts, {account_id}, query);
export const list_enabled_features_accounts = { type: "LIST_ENABLED_FEATURES_ACCOUNTS", method: "get", reducer: 'feature_flags'};
    
// List enabled features
// List all features that are enabled on a given Account, Course, or User.
// Only the feature names are returned.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/enabled[]
// return canvasRequest(CanvasConstants.list_enabled_features_users, {user_id}, query);
export const list_enabled_features_users = { type: "LIST_ENABLED_FEATURES_USERS", method: "get", reducer: 'feature_flags'};
    
// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.get_feature_flag_courses, {course_id, feature}, query);
export const get_feature_flag_courses = { type: "GET_FEATURE_FLAG_COURSES", method: "get", reducer: 'feature_flags'};
    
// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.get_feature_flag_accounts, {account_id, feature}, query);
export const get_feature_flag_accounts = { type: "GET_FEATURE_FLAG_ACCOUNTS", method: "get", reducer: 'feature_flags'};
    
// Get feature flag
// Get the feature flag that applies to a given Account, Course, or User.
// The flag may be defined on the object, or it may be inherited from a parent
// account. You can look at the context_id and context_type of the returned object
// to determine which is the case. If these fields are missing, then the object
// is the global Canvas default.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.get_feature_flag_users, {user_id, feature}, query);
export const get_feature_flag_users = { type: "GET_FEATURE_FLAG_USERS", method: "get", reducer: 'feature_flags'};
    
// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}
// Query Params:
//   state
//   locking_account_id
// return canvasRequest(CanvasConstants.set_feature_flag_courses, {course_id, feature}, query);
export const set_feature_flag_courses = { type: "SET_FEATURE_FLAG_COURSES", method: "put", reducer: 'feature_flags'};
    
// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}
// Query Params:
//   state
//   locking_account_id
// return canvasRequest(CanvasConstants.set_feature_flag_accounts, {account_id, feature}, query);
export const set_feature_flag_accounts = { type: "SET_FEATURE_FLAG_ACCOUNTS", method: "put", reducer: 'feature_flags'};
    
// Set feature flag
// Set a feature flag for a given Account, Course, or User. This call will fail if a parent account sets
// a feature flag for the same feature in any state other than "allowed".
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}
// Query Params:
//   state
//   locking_account_id
// return canvasRequest(CanvasConstants.set_feature_flag_users, {user_id, feature}, query);
export const set_feature_flag_users = { type: "SET_FEATURE_FLAG_USERS", method: "put", reducer: 'feature_flags'};
    
// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: courses/{course_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.remove_feature_flag_courses, {course_id, feature}, query);
export const remove_feature_flag_courses = { type: "REMOVE_FEATURE_FLAG_COURSES", method: "delete", reducer: 'feature_flags'};
    
// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: accounts/{account_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.remove_feature_flag_accounts, {account_id, feature}, query);
export const remove_feature_flag_accounts = { type: "REMOVE_FEATURE_FLAG_ACCOUNTS", method: "delete", reducer: 'feature_flags'};
    
// Remove feature flag
// Remove feature flag for a given Account, Course, or User.  (Note that the flag must
// be defined on the Account, Course, or User directly.)  The object will then inherit
// the feature flags from a higher account, if any exist.  If this flag was 'on' or 'off',
// then lower-level account flags that were masked by this one will apply again.
// API Docs: https://canvas.instructure.com/doc/api/feature_flags.html
// API Url: users/{user_id}/features/flags/{feature}[]
// return canvasRequest(CanvasConstants.remove_feature_flag_users, {user_id, feature}, query);
export const remove_feature_flag_users = { type: "REMOVE_FEATURE_FLAG_USERS", method: "delete", reducer: 'feature_flags'};
    
// Get quota information
// Returns the total and used storage quota for the course, group, or user.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files/quota[]
// return canvasRequest(CanvasConstants.get_quota_information_courses, {course_id}, query);
export const get_quota_information_courses = { type: "GET_QUOTA_INFORMATION_COURSES", method: "get", reducer: 'files'};
    
// Get quota information
// Returns the total and used storage quota for the course, group, or user.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files/quota[]
// return canvasRequest(CanvasConstants.get_quota_information_groups, {group_id}, query);
export const get_quota_information_groups = { type: "GET_QUOTA_INFORMATION_GROUPS", method: "get", reducer: 'files'};
    
// Get quota information
// Returns the total and used storage quota for the course, group, or user.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files/quota[]
// return canvasRequest(CanvasConstants.get_quota_information_users, {user_id}, query);
export const get_quota_information_users = { type: "GET_QUOTA_INFORMATION_USERS", method: "get", reducer: 'files'};
    
// List files
// Returns the paginated list of files for the folder or course.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files
// Query Params:
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// return canvasRequest(CanvasConstants.list_files_courses, {course_id}, query);
export const list_files_courses = { type: "LIST_FILES_COURSES", method: "get", reducer: 'files'};
    
// List files
// Returns the paginated list of files for the folder or course.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files
// Query Params:
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// return canvasRequest(CanvasConstants.list_files_users, {user_id}, query);
export const list_files_users = { type: "LIST_FILES_USERS", method: "get", reducer: 'files'};
    
// List files
// Returns the paginated list of files for the folder or course.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files
// Query Params:
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// return canvasRequest(CanvasConstants.list_files_groups, {group_id}, query);
export const list_files_groups = { type: "LIST_FILES_GROUPS", method: "get", reducer: 'files'};
    
// List files
// Returns the paginated list of files for the folder or course.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}/files
// Query Params:
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// return canvasRequest(CanvasConstants.list_files_folders, {id}, query);
export const list_files_folders = { type: "LIST_FILES_FOLDERS", method: "get", reducer: 'files'};
    
// Get quota information
// Determine the URL that should be used for inline preview of the file.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}/public_url[]
// return canvasRequest(CanvasConstants.get_quota_information, {id}, query);
export const get_quota_information = { type: "GET_QUOTA_INFORMATION", method: "get", reducer: 'files'};
    
// Get file
// Returns the standard attachment json object
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_file_files, {id}, query);
export const get_file_files = { type: "GET_FILE_FILES", method: "get", reducer: 'files'};
    
// Get file
// Returns the standard attachment json object
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_file_courses, {course_id, id}, query);
export const get_file_courses = { type: "GET_FILE_COURSES", method: "get", reducer: 'files'};
    
// Get file
// Returns the standard attachment json object
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_file_groups, {group_id, id}, query);
export const get_file_groups = { type: "GET_FILE_GROUPS", method: "get", reducer: 'files'};
    
// Get file
// Returns the standard attachment json object
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_file_users, {user_id, id}, query);
export const get_file_users = { type: "GET_FILE_USERS", method: "get", reducer: 'files'};
    
// Update file
// Update some settings on the specified file
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}
// Query Params:
//   name
//   parent_folder_id
//   on_duplicate
//   lock_at
//   unlock_at
//   locked
//   hidden
// return canvasRequest(CanvasConstants.update_file, {id}, query);
export const update_file = { type: "UPDATE_FILE", method: "put", reducer: 'files'};
    
// Delete file
// Remove the specified file
// 
//   curl -XDELETE 'https://<canvas>/api/v1/files/<file_id>' \
//        -H 'Authorization: Bearer <token>'
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}[]
// return canvasRequest(CanvasConstants.delete_file, {id}, query);
export const delete_file = { type: "DELETE_FILE", method: "delete", reducer: 'files'};
    
// List folders
// Returns the paginated list of folders in the folder.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}/folders[]
// return canvasRequest(CanvasConstants.list_folders, {id}, query);
export const list_folders = { type: "LIST_FOLDERS", method: "get", reducer: 'files'};
    
// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders[]
// return canvasRequest(CanvasConstants.list_all_folders_courses, {course_id}, query);
export const list_all_folders_courses = { type: "LIST_ALL_FOLDERS_COURSES", method: "get", reducer: 'files'};
    
// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders[]
// return canvasRequest(CanvasConstants.list_all_folders_users, {user_id}, query);
export const list_all_folders_users = { type: "LIST_ALL_FOLDERS_USERS", method: "get", reducer: 'files'};
    
// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders[]
// return canvasRequest(CanvasConstants.list_all_folders_groups, {group_id}, query);
export const list_all_folders_groups = { type: "LIST_ALL_FOLDERS_GROUPS", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/by_path/*full_path[]
// return canvasRequest(CanvasConstants.resolve_path_courses_full_path, {course_id}, query);
export const resolve_path_courses_full_path = { type: "RESOLVE_PATH_COURSES_FULL_PATH", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/by_path[]
// return canvasRequest(CanvasConstants.resolve_path_courses, {course_id}, query);
export const resolve_path_courses = { type: "RESOLVE_PATH_COURSES", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/by_path/*full_path[]
// return canvasRequest(CanvasConstants.resolve_path_users_full_path, {user_id}, query);
export const resolve_path_users_full_path = { type: "RESOLVE_PATH_USERS_FULL_PATH", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/by_path[]
// return canvasRequest(CanvasConstants.resolve_path_users, {user_id}, query);
export const resolve_path_users = { type: "RESOLVE_PATH_USERS", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/by_path/*full_path[]
// return canvasRequest(CanvasConstants.resolve_path_groups_full_path, {group_id}, query);
export const resolve_path_groups_full_path = { type: "RESOLVE_PATH_GROUPS_FULL_PATH", method: "get", reducer: 'files'};
    
// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/by_path[]
// return canvasRequest(CanvasConstants.resolve_path_groups, {group_id}, query);
export const resolve_path_groups = { type: "RESOLVE_PATH_GROUPS", method: "get", reducer: 'files'};
    
// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/{id}[]
// return canvasRequest(CanvasConstants.get_folder_courses, {course_id, id}, query);
export const get_folder_courses = { type: "GET_FOLDER_COURSES", method: "get", reducer: 'files'};
    
// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/{id}[]
// return canvasRequest(CanvasConstants.get_folder_users, {user_id, id}, query);
export const get_folder_users = { type: "GET_FOLDER_USERS", method: "get", reducer: 'files'};
    
// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/{id}[]
// return canvasRequest(CanvasConstants.get_folder_groups, {group_id, id}, query);
export const get_folder_groups = { type: "GET_FOLDER_GROUPS", method: "get", reducer: 'files'};
    
// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}[]
// return canvasRequest(CanvasConstants.get_folder_folders, {id}, query);
export const get_folder_folders = { type: "GET_FOLDER_FOLDERS", method: "get", reducer: 'files'};
    
// Update folder
// Updates a folder
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}
// Query Params:
//   name
//   parent_folder_id
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// return canvasRequest(CanvasConstants.update_folder, {id}, query);
export const update_folder = { type: "UPDATE_FOLDER", method: "put", reducer: 'files'};
    
// Create folder
// Creates a folder in the specified context
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders
// Query Params:
//   name
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// return canvasRequest(CanvasConstants.create_folder_courses, {course_id}, query);
export const create_folder_courses = { type: "CREATE_FOLDER_COURSES", method: "post", reducer: 'files'};
    
// Create folder
// Creates a folder in the specified context
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders
// Query Params:
//   name
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// return canvasRequest(CanvasConstants.create_folder_users, {user_id}, query);
export const create_folder_users = { type: "CREATE_FOLDER_USERS", method: "post", reducer: 'files'};
    
// Create folder
// Creates a folder in the specified context
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders
// Query Params:
//   name
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// return canvasRequest(CanvasConstants.create_folder_groups, {group_id}, query);
export const create_folder_groups = { type: "CREATE_FOLDER_GROUPS", method: "post", reducer: 'files'};
    
// Create folder
// Creates a folder in the specified context
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{folder_id}/folders
// Query Params:
//   name
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// return canvasRequest(CanvasConstants.create_folder_folders, {folder_id}, query);
export const create_folder_folders = { type: "CREATE_FOLDER_FOLDERS", method: "post", reducer: 'files'};
    
// Delete folder
// Remove the specified folder. You can only delete empty folders unless you
// set the 'force' flag
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}
// Query Params:
//   force
// return canvasRequest(CanvasConstants.delete_folder, {id}, query);
export const delete_folder = { type: "DELETE_FOLDER", method: "delete", reducer: 'files'};
    
// Copy a file
// Copy a file from elsewhere in Canvas into a folder.
// 
// Copying a file across contexts (between courses and users) is permitted,
// but the source and destination must belong to the same institution.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{dest_folder_id}/copy_file
// Query Params:
//   source_file_id
//   on_duplicate
// return canvasRequest(CanvasConstants.copy_file, {dest_folder_id}, query);
export const copy_file = { type: "COPY_FILE", method: "post", reducer: 'files'};
    
// Copy a folder
// Copy a folder (and its contents) from elsewhere in Canvas into a folder.
// 
// Copying a folder across contexts (between courses and users) is permitted,
// but the source and destination must belong to the same institution.
// If the source and destination folders are in the same context, the
// source folder may not contain the destination folder. A folder will be
// renamed at its destination if another folder with the same name already
// exists.
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{dest_folder_id}/copy_folder
// Query Params:
//   source_folder_id
// return canvasRequest(CanvasConstants.copy_folder, {dest_folder_id}, query);
export const copy_folder = { type: "COPY_FOLDER", method: "post", reducer: 'files'};
    
// Set usage rights
// Sets copyright and license information for one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
//   publish
//   usage_rights[use_justification]
//   usage_rights[legal_copyright]
//   usage_rights[license]
// return canvasRequest(CanvasConstants.set_usage_rights_courses, {course_id}, query);
export const set_usage_rights_courses = { type: "SET_USAGE_RIGHTS_COURSES", method: "put", reducer: 'files'};
    
// Set usage rights
// Sets copyright and license information for one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
//   publish
//   usage_rights[use_justification]
//   usage_rights[legal_copyright]
//   usage_rights[license]
// return canvasRequest(CanvasConstants.set_usage_rights_groups, {group_id}, query);
export const set_usage_rights_groups = { type: "SET_USAGE_RIGHTS_GROUPS", method: "put", reducer: 'files'};
    
// Set usage rights
// Sets copyright and license information for one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
//   publish
//   usage_rights[use_justification]
//   usage_rights[legal_copyright]
//   usage_rights[license]
// return canvasRequest(CanvasConstants.set_usage_rights_users, {user_id}, query);
export const set_usage_rights_users = { type: "SET_USAGE_RIGHTS_USERS", method: "put", reducer: 'files'};
    
// Remove usage rights
// Removes copyright and license information associated with one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
// return canvasRequest(CanvasConstants.remove_usage_rights_courses, {course_id}, query);
export const remove_usage_rights_courses = { type: "REMOVE_USAGE_RIGHTS_COURSES", method: "delete", reducer: 'files'};
    
// Remove usage rights
// Removes copyright and license information associated with one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
// return canvasRequest(CanvasConstants.remove_usage_rights_groups, {group_id}, query);
export const remove_usage_rights_groups = { type: "REMOVE_USAGE_RIGHTS_GROUPS", method: "delete", reducer: 'files'};
    
// Remove usage rights
// Removes copyright and license information associated with one or more files
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/usage_rights
// Query Params:
//   file_ids
//   folder_ids
// return canvasRequest(CanvasConstants.remove_usage_rights_users, {user_id}, query);
export const remove_usage_rights_users = { type: "REMOVE_USAGE_RIGHTS_USERS", method: "delete", reducer: 'files'};
    
// List licenses
// Lists licenses that can be applied
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/content_licenses[]
// return canvasRequest(CanvasConstants.list_licenses_courses, {course_id}, query);
export const list_licenses_courses = { type: "LIST_LICENSES_COURSES", method: "get", reducer: 'files'};
    
// List licenses
// Lists licenses that can be applied
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/content_licenses[]
// return canvasRequest(CanvasConstants.list_licenses_groups, {group_id}, query);
export const list_licenses_groups = { type: "LIST_LICENSES_GROUPS", method: "get", reducer: 'files'};
    
// List licenses
// Lists licenses that can be applied
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/content_licenses[]
// return canvasRequest(CanvasConstants.list_licenses_users, {user_id}, query);
export const list_licenses_users = { type: "LIST_LICENSES_USERS", method: "get", reducer: 'files'};
    
// Query by assignment.
// List grade change events for a given assignment.
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/assignments/{assignment_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_assignment, {assignment_id}, query);
export const query_by_assignment = { type: "QUERY_BY_ASSIGNMENT", method: "get", reducer: 'grade_change_log'};
    
// Query by student.
// List grade change events for a given student.
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/students/{student_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_student, {student_id}, query);
export const query_by_student = { type: "QUERY_BY_STUDENT", method: "get", reducer: 'grade_change_log'};
    
// Query by grader.
// List grade change events for a given grader.
// API Docs: https://canvas.instructure.com/doc/api/grade_change_log.html
// API Url: audit/grade_change/graders/{grader_id}
// Query Params:
//   start_time
//   end_time
// return canvasRequest(CanvasConstants.query_by_grader, {grader_id}, query);
export const query_by_grader = { type: "QUERY_BY_GRADER", method: "get", reducer: 'grade_change_log'};
    
// Days in gradebook history for this course
// Returns a map of dates to grader/assignment groups
// API Docs: https://canvas.instructure.com/doc/api/gradebook_history.html
// API Url: courses/{course_id}/gradebook_history/days[]
// return canvasRequest(CanvasConstants.days_in_gradebook_history_for_this_course, {course_id}, query);
export const days_in_gradebook_history_for_this_course = { type: "DAYS_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE", method: "get", reducer: 'gradebook_history'};
    
// Details for a given date in gradebook history for this course
// Returns the graders who worked on this day, along with the assignments they worked on.
// More details can be obtained by selecting a grader and assignment and calling the
// 'submissions' api endpoint for a given date.
// API Docs: https://canvas.instructure.com/doc/api/gradebook_history.html
// API Url: courses/{course_id}/gradebook_history/{date}[]
// return canvasRequest(CanvasConstants.details_for_given_date_in_gradebook_history_for_this_course, {course_id, date}, query);
export const details_for_given_date_in_gradebook_history_for_this_course = { type: "DETAILS_FOR_GIVEN_DATE_IN_GRADEBOOK_HISTORY_FOR_THIS_COURSE", method: "get", reducer: 'gradebook_history'};
    
// Lists submissions
// Gives a nested list of submission versions
// API Docs: https://canvas.instructure.com/doc/api/gradebook_history.html
// API Url: courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions[]
// return canvasRequest(CanvasConstants.lists_submissions, {course_id, date, grader_id, assignment_id}, query);
export const lists_submissions = { type: "LISTS_SUBMISSIONS", method: "get", reducer: 'gradebook_history'};
    
// List uncollated submission versions
// Gives a paginated, uncollated list of submission versions for all matching
// submissions in the context. This SubmissionVersion objects will not include
// the +new_grade+ or +previous_grade+ keys, only the +grade+; same for
// +graded_at+ and +grader+.
// API Docs: https://canvas.instructure.com/doc/api/gradebook_history.html
// API Url: courses/{course_id}/gradebook_history/feed
// Query Params:
//   assignment_id
//   user_id
//   ascending
// return canvasRequest(CanvasConstants.list_uncollated_submission_versions, {course_id}, query);
export const list_uncollated_submission_versions = { type: "LIST_UNCOLLATED_SUBMISSION_VERSIONS", method: "get", reducer: 'gradebook_history'};
    
// List grading periods
// Returns the list of grading periods for the current course.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods[]
// return canvasRequest(CanvasConstants.list_grading_periods_courses, {course_id}, query);
export const list_grading_periods_courses = { type: "LIST_GRADING_PERIODS_COURSES", method: "get", reducer: 'grading_periods'};
    
// List grading periods
// Returns the list of grading periods for the current course.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods[]
// return canvasRequest(CanvasConstants.list_grading_periods_accounts, {account_id}, query);
export const list_grading_periods_accounts = { type: "LIST_GRADING_PERIODS_ACCOUNTS", method: "get", reducer: 'grading_periods'};
    
// Get a single grading period
// Returns the grading period with the given id
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}[]
// return canvasRequest(CanvasConstants.get_single_grading_period_courses, {course_id, id}, query);
export const get_single_grading_period_courses = { type: "GET_SINGLE_GRADING_PERIOD_COURSES", method: "get", reducer: 'grading_periods'};
    
// Get a single grading period
// Returns the grading period with the given id
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}[]
// return canvasRequest(CanvasConstants.get_single_grading_period_accounts, {account_id, id}, query);
export const get_single_grading_period_accounts = { type: "GET_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "get", reducer: 'grading_periods'};
    
// Create a single grading period
// Create a new grading period for the current user
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods
// Query Params:
//   grading_periods[start_date]
//   grading_periods[end_date]
//   grading_periods[weight]
// return canvasRequest(CanvasConstants.create_single_grading_period_courses, {course_id}, query);
export const create_single_grading_period_courses = { type: "CREATE_SINGLE_GRADING_PERIOD_COURSES", method: "post", reducer: 'grading_periods'};
    
// Create a single grading period
// Create a new grading period for the current user
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods
// Query Params:
//   grading_periods[start_date]
//   grading_periods[end_date]
//   grading_periods[weight]
// return canvasRequest(CanvasConstants.create_single_grading_period_accounts, {account_id}, query);
export const create_single_grading_period_accounts = { type: "CREATE_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "post", reducer: 'grading_periods'};
    
// Update a single grading period
// Update an existing grading period.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
// Query Params:
//   grading_periods[start_date]
//   grading_periods[end_date]
//   grading_periods[weight]
// return canvasRequest(CanvasConstants.update_single_grading_period_courses, {course_id, id}, query);
export const update_single_grading_period_courses = { type: "UPDATE_SINGLE_GRADING_PERIOD_COURSES", method: "put", reducer: 'grading_periods'};
    
// Update a single grading period
// Update an existing grading period.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
// Query Params:
//   grading_periods[start_date]
//   grading_periods[end_date]
//   grading_periods[weight]
// return canvasRequest(CanvasConstants.update_single_grading_period_accounts, {account_id, id}, query);
export const update_single_grading_period_accounts = { type: "UPDATE_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "put", reducer: 'grading_periods'};
    
// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}[]
// return canvasRequest(CanvasConstants.delete_grading_period_courses, {course_id, id}, query);
export const delete_grading_period_courses = { type: "DELETE_GRADING_PERIOD_COURSES", method: "delete", reducer: 'grading_periods'};
    
// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}[]
// return canvasRequest(CanvasConstants.delete_grading_period_accounts, {account_id, id}, query);
export const delete_grading_period_accounts = { type: "DELETE_GRADING_PERIOD_ACCOUNTS", method: "delete", reducer: 'grading_periods'};
    
// Create a new grading standard
// Create a new grading standard
// 
// If grading_scheme_entry arguments are omitted, then a default grading scheme
// will be set. The default scheme is as follows:
//      "A" : 94,
//      "A-" : 90,
//      "B+" : 87,
//      "B" : 84,
//      "B-" : 80,
//      "C+" : 77,
//      "C" : 74,
//      "C-" : 70,
//      "D+" : 67,
//      "D" : 64,
//      "D-" : 61,
//      "F" : 0,
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: accounts/{account_id}/grading_standards
// Query Params:
//   title
//   grading_scheme_entry[name]
//   grading_scheme_entry[value]
// return canvasRequest(CanvasConstants.create_new_grading_standard_accounts, {account_id}, query);
export const create_new_grading_standard_accounts = { type: "CREATE_NEW_GRADING_STANDARD_ACCOUNTS", method: "post", reducer: 'grading_standards'};
    
// Create a new grading standard
// Create a new grading standard
// 
// If grading_scheme_entry arguments are omitted, then a default grading scheme
// will be set. The default scheme is as follows:
//      "A" : 94,
//      "A-" : 90,
//      "B+" : 87,
//      "B" : 84,
//      "B-" : 80,
//      "C+" : 77,
//      "C" : 74,
//      "C-" : 70,
//      "D+" : 67,
//      "D" : 64,
//      "D-" : 61,
//      "F" : 0,
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: courses/{course_id}/grading_standards
// Query Params:
//   title
//   grading_scheme_entry[name]
//   grading_scheme_entry[value]
// return canvasRequest(CanvasConstants.create_new_grading_standard_courses, {course_id}, query);
export const create_new_grading_standard_courses = { type: "CREATE_NEW_GRADING_STANDARD_COURSES", method: "post", reducer: 'grading_standards'};
    
// List the grading standards available in a context.
// Returns the list of grading standards in the given context that are visible to user.
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: courses/{course_id}/grading_standards[]
// return canvasRequest(CanvasConstants.list_grading_standards_available_in_context_courses, {course_id}, query);
export const list_grading_standards_available_in_context_courses = { type: "LIST_GRADING_STANDARDS_AVAILABLE_IN_CONTEXT_COURSES", method: "get", reducer: 'grading_standards'};
    
// List the grading standards available in a context.
// Returns the list of grading standards in the given context that are visible to user.
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: accounts/{account_id}/grading_standards[]
// return canvasRequest(CanvasConstants.list_grading_standards_available_in_context_accounts, {account_id}, query);
export const list_grading_standards_available_in_context_accounts = { type: "LIST_GRADING_STANDARDS_AVAILABLE_IN_CONTEXT_ACCOUNTS", method: "get", reducer: 'grading_standards'};
    
// List group categories for a context
// Returns a list of group categories in a context
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories[]
// return canvasRequest(CanvasConstants.list_group_categories_for_context_accounts, {account_id}, query);
export const list_group_categories_for_context_accounts = { type: "LIST_GROUP_CATEGORIES_FOR_CONTEXT_ACCOUNTS", method: "get", reducer: 'group_categories'};
    
// List group categories for a context
// Returns a list of group categories in a context
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories[]
// return canvasRequest(CanvasConstants.list_group_categories_for_context_courses, {course_id}, query);
export const list_group_categories_for_context_courses = { type: "LIST_GROUP_CATEGORIES_FOR_CONTEXT_COURSES", method: "get", reducer: 'group_categories'};
    
// Get a single group category
// Returns the data for a single group category, or a 401 if the caller doesn't have
// the rights to see it.
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}[]
// return canvasRequest(CanvasConstants.get_single_group_category, {group_category_id}, query);
export const get_single_group_category = { type: "GET_SINGLE_GROUP_CATEGORY", method: "get", reducer: 'group_categories'};
    
// Create a Group Category
// Create a new group category
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories
// Query Params:
//   name
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// return canvasRequest(CanvasConstants.create_group_category_accounts, {account_id}, query);
export const create_group_category_accounts = { type: "CREATE_GROUP_CATEGORY_ACCOUNTS", method: "post", reducer: 'group_categories'};
    
// Create a Group Category
// Create a new group category
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories
// Query Params:
//   name
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// return canvasRequest(CanvasConstants.create_group_category_courses, {course_id}, query);
export const create_group_category_courses = { type: "CREATE_GROUP_CATEGORY_COURSES", method: "post", reducer: 'group_categories'};
    
// Update a Group Category
// Modifies an existing group category.
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
// Query Params:
//   name
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// return canvasRequest(CanvasConstants.update_group_category, {group_category_id}, query);
export const update_group_category = { type: "UPDATE_GROUP_CATEGORY", method: "put", reducer: 'group_categories'};
    
// Delete a Group Category
// Deletes a group category and all groups under it. Protected group
// categories can not be deleted, i.e. "communities" and "student_organized".
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}[]
// return canvasRequest(CanvasConstants.delete_group_category, {group_category_id}, query);
export const delete_group_category = { type: "DELETE_GROUP_CATEGORY", method: "delete", reducer: 'group_categories'};
    
// List groups in group category
// Returns a list of groups in a group category
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/groups[]
// return canvasRequest(CanvasConstants.list_groups_in_group_category, {group_category_id}, query);
export const list_groups_in_group_category = { type: "LIST_GROUPS_IN_GROUP_CATEGORY", method: "get", reducer: 'group_categories'};
    
// List users in group category
// Returns a list of users in the group category.
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/users
// Query Params:
//   search_term
//   unassigned
// return canvasRequest(CanvasConstants.list_users_in_group_category, {group_category_id}, query);
export const list_users_in_group_category = { type: "LIST_USERS_IN_GROUP_CATEGORY", method: "get", reducer: 'group_categories'};
    
// Assign unassigned members
// Assign all unassigned members as evenly as possible among the existing
// student groups.
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/assign_unassigned_members
// Query Params:
//   sync
// return canvasRequest(CanvasConstants.assign_unassigned_members, {group_category_id}, query);
export const assign_unassigned_members = { type: "ASSIGN_UNASSIGNED_MEMBERS", method: "post", reducer: 'group_categories'};
    
// List your groups
// Returns a list of active groups for the current user.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: users/self/groups
// Query Params:
//   context_type
// return canvasRequest(CanvasConstants.list_your_groups, {}, query);
export const list_your_groups = { type: "LIST_YOUR_GROUPS", method: "get", reducer: 'groups'};
    
// List the groups available in a context.
// Returns the list of active groups in the given context that are visible to user.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: accounts/{account_id}/groups
// Query Params:
//   only_own_groups
// return canvasRequest(CanvasConstants.list_groups_available_in_context_accounts, {account_id}, query);
export const list_groups_available_in_context_accounts = { type: "LIST_GROUPS_AVAILABLE_IN_CONTEXT_ACCOUNTS", method: "get", reducer: 'groups'};
    
// List the groups available in a context.
// Returns the list of active groups in the given context that are visible to user.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: courses/{course_id}/groups
// Query Params:
//   only_own_groups
// return canvasRequest(CanvasConstants.list_groups_available_in_context_courses, {course_id}, query);
export const list_groups_available_in_context_courses = { type: "LIST_GROUPS_AVAILABLE_IN_CONTEXT_COURSES", method: "get", reducer: 'groups'};
    
// Get a single group
// Returns the data for a single group, or a 401 if the caller doesn't have
// the rights to see it.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_single_group, {group_id}, query);
export const get_single_group = { type: "GET_SINGLE_GROUP", method: "get", reducer: 'groups'};
    
// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups
// Query Params:
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
// return canvasRequest(CanvasConstants.create_group_groups, {}, query);
export const create_group_groups = { type: "CREATE_GROUP_GROUPS", method: "post", reducer: 'groups'};
    
// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: group_categories/{group_category_id}/groups
// Query Params:
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
// return canvasRequest(CanvasConstants.create_group_group_categories, {group_category_id}, query);
export const create_group_group_categories = { type: "CREATE_GROUP_GROUP_CATEGORIES", method: "post", reducer: 'groups'};
    
// Edit a group
// Modifies an existing group.  Note that to set an avatar image for the
// group, you must first upload the image file to the group, and the use the
// id in the response as the argument to this function.  See the
// {file:file_uploads.html File Upload Documentation} for details on the file
// upload workflow.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
// Query Params:
//   name
//   description
//   is_public
//   join_level
//   avatar_id
//   storage_quota_mb
//   members
// return canvasRequest(CanvasConstants.edit_group, {group_id}, query);
export const edit_group = { type: "EDIT_GROUP", method: "put", reducer: 'groups'};
    
// Delete a group
// Deletes a group and removes all members.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}[]
// return canvasRequest(CanvasConstants.delete_group, {group_id}, query);
export const delete_group = { type: "DELETE_GROUP", method: "delete", reducer: 'groups'};
    
// Invite others to a group
// Sends an invitation to all supplied email addresses which will allow the
// receivers to join the group.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/invite
// Query Params:
//   invitees
// return canvasRequest(CanvasConstants.invite_others_to_group, {group_id}, query);
export const invite_others_to_group = { type: "INVITE_OTHERS_TO_GROUP", method: "post", reducer: 'groups'};
    
// List group's users
// Returns a list of users in the group.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users
// Query Params:
//   search_term
//   include
// return canvasRequest(CanvasConstants.list_group_s_users, {group_id}, query);
export const list_group_s_users = { type: "LIST_GROUP_S_USERS", method: "get", reducer: 'groups'};
    
// Group activity stream
// Returns the current user's group-specific activity stream, paginated.
// 
// For full documentation, see the API documentation for the user activity
// stream, in the user api.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream[]
// return canvasRequest(CanvasConstants.group_activity_stream, {group_id}, query);
export const group_activity_stream = { type: "GROUP_ACTIVITY_STREAM", method: "get", reducer: 'groups'};
    
// Group activity stream summary
// Returns a summary of the current user's group-specific activity stream.
// 
// For full documentation, see the API documentation for the user activity
// stream summary, in the user api.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream/summary[]
// return canvasRequest(CanvasConstants.group_activity_stream_summary, {group_id}, query);
export const group_activity_stream_summary = { type: "GROUP_ACTIVITY_STREAM_SUMMARY", method: "get", reducer: 'groups'};
    
// List group memberships
// List the members of a group.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
// Query Params:
//   filter_states
// return canvasRequest(CanvasConstants.list_group_memberships, {group_id}, query);
export const list_group_memberships = { type: "LIST_GROUP_MEMBERSHIPS", method: "get", reducer: 'groups'};
    
// Get a single group membership
// Returns the group membership with the given membership id or user id.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}[]
// return canvasRequest(CanvasConstants.get_single_group_membership_memberships, {group_id, membership_id}, query);
export const get_single_group_membership_memberships = { type: "GET_SINGLE_GROUP_MEMBERSHIP_MEMBERSHIPS", method: "get", reducer: 'groups'};
    
// Get a single group membership
// Returns the group membership with the given membership id or user id.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}[]
// return canvasRequest(CanvasConstants.get_single_group_membership_users, {group_id, user_id}, query);
export const get_single_group_membership_users = { type: "GET_SINGLE_GROUP_MEMBERSHIP_USERS", method: "get", reducer: 'groups'};
    
// Create a membership
// Join, or request to join, a group, depending on the join_level of the
// group.  If the membership or join request already exists, then it is simply
// returned
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
// Query Params:
//   user_id
// return canvasRequest(CanvasConstants.create_membership, {group_id}, query);
export const create_membership = { type: "CREATE_MEMBERSHIP", method: "post", reducer: 'groups'};
    
// Update a membership
// Accept a membership request, or add/remove moderator rights.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
// Query Params:
//   workflow_state
//   moderator
// return canvasRequest(CanvasConstants.update_membership_memberships, {group_id, membership_id}, query);
export const update_membership_memberships = { type: "UPDATE_MEMBERSHIP_MEMBERSHIPS", method: "put", reducer: 'groups'};
    
// Update a membership
// Accept a membership request, or add/remove moderator rights.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
// Query Params:
//   workflow_state
//   moderator
// return canvasRequest(CanvasConstants.update_membership_users, {group_id, user_id}, query);
export const update_membership_users = { type: "UPDATE_MEMBERSHIP_USERS", method: "put", reducer: 'groups'};
    
// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}[]
// return canvasRequest(CanvasConstants.leave_group_memberships, {group_id, membership_id}, query);
export const leave_group_memberships = { type: "LEAVE_GROUP_MEMBERSHIPS", method: "delete", reducer: 'groups'};
    
// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}[]
// return canvasRequest(CanvasConstants.leave_group_users, {group_id, user_id}, query);
export const leave_group_users = { type: "LEAVE_GROUP_USERS", method: "delete", reducer: 'groups'};
    
// Create JWT
// Create a unique jwt for using with other canvas services
// 
// Generates a different JWT each time it's called, each one expires
// after a short window (1 hour)
// API Docs: https://canvas.instructure.com/doc/api/jw_ts.html
// API Url: jwts
// return canvasRequest(CanvasConstants.create_jwt, {}, query);
export const create_jwt = { type: "CREATE_JWT", method: "post", reducer: 'jw_ts'};
    
// Create live assessment results
// Creates live assessment results and adds them to a live assessment
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments/{assessment_id}/results[]
// return canvasRequest(CanvasConstants.create_live_assessment_results, {course_id, assessment_id}, query);
export const create_live_assessment_results = { type: "CREATE_LIVE_ASSESSMENT_RESULTS", method: "post", reducer: 'live_assessments'};
    
// List live assessment results
// Returns a list of live assessment results
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments/{assessment_id}/results
// Query Params:
//   user_id
// return canvasRequest(CanvasConstants.list_live_assessment_results, {course_id, assessment_id}, query);
export const list_live_assessment_results = { type: "LIST_LIVE_ASSESSMENT_RESULTS", method: "get", reducer: 'live_assessments'};
    
// Create or find a live assessment
// Creates or finds an existing live assessment with the given key and aligns it with
// the linked outcome
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments[]
// return canvasRequest(CanvasConstants.create_or_find_live_assessment, {course_id}, query);
export const create_or_find_live_assessment = { type: "CREATE_OR_FIND_LIVE_ASSESSMENT", method: "post", reducer: 'live_assessments'};
    
// List live assessments
// Returns a list of live assessments.
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments[]
// return canvasRequest(CanvasConstants.list_live_assessments, {course_id}, query);
export const list_live_assessments = { type: "LIST_LIVE_ASSESSMENTS", method: "get", reducer: 'live_assessments'};
    
// List user logins
// Given a user ID, return that user's logins for the given account.
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins[]
// return canvasRequest(CanvasConstants.list_user_logins_accounts, {account_id}, query);
export const list_user_logins_accounts = { type: "LIST_USER_LOGINS_ACCOUNTS", method: "get", reducer: 'logins'};
    
// List user logins
// Given a user ID, return that user's logins for the given account.
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins[]
// return canvasRequest(CanvasConstants.list_user_logins_users, {user_id}, query);
export const list_user_logins_users = { type: "LIST_USER_LOGINS_USERS", method: "get", reducer: 'logins'};
    
// Create a user login
// Create a new login for an existing user in the given account.
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins
// Query Params:
//   user[id]
//   login[unique_id]
//   login[password]
//   login[sis_user_id]
//   login[authentication_provider_id]
// return canvasRequest(CanvasConstants.create_user_login, {account_id}, query);
export const create_user_login = { type: "CREATE_USER_LOGIN", method: "post", reducer: 'logins'};
    
// Edit a user login
// Update an existing login for a user in the given account.
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: accounts/{account_id}/logins/{id}
// Query Params:
//   login[unique_id]
//   login[password]
//   login[sis_user_id]
// return canvasRequest(CanvasConstants.edit_user_login, {account_id, id}, query);
export const edit_user_login = { type: "EDIT_USER_LOGIN", method: "put", reducer: 'logins'};
    
// Delete a user login
// Delete an existing login.
// API Docs: https://canvas.instructure.com/doc/api/logins.html
// API Url: users/{user_id}/logins/{id}[]
// return canvasRequest(CanvasConstants.delete_user_login, {user_id, id}, query);
export const delete_user_login = { type: "DELETE_USER_LOGIN", method: "delete", reducer: 'logins'};
    
// List students selected for moderation
// 
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students[]
// return canvasRequest(CanvasConstants.list_students_selected_for_moderation, {course_id, assignment_id}, query);
export const list_students_selected_for_moderation = { type: "LIST_STUDENTS_SELECTED_FOR_MODERATION", method: "get", reducer: 'moderated_grading'};
    
// Select students for moderation
// Returns an array of users that were selected for moderation
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/moderated_students
// Query Params:
//   student_ids
// return canvasRequest(CanvasConstants.select_students_for_moderation, {course_id, assignment_id}, query);
export const select_students_for_moderation = { type: "SELECT_STUDENTS_FOR_MODERATION", method: "post", reducer: 'moderated_grading'};
    
// Show provisional grade status for a student
// Tell whether the student's submission needs one or more provisional grades.
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/status
// Query Params:
//   student_id
// return canvasRequest(CanvasConstants.show_provisional_grade_status_for_student, {course_id, assignment_id}, query);
export const show_provisional_grade_status_for_student = { type: "SHOW_PROVISIONAL_GRADE_STATUS_FOR_STUDENT", method: "get", reducer: 'moderated_grading'};
    
// Select provisional grade
// Choose which provisional grade the student should receive for a submission.
// The caller must have :moderate_grades rights.
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select[]
// return canvasRequest(CanvasConstants.select_provisional_grade, {course_id, assignment_id, provisional_grade_id}, query);
export const select_provisional_grade = { type: "SELECT_PROVISIONAL_GRADE", method: "put", reducer: 'moderated_grading'};
    
// Copy provisional grade
// Given a provisional grade, copy the grade (and associated submission comments and rubric assessments)
// to a "final" mark which can be edited or commented upon by a moderator prior to publication of grades.
// 
// Notes:
// * The student must be in the moderation set for the assignment.
// * The newly created grade will be selected.
// * The caller must have "Moderate Grades" rights in the course.
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/copy_to_final_mark[]
// return canvasRequest(CanvasConstants.copy_provisional_grade, {course_id, assignment_id, provisional_grade_id}, query);
export const copy_provisional_grade = { type: "COPY_PROVISIONAL_GRADE", method: "post", reducer: 'moderated_grading'};
    
// Publish provisional grades for an assignment
// Publish the selected provisional grade for all submissions to an assignment.
// Use the "Select provisional grade" endpoint to choose which provisional grade to publish
// for a particular submission.
// 
// Students not in the moderation set will have their one and only provisional grade published.
// 
// WARNING: This is irreversible. This will overwrite existing grades in the gradebook.
// API Docs: https://canvas.instructure.com/doc/api/moderated_grading.html
// API Url: courses/{course_id}/assignments/{assignment_id}/provisional_grades/publish[]
// return canvasRequest(CanvasConstants.publish_provisional_grades_for_assignment, {course_id, assignment_id}, query);
export const publish_provisional_grades_for_assignment = { type: "PUBLISH_PROVISIONAL_GRADES_FOR_ASSIGNMENT", method: "post", reducer: 'moderated_grading'};
    
// List modules
// List the modules in a course
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules
// Query Params:
//   include
//   search_term
//   student_id
// return canvasRequest(CanvasConstants.list_modules, {course_id}, query);
export const list_modules = { type: "LIST_MODULES", method: "get", reducer: 'modules'};
    
// Show module
// Get information about a single module
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{id}
// Query Params:
//   include
//   student_id
// return canvasRequest(CanvasConstants.show_module, {course_id, id}, query);
export const show_module = { type: "SHOW_MODULE", method: "get", reducer: 'modules'};
    
// Create a module
// Create and return a new module
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules
// Query Params:
//   module[name]
//   module[unlock_at]
//   module[position]
//   module[require_sequential_progress]
//   module[prerequisite_module_ids]
//   module[publish_final_grade]
// return canvasRequest(CanvasConstants.create_module, {course_id}, query);
export const create_module = { type: "CREATE_MODULE", method: "post", reducer: 'modules'};
    
// Update a module
// Update and return an existing module
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{id}
// Query Params:
//   module[name]
//   module[unlock_at]
//   module[position]
//   module[require_sequential_progress]
//   module[prerequisite_module_ids]
//   module[publish_final_grade]
//   module[published]
// return canvasRequest(CanvasConstants.update_module, {course_id, id}, query);
export const update_module = { type: "UPDATE_MODULE", method: "put", reducer: 'modules'};
    
// Delete module
// Delete a module
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{id}[]
// return canvasRequest(CanvasConstants.delete_module, {course_id, id}, query);
export const delete_module = { type: "DELETE_MODULE", method: "delete", reducer: 'modules'};
    
// Re-lock module progressions
// Resets module progressions to their default locked state and
// recalculates them based on the current requirements.
// 
// Adding progression requirements to an active course will not lock students
// out of modules they have already unlocked unless this action is called.
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{id}/relock[]
// return canvasRequest(CanvasConstants.re_lock_module_progressions, {course_id, id}, query);
export const re_lock_module_progressions = { type: "RE_LOCK_MODULE_PROGRESSIONS", method: "put", reducer: 'modules'};
    
// List module items
// List the items in a module
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items
// Query Params:
//   include
//   search_term
//   student_id
// return canvasRequest(CanvasConstants.list_module_items, {course_id, module_id}, query);
export const list_module_items = { type: "LIST_MODULE_ITEMS", method: "get", reducer: 'modules'};
    
// Show module item
// Get information about a single module item
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items/{id}
// Query Params:
//   include
//   student_id
// return canvasRequest(CanvasConstants.show_module_item, {course_id, module_id, id}, query);
export const show_module_item = { type: "SHOW_MODULE_ITEM", method: "get", reducer: 'modules'};
    
// Create a module item
// Create and return a new module item
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items
// Query Params:
//   module_item[title]
//   module_item[type]
//   module_item[content_id]
//   module_item[position]
//   module_item[indent]
//   module_item[page_url]
//   module_item[external_url]
//   module_item[new_tab]
//   module_item[completion_requirement][type]
//   module_item[completion_requirement][min_score]
// return canvasRequest(CanvasConstants.create_module_item, {course_id, module_id}, query);
export const create_module_item = { type: "CREATE_MODULE_ITEM", method: "post", reducer: 'modules'};
    
// Update a module item
// Update and return an existing module item
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items/{id}
// Query Params:
//   module_item[title]
//   module_item[position]
//   module_item[indent]
//   module_item[external_url]
//   module_item[new_tab]
//   module_item[completion_requirement][type]
//   module_item[completion_requirement][min_score]
//   module_item[published]
//   module_item[module_id]
// return canvasRequest(CanvasConstants.update_module_item, {course_id, module_id, id}, query);
export const update_module_item = { type: "UPDATE_MODULE_ITEM", method: "put", reducer: 'modules'};
    
// Delete module item
// Delete a module item
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items/{id}[]
// return canvasRequest(CanvasConstants.delete_module_item, {course_id, module_id, id}, query);
export const delete_module_item = { type: "DELETE_MODULE_ITEM", method: "delete", reducer: 'modules'};
    
// Mark module item as done/not done
// Mark a module item as done/not done. Use HTTP method PUT to mark as done,
// and DELETE to mark as not done.
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items/{id}/done[]
// return canvasRequest(CanvasConstants.mark_module_item_as_done_not_done, {course_id, module_id, id}, query);
export const mark_module_item_as_done_not_done = { type: "MARK_MODULE_ITEM_AS_DONE_NOT_DONE", method: "put", reducer: 'modules'};
    
// Get module item sequence
// Given an asset in a course, find the ModuleItem it belongs to, and also the previous and next Module Items
// in the course sequence.
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/module_item_sequence
// Query Params:
//   asset_type
//   asset_id
// return canvasRequest(CanvasConstants.get_module_item_sequence, {course_id}, query);
export const get_module_item_sequence = { type: "GET_MODULE_ITEM_SEQUENCE", method: "get", reducer: 'modules'};
    
// Mark module item read
// Fulfills "must view" requirement for a module item. It is generally not necessary to do this explicitly,
// but it is provided for applications that need to access external content directly (bypassing the html_url
// redirect that normally allows Canvas to fulfill "must view" requirements).
// 
// This endpoint cannot be used to complete requirements on locked or unpublished module items.
// API Docs: https://canvas.instructure.com/doc/api/modules.html
// API Url: courses/{course_id}/modules/{module_id}/items/{id}/mark_read[]
// return canvasRequest(CanvasConstants.mark_module_item_read, {course_id, module_id, id}, query);
export const mark_module_item_read = { type: "MARK_MODULE_ITEM_READ", method: "post", reducer: 'modules'};
    
// List preferences
// Fetch all preferences for the given communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences[]
// return canvasRequest(CanvasConstants.list_preferences_communication_channel_id, {user_id, communication_channel_id}, query);
export const list_preferences_communication_channel_id = { type: "LIST_PREFERENCES_COMMUNICATION_CHANNEL_ID", method: "get", reducer: 'notification_preferences'};
    
// List preferences
// Fetch all preferences for the given communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences[]
// return canvasRequest(CanvasConstants.list_preferences_type, {user_id, type, address}, query);
export const list_preferences_type = { type: "LIST_PREFERENCES_TYPE", method: "get", reducer: 'notification_preferences'};
    
// List of preference categories
// Fetch all notification preference categories for the given communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories[]
// return canvasRequest(CanvasConstants.list_of_preference_categories, {user_id, communication_channel_id}, query);
export const list_of_preference_categories = { type: "LIST_OF_PREFERENCE_CATEGORIES", method: "get", reducer: 'notification_preferences'};
    
// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences/{notification}[]
// return canvasRequest(CanvasConstants.get_preference_communication_channel_id, {user_id, communication_channel_id, notification}, query);
export const get_preference_communication_channel_id = { type: "GET_PREFERENCE_COMMUNICATION_CHANNEL_ID", method: "get", reducer: 'notification_preferences'};
    
// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}[]
// return canvasRequest(CanvasConstants.get_preference_type, {user_id, type, address, notification}, query);
export const get_preference_type = { type: "GET_PREFERENCE_TYPE", method: "get", reducer: 'notification_preferences'};
    
// Update a preference
// Change the preference for a single notification for a single communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences/{notification}
// Query Params:
//   notification_preferences[frequency]
// return canvasRequest(CanvasConstants.update_preference_communication_channel_id, {communication_channel_id, notification}, query);
export const update_preference_communication_channel_id = { type: "UPDATE_PREFERENCE_COMMUNICATION_CHANNEL_ID", method: "put", reducer: 'notification_preferences'};
    
// Update a preference
// Change the preference for a single notification for a single communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences/{notification}
// Query Params:
//   notification_preferences[frequency]
// return canvasRequest(CanvasConstants.update_preference_type, {type, address, notification}, query);
export const update_preference_type = { type: "UPDATE_PREFERENCE_TYPE", method: "put", reducer: 'notification_preferences'};
    
// Update preferences by category
// Change the preferences for multiple notifications based on the category for a single communication channel
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}
// Query Params:
//   notification_preferences[frequency]
// return canvasRequest(CanvasConstants.update_preferences_by_category, {communication_channel_id, category}, query);
export const update_preferences_by_category = { type: "UPDATE_PREFERENCES_BY_CATEGORY", method: "put", reducer: 'notification_preferences'};
    
// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences
// Query Params:
//   notification_preferences[<X>][frequency]
// return canvasRequest(CanvasConstants.update_multiple_preferences_communication_channel_id, {communication_channel_id}, query);
export const update_multiple_preferences_communication_channel_id = { type: "UPDATE_MULTIPLE_PREFERENCES_COMMUNICATION_CHANNEL_ID", method: "put", reducer: 'notification_preferences'};
    
// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences
// Query Params:
//   notification_preferences[<X>][frequency]
// return canvasRequest(CanvasConstants.update_multiple_preferences_type, {type, address}, query);
export const update_multiple_preferences_type = { type: "UPDATE_MULTIPLE_PREFERENCES_TYPE", method: "put", reducer: 'notification_preferences'};
    
// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/root_outcome_group
// return canvasRequest(CanvasConstants.redirect_to_root_outcome_group_for_context_global, {}, query);
export const redirect_to_root_outcome_group_for_context_global = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_GLOBAL", method: "get", reducer: 'outcome_groups'};
    
// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/root_outcome_group[]
// return canvasRequest(CanvasConstants.redirect_to_root_outcome_group_for_context_accounts, {account_id}, query);
export const redirect_to_root_outcome_group_for_context_accounts = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/root_outcome_group[]
// return canvasRequest(CanvasConstants.redirect_to_root_outcome_group_for_context_courses, {course_id}, query);
export const redirect_to_root_outcome_group_for_context_courses = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Get all outcome groups for context
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups[]
// return canvasRequest(CanvasConstants.get_all_outcome_groups_for_context_accounts, {account_id}, query);
export const get_all_outcome_groups_for_context_accounts = { type: "GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// Get all outcome groups for context
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups[]
// return canvasRequest(CanvasConstants.get_all_outcome_groups_for_context_courses, {course_id}, query);
export const get_all_outcome_groups_for_context_courses = { type: "GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Get all outcome links for context
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_group_links
// Query Params:
//   outcome_style
//   outcome_group_style
// return canvasRequest(CanvasConstants.get_all_outcome_links_for_context_accounts, {account_id}, query);
export const get_all_outcome_links_for_context_accounts = { type: "GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// Get all outcome links for context
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_group_links
// Query Params:
//   outcome_style
//   outcome_group_style
// return canvasRequest(CanvasConstants.get_all_outcome_links_for_context_courses, {course_id}, query);
export const get_all_outcome_links_for_context_courses = { type: "GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Show an outcome group
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.show_outcome_group_global, {id}, query);
export const show_outcome_group_global = { type: "SHOW_OUTCOME_GROUP_GLOBAL", method: "get", reducer: 'outcome_groups'};
    
// Show an outcome group
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.show_outcome_group_accounts, {account_id, id}, query);
export const show_outcome_group_accounts = { type: "SHOW_OUTCOME_GROUP_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// Show an outcome group
// 
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.show_outcome_group_courses, {course_id, id}, query);
export const show_outcome_group_courses = { type: "SHOW_OUTCOME_GROUP_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}
// Query Params:
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// return canvasRequest(CanvasConstants.update_outcome_group_global, {id}, query);
export const update_outcome_group_global = { type: "UPDATE_OUTCOME_GROUP_GLOBAL", method: "put", reducer: 'outcome_groups'};
    
// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}
// Query Params:
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// return canvasRequest(CanvasConstants.update_outcome_group_accounts, {account_id, id}, query);
export const update_outcome_group_accounts = { type: "UPDATE_OUTCOME_GROUP_ACCOUNTS", method: "put", reducer: 'outcome_groups'};
    
// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}
// Query Params:
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// return canvasRequest(CanvasConstants.update_outcome_group_courses, {course_id, id}, query);
export const update_outcome_group_courses = { type: "UPDATE_OUTCOME_GROUP_COURSES", method: "put", reducer: 'outcome_groups'};
    
// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.delete_outcome_group_global, {id}, query);
export const delete_outcome_group_global = { type: "DELETE_OUTCOME_GROUP_GLOBAL", method: "delete", reducer: 'outcome_groups'};
    
// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.delete_outcome_group_accounts, {account_id, id}, query);
export const delete_outcome_group_accounts = { type: "DELETE_OUTCOME_GROUP_ACCOUNTS", method: "delete", reducer: 'outcome_groups'};
    
// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}[]
// return canvasRequest(CanvasConstants.delete_outcome_group_courses, {course_id, id}, query);
export const delete_outcome_group_courses = { type: "DELETE_OUTCOME_GROUP_COURSES", method: "delete", reducer: 'outcome_groups'};
    
// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes[]
// return canvasRequest(CanvasConstants.list_linked_outcomes_global, {id}, query);
export const list_linked_outcomes_global = { type: "LIST_LINKED_OUTCOMES_GLOBAL", method: "get", reducer: 'outcome_groups'};
    
// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes[]
// return canvasRequest(CanvasConstants.list_linked_outcomes_accounts, {account_id, id}, query);
export const list_linked_outcomes_accounts = { type: "LIST_LINKED_OUTCOMES_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes[]
// return canvasRequest(CanvasConstants.list_linked_outcomes_courses, {course_id, id}, query);
export const list_linked_outcomes_courses = { type: "LIST_LINKED_OUTCOMES_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes
// Query Params:
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_global, {id}, query);
export const create_link_outcome_global = { type: "CREATE_LINK_OUTCOME_GLOBAL", method: "post", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes/{outcome_id}
// Query Params:
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_global_outcome_id, {id, outcome_id}, query);
export const create_link_outcome_global_outcome_id = { type: "CREATE_LINK_OUTCOME_GLOBAL_OUTCOME_ID", method: "put", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes
// Query Params:
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_accounts, {account_id, id}, query);
export const create_link_outcome_accounts = { type: "CREATE_LINK_OUTCOME_ACCOUNTS", method: "post", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}
// Query Params:
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_accounts_outcome_id, {account_id, id, outcome_id}, query);
export const create_link_outcome_accounts_outcome_id = { type: "CREATE_LINK_OUTCOME_ACCOUNTS_OUTCOME_ID", method: "put", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes
// Query Params:
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_courses, {course_id, id}, query);
export const create_link_outcome_courses = { type: "CREATE_LINK_OUTCOME_COURSES", method: "post", reducer: 'outcome_groups'};
    
// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}
// Query Params:
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.create_link_outcome_courses_outcome_id, {course_id, id, outcome_id}, query);
export const create_link_outcome_courses_outcome_id = { type: "CREATE_LINK_OUTCOME_COURSES_OUTCOME_ID", method: "put", reducer: 'outcome_groups'};
    
// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes/{outcome_id}[]
// return canvasRequest(CanvasConstants.unlink_outcome_global, {id, outcome_id}, query);
export const unlink_outcome_global = { type: "UNLINK_OUTCOME_GLOBAL", method: "delete", reducer: 'outcome_groups'};
    
// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}[]
// return canvasRequest(CanvasConstants.unlink_outcome_accounts, {account_id, id, outcome_id}, query);
export const unlink_outcome_accounts = { type: "UNLINK_OUTCOME_ACCOUNTS", method: "delete", reducer: 'outcome_groups'};
    
// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}[]
// return canvasRequest(CanvasConstants.unlink_outcome_courses, {course_id, id, outcome_id}, query);
export const unlink_outcome_courses = { type: "UNLINK_OUTCOME_COURSES", method: "delete", reducer: 'outcome_groups'};
    
// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/subgroups[]
// return canvasRequest(CanvasConstants.list_subgroups_global, {id}, query);
export const list_subgroups_global = { type: "LIST_SUBGROUPS_GLOBAL", method: "get", reducer: 'outcome_groups'};
    
// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/subgroups[]
// return canvasRequest(CanvasConstants.list_subgroups_accounts, {account_id, id}, query);
export const list_subgroups_accounts = { type: "LIST_SUBGROUPS_ACCOUNTS", method: "get", reducer: 'outcome_groups'};
    
// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/subgroups[]
// return canvasRequest(CanvasConstants.list_subgroups_courses, {course_id, id}, query);
export const list_subgroups_courses = { type: "LIST_SUBGROUPS_COURSES", method: "get", reducer: 'outcome_groups'};
    
// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/subgroups
// Query Params:
//   title
//   description
//   vendor_guid
// return canvasRequest(CanvasConstants.create_subgroup_global, {id}, query);
export const create_subgroup_global = { type: "CREATE_SUBGROUP_GLOBAL", method: "post", reducer: 'outcome_groups'};
    
// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/subgroups
// Query Params:
//   title
//   description
//   vendor_guid
// return canvasRequest(CanvasConstants.create_subgroup_accounts, {account_id, id}, query);
export const create_subgroup_accounts = { type: "CREATE_SUBGROUP_ACCOUNTS", method: "post", reducer: 'outcome_groups'};
    
// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/subgroups
// Query Params:
//   title
//   description
//   vendor_guid
// return canvasRequest(CanvasConstants.create_subgroup_courses, {course_id, id}, query);
export const create_subgroup_courses = { type: "CREATE_SUBGROUP_COURSES", method: "post", reducer: 'outcome_groups'};
    
// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/import
// Query Params:
//   source_outcome_group_id
// return canvasRequest(CanvasConstants.import_outcome_group_global, {id}, query);
export const import_outcome_group_global = { type: "IMPORT_OUTCOME_GROUP_GLOBAL", method: "post", reducer: 'outcome_groups'};
    
// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/import
// Query Params:
//   source_outcome_group_id
// return canvasRequest(CanvasConstants.import_outcome_group_accounts, {account_id, id}, query);
export const import_outcome_group_accounts = { type: "IMPORT_OUTCOME_GROUP_ACCOUNTS", method: "post", reducer: 'outcome_groups'};
    
// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/import
// Query Params:
//   source_outcome_group_id
// return canvasRequest(CanvasConstants.import_outcome_group_courses, {course_id, id}, query);
export const import_outcome_group_courses = { type: "IMPORT_OUTCOME_GROUP_COURSES", method: "post", reducer: 'outcome_groups'};
    
// Get outcome results
// Gets the outcome results for users and outcomes in the specified context.
// API Docs: https://canvas.instructure.com/doc/api/outcome_results.html
// API Url: courses/{course_id}/outcome_results
// Query Params:
//   user_ids
//   outcome_ids
//   include
// return canvasRequest(CanvasConstants.get_outcome_results, {course_id}, query);
export const get_outcome_results = { type: "GET_OUTCOME_RESULTS", method: "get", reducer: 'outcome_results'};
    
// Get outcome result rollups
// Gets the outcome rollups for the users and outcomes in the specified
// context.
// API Docs: https://canvas.instructure.com/doc/api/outcome_results.html
// API Url: courses/{course_id}/outcome_rollups
// Query Params:
//   aggregate
//   user_ids
//   outcome_ids
//   include
// return canvasRequest(CanvasConstants.get_outcome_result_rollups, {course_id}, query);
export const get_outcome_result_rollups = { type: "GET_OUTCOME_RESULT_ROLLUPS", method: "get", reducer: 'outcome_results'};
    
// Show an outcome
// Returns the details of the outcome with the given id.
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}[]
// return canvasRequest(CanvasConstants.show_outcome, {id}, query);
export const show_outcome = { type: "SHOW_OUTCOME", method: "get", reducer: 'outcomes'};
    
// Update an outcome
// Modify an existing outcome. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// If any new ratings are provided, the combination of all new ratings
// provided completely replace any existing embedded rubric criterion; it is
// not possible to tweak the ratings of the embedded rubric criterion.
// 
// A new embedded rubric criterion's mastery_points default to the maximum
// points in the highest rating if not specified in the mastery_points
// parameter. Any new ratings lacking a description are given a default of "No
// description". Any new ratings lacking a point value are given a default of
// 0.
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}
// Query Params:
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// return canvasRequest(CanvasConstants.update_outcome, {id}, query);
export const update_outcome = { type: "UPDATE_OUTCOME", method: "put", reducer: 'outcomes'};
    
// Show front page
// Retrieve the content of the front page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page[]
// return canvasRequest(CanvasConstants.show_front_page_courses, {course_id}, query);
export const show_front_page_courses = { type: "SHOW_FRONT_PAGE_COURSES", method: "get", reducer: 'pages'};
    
// Show front page
// Retrieve the content of the front page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page[]
// return canvasRequest(CanvasConstants.show_front_page_groups, {group_id}, query);
export const show_front_page_groups = { type: "SHOW_FRONT_PAGE_GROUPS", method: "get", reducer: 'pages'};
    
// Update/create front page
// Update the title or contents of the front page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// return canvasRequest(CanvasConstants.update_create_front_page_courses, {course_id}, query);
export const update_create_front_page_courses = { type: "UPDATE_CREATE_FRONT_PAGE_COURSES", method: "put", reducer: 'pages'};
    
// Update/create front page
// Update the title or contents of the front page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// return canvasRequest(CanvasConstants.update_create_front_page_groups, {group_id}, query);
export const update_create_front_page_groups = { type: "UPDATE_CREATE_FRONT_PAGE_GROUPS", method: "put", reducer: 'pages'};
    
// List pages
// List the wiki pages associated with a course or group
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
// Query Params:
//   sort
//   order
//   search_term
//   published
// return canvasRequest(CanvasConstants.list_pages_courses, {course_id}, query);
export const list_pages_courses = { type: "LIST_PAGES_COURSES", method: "get", reducer: 'pages'};
    
// List pages
// List the wiki pages associated with a course or group
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
// Query Params:
//   sort
//   order
//   search_term
//   published
// return canvasRequest(CanvasConstants.list_pages_groups, {group_id}, query);
export const list_pages_groups = { type: "LIST_PAGES_GROUPS", method: "get", reducer: 'pages'};
    
// Create page
// Create a new wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// return canvasRequest(CanvasConstants.create_page_courses, {course_id}, query);
export const create_page_courses = { type: "CREATE_PAGE_COURSES", method: "post", reducer: 'pages'};
    
// Create page
// Create a new wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// return canvasRequest(CanvasConstants.create_page_groups, {group_id}, query);
export const create_page_groups = { type: "CREATE_PAGE_GROUPS", method: "post", reducer: 'pages'};
    
// Show page
// Retrieve the content of a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}[]
// return canvasRequest(CanvasConstants.show_page_courses, {course_id, url}, query);
export const show_page_courses = { type: "SHOW_PAGE_COURSES", method: "get", reducer: 'pages'};
    
// Show page
// Retrieve the content of a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}[]
// return canvasRequest(CanvasConstants.show_page_groups, {group_id, url}, query);
export const show_page_groups = { type: "SHOW_PAGE_GROUPS", method: "get", reducer: 'pages'};
    
// Update/create page
// Update the title or contents of a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// return canvasRequest(CanvasConstants.update_create_page_courses, {course_id, url}, query);
export const update_create_page_courses = { type: "UPDATE_CREATE_PAGE_COURSES", method: "put", reducer: 'pages'};
    
// Update/create page
// Update the title or contents of a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
// Query Params:
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// return canvasRequest(CanvasConstants.update_create_page_groups, {group_id, url}, query);
export const update_create_page_groups = { type: "UPDATE_CREATE_PAGE_GROUPS", method: "put", reducer: 'pages'};
    
// Delete page
// Delete a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}[]
// return canvasRequest(CanvasConstants.delete_page_courses, {course_id, url}, query);
export const delete_page_courses = { type: "DELETE_PAGE_COURSES", method: "delete", reducer: 'pages'};
    
// Delete page
// Delete a wiki page
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}[]
// return canvasRequest(CanvasConstants.delete_page_groups, {group_id, url}, query);
export const delete_page_groups = { type: "DELETE_PAGE_GROUPS", method: "delete", reducer: 'pages'};
    
// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions[]
// return canvasRequest(CanvasConstants.list_revisions_courses, {course_id, url}, query);
export const list_revisions_courses = { type: "LIST_REVISIONS_COURSES", method: "get", reducer: 'pages'};
    
// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions[]
// return canvasRequest(CanvasConstants.list_revisions_groups, {group_id, url}, query);
export const list_revisions_groups = { type: "LIST_REVISIONS_GROUPS", method: "get", reducer: 'pages'};
    
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/latest
// Query Params:
//   summary
// return canvasRequest(CanvasConstants.show_revision_courses_latest, {course_id, url}, query);
export const show_revision_courses_latest = { type: "SHOW_REVISION_COURSES_LATEST", method: "get", reducer: 'pages'};
    
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/latest
// Query Params:
//   summary
// return canvasRequest(CanvasConstants.show_revision_groups_latest, {group_id, url}, query);
export const show_revision_groups_latest = { type: "SHOW_REVISION_GROUPS_LATEST", method: "get", reducer: 'pages'};
    
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}
// Query Params:
//   summary
// return canvasRequest(CanvasConstants.show_revision_courses_revision_id, {course_id, url, revision_id}, query);
export const show_revision_courses_revision_id = { type: "SHOW_REVISION_COURSES_REVISION_ID", method: "get", reducer: 'pages'};
    
// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}
// Query Params:
//   summary
// return canvasRequest(CanvasConstants.show_revision_groups_revision_id, {group_id, url, revision_id}, query);
export const show_revision_groups_revision_id = { type: "SHOW_REVISION_GROUPS_REVISION_ID", method: "get", reducer: 'pages'};
    
// Revert to revision
// Revert a page to a prior revision.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}[]
// return canvasRequest(CanvasConstants.revert_to_revision_courses, {course_id, url, revision_id}, query);
export const revert_to_revision_courses = { type: "REVERT_TO_REVISION_COURSES", method: "post", reducer: 'pages'};
    
// Revert to revision
// Revert a page to a prior revision.
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}[]
// return canvasRequest(CanvasConstants.revert_to_revision_groups, {group_id, url, revision_id}, query);
export const revert_to_revision_groups = { type: "REVERT_TO_REVISION_GROUPS", method: "post", reducer: 'pages'};
    
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/peer_reviews
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_peer_reviews_courses_peer_reviews, {course_id, assignment_id}, query);
export const get_all_peer_reviews_courses_peer_reviews = { type: "GET_ALL_PEER_REVIEWS_COURSES_PEER_REVIEWS", method: "get", reducer: 'peer_reviews'};
    
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/peer_reviews
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_peer_reviews_sections_peer_reviews, {section_id, assignment_id}, query);
export const get_all_peer_reviews_sections_peer_reviews = { type: "GET_ALL_PEER_REVIEWS_SECTIONS_PEER_REVIEWS", method: "get", reducer: 'peer_reviews'};
    
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_peer_reviews_courses_submissions, {course_id, assignment_id, submission_id}, query);
export const get_all_peer_reviews_courses_submissions = { type: "GET_ALL_PEER_REVIEWS_COURSES_SUBMISSIONS", method: "get", reducer: 'peer_reviews'};
    
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_peer_reviews_sections_submissions, {section_id, assignment_id, submission_id}, query);
export const get_all_peer_reviews_sections_submissions = { type: "GET_ALL_PEER_REVIEWS_SECTIONS_SUBMISSIONS", method: "get", reducer: 'peer_reviews'};
    
// Create Peer Review
// Create a peer review for the assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
// Query Params:
//   user_id
// return canvasRequest(CanvasConstants.create_peer_review_courses, {course_id, assignment_id, submission_id}, query);
export const create_peer_review_courses = { type: "CREATE_PEER_REVIEW_COURSES", method: "post", reducer: 'peer_reviews'};
    
// Create Peer Review
// Create a peer review for the assignment
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
// Query Params:
//   user_id
// return canvasRequest(CanvasConstants.create_peer_review_sections, {section_id, assignment_id, submission_id}, query);
export const create_peer_review_sections = { type: "CREATE_PEER_REVIEW_SECTIONS", method: "post", reducer: 'peer_reviews'};
    
// List poll sessions for a poll
// Returns the list of PollSessions in this poll.
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions[]
// return canvasRequest(CanvasConstants.list_poll_sessions_for_poll, {poll_id}, query);
export const list_poll_sessions_for_poll = { type: "LIST_POLL_SESSIONS_FOR_POLL", method: "get", reducer: 'poll_sessions'};
    
// Get the results for a single poll session
// Returns the poll session with the given id
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}[]
// return canvasRequest(CanvasConstants.get_results_for_single_poll_session, {poll_id, id}, query);
export const get_results_for_single_poll_session = { type: "GET_RESULTS_FOR_SINGLE_POLL_SESSION", method: "get", reducer: 'poll_sessions'};
    
// Create a single poll session
// Create a new poll session for this poll
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions
// Query Params:
//   poll_sessions[course_id]
//   poll_sessions[course_section_id]
//   poll_sessions[has_public_results]
// return canvasRequest(CanvasConstants.create_single_poll_session, {poll_id}, query);
export const create_single_poll_session = { type: "CREATE_SINGLE_POLL_SESSION", method: "post", reducer: 'poll_sessions'};
    
// Update a single poll session
// Update an existing poll session for this poll
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}
// Query Params:
//   poll_sessions[course_id]
//   poll_sessions[course_section_id]
//   poll_sessions[has_public_results]
// return canvasRequest(CanvasConstants.update_single_poll_session, {poll_id, id}, query);
export const update_single_poll_session = { type: "UPDATE_SINGLE_POLL_SESSION", method: "put", reducer: 'poll_sessions'};
    
// Delete a poll session
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}[]
// return canvasRequest(CanvasConstants.delete_poll_session, {poll_id, id}, query);
export const delete_poll_session = { type: "DELETE_POLL_SESSION", method: "delete", reducer: 'poll_sessions'};
    
// Open a poll session
// 
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}/open[]
// return canvasRequest(CanvasConstants.open_poll_session, {poll_id, id}, query);
export const open_poll_session = { type: "OPEN_POLL_SESSION", method: "get", reducer: 'poll_sessions'};
    
// Close an opened poll session
// 
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}/close[]
// return canvasRequest(CanvasConstants.close_opened_poll_session, {poll_id, id}, query);
export const close_opened_poll_session = { type: "CLOSE_OPENED_POLL_SESSION", method: "get", reducer: 'poll_sessions'};
    
// List opened poll sessions
// Lists all opened poll sessions available to the current user.
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: poll_sessions/opened
// return canvasRequest(CanvasConstants.list_opened_poll_sessions, {}, query);
export const list_opened_poll_sessions = { type: "LIST_OPENED_POLL_SESSIONS", method: "get", reducer: 'poll_sessions'};
    
// List closed poll sessions
// Lists all closed poll sessions available to the current user.
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: poll_sessions/closed
// return canvasRequest(CanvasConstants.list_closed_poll_sessions, {}, query);
export const list_closed_poll_sessions = { type: "LIST_CLOSED_POLL_SESSIONS", method: "get", reducer: 'poll_sessions'};
    
// List poll choices in a poll
// Returns the list of PollChoices in this poll.
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices[]
// return canvasRequest(CanvasConstants.list_poll_choices_in_poll, {poll_id}, query);
export const list_poll_choices_in_poll = { type: "LIST_POLL_CHOICES_IN_POLL", method: "get", reducer: 'poll_choices'};
    
// Get a single poll choice
// Returns the poll choice with the given id
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}[]
// return canvasRequest(CanvasConstants.get_single_poll_choice, {poll_id, id}, query);
export const get_single_poll_choice = { type: "GET_SINGLE_POLL_CHOICE", method: "get", reducer: 'poll_choices'};
    
// Create a single poll choice
// Create a new poll choice for this poll
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices
// Query Params:
//   poll_choices[text]
//   poll_choices[is_correct]
//   poll_choices[position]
// return canvasRequest(CanvasConstants.create_single_poll_choice, {poll_id}, query);
export const create_single_poll_choice = { type: "CREATE_SINGLE_POLL_CHOICE", method: "post", reducer: 'poll_choices'};
    
// Update a single poll choice
// Update an existing poll choice for this poll
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}
// Query Params:
//   poll_choices[text]
//   poll_choices[is_correct]
//   poll_choices[position]
// return canvasRequest(CanvasConstants.update_single_poll_choice, {poll_id, id}, query);
export const update_single_poll_choice = { type: "UPDATE_SINGLE_POLL_CHOICE", method: "put", reducer: 'poll_choices'};
    
// Delete a poll choice
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}[]
// return canvasRequest(CanvasConstants.delete_poll_choice, {poll_id, id}, query);
export const delete_poll_choice = { type: "DELETE_POLL_CHOICE", method: "delete", reducer: 'poll_choices'};
    
// Get a single poll submission
// Returns the poll submission with the given id
// API Docs: https://canvas.instructure.com/doc/api/poll_submissions.html
// API Url: polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions/{id}[]
// return canvasRequest(CanvasConstants.get_single_poll_submission, {poll_id, poll_session_id, id}, query);
export const get_single_poll_submission = { type: "GET_SINGLE_POLL_SUBMISSION", method: "get", reducer: 'poll_submissions'};
    
// Create a single poll submission
// Create a new poll submission for this poll session
// API Docs: https://canvas.instructure.com/doc/api/poll_submissions.html
// API Url: polls/{poll_id}/poll_sessions/{poll_session_id}/poll_submissions
// Query Params:
//   poll_submissions[poll_choice_id]
// return canvasRequest(CanvasConstants.create_single_poll_submission, {poll_id, poll_session_id}, query);
export const create_single_poll_submission = { type: "CREATE_SINGLE_POLL_SUBMISSION", method: "post", reducer: 'poll_submissions'};
    
// List polls
// Returns the list of polls for the current user.
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
// return canvasRequest(CanvasConstants.list_polls, {}, query);
export const list_polls = { type: "LIST_POLLS", method: "get", reducer: 'polls'};
    
// Get a single poll
// Returns the poll with the given id
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}[]
// return canvasRequest(CanvasConstants.get_single_poll, {id}, query);
export const get_single_poll = { type: "GET_SINGLE_POLL", method: "get", reducer: 'polls'};
    
// Create a single poll
// Create a new poll for the current user
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
// Query Params:
//   polls[question]
//   polls[description]
// return canvasRequest(CanvasConstants.create_single_poll, {}, query);
export const create_single_poll = { type: "CREATE_SINGLE_POLL", method: "post", reducer: 'polls'};
    
// Update a single poll
// Update an existing poll belonging to the current user
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
// Query Params:
//   polls[question]
//   polls[description]
// return canvasRequest(CanvasConstants.update_single_poll, {id}, query);
export const update_single_poll = { type: "UPDATE_SINGLE_POLL", method: "put", reducer: 'polls'};
    
// Delete a poll
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}[]
// return canvasRequest(CanvasConstants.delete_poll, {id}, query);
export const delete_poll = { type: "DELETE_POLL", method: "delete", reducer: 'polls'};
    
// Query progress
// Return completion and status information about an asynchronous job
// API Docs: https://canvas.instructure.com/doc/api/progress.html
// API Url: progress/{id}[]
// return canvasRequest(CanvasConstants.query_progress, {id}, query);
export const query_progress = { type: "QUERY_PROGRESS", method: "get", reducer: 'progress'};
    
// Retrieve assignment-overridden dates for quizzes
// Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
// based on the assignment overrides active for the current API user.
// API Docs: https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html
// API Url: courses/{course_id}/quizzes/assignment_overrides
// Query Params:
//   quiz_assignment_overrides[0][quiz_ids]
// return canvasRequest(CanvasConstants.retrieve_assignment_overridden_dates_for_quizzes, {course_id}, query);
export const retrieve_assignment_overridden_dates_for_quizzes = { type: "RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_QUIZZES", method: "get", reducer: 'quiz_assignment_overrides'};
    
// Get available quiz IP filters.
// Get a list of available IP filters for this Quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_ip_filters.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/ip_filters[]
// return canvasRequest(CanvasConstants.get_available_quiz_ip_filters, {course_id, quiz_id}, query);
export const get_available_quiz_ip_filters = { type: "GET_AVAILABLE_QUIZ_IP_FILTERS", method: "get", reducer: 'quiz_ip_filters'};
    
// Get a single quiz group
// Returns details of the quiz group with the given id.
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}[]
// return canvasRequest(CanvasConstants.get_single_quiz_group, {course_id, quiz_id, id}, query);
export const get_single_quiz_group = { type: "GET_SINGLE_QUIZ_GROUP", method: "get", reducer: 'quiz_question_groups'};
    
// Create a question group
// Create a new question group for this quiz
// 
// <b>201 Created</b> response code is returned if the creation was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups
// Query Params:
//   quiz_groups[name]
//   quiz_groups[pick_count]
//   quiz_groups[question_points]
//   quiz_groups[assessment_question_bank_id]
// return canvasRequest(CanvasConstants.create_question_group, {course_id, quiz_id}, query);
export const create_question_group = { type: "CREATE_QUESTION_GROUP", method: "post", reducer: 'quiz_question_groups'};
    
// Update a question group
// Update a question group
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}
// Query Params:
//   quiz_groups[name]
//   quiz_groups[pick_count]
//   quiz_groups[question_points]
// return canvasRequest(CanvasConstants.update_question_group, {course_id, quiz_id, id}, query);
export const update_question_group = { type: "UPDATE_QUESTION_GROUP", method: "put", reducer: 'quiz_question_groups'};
    
// Delete a question group
// Delete a question group
// 
// <b>204 No Content<b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}[]
// return canvasRequest(CanvasConstants.delete_question_group, {course_id, quiz_id, id}, query);
export const delete_question_group = { type: "DELETE_QUESTION_GROUP", method: "delete", reducer: 'quiz_question_groups'};
    
// Reorder question groups
// Change the order of the quiz questions within the group
// 
// <b>204 No Content<b> response code is returned if the reorder was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_question_groups.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/groups/{id}/reorder
// Query Params:
//   order[id]
//   order[type]
// return canvasRequest(CanvasConstants.reorder_question_groups, {course_id, quiz_id, id}, query);
export const reorder_question_groups = { type: "REORDER_QUESTION_GROUPS", method: "post", reducer: 'quiz_question_groups'};
    
// List questions in a quiz or a submission
// Returns the list of QuizQuestions in this quiz.
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions
// Query Params:
//   quiz_submission_id
//   quiz_submission_attempt
// return canvasRequest(CanvasConstants.list_questions_in_quiz_or_submission, {course_id, quiz_id}, query);
export const list_questions_in_quiz_or_submission = { type: "LIST_QUESTIONS_IN_QUIZ_OR_SUBMISSION", method: "get", reducer: 'quiz_questions'};
    
// Get a single quiz question
// Returns the quiz question with the given id
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}[]
// return canvasRequest(CanvasConstants.get_single_quiz_question, {course_id, quiz_id, id}, query);
export const get_single_quiz_question = { type: "GET_SINGLE_QUIZ_QUESTION", method: "get", reducer: 'quiz_questions'};
    
// Create a single quiz question
// Create a new quiz question for this quiz
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions
// Query Params:
//   question[question_name]
//   question[question_text]
//   question[quiz_group_id]
//   question[question_type]
//   question[position]
//   question[points_possible]
//   question[correct_comments]
//   question[incorrect_comments]
//   question[neutral_comments]
//   question[text_after_answers]
//   question[answers]
// return canvasRequest(CanvasConstants.create_single_quiz_question, {course_id, quiz_id}, query);
export const create_single_quiz_question = { type: "CREATE_SINGLE_QUIZ_QUESTION", method: "post", reducer: 'quiz_questions'};
    
// Update an existing quiz question
// Updates an existing quiz question for this quiz
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}
// Query Params:
//   question[question_name]
//   question[question_text]
//   question[quiz_group_id]
//   question[question_type]
//   question[position]
//   question[points_possible]
//   question[correct_comments]
//   question[incorrect_comments]
//   question[neutral_comments]
//   question[text_after_answers]
//   question[answers]
// return canvasRequest(CanvasConstants.update_existing_quiz_question, {course_id, quiz_id, id}, query);
export const update_existing_quiz_question = { type: "UPDATE_EXISTING_QUIZ_QUESTION", method: "put", reducer: 'quiz_questions'};
    
// Delete a quiz question
// <b>204 No Content</b> response code is returned if the deletion was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_questions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/questions/{id}[]
// return canvasRequest(CanvasConstants.delete_quiz_question, {course_id, quiz_id, id}, query);
export const delete_quiz_question = { type: "DELETE_QUIZ_QUESTION", method: "delete", reducer: 'quiz_questions'};
    
// Retrieve all quiz reports
// Returns a list of all available reports.
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports
// Query Params:
//   includes_all_versions
// return canvasRequest(CanvasConstants.retrieve_all_quiz_reports, {course_id, quiz_id}, query);
export const retrieve_all_quiz_reports = { type: "RETRIEVE_ALL_QUIZ_REPORTS", method: "get", reducer: 'quiz_reports'};
    
// Create a quiz report
// Create and return a new report for this quiz. If a previously
// generated report matches the arguments and is still current (i.e.
// there have been no new submissions), it will be returned.
// 
// *Responses*
// 
// * <code>400 Bad Request</code> if the specified report type is invalid
// * <code>409 Conflict</code> if a quiz report of the specified type is already being
//   generated
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports
// Query Params:
//   quiz_report[report_type]
//   quiz_report[includes_all_versions]
//   include
// return canvasRequest(CanvasConstants.create_quiz_report, {course_id, quiz_id}, query);
export const create_quiz_report = { type: "CREATE_QUIZ_REPORT", method: "post", reducer: 'quiz_reports'};
    
// Get a quiz report
// Returns the data for a single quiz report.
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_quiz_report, {course_id, quiz_id, id}, query);
export const get_quiz_report = { type: "GET_QUIZ_REPORT", method: "get", reducer: 'quiz_reports'};
    
// Abort the generation of a report, or remove a previously generated one
// This API allows you to cancel a previous request you issued for a report to
// be generated. Or in the case of an already generated report, you'd like to
// remove it, perhaps to generate it another time with an updated version that
// provides new features.
// 
// You must check the report's generation status before attempting to use this
// interface. See the "workflow_state" property of the QuizReport's Progress
// object for more information. Only when the progress reports itself in a
// "queued" state can the generation be aborted.
// 
// *Responses*
// 
// - <code>204 No Content</code> if your request was accepted
// - <code>422 Unprocessable Entity</code> if the report is not being generated
//   or can not be aborted at this stage
// API Docs: https://canvas.instructure.com/doc/api/quiz_reports.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/reports/{id}[]
// return canvasRequest(CanvasConstants.abort_generation_of_report_or_remove_previously_generated_one, {course_id, quiz_id, id}, query);
export const abort_generation_of_report_or_remove_previously_generated_one = { type: "ABORT_GENERATION_OF_REPORT_OR_REMOVE_PREVIOUSLY_GENERATED_ONE", method: "delete", reducer: 'quiz_reports'};
    
// Fetching the latest quiz statistics
// This endpoint provides statistics for all quiz versions, or for a specific
// quiz version, in which case the output is guaranteed to represent the
// _latest_ and most current version of the quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_statistics.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/statistics
// Query Params:
//   all_versions
// return canvasRequest(CanvasConstants.fetching_latest_quiz_statistics, {course_id, quiz_id}, query);
export const fetching_latest_quiz_statistics = { type: "FETCHING_LATEST_QUIZ_STATISTICS", method: "get", reducer: 'quiz_statistics'};
    
// Submit captured events
// Store a set of events which were captured during a quiz taking session.
// 
// On success, the response will be 204 No Content with an empty body.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_events.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events
// Query Params:
//   quiz_submission_events
// return canvasRequest(CanvasConstants.submit_captured_events, {course_id, quiz_id, id}, query);
export const submit_captured_events = { type: "SUBMIT_CAPTURED_EVENTS", method: "post", reducer: 'quiz_submission_events'};
    
// Retrieve captured events
// Retrieve the set of events captured during a specific submission attempt.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_events.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/events
// Query Params:
//   attempt
// return canvasRequest(CanvasConstants.retrieve_captured_events, {course_id, quiz_id, id}, query);
export const retrieve_captured_events = { type: "RETRIEVE_CAPTURED_EVENTS", method: "get", reducer: 'quiz_submission_events'};
    
// Get all quiz submission questions.
// Get a list of all the question records for this quiz submission.
// 
// <b>200 OK</b> response code is returned if the request was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_quiz_submission_questions, {quiz_submission_id}, query);
export const get_all_quiz_submission_questions = { type: "GET_ALL_QUIZ_SUBMISSION_QUESTIONS", method: "get", reducer: 'quiz_submission_questions'};
    
// Answering questions
// Provide or update an answer to one or more QuizQuestions.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions
// Query Params:
//   attempt
//   validation_token
//   access_code
//   quiz_questions
// return canvasRequest(CanvasConstants.answering_questions, {quiz_submission_id}, query);
export const answering_questions = { type: "ANSWERING_QUESTIONS", method: "post", reducer: 'quiz_submission_questions'};
    
// Flagging a question.
// Set a flag on a quiz question to indicate that you want to return to it
// later.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/flag
// Query Params:
//   attempt
//   validation_token
//   access_code
// return canvasRequest(CanvasConstants.flagging_question, {quiz_submission_id, id}, query);
export const flagging_question = { type: "FLAGGING_QUESTION", method: "put", reducer: 'quiz_submission_questions'};
    
// Unflagging a question.
// Remove the flag that you previously set on a quiz question after you've
// returned to it.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_questions.html
// API Url: quiz_submissions/{quiz_submission_id}/questions/{id}/unflag
// Query Params:
//   attempt
//   validation_token
//   access_code
// return canvasRequest(CanvasConstants.unflagging_question, {quiz_submission_id, id}, query);
export const unflagging_question = { type: "UNFLAGGING_QUESTION", method: "put", reducer: 'quiz_submission_questions'};
    
// Send a message to unsubmitted or submitted users for the quiz
// {
//   "body": {
//     "type": "string",
//     "description": "message body of the conversation to be created",
//     "example": "Please take the quiz."
//   },
//   "recipients": {
//     "type": "string",
//     "description": "Who to send the message to. May be either 'submitted' or 'unsubmitted'",
//     "example": "submitted"
//   },
//   "subject": {
//     "type": "string",
//     "description": "Subject of the new Conversation created",
//     "example": "ATTN: Quiz 101 Students"
//   }
// }
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_user_list.html
// API Url: courses/{course_id}/quizzes/{id}/submission_users/message[]
// return canvasRequest(CanvasConstants.send_message_to_unsubmitted_or_submitted_users_for_quiz, {course_id, id}, query);
export const send_message_to_unsubmitted_or_submitted_users_for_quiz = { type: "SEND_MESSAGE_TO_UNSUBMITTED_OR_SUBMITTED_USERS_FOR_QUIZ", method: "post", reducer: 'quiz_submission_user_list'};
    
// Get all quiz submissions.
// Get a list of all submissions for this quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_all_quiz_submissions, {course_id, quiz_id}, query);
export const get_all_quiz_submissions = { type: "GET_ALL_QUIZ_SUBMISSIONS", method: "get", reducer: 'quiz_submissions'};
    
// Get a single quiz submission.
// Get a single quiz submission.
// 
// <b>200 OK</b> response code is returned if the request was successful.
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}
// Query Params:
//   include
// return canvasRequest(CanvasConstants.get_single_quiz_submission, {course_id, quiz_id, id}, query);
export const get_single_quiz_submission = { type: "GET_SINGLE_QUIZ_SUBMISSION", method: "get", reducer: 'quiz_submissions'};
    
// Create the quiz submission (start a quiz-taking session)
// Start taking a Quiz by creating a QuizSubmission which you can use to answer
// questions and submit your answers.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>400 Bad Request</b> if the quiz is locked
// * <b>403 Forbidden</b> if an invalid access code is specified
// * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
// * <b>409 Conflict</b> if a QuizSubmission already exists for this user and quiz
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions
// Query Params:
//   access_code
//   preview
// return canvasRequest(CanvasConstants.create_quiz_submission_start_quiz_taking_session, {course_id, quiz_id}, query);
export const create_quiz_submission_start_quiz_taking_session = { type: "CREATE_QUIZ_SUBMISSION_START_QUIZ_TAKING_SESSION", method: "post", reducer: 'quiz_submissions'};
    
// Update student question scores and comments.
// Update the amount of points a student has scored for questions they've
// answered, provide comments for the student about their answer(s), or simply
// fudge the total score by a specific amount of points.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if you are not a teacher in this course
// * <b>400 Bad Request</b> if the attempt parameter is missing or invalid
// * <b>400 Bad Request</b> if the specified QS attempt is not yet complete
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}
// Query Params:
//   attempt
//   fudge_points
//   questions
// return canvasRequest(CanvasConstants.update_student_question_scores_and_comments, {course_id, quiz_id, id}, query);
export const update_student_question_scores_and_comments = { type: "UPDATE_STUDENT_QUESTION_SCORES_AND_COMMENTS", method: "put", reducer: 'quiz_submissions'};
    
// Complete the quiz submission (turn it in).
// Complete the quiz submission by marking it as complete and grading it. When
// the quiz submission has been marked as complete, no further modifications
// will be allowed.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// * <b>403 Forbidden</b> if an invalid access code is specified
// * <b>403 Forbidden</b> if the Quiz's IP filter restriction does not pass
// * <b>403 Forbidden</b> if an invalid token is specified
// * <b>400 Bad Request</b> if the QS is already complete
// * <b>400 Bad Request</b> if the attempt parameter is missing
// * <b>400 Bad Request</b> if the attempt parameter is not the latest attempt
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/complete
// Query Params:
//   attempt
//   validation_token
//   access_code
// return canvasRequest(CanvasConstants.complete_quiz_submission_turn_it_in, {course_id, quiz_id, id}, query);
export const complete_quiz_submission_turn_it_in = { type: "COMPLETE_QUIZ_SUBMISSION_TURN_IT_IN", method: "post", reducer: 'quiz_submissions'};
    
// Get current quiz submission times.
// Get the current timing data for the quiz attempt, both the end_at timestamp
// and the time_left parameter.
// 
// <b>Responses</b>
// 
// * <b>200 OK</b> if the request was successful
// API Docs: https://canvas.instructure.com/doc/api/quiz_submissions.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/{id}/time[]
// return canvasRequest(CanvasConstants.get_current_quiz_submission_times, {course_id, quiz_id, id}, query);
export const get_current_quiz_submission_times = { type: "GET_CURRENT_QUIZ_SUBMISSION_TIMES", method: "get", reducer: 'quiz_submissions'};
    
// List quizzes in a course
// Returns the list of Quizzes in this course.
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes
// Query Params:
//   search_term
// return canvasRequest(CanvasConstants.list_quizzes_in_course, {course_id}, query);
export const list_quizzes_in_course = { type: "LIST_QUIZZES_IN_COURSE", method: "get", reducer: 'quizzes'};
    
// Get a single quiz
// Returns the quiz with the given id.
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}[]
// return canvasRequest(CanvasConstants.get_single_quiz, {course_id, id}, query);
export const get_single_quiz = { type: "GET_SINGLE_QUIZ", method: "get", reducer: 'quizzes'};
    
// Create a quiz
// Create a new quiz for this course.
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes
// Query Params:
//   quiz[title]
//   quiz[description]
//   quiz[quiz_type]
//   quiz[assignment_group_id]
//   quiz[time_limit]
//   quiz[shuffle_answers]
//   quiz[hide_results]
//   quiz[show_correct_answers]
//   quiz[show_correct_answers_last_attempt]
//   quiz[show_correct_answers_at]
//   quiz[hide_correct_answers_at]
//   quiz[allowed_attempts]
//   quiz[scoring_policy]
//   quiz[one_question_at_a_time]
//   quiz[cant_go_back]
//   quiz[access_code]
//   quiz[ip_filter]
//   quiz[due_at]
//   quiz[lock_at]
//   quiz[unlock_at]
//   quiz[published]
//   quiz[one_time_results]
// return canvasRequest(CanvasConstants.create_quiz, {course_id}, query);
export const create_quiz = { type: "CREATE_QUIZ", method: "post", reducer: 'quizzes'};
    
// Edit a quiz
// Modify an existing quiz. See the documentation for quiz creation.
// 
// Additional arguments:
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}
// Query Params:
//   quiz[notify_of_update]
// return canvasRequest(CanvasConstants.edit_quiz, {course_id, id}, query);
export const edit_quiz = { type: "EDIT_QUIZ", method: "put", reducer: 'quizzes'};
    
// Delete a quiz
// 
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}[]
// return canvasRequest(CanvasConstants.delete_quiz, {course_id, id}, query);
export const delete_quiz = { type: "DELETE_QUIZ", method: "delete", reducer: 'quizzes'};
    
// Reorder quiz items
// Change order of the quiz questions or groups within the quiz
// 
// <b>204 No Content</b> response code is returned if the reorder was successful.
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}/reorder
// Query Params:
//   order[id]
//   order[type]
// return canvasRequest(CanvasConstants.reorder_quiz_items, {course_id, id}, query);
export const reorder_quiz_items = { type: "REORDER_QUIZ_ITEMS", method: "post", reducer: 'quizzes'};
    
// Validate quiz access code
// Accepts an access code and returns a boolean indicating whether that access code is correct
// API Docs: https://canvas.instructure.com/doc/api/quizzes.html
// API Url: courses/{course_id}/quizzes/{id}/validate_access_code
// Query Params:
//   access_code
// return canvasRequest(CanvasConstants.validate_quiz_access_code, {course_id, id}, query);
export const validate_quiz_access_code = { type: "VALIDATE_QUIZ_ACCESS_CODE", method: "post", reducer: 'quizzes'};
    
