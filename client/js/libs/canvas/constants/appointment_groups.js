// Appointment Groups

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
    
