
import Network             from "../../constants/network";
import wrapper             from "../../constants/wrapper";
import _                   from "lodash";

const CanvasMethods = {
  // [Search account domains)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_domain_lookups.search)
  // Api Url: /api/v1/accounts/search
  // return canvasRequest(CanvasConstants.SEARCH_ACCOUNT_DOMAINS, {}, query);
  SEARCH_ACCOUNT_DOMAINS: { method: Network.GET, reducer: 'account_domain_lookups'},

  // [Index of active global notification for the user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_index)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_USERS, {account_id:, user_id:}, query);
  ACCOUNT_NOTIFICATION_USERS: { method: Network.GET, reducer: 'account_notifications'},

  // [Close notification for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_close_notification)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_USER_CLOSE_NOTIFICATION, {account_id:, user_id:, id:}, query);
  ACCOUNT_NOTIFICATION_USER_CLOSE_NOTIFICATION: { method: Network.DELETE, reducer: 'account_notifications'},

  // [Create a global notification)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.create)
  // Api Url: /api/v1/accounts/:account_id/account_notifications
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_CREATE, {account_id:}, query);
  ACCOUNT_NOTIFICATION_CREATE: { method: Network.POST, reducer: 'account_notifications'},

  // [List Available Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.available_reports)
  // Api Url: /api/v1/accounts/:account_id/reports
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_AVAILABLE_REPORTS, {account_id:}, query);
  ACCOUNT_REPORT_AVAILABLE_REPORTS: { method: Network.GET, reducer: 'account_reports'},

  // [Start a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.create)
  // Api Url: /api/v1/accounts/:account_id/reports/:report
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_CREATE, {account_id:, report:}, query);
  ACCOUNT_REPORT_CREATE: { method: Network.POST, reducer: 'account_reports'},

  // [Index of Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.index)
  // Api Url: /api/v1/accounts/:account_id/reports/:report
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORTS, {account_id:, report:}, query);
  ACCOUNT_REPORTS: { method: Network.GET, reducer: 'account_reports'},

  // [Status of a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.show)
  // Api Url: /api/v1/accounts/:account_id/reports/:report/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_GET, {account_id:, report:, id:}, query);
  ACCOUNT_REPORT_GET: { method: Network.GET, reducer: 'account_reports'},

  // [Delete a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.destroy)
  // Api Url: /api/v1/accounts/:account_id/reports/:report/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_DELETE, {account_id:, report:, id:}, query);
  ACCOUNT_REPORT_DELETE: { method: Network.DELETE, reducer: 'account_reports'},

  // [List accounts)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.index)
  // Api Url: /api/v1/accounts
  // return canvasRequest(CanvasConstants.ACCOUNTS, {}, query);
  ACCOUNTS: { method: Network.GET, reducer: 'accounts'},

  // [List accounts for course admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
  // Api Url: /api/v1/course_accounts
  // return canvasRequest(CanvasConstants.ACCOUNT_COURSE_ACCOUNTS, {}, query);
  ACCOUNT_COURSE_ACCOUNTS: { method: Network.GET, reducer: 'accounts'},

  // [Get a single account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.show)
  // Api Url: /api/v1/accounts/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_GET, {id:}, query);
  ACCOUNT_GET: { method: Network.GET, reducer: 'accounts'},

  // [Get the sub-accounts of an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.sub_accounts)
  // Api Url: /api/v1/accounts/:account_id/sub_accounts
  // return canvasRequest(CanvasConstants.ACCOUNT_SUB_ACCOUNTS, {account_id:}, query);
  ACCOUNT_SUB_ACCOUNTS: { method: Network.GET, reducer: 'accounts'},

  // [List active courses in an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.courses_api)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.ACCOUNT_COURSES, {account_id:}, query);
  ACCOUNT_COURSES: { method: Network.GET, reducer: 'accounts'},

  // [Update an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.update)
  // Api Url: /api/v1/accounts/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_UPDATE, {id:}, query);
  ACCOUNT_UPDATE: { method: Network.PUT, reducer: 'accounts'},

  // [Delete a user from the root account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.remove_user)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id
  // return canvasRequest(CanvasConstants.ACCOUNT_REMOVE_USER, {account_id:, user_id:}, query);
  ACCOUNT_REMOVE_USER: { method: Network.DELETE, reducer: 'accounts'},

  // [Create a new sub-account)](https://canvas.instructure.com/doc/api/all_resources.html#method.sub_accounts.create)
  // Api Url: /api/v1/accounts/:account_id/sub_accounts
  // return canvasRequest(CanvasConstants.SUB_ACCOUNT_CREATE, {account_id:}, query);
  SUB_ACCOUNT_CREATE: { method: Network.POST, reducer: 'sub_accounts'},

  // [Make an account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.create)
  // Api Url: /api/v1/accounts/:account_id/admins
  // return canvasRequest(CanvasConstants.ADMIN_CREATE, {account_id:}, query);
  ADMIN_CREATE: { method: Network.POST, reducer: 'admins'},

  // [Remove account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)
  // Api Url: /api/v1/accounts/:account_id/admins/:user_id
  // return canvasRequest(CanvasConstants.ADMIN_DELETE, {account_id:, user_id:}, query);
  ADMIN_DELETE: { method: Network.DELETE, reducer: 'admins'},

  // [List account admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.index)
  // Api Url: /api/v1/accounts/:account_id/admins
  // return canvasRequest(CanvasConstants.ADMINS, {account_id:}, query);
  ADMINS: { method: Network.GET, reducer: 'admins'},

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT: { method: Network.GET, reducer: 'analytics_api'},

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED: { method: Network.GET, reducer: 'analytics_api'},

  // [Get course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_participation)
  // Api Url: /api/v1/courses/:course_id/analytics/activity
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_PARTICIPATION_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_assignments)
  // Api Url: /api/v1/courses/:course_id/analytics/assignments
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_ASSIGNMENT_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get course-level student summary data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_student_summaries)
  // Api Url: /api/v1/courses/:course_id/analytics/student_summaries
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get user-in-a-course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_participation)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/activity
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get user-in-a-course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_assignments)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/assignments
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [Get user-in-a-course-level messaging data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_messaging)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/communication
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA: { method: Network.GET, reducer: 'analytics_api'},

  // [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // Api Url: /api/v1/courses/:course_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEEDS, {course_id:}, query);
  EXTERNAL_FEEDS: { method: Network.GET, reducer: 'external_feeds'},

  // [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // Api Url: /api/v1/groups/:group_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'external_feeds'},

  // [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
  // Api Url: /api/v1/courses/:course_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_CREATE, {course_id:}, query);
  EXTERNAL_FEED_CREATE: { method: Network.POST, reducer: 'external_feeds'},

  // [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
  // Api Url: /api/v1/groups/:group_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  EXTERNAL_FEED_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'external_feeds'},

  // [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // Api Url: /api/v1/courses/:course_id/external_feeds/:external_feed_id
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_DELETE, {course_id:, external_feed_id:}, query);
  EXTERNAL_FEED_DELETE: { method: Network.DELETE, reducer: 'external_feeds'},

  // [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // Api Url: /api/v1/groups/:group_id/external_feeds/:external_feed_id
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_DELETE_BY_GROUPS_AND_GROUP, {group_id:, external_feed_id:}, query);
  EXTERNAL_FEED_DELETE_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'external_feeds'},

  // [List appointment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.index)
  // Api Url: /api/v1/appointment_groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUPS, {}, query);
  APPOINTMENT_GROUPS: { method: Network.GET, reducer: 'appointment_groups'},

  // [Create an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.create)
  // Api Url: /api/v1/appointment_groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_CREATE, {}, query);
  APPOINTMENT_GROUP_CREATE: { method: Network.POST, reducer: 'appointment_groups'},

  // [Get a single appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.show)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_GET, {id:}, query);
  APPOINTMENT_GROUP_GET: { method: Network.GET, reducer: 'appointment_groups'},

  // [Update an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.update)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_UPDATE, {id:}, query);
  APPOINTMENT_GROUP_UPDATE: { method: Network.PUT, reducer: 'appointment_groups'},

  // [Delete an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.destroy)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_DELETE, {id:}, query);
  APPOINTMENT_GROUP_DELETE: { method: Network.DELETE, reducer: 'appointment_groups'},

  // [List user participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.users)
  // Api Url: /api/v1/appointment_groups/:id/users
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_USERS, {id:}, query);
  APPOINTMENT_GROUP_USERS: { method: Network.GET, reducer: 'appointment_groups'},

  // [List student group participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.groups)
  // Api Url: /api/v1/appointment_groups/:id/groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_GROUPS, {id:}, query);
  APPOINTMENT_GROUP_GROUPS: { method: Network.GET, reducer: 'appointment_groups'},

  // [List assignment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups.index)
  // Api Url: /api/v1/courses/:course_id/assignment_groups
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS, {course_id:}, query);
  ASSIGNMENT_GROUPS: { method: Network.GET, reducer: 'assignment_groups'},

  // [Get an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.show)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_GET, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_GET: { method: Network.GET, reducer: 'assignment_groups_api'},

  // [Create an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.create)
  // Api Url: /api/v1/courses/:course_id/assignment_groups
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_CREATE, {course_id:}, query);
  ASSIGNMENT_GROUPS_CREATE: { method: Network.POST, reducer: 'assignment_groups_api'},

  // [Edit an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.update)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_UPDATE, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_UPDATE: { method: Network.PUT, reducer: 'assignment_groups_api'},

  // [Destroy an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.destroy)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_DELETE, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_DELETE: { method: Network.DELETE, reducer: 'assignment_groups_api'},

  // [Delete an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_DELETE, {course_id:, id:}, query);
  ASSIGNMENT_DELETE: { method: Network.DELETE, reducer: 'assignments'},

  // [List assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS, {course_id:}, query);
  ASSIGNMENTS: { method: Network.GET, reducer: 'assignments_api'},

  // [List assignments for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.user_index)
  // Api Url: /api/v1/users/:user_id/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_USERS, {user_id:, course_id:}, query);
  ASSIGNMENTS_USERS: { method: Network.GET, reducer: 'assignments_api'},

  // [Get a single assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_GET, {course_id:, id:}, query);
  ASSIGNMENTS_GET: { method: Network.GET, reducer: 'assignments_api'},

  // [Create an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.create)
  // Api Url: /api/v1/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_CREATE, {course_id:}, query);
  ASSIGNMENTS_CREATE: { method: Network.POST, reducer: 'assignments_api'},

  // [Edit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_UPDATE, {course_id:, id:}, query);
  ASSIGNMENTS_UPDATE: { method: Network.PUT, reducer: 'assignments_api'},

  // [List assignment overrides)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDES, {course_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDES: { method: Network.GET, reducer: 'assignment_overrides'},

  // [Get a single assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_GET, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_GET: { method: Network.GET, reducer: 'assignment_overrides'},

  // [Redirect to the assignment override for a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.group_alias)
  // Api Url: /api/v1/groups/:group_id/assignments/:assignment_id/override
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_GROUP_ALIAS, {group_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_GROUP_ALIAS: { method: Network.GET, reducer: 'assignment_overrides'},

  // [Redirect to the assignment override for a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.section_alias)
  // Api Url: /api/v1/sections/:course_section_id/assignments/:assignment_id/override
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_SECTION_ALIAS, {course_section_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_SECTION_ALIAS: { method: Network.GET, reducer: 'assignment_overrides'},

  // [Create an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_CREATE, {course_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_CREATE: { method: Network.POST, reducer: 'assignment_overrides'},

  // [Update an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_UPDATE, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_UPDATE: { method: Network.PUT, reducer: 'assignment_overrides'},

  // [Delete an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_DELETE, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_DELETE: { method: Network.DELETE, reducer: 'assignment_overrides'},

  // [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIGS_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIGS_BY_ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_CREATE, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_CREATE: { method: Network.POST, reducer: 'account_authorization_configs'},

  // [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_CREATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_CREATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.POST, reducer: 'account_authorization_configs'},

  // [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE: { method: Network.PUT, reducer: 'account_authorization_configs'},

  // [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.PUT, reducer: 'account_authorization_configs'},

  // [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_BY_ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE: { method: Network.DELETE, reducer: 'account_authorization_configs'},

  // [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: { method: Network.DELETE, reducer: 'account_authorization_configs'},

  // [GET discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_DISCOVERY_URL: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [Set discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_DISCOVERY_URL: { method: Network.PUT, reducer: 'account_authorization_configs'},

  // [Delete discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE_DISCOVERY_URL: { method: Network.DELETE, reducer: 'account_authorization_configs'},

  // [show account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_sso_settings)
  // Api Url: /api/v1/accounts/:account_id/sso_settings
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_SSO_SETTINGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_SSO_SETTINGS: { method: Network.GET, reducer: 'account_authorization_configs'},

  // [update account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_sso_settings)
  // Api Url: /api/v1/accounts/:account_id/sso_settings
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_SSO_SETTINGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_SSO_SETTINGS: { method: Network.PUT, reducer: 'account_authorization_configs'},

  // [Query by login.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_login)
  // Api Url: /api/v1/audit/authentication/logins/:login_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_LOGIN, {login_id:}, query);
  AUTHENTICATION_AUDIT_FOR_LOGIN: { method: Network.GET, reducer: 'authentication_audit_api'},

  // [Query by account.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_account)
  // Api Url: /api/v1/audit/authentication/accounts/:account_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_ACCOUNT, {account_id:}, query);
  AUTHENTICATION_AUDIT_FOR_ACCOUNT: { method: Network.GET, reducer: 'authentication_audit_api'},

  // [Query by user.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_user)
  // Api Url: /api/v1/audit/authentication/users/:user_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_USER, {user_id:}, query);
  AUTHENTICATION_AUDIT_FOR_USER: { method: Network.GET, reducer: 'authentication_audit_api'},

  // [List bookmarks)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.index)
  // Api Url: /api/v1/users/self/bookmarks(/.json)(.:format)
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARKS, {}, query);
  BOOKMARKS_BOOKMARKS: { method: Network.GET, reducer: 'bookmarks/bookmarks'},

  // [Create bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.create)
  // Api Url: /api/v1/users/self/bookmarks
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_CREATE, {}, query);
  BOOKMARKS_BOOKMARK_CREATE: { method: Network.POST, reducer: 'bookmarks/bookmarks'},

  // [Get bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.show)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_GET, {id:}, query);
  BOOKMARKS_BOOKMARK_GET: { method: Network.GET, reducer: 'bookmarks/bookmarks'},

  // [Update bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.update)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_UPDATE, {id:}, query);
  BOOKMARKS_BOOKMARK_UPDATE: { method: Network.PUT, reducer: 'bookmarks/bookmarks'},

  // [Delete bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.destroy)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_DELETE, {id:}, query);
  BOOKMARKS_BOOKMARK_DELETE: { method: Network.DELETE, reducer: 'bookmarks/bookmarks'},

  // [List calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.index)
  // Api Url: /api/v1/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS, {}, query);
  CALENDAR_EVENTS: { method: Network.GET, reducer: 'calendar_events_api'},

  // [List calendar events for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.user_index)
  // Api Url: /api/v1/users/:user_id/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_USERS, {user_id:}, query);
  CALENDAR_EVENTS_USERS: { method: Network.GET, reducer: 'calendar_events_api'},

  // [Create a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.create)
  // Api Url: /api/v1/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_CREATE, {}, query);
  CALENDAR_EVENTS_CREATE: { method: Network.POST, reducer: 'calendar_events_api'},

  // [Get a single calendar event or assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.show)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_GET, {id:}, query);
  CALENDAR_EVENTS_GET: { method: Network.GET, reducer: 'calendar_events_api'},

  // [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
  // Api Url: /api/v1/calendar_events/:id/reservations
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_RESERVE, {id:}, query);
  CALENDAR_EVENTS_RESERVE: { method: Network.POST, reducer: 'calendar_events_api'},

  // [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
  // Api Url: /api/v1/calendar_events/:id/reservations/:participant_id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_RESERVE_BY_PARTICIPANT, {id:, participant_id:}, query);
  CALENDAR_EVENTS_RESERVE_BY_PARTICIPANT: { method: Network.POST, reducer: 'calendar_events_api'},

  // [Update a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.update)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_UPDATE, {id:}, query);
  CALENDAR_EVENTS_UPDATE: { method: Network.PUT, reducer: 'calendar_events_api'},

  // [Delete a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.destroy)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_DELETE, {id:}, query);
  CALENDAR_EVENTS_DELETE: { method: Network.DELETE, reducer: 'calendar_events_api'},

  // [List members of a collaboration.)](https://canvas.instructure.com/doc/api/all_resources.html#method.collaborations.members)
  // Api Url: /api/v1/collaborations/:id/members
  // return canvasRequest(CanvasConstants.COLLABORATION_MEMBERS, {id:}, query);
  COLLABORATION_MEMBERS: { method: Network.GET, reducer: 'collaborations'},

  // [List of CommMessages for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.comm_messages_api.index)
  // Api Url: /api/v1/comm_messages
  // return canvasRequest(CanvasConstants.COMM_MESSAGES, {}, query);
  COMM_MESSAGES: { method: Network.GET, reducer: 'comm_messages_api'},

  // [List user communication channels)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.index)
  // Api Url: /api/v1/users/:user_id/communication_channels
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNELS, {user_id:}, query);
  COMMUNICATION_CHANNELS: { method: Network.GET, reducer: 'communication_channels'},

  // [Create a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.create)
  // Api Url: /api/v1/users/:user_id/communication_channels
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_CREATE, {user_id:}, query);
  COMMUNICATION_CHANNEL_CREATE: { method: Network.POST, reducer: 'communication_channels'},

  // [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
  // Api Url: /api/v1/users/:user_id/communication_channels/:id
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_DELETE, {user_id:, id:}, query);
  COMMUNICATION_CHANNEL_DELETE: { method: Network.DELETE, reducer: 'communication_channels'},

  // [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_DELETE_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
  COMMUNICATION_CHANNEL_DELETE_BY_TYPE_AND_ADDRESS: { method: Network.DELETE, reducer: 'communication_channels'},

  // [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
  // Api Url: /api/v1/courses/:course_id/conferences
  // return canvasRequest(CanvasConstants.CONFERENCES, {course_id:}, query);
  CONFERENCES: { method: Network.GET, reducer: 'conferences'},

  // [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
  // Api Url: /api/v1/groups/:group_id/conferences
  // return canvasRequest(CanvasConstants.CONFERENCES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONFERENCES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'conferences'},

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/courses/:course_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS, {course_id:}, query);
  CONTENT_EXPORTS: { method: Network.GET, reducer: 'content_exports_api'},

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/groups/:group_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_EXPORTS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'content_exports_api'},

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/users/:user_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_EXPORTS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'content_exports_api'},

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/courses/:course_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET, {course_id:, id:}, query);
  CONTENT_EXPORTS_GET: { method: Network.GET, reducer: 'content_exports_api'},

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/groups/:group_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_EXPORTS_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'content_exports_api'},

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/users/:user_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_EXPORTS_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'content_exports_api'},

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/courses/:course_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE, {course_id:}, query);
  CONTENT_EXPORTS_CREATE: { method: Network.POST, reducer: 'content_exports_api'},

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/groups/:group_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_EXPORTS_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'content_exports_api'},

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/users/:user_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_EXPORTS_CREATE_BY_USERS_AND_USER: { method: Network.POST, reducer: 'content_exports_api'},

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES, {account_id:, content_migration_id:}, query);
  MIGRATION_ISSUES: { method: Network.GET, reducer: 'migration_issues'},

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'migration_issues'},

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'migration_issues'},

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_USERS_AND_USER, {user_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_USERS_AND_USER: { method: Network.GET, reducer: 'migration_issues'},

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET, {account_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET: { method: Network.GET, reducer: 'migration_issues'},

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'migration_issues'},

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'migration_issues'},

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'migration_issues'},

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE, {account_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE: { method: Network.PUT, reducer: 'migration_issues'},

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_COURSES_AND_COURSE: { method: Network.PUT, reducer: 'migration_issues'},

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'migration_issues'},

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_USERS_AND_USER: { method: Network.PUT, reducer: 'migration_issues'},

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/accounts/:account_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS, {account_id:}, query);
  CONTENT_MIGRATIONS: { method: Network.GET, reducer: 'content_migrations'},

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/courses/:course_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'content_migrations'},

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/groups/:group_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'content_migrations'},

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/users/:user_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATIONS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'content_migrations'},

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET, {account_id:, id:}, query);
  CONTENT_MIGRATION_GET: { method: Network.GET, reducer: 'content_migrations'},

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'content_migrations'},

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'content_migrations'},

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/users/:user_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'content_migrations'},

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/accounts/:account_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE, {account_id:}, query);
  CONTENT_MIGRATION_CREATE: { method: Network.POST, reducer: 'content_migrations'},

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/courses/:course_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'content_migrations'},

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/groups/:group_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'content_migrations'},

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/users/:user_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_USERS_AND_USER: { method: Network.POST, reducer: 'content_migrations'},

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE, {account_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE: { method: Network.PUT, reducer: 'content_migrations'},

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_COURSES_AND_COURSE: { method: Network.PUT, reducer: 'content_migrations'},

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'content_migrations'},

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/users/:user_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_USERS_AND_USER: { method: Network.PUT, reducer: 'content_migrations'},

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS, {account_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS: { method: Network.GET, reducer: 'content_migrations'},

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/courses/:course_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'content_migrations'},

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/groups/:group_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'content_migrations'},

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/users/:user_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'content_migrations'},

  // [List conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.index)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATIONS, {}, query);
  CONVERSATIONS: { method: Network.GET, reducer: 'conversations'},

  // [Create a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.create)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATION_CREATE, {}, query);
  CONVERSATION_CREATE: { method: Network.POST, reducer: 'conversations'},

  // [Get running batches)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batches)
  // Api Url: /api/v1/conversations/batches
  // return canvasRequest(CanvasConstants.CONVERSATION_BATCHES, {}, query);
  CONVERSATION_BATCHES: { method: Network.GET, reducer: 'conversations'},

  // [Get a single conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.show)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_GET, {id:}, query);
  CONVERSATION_GET: { method: Network.GET, reducer: 'conversations'},

  // [Edit a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.update)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_UPDATE, {id:}, query);
  CONVERSATION_UPDATE: { method: Network.PUT, reducer: 'conversations'},

  // [Mark all as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.mark_all_as_read)
  // Api Url: /api/v1/conversations/mark_all_as_read
  // return canvasRequest(CanvasConstants.CONVERSATION_MARK_ALL_AS_READ, {}, query);
  CONVERSATION_MARK_ALL_AS_READ: { method: Network.POST, reducer: 'conversations'},

  // [Delete a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.destroy)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_DELETE, {id:}, query);
  CONVERSATION_DELETE: { method: Network.DELETE, reducer: 'conversations'},

  // [Add recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_recipients)
  // Api Url: /api/v1/conversations/:id/add_recipients
  // return canvasRequest(CanvasConstants.CONVERSATION_ADD_RECIPIENTS, {id:}, query);
  CONVERSATION_ADD_RECIPIENTS: { method: Network.POST, reducer: 'conversations'},

  // [Add a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_message)
  // Api Url: /api/v1/conversations/:id/add_message
  // return canvasRequest(CanvasConstants.CONVERSATION_ADD_MESSAGE, {id:}, query);
  CONVERSATION_ADD_MESSAGE: { method: Network.POST, reducer: 'conversations'},

  // [Delete a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.remove_messages)
  // Api Url: /api/v1/conversations/:id/remove_messages
  // return canvasRequest(CanvasConstants.CONVERSATION_REMOVE_MESSAGES, {id:}, query);
  CONVERSATION_REMOVE_MESSAGES: { method: Network.POST, reducer: 'conversations'},

  // [Batch update conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batch_update)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATION_BATCH_UPDATE, {}, query);
  CONVERSATION_BATCH_UPDATE: { method: Network.PUT, reducer: 'conversations'},

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.find_recipients)
  // Api Url: /api/v1/conversations/find_recipients
  // return canvasRequest(CanvasConstants.CONVERSATION_FIND_RECIPIENTS, {}, query);
  CONVERSATION_FIND_RECIPIENTS: { method: Network.GET, reducer: 'conversations'},

  // [Unread count)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.unread_count)
  // Api Url: /api/v1/conversations/unread_count
  // return canvasRequest(CanvasConstants.CONVERSATION_UNREAD_COUNT, {}, query);
  CONVERSATION_UNREAD_COUNT: { method: Network.GET, reducer: 'conversations'},

  // [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_audit_api.for_course)
  // Api Url: /api/v1/audit/course/courses/:course_id
  // return canvasRequest(CanvasConstants.COURSE_AUDIT_FOR_COURSE, {course_id:}, query);
  COURSE_AUDIT_FOR_COURSE: { method: Network.GET, reducer: 'course_audit_api'},

  // [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/course_quiz_extensions.create)
  // Api Url: /api/v1/courses/:course_id/quiz_extensions
  // return canvasRequest(CanvasConstants.QUIZZES_COURSE_QUIZ_EXTENSION_CREATE, {course_id:}, query);
  QUIZZES_COURSE_QUIZ_EXTENSION_CREATE: { method: Network.POST, reducer: 'quizzes/course_quiz_extensions'},

  // [List your courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.index)
  // Api Url: /api/v1/courses
  // return canvasRequest(CanvasConstants.COURSES, {}, query);
  COURSES: { method: Network.GET, reducer: 'courses'},

  // [List courses for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user_index)
  // Api Url: /api/v1/users/:user_id/courses
  // return canvasRequest(CanvasConstants.COURSE_USERS, {user_id:}, query);
  COURSE_USERS: { method: Network.GET, reducer: 'courses'},

  // [Create a new course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.COURSE_CREATE, {account_id:}, query);
  COURSE_CREATE: { method: Network.POST, reducer: 'courses'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create_file)
  // Api Url: /api/v1/courses/:course_id/files
  // return canvasRequest(CanvasConstants.COURSE_CREATE_FILE, {course_id:}, query);
  COURSE_CREATE_FILE: { method: Network.POST, reducer: 'courses'},

  // [List students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.students)
  // Api Url: /api/v1/courses/:course_id/students
  // return canvasRequest(CanvasConstants.COURSE_STUDENTS, {course_id:}, query);
  COURSE_STUDENTS: { method: Network.GET, reducer: 'courses'},

  // [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  // Api Url: /api/v1/courses/:course_id/users
  // return canvasRequest(CanvasConstants.COURSE_USERS, {course_id:}, query);
  COURSE_USERS: { method: Network.GET, reducer: 'courses'},

  // [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  // Api Url: /api/v1/courses/:course_id/search_users
  // return canvasRequest(CanvasConstants.COURSE_USERS_BY_SEARCH_USERS, {course_id:}, query);
  COURSE_USERS_BY_SEARCH_USERS: { method: Network.GET, reducer: 'courses'},

  // [List recently logged in students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.recent_students)
  // Api Url: /api/v1/courses/:course_id/recent_students
  // return canvasRequest(CanvasConstants.COURSE_RECENT_STUDENTS, {course_id:}, query);
  COURSE_RECENT_STUDENTS: { method: Network.GET, reducer: 'courses'},

  // [Get single user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user)
  // Api Url: /api/v1/courses/:course_id/users/:id
  // return canvasRequest(CanvasConstants.COURSE_USER, {course_id:, id:}, query);
  COURSE_USER: { method: Network.GET, reducer: 'courses'},

  // [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.preview_html)
  // Api Url: /api/v1/courses/:course_id/preview_html
  // return canvasRequest(CanvasConstants.COURSE_PREVIEW_HTML, {course_id:}, query);
  COURSE_PREVIEW_HTML: { method: Network.POST, reducer: 'courses'},

  // [Course activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream)
  // Api Url: /api/v1/courses/:course_id/activity_stream
  // return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM, {course_id:}, query);
  COURSE_ACTIVITY_STREAM: { method: Network.GET, reducer: 'courses'},

  // [Course activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream_summary)
  // Api Url: /api/v1/courses/:course_id/activity_stream/summary
  // return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM_SUMMARY, {course_id:}, query);
  COURSE_ACTIVITY_STREAM_SUMMARY: { method: Network.GET, reducer: 'courses'},

  // [Course TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.todo_items)
  // Api Url: /api/v1/courses/:course_id/todo
  // return canvasRequest(CanvasConstants.COURSE_TODO_ITEMS, {course_id:}, query);
  COURSE_TODO_ITEMS: { method: Network.GET, reducer: 'courses'},

  // [Conclude a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.destroy)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_DELETE, {id:}, query);
  COURSE_DELETE: { method: Network.DELETE, reducer: 'courses'},

  // [Get course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.settings)
  // Api Url: /api/v1/courses/:course_id/settings
  // return canvasRequest(CanvasConstants.COURSE_SETTINGS, {course_id:}, query);
  COURSE_SETTINGS: { method: Network.GET, reducer: 'courses'},

  // [Update course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update_settings)
  // Api Url: /api/v1/courses/:course_id/settings
  // return canvasRequest(CanvasConstants.COURSE_UPDATE_SETTINGS, {course_id:}, query);
  COURSE_UPDATE_SETTINGS: { method: Network.PUT, reducer: 'courses'},

  // [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_GET, {id:}, query);
  COURSE_GET: { method: Network.GET, reducer: 'courses'},

  // [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  // Api Url: /api/v1/accounts/:account_id/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  COURSE_GET_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'courses'},

  // [Update a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_UPDATE, {id:}, query);
  COURSE_UPDATE: { method: Network.PUT, reducer: 'courses'},

  // [Update courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.batch_update)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.COURSE_BATCH_UPDATE, {account_id:}, query);
  COURSE_BATCH_UPDATE: { method: Network.PUT, reducer: 'courses'},

  // [Reset a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.reset_content)
  // Api Url: /api/v1/courses/:course_id/reset_content
  // return canvasRequest(CanvasConstants.COURSE_RESET_CONTENT, {course_id:}, query);
  COURSE_RESET_CONTENT: { method: Network.POST, reducer: 'courses'},

  // [Get course copy status)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_status)
  // Api Url: /api/v1/courses/:course_id/course_copy/:id
  // return canvasRequest(CanvasConstants.CONTENT_IMPORT_COPY_COURSE_STATUS, {course_id:, id:}, query);
  CONTENT_IMPORT_COPY_COURSE_STATUS: { method: Network.GET, reducer: 'content_imports'},

  // [Copy course content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_content)
  // Api Url: /api/v1/courses/:course_id/course_copy
  // return canvasRequest(CanvasConstants.CONTENT_IMPORT_COPY_COURSE_CONTENT, {course_id:}, query);
  CONTENT_IMPORT_COPY_COURSE_CONTENT: { method: Network.POST, reducer: 'content_imports'},

  // [List custom gradebook columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.index)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS: { method: Network.GET, reducer: 'custom_gradebook_columns_api'},

  // [Create a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.create)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_CREATE, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_CREATE: { method: Network.POST, reducer: 'custom_gradebook_columns_api'},

  // [Update a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.update)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_UPDATE, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_UPDATE: { method: Network.PUT, reducer: 'custom_gradebook_columns_api'},

  // [Delete a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.destroy)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_DELETE, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_DELETE: { method: Network.DELETE, reducer: 'custom_gradebook_columns_api'},

  // [Reorder custom columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.reorder)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/reorder
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_REORDER, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_REORDER: { method: Network.POST, reducer: 'custom_gradebook_columns_api'},

  // [List entries for a column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.index)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMN_DATA_S, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMN_DATA_S: { method: Network.GET, reducer: 'custom_gradebook_column_data_api'},

  // [Update column data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.update)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data/:user_id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMN_DATA_UPDATE, {course_id:, id:, user_id:}, query);
  CUSTOM_GRADEBOOK_COLUMN_DATA_UPDATE: { method: Network.PUT, reducer: 'custom_gradebook_column_data_api'},

  // [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
  // Api Url: /api/v1/courses/:course_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS, {course_id:}, query);
  DISCUSSION_TOPICS: { method: Network.GET, reducer: 'discussion_topics'},

  // [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
  // Api Url: /api/v1/groups/:group_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics'},

  // [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
  // Api Url: /api/v1/courses/:course_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_CREATE, {course_id:}, query);
  DISCUSSION_TOPIC_CREATE: { method: Network.POST, reducer: 'discussion_topics'},

  // [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
  // Api Url: /api/v1/groups/:group_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPIC_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'discussion_topics'},

  // [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_UPDATE, {course_id:, topic_id:}, query);
  DISCUSSION_TOPIC_UPDATE: { method: Network.PUT, reducer: 'discussion_topics'},

  // [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPIC_UPDATE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_topics'},

  // [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_DELETE, {course_id:, topic_id:}, query);
  DISCUSSION_TOPIC_DELETE: { method: Network.DELETE, reducer: 'discussion_topics'},

  // [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_DELETE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPIC_DELETE_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_topics'},

  // [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/reorder
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_REORDER, {course_id:}, query);
  DISCUSSION_TOPIC_REORDER: { method: Network.POST, reducer: 'discussion_topics'},

  // [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/reorder
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_REORDER_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPIC_REORDER_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'discussion_topics'},

  // [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_UPDATE, {course_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_UPDATE: { method: Network.PUT, reducer: 'discussion_entries'},

  // [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_UPDATE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_entries'},

  // [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_DELETE, {course_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_DELETE: { method: Network.DELETE, reducer: 'discussion_entries'},

  // [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_DELETE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_DELETE_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_entries'},

  // [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_GET, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_GET: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_GET_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/view
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_VIEW, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_VIEW: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/view
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_VIEW_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_VIEW_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_ENTRY, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ADD_ENTRY: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ADD_ENTRY_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRIES, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRIES: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRIES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_REPLY, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_ADD_REPLY: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_REPLY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_ADD_REPLY_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_REPLIES, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_REPLIES: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_REPLIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_REPLIES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entry_list
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRY_LIST, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRY_LIST: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entry_list
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRY_LIST_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRY_LIST_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'discussion_topics_api'},

  // [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_READ, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_READ: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_READ_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_UNREAD, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_UNREAD: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_UNREAD_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_READ, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_READ: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_READ_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_UNREAD, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_UNREAD: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_UNREAD_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_READ, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_READ: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_READ_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_UNREAD, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_UNREAD: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_UNREAD_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/rating
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_RATE_ENTRY, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_RATE_ENTRY: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/rating
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_RATE_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_RATE_ENTRY_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'discussion_topics_api'},

  // [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICSUBSCRIBE_TOPIC, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICSUBSCRIBE_TOPIC: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'discussion_topics_api'},

  // [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'discussion_topics_api'},

  // [Create enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.create)
  // Api Url: /api/v1/accounts/:account_id/terms
  // return canvasRequest(CanvasConstants.TERM_CREATE, {account_id:}, query);
  TERM_CREATE: { method: Network.POST, reducer: 'terms'},

  // [Update enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.update)
  // Api Url: /api/v1/accounts/:account_id/terms/:id
  // return canvasRequest(CanvasConstants.TERM_UPDATE, {account_id:, id:}, query);
  TERM_UPDATE: { method: Network.PUT, reducer: 'terms'},

  // [Delete enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.destroy)
  // Api Url: /api/v1/accounts/:account_id/terms/:id
  // return canvasRequest(CanvasConstants.TERM_DELETE, {account_id:, id:}, query);
  TERM_DELETE: { method: Network.DELETE, reducer: 'terms'},

  // [List enrollment terms)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms_api.index)
  // Api Url: /api/v1/accounts/:account_id/terms
  // return canvasRequest(CanvasConstants.TERMS, {account_id:}, query);
  TERMS: { method: Network.GET, reducer: 'terms_api'},

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/courses/:course_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS, {course_id:}, query);
  ENROLLMENTS: { method: Network.GET, reducer: 'enrollments_api'},

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/sections/:section_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  ENROLLMENTS_BY_SECTIONS_AND_SECTION: { method: Network.GET, reducer: 'enrollments_api'},

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/users/:user_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_BY_USERS_AND_USER, {user_id:}, query);
  ENROLLMENTS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'enrollments_api'},

  // [Enrollment by ID)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.show)
  // Api Url: /api/v1/accounts/:account_id/enrollments/:id
  // return canvasRequest(CanvasConstants.ENROLLMENTS_GET, {account_id:, id:}, query);
  ENROLLMENTS_GET: { method: Network.GET, reducer: 'enrollments_api'},

  // [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
  // Api Url: /api/v1/courses/:course_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_CREATE, {course_id:}, query);
  ENROLLMENTS_CREATE: { method: Network.POST, reducer: 'enrollments_api'},

  // [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
  // Api Url: /api/v1/sections/:section_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_CREATE_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  ENROLLMENTS_CREATE_BY_SECTIONS_AND_SECTION: { method: Network.POST, reducer: 'enrollments_api'},

  // [Conclude or inactivate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.destroy)
  // Api Url: /api/v1/courses/:course_id/enrollments/:id
  // return canvasRequest(CanvasConstants.ENROLLMENTS_DELETE, {course_id:, id:}, query);
  ENROLLMENTS_DELETE: { method: Network.DELETE, reducer: 'enrollments_api'},

  // [Re-activate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.reactivate)
  // Api Url: /api/v1/courses/:course_id/enrollments/:id/reactivate
  // return canvasRequest(CanvasConstants.ENROLLMENTS_REACTIVATE, {course_id:, id:}, query);
  ENROLLMENTS_REACTIVATE: { method: Network.PUT, reducer: 'enrollments_api'},

  // [Create Error Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.errors.create)
  // Api Url: /api/v1/error_reports
  // return canvasRequest(CanvasConstants.ERROR_CREATE, {}, query);
  ERROR_CREATE: { method: Network.POST, reducer: 'errors'},

  // [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
  // Api Url: /api/v1/courses/:course_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOLS, {course_id:}, query);
  EXTERNAL_TOOLS: { method: Network.GET, reducer: 'external_tools'},

  // [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
  // Api Url: /api/v1/accounts/:account_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'external_tools'},

  // [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
  // Api Url: /api/v1/courses/:course_id/external_tools/sessionless_launch
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH, {course_id:}, query);
  EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH: { method: Network.GET, reducer: 'external_tools'},

  // [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
  // Api Url: /api/v1/accounts/:account_id/external_tools/sessionless_launch
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'external_tools'},

  // [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GET, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_GET: { method: Network.GET, reducer: 'external_tools'},

  // [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_GET_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'external_tools'},

  // [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
  // Api Url: /api/v1/courses/:course_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_CREATE, {course_id:}, query);
  EXTERNAL_TOOL_CREATE: { method: Network.POST, reducer: 'external_tools'},

  // [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
  // Api Url: /api/v1/accounts/:account_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOL_CREATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.POST, reducer: 'external_tools'},

  // [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_UPDATE, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_UPDATE: { method: Network.PUT, reducer: 'external_tools'},

  // [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.PUT, reducer: 'external_tools'},

  // [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_DELETE, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_DELETE: { method: Network.DELETE, reducer: 'external_tools'},

  // [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_DELETE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.DELETE, reducer: 'external_tools'},

  // [List favorite courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_courses)
  // Api Url: /api/v1/users/self/favorites/courses
  // return canvasRequest(CanvasConstants.FAVORITE_LIST_FAVORITE_COURSES, {}, query);
  FAVORITE_LIST_FAVORITE_COURSES: { method: Network.GET, reducer: 'favorites'},

  // [List favorite groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups
  // return canvasRequest(CanvasConstants.FAVORITE_LIST_FAVORITE_GROUPS, {}, query);
  FAVORITE_LIST_FAVORITE_GROUPS: { method: Network.GET, reducer: 'favorites'},

  // [Add course to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_course)
  // Api Url: /api/v1/users/self/favorites/courses/:id
  // return canvasRequest(CanvasConstants.FAVORITE_ADD_FAVORITE_COURSE, {id:}, query);
  FAVORITE_ADD_FAVORITE_COURSE: { method: Network.POST, reducer: 'favorites'},

  // [Add group to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups/:id
  // return canvasRequest(CanvasConstants.FAVORITE_ADD_FAVORITE_GROUPS, {id:}, query);
  FAVORITE_ADD_FAVORITE_GROUPS: { method: Network.POST, reducer: 'favorites'},

  // [Remove course from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_course)
  // Api Url: /api/v1/users/self/favorites/courses/:id
  // return canvasRequest(CanvasConstants.FAVORITE_REMOVE_FAVORITE_COURSE, {id:}, query);
  FAVORITE_REMOVE_FAVORITE_COURSE: { method: Network.DELETE, reducer: 'favorites'},

  // [Remove group from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups/:id
  // return canvasRequest(CanvasConstants.FAVORITE_REMOVE_FAVORITE_GROUPS, {id:}, query);
  FAVORITE_REMOVE_FAVORITE_GROUPS: { method: Network.DELETE, reducer: 'favorites'},

  // [Reset course favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_course_favorites)
  // Api Url: /api/v1/users/self/favorites/courses
  // return canvasRequest(CanvasConstants.FAVORITE_RESET_COURSE_FAVORITES, {}, query);
  FAVORITE_RESET_COURSE_FAVORITES: { method: Network.DELETE, reducer: 'favorites'},

  // [Reset group favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_groups_favorites)
  // Api Url: /api/v1/users/self/favorites/groups
  // return canvasRequest(CanvasConstants.FAVORITE_RESET_GROUPS_FAVORITES, {}, query);
  FAVORITE_RESET_GROUPS_FAVORITES: { method: Network.DELETE, reducer: 'favorites'},

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/courses/:course_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS, {course_id:}, query);
  FEATURE_FLAGS: { method: Network.GET, reducer: 'feature_flags'},

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/accounts/:account_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  FEATURE_FLAGS_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'feature_flags'},

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/users/:user_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS_BY_USERS_AND_USER, {user_id:}, query);
  FEATURE_FLAGS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'feature_flags'},

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/courses/:course_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES, {course_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES: { method: Network.GET, reducer: 'feature_flags'},

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/accounts/:account_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'feature_flags'},

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/users/:user_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES_BY_USERS_AND_USER, {user_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES_BY_USERS_AND_USER: { method: Network.GET, reducer: 'feature_flags'},

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET, {course_id:, feature:}, query);
  FEATURE_FLAG_GET: { method: Network.GET, reducer: 'feature_flags'},

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_GET_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'feature_flags'},

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'feature_flags'},

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE, {course_id:, feature:}, query);
  FEATURE_FLAG_UPDATE: { method: Network.PUT, reducer: 'feature_flags'},

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.PUT, reducer: 'feature_flags'},

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_UPDATE_BY_USERS_AND_USER: { method: Network.PUT, reducer: 'feature_flags'},

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE, {course_id:, feature:}, query);
  FEATURE_FLAG_DELETE: { method: Network.DELETE, reducer: 'feature_flags'},

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_DELETE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.DELETE, reducer: 'feature_flags'},

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_DELETE_BY_USERS_AND_USER: { method: Network.DELETE, reducer: 'feature_flags'},

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/courses/:course_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA, {course_id:}, query);
  FILE_QUOTA: { method: Network.GET, reducer: 'files'},

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/groups/:group_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FILE_QUOTA_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'files'},

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/users/:user_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA_BY_USERS_AND_USER, {user_id:}, query);
  FILE_QUOTA_BY_USERS_AND_USER: { method: Network.GET, reducer: 'files'},

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/courses/:course_id/files
  // return canvasRequest(CanvasConstants.FILES, {course_id:}, query);
  FILES: { method: Network.GET, reducer: 'files'},

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/users/:user_id/files
  // return canvasRequest(CanvasConstants.FILES_BY_USERS_AND_USER, {user_id:}, query);
  FILES_BY_USERS_AND_USER: { method: Network.GET, reducer: 'files'},

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/groups/:group_id/files
  // return canvasRequest(CanvasConstants.FILES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FILES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'files'},

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/folders/:id/files
  // return canvasRequest(CanvasConstants.FILES_BY_FOLDERS_AND_ID, {id:}, query);
  FILES_BY_FOLDERS_AND_ID: { method: Network.GET, reducer: 'files'},

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.public_url)
  // Api Url: /api/v1/files/:id/public_url
  // return canvasRequest(CanvasConstants.FILE_PUBLIC_URL, {id:}, query);
  FILE_PUBLIC_URL: { method: Network.GET, reducer: 'files'},

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW, {id:}, query);
  FILE_SHOW: { method: Network.GET, reducer: 'files'},

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/courses/:course_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  FILE_SHOW_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'files'},

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/groups/:group_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  FILE_SHOW_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'files'},

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/users/:user_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_USERS_AND_USER, {user_id:, id:}, query);
  FILE_SHOW_BY_USERS_AND_USER: { method: Network.GET, reducer: 'files'},

  // [Update file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_update)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_UPDATE, {id:}, query);
  FILE_UPDATE: { method: Network.PUT, reducer: 'files'},

  // [Delete file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.destroy)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_DELETE, {id:}, query);
  FILE_DELETE: { method: Network.DELETE, reducer: 'files'},

  // [List folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_index)
  // Api Url: /api/v1/folders/:id/folders
  // return canvasRequest(CanvasConstants.FOLDERS, {id:}, query);
  FOLDERS: { method: Network.GET, reducer: 'folders'},

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/courses/:course_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS, {course_id:}, query);
  FOLDER_LIST_ALL_FOLDERS: { method: Network.GET, reducer: 'folders'},

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/users/:user_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_LIST_ALL_FOLDERS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'folders'},

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/groups/:group_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/courses/:course_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH, {course_id:}, query);
  FOLDER_RESOLVE_PATH: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/courses/:course_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH, {course_id:}, query);
  FOLDER_RESOLVE_PATH: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/users/:user_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_RESOLVE_PATH_BY_USERS_AND_USER: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/users/:user_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_RESOLVE_PATH_BY_USERS_AND_USER: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/groups/:group_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'folders'},

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/groups/:group_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'folders'},

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/courses/:course_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET, {course_id:, id:}, query);
  FOLDER_GET: { method: Network.GET, reducer: 'folders'},

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/users/:user_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  FOLDER_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'folders'},

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/groups/:group_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  FOLDER_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'folders'},

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET, {id:}, query);
  FOLDER_GET: { method: Network.GET, reducer: 'folders'},

  // [Update folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.update)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_UPDATE, {id:}, query);
  FOLDER_UPDATE: { method: Network.PUT, reducer: 'folders'},

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/courses/:course_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE, {course_id:}, query);
  FOLDER_CREATE: { method: Network.POST, reducer: 'folders'},

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/users/:user_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_CREATE_BY_USERS_AND_USER: { method: Network.POST, reducer: 'folders'},

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/groups/:group_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'folders'},

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/folders/:folder_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_FOLDER, {folder_id:}, query);
  FOLDER_CREATE_BY_FOLDER: { method: Network.POST, reducer: 'folders'},

  // [Delete folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_destroy)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_DESTROY, {id:}, query);
  FOLDER_DESTROY: { method: Network.DELETE, reducer: 'folders'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create_file)
  // Api Url: /api/v1/folders/:folder_id/files
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_FILE, {folder_id:}, query);
  FOLDER_CREATE_FILE: { method: Network.POST, reducer: 'folders'},

  // [Copy a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_file)
  // Api Url: /api/v1/folders/:dest_folder_id/copy_file
  // return canvasRequest(CanvasConstants.FOLDER_COPY_FILE, {dest_folder_id:}, query);
  FOLDER_COPY_FILE: { method: Network.POST, reducer: 'folders'},

  // [Copy a folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_folder)
  // Api Url: /api/v1/folders/:dest_folder_id/copy_folder
  // return canvasRequest(CanvasConstants.FOLDER_COPY_FOLDER, {dest_folder_id:}, query);
  FOLDER_COPY_FOLDER: { method: Network.POST, reducer: 'folders'},

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/courses/:course_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS, {course_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS: { method: Network.PUT, reducer: 'usage_rights'},

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/groups/:group_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'usage_rights'},

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/users/:user_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS_BY_USERS_AND_USER: { method: Network.PUT, reducer: 'usage_rights'},

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/courses/:course_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS, {course_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS: { method: Network.DELETE, reducer: 'usage_rights'},

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/groups/:group_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'usage_rights'},

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/users/:user_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER: { method: Network.DELETE, reducer: 'usage_rights'},

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/courses/:course_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES, {course_id:}, query);
  USAGE_RIGHT_LICENSES: { method: Network.GET, reducer: 'usage_rights'},

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/groups/:group_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_LICENSES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'usage_rights'},

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/users/:user_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_LICENSES_BY_USERS_AND_USER: { method: Network.GET, reducer: 'usage_rights'},

  // [Query by assignment.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_assignment)
  // Api Url: /api/v1/audit/grade_change/assignments/:assignment_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_ASSIGNMENT, {assignment_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_ASSIGNMENT: { method: Network.GET, reducer: 'grade_change_audit_api'},

  // [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_course)
  // Api Url: /api/v1/audit/grade_change/courses/:course_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_COURSE, {course_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_COURSE: { method: Network.GET, reducer: 'grade_change_audit_api'},

  // [Query by student.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_student)
  // Api Url: /api/v1/audit/grade_change/students/:student_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_STUDENT, {student_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_STUDENT: { method: Network.GET, reducer: 'grade_change_audit_api'},

  // [Query by grader.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_grader)
  // Api Url: /api/v1/audit/grade_change/graders/:grader_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_GRADER, {grader_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_GRADER: { method: Network.GET, reducer: 'grade_change_audit_api'},

  // [Days in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.days)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/days
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_DAYS, {course_id:}, query);
  GRADEBOOK_HISTORY_DAYS: { method: Network.GET, reducer: 'gradebook_history_api'},

  // [Details for a given date in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.day_details)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/:date
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_DAY_DETAILS, {course_id:, date:}, query);
  GRADEBOOK_HISTORY_DAY_DETAILS: { method: Network.GET, reducer: 'gradebook_history_api'},

  // [Lists submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.submissions)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/:date/graders/:grader_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_SUBMISSIONS, {course_id:, date:, grader_id:, assignment_id:}, query);
  GRADEBOOK_HISTORY_SUBMISSIONS: { method: Network.GET, reducer: 'gradebook_history_api'},

  // [List uncollated submission versions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.feed)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/feed
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_FEED, {course_id:}, query);
  GRADEBOOK_HISTORY_FEED: { method: Network.GET, reducer: 'gradebook_history_api'},

  // [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
  // Api Url: /api/v1/courses/:course_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIODS, {course_id:}, query);
  GRADING_PERIODS: { method: Network.GET, reducer: 'grading_periods'},

  // [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
  // Api Url: /api/v1/accounts/:account_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'grading_periods'},

  // [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_GET, {course_id:, id:}, query);
  GRADING_PERIOD_GET: { method: Network.GET, reducer: 'grading_periods'},

  // [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_GET_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'grading_periods'},

  // [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
  // Api Url: /api/v1/courses/:course_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_CREATE, {course_id:}, query);
  GRADING_PERIOD_CREATE: { method: Network.POST, reducer: 'grading_periods'},

  // [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
  // Api Url: /api/v1/accounts/:account_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_PERIOD_CREATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.POST, reducer: 'grading_periods'},

  // [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_UPDATE, {course_id:, id:}, query);
  GRADING_PERIOD_UPDATE: { method: Network.PUT, reducer: 'grading_periods'},

  // [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.PUT, reducer: 'grading_periods'},

  // [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_DELETE, {course_id:, id:}, query);
  GRADING_PERIOD_DELETE: { method: Network.DELETE, reducer: 'grading_periods'},

  // [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_DELETE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.DELETE, reducer: 'grading_periods'},

  // [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
  // Api Url: /api/v1/accounts/:account_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CREATE, {account_id:}, query);
  GRADING_STANDARDS_CREATE: { method: Network.POST, reducer: 'grading_standards_api'},

  // [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
  // Api Url: /api/v1/courses/:course_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  GRADING_STANDARDS_CREATE_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'grading_standards_api'},

  // [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
  // Api Url: /api/v1/courses/:course_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CONTEXTS, {course_id:}, query);
  GRADING_STANDARDS_CONTEXTS: { method: Network.GET, reducer: 'grading_standards_api'},

  // [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
  // Api Url: /api/v1/accounts/:account_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CONTEXTS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_STANDARDS_CONTEXTS_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'grading_standards_api'},

  // [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
  // Api Url: /api/v1/accounts/:account_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIES, {account_id:}, query);
  GROUP_CATEGORIES: { method: Network.GET, reducer: 'group_categories'},

  // [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
  // Api Url: /api/v1/courses/:course_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIES_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CATEGORIES_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'group_categories'},

  // [Get a single group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.show)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_GET, {group_category_id:}, query);
  GROUP_CATEGORIE_GET: { method: Network.GET, reducer: 'group_categories'},

  // [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
  // Api Url: /api/v1/accounts/:account_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_CREATE, {account_id:}, query);
  GROUP_CATEGORIE_CREATE: { method: Network.POST, reducer: 'group_categories'},

  // [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
  // Api Url: /api/v1/courses/:course_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CATEGORIE_CREATE_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'group_categories'},

  // [Update a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.update)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_UPDATE, {group_category_id:}, query);
  GROUP_CATEGORIE_UPDATE: { method: Network.PUT, reducer: 'group_categories'},

  // [Delete a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.destroy)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_DELETE, {group_category_id:}, query);
  GROUP_CATEGORIE_DELETE: { method: Network.DELETE, reducer: 'group_categories'},

  // [List groups in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.groups)
  // Api Url: /api/v1/group_categories/:group_category_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_GROUPS, {group_category_id:}, query);
  GROUP_CATEGORIE_GROUPS: { method: Network.GET, reducer: 'group_categories'},

  // [List users in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.users)
  // Api Url: /api/v1/group_categories/:group_category_id/users
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_USERS, {group_category_id:}, query);
  GROUP_CATEGORIE_USERS: { method: Network.GET, reducer: 'group_categories'},

  // [Assign unassigned members)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.assign_unassigned_members)
  // Api Url: /api/v1/group_categories/:group_category_id/assign_unassigned_members
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_ASSIGN_UNASSIGNED_MEMBERS, {group_category_id:}, query);
  GROUP_CATEGORIE_ASSIGN_UNASSIGNED_MEMBERS: { method: Network.POST, reducer: 'group_categories'},

  // [List your groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.index)
  // Api Url: /api/v1/users/self/groups
  // return canvasRequest(CanvasConstants.GROUPS, {}, query);
  GROUPS: { method: Network.GET, reducer: 'groups'},

  // [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
  // Api Url: /api/v1/accounts/:account_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CONTEXTS, {account_id:}, query);
  GROUP_CONTEXTS: { method: Network.GET, reducer: 'groups'},

  // [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
  // Api Url: /api/v1/courses/:course_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CONTEXTS_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CONTEXTS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'groups'},

  // [Get a single group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.show)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_GET, {group_id:}, query);
  GROUP_GET: { method: Network.GET, reducer: 'groups'},

  // [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
  // Api Url: /api/v1/groups
  // return canvasRequest(CanvasConstants.GROUP_CREATE, {}, query);
  GROUP_CREATE: { method: Network.POST, reducer: 'groups'},

  // [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
  // Api Url: /api/v1/group_categories/:group_category_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CREATE_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY, {group_category_id:}, query);
  GROUP_CREATE_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY: { method: Network.POST, reducer: 'groups'},

  // [Edit a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.update)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_UPDATE, {group_id:}, query);
  GROUP_UPDATE: { method: Network.PUT, reducer: 'groups'},

  // [Delete a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.destroy)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_DELETE, {group_id:}, query);
  GROUP_DELETE: { method: Network.DELETE, reducer: 'groups'},

  // [Invite others to a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.invite)
  // Api Url: /api/v1/groups/:group_id/invite
  // return canvasRequest(CanvasConstants.GROUP_INVITE, {group_id:}, query);
  GROUP_INVITE: { method: Network.POST, reducer: 'groups'},

  // [List group's users)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.users)
  // Api Url: /api/v1/groups/:group_id/users
  // return canvasRequest(CanvasConstants.GROUP_USERS, {group_id:}, query);
  GROUP_USERS: { method: Network.GET, reducer: 'groups'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create_file)
  // Api Url: /api/v1/groups/:group_id/files
  // return canvasRequest(CanvasConstants.GROUP_CREATE_FILE, {group_id:}, query);
  GROUP_CREATE_FILE: { method: Network.POST, reducer: 'groups'},

  // [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.preview_html)
  // Api Url: /api/v1/groups/:group_id/preview_html
  // return canvasRequest(CanvasConstants.GROUP_PREVIEW_HTML, {group_id:}, query);
  GROUP_PREVIEW_HTML: { method: Network.POST, reducer: 'groups'},

  // [Group activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream)
  // Api Url: /api/v1/groups/:group_id/activity_stream
  // return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM, {group_id:}, query);
  GROUP_ACTIVITY_STREAM: { method: Network.GET, reducer: 'groups'},

  // [Group activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream_summary)
  // Api Url: /api/v1/groups/:group_id/activity_stream/summary
  // return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM_SUMMARY, {group_id:}, query);
  GROUP_ACTIVITY_STREAM_SUMMARY: { method: Network.GET, reducer: 'groups'},

  // [List group memberships)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.index)
  // Api Url: /api/v1/groups/:group_id/memberships
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIPS, {group_id:}, query);
  GROUP_MEMBERSHIPS: { method: Network.GET, reducer: 'group_memberships'},

  // [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_GET, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_GET: { method: Network.GET, reducer: 'group_memberships'},

  // [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_GET_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_GET_BY_USERS_AND_USER: { method: Network.GET, reducer: 'group_memberships'},

  // [Create a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.create)
  // Api Url: /api/v1/groups/:group_id/memberships
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_CREATE, {group_id:}, query);
  GROUP_MEMBERSHIP_CREATE: { method: Network.POST, reducer: 'group_memberships'},

  // [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_UPDATE, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_UPDATE: { method: Network.PUT, reducer: 'group_memberships'},

  // [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_UPDATE_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_UPDATE_BY_USERS_AND_USER: { method: Network.PUT, reducer: 'group_memberships'},

  // [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_DELETE, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_DELETE: { method: Network.DELETE, reducer: 'group_memberships'},

  // [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_DELETE_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_DELETE_BY_USERS_AND_USER: { method: Network.DELETE, reducer: 'group_memberships'},

  // [Create JWT)](https://canvas.instructure.com/doc/api/all_resources.html#method.jwts.create)
  // Api Url: /api/v1/jwts
  // return canvasRequest(CanvasConstants.JWT_CREATE, {}, query);
  JWT_CREATE: { method: Network.POST, reducer: 'jwts'},

  // [Create live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.create)
  // Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_RESULT_CREATE, {course_id:, assessment_id:}, query);
  LIVE_ASSESSMENTS_RESULT_CREATE: { method: Network.POST, reducer: 'live_assessments/results'},

  // [List live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.index)
  // Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_RESULTS, {course_id:, assessment_id:}, query);
  LIVE_ASSESSMENTS_RESULTS: { method: Network.GET, reducer: 'live_assessments/results'},

  // [Create or find a live assessment)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.create)
  // Api Url: /api/v1/courses/:course_id/live_assessments
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_ASSESSMENT_CREATE, {course_id:}, query);
  LIVE_ASSESSMENTS_ASSESSMENT_CREATE: { method: Network.POST, reducer: 'live_assessments/assessments'},

  // [List live assessments)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.index)
  // Api Url: /api/v1/courses/:course_id/live_assessments
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_ASSESSMENTS, {course_id:}, query);
  LIVE_ASSESSMENTS_ASSESSMENTS: { method: Network.GET, reducer: 'live_assessments/assessments'},

  // [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
  // Api Url: /api/v1/accounts/:account_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYMS, {account_id:}, query);
  PSEUDONYMS: { method: Network.GET, reducer: 'pseudonyms'},

  // [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
  // Api Url: /api/v1/users/:user_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYMS_BY_USERS_AND_USER, {user_id:}, query);
  PSEUDONYMS_BY_USERS_AND_USER: { method: Network.GET, reducer: 'pseudonyms'},

  // [Create a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.create)
  // Api Url: /api/v1/accounts/:account_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYM_CREATE, {account_id:}, query);
  PSEUDONYM_CREATE: { method: Network.POST, reducer: 'pseudonyms'},

  // [Edit a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.update)
  // Api Url: /api/v1/accounts/:account_id/logins/:id
  // return canvasRequest(CanvasConstants.PSEUDONYM_UPDATE, {account_id:, id:}, query);
  PSEUDONYM_UPDATE: { method: Network.PUT, reducer: 'pseudonyms'},

  // [Delete a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.destroy)
  // Api Url: /api/v1/users/:user_id/logins/:id
  // return canvasRequest(CanvasConstants.PSEUDONYM_DELETE, {user_id:, id:}, query);
  PSEUDONYM_DELETE: { method: Network.DELETE, reducer: 'pseudonyms'},

  // [List students selected for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
  // return canvasRequest(CanvasConstants.MODERATION_SET_S, {course_id:, assignment_id:}, query);
  MODERATION_SET_S: { method: Network.GET, reducer: 'moderation_set'},

  // [Select students for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
  // return canvasRequest(CanvasConstants.MODERATION_SET_CREATE, {course_id:, assignment_id:}, query);
  MODERATION_SET_CREATE: { method: Network.POST, reducer: 'moderation_set'},

  // [Show provisional grade status for a student)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.status)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/status
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_STATUS, {course_id:, assignment_id:}, query);
  PROVISIONAL_GRADE_STATUS: { method: Network.GET, reducer: 'provisional_grades'},

  // [Select provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.select)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/select
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_SELECT, {course_id:, assignment_id:, provisional_grade_id:}, query);
  PROVISIONAL_GRADE_SELECT: { method: Network.PUT, reducer: 'provisional_grades'},

  // [Copy provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.copy_to_final_mark)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/copy_to_final_mark
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_COPY_TO_FINAL_MARK, {course_id:, assignment_id:, provisional_grade_id:}, query);
  PROVISIONAL_GRADE_COPY_TO_FINAL_MARK: { method: Network.POST, reducer: 'provisional_grades'},

  // [Publish provisional grades for an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.publish)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/publish
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_PUBLISH, {course_id:, assignment_id:}, query);
  PROVISIONAL_GRADE_PUBLISH: { method: Network.POST, reducer: 'provisional_grades'},

  // [List modules)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.index)
  // Api Url: /api/v1/courses/:course_id/modules
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES, {course_id:}, query);
  CONTEXT_MODULES: { method: Network.GET, reducer: 'context_modules_api'},

  // [Show module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.show)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_GET, {course_id:, id:}, query);
  CONTEXT_MODULES_GET: { method: Network.GET, reducer: 'context_modules_api'},

  // [Create a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.create)
  // Api Url: /api/v1/courses/:course_id/modules
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_CREATE, {course_id:}, query);
  CONTEXT_MODULES_CREATE: { method: Network.POST, reducer: 'context_modules_api'},

  // [Update a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.update)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_UPDATE, {course_id:, id:}, query);
  CONTEXT_MODULES_UPDATE: { method: Network.PUT, reducer: 'context_modules_api'},

  // [Delete module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.destroy)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_DELETE, {course_id:, id:}, query);
  CONTEXT_MODULES_DELETE: { method: Network.DELETE, reducer: 'context_modules_api'},

  // [Re-lock module progressions)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.relock)
  // Api Url: /api/v1/courses/:course_id/modules/:id/relock
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_RELOCK, {course_id:, id:}, query);
  CONTEXT_MODULES_RELOCK: { method: Network.PUT, reducer: 'context_modules_api'},

  // [List module items)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.index)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS, {course_id:, module_id:}, query);
  CONTEXT_MODULE_ITEMS: { method: Network.GET, reducer: 'context_module_items_api'},

  // [Show module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.show)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_GET, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_GET: { method: Network.GET, reducer: 'context_module_items_api'},

  // [Create a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.create)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_CREATE, {course_id:, module_id:}, query);
  CONTEXT_MODULE_ITEMS_CREATE: { method: Network.POST, reducer: 'context_module_items_api'},

  // [Update a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.update)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_UPDATE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_UPDATE: { method: Network.PUT, reducer: 'context_module_items_api'},

  // [Delete module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.destroy)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_DELETE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_DELETE: { method: Network.DELETE, reducer: 'context_module_items_api'},

  // [Mark module item as done/not done)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_as_done)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/done
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_MARK_AS_DONE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_MARK_AS_DONE: { method: Network.PUT, reducer: 'context_module_items_api'},

  // [Get module item sequence)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.item_sequence)
  // Api Url: /api/v1/courses/:course_id/module_item_sequence
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_ITEM_SEQUENCE, {course_id:}, query);
  CONTEXT_MODULE_ITEMS_ITEM_SEQUENCE: { method: Network.GET, reducer: 'context_module_items_api'},

  // [Mark module item read)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_item_read)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/mark_read
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_MARK_ITEM_READ, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_MARK_ITEM_READ: { method: Network.POST, reducer: 'context_module_items_api'},

  // [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCES, {user_id:, communication_channel_id:}, query);
  NOTIFICATION_PREFERENCES: { method: Network.GET, reducer: 'notification_preferences'},

  // [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCES_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
  NOTIFICATION_PREFERENCES_BY_TYPE_AND_ADDRESS: { method: Network.GET, reducer: 'notification_preferences'},

  // [List of preference categories)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.category_index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preference_categories
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_CATEGORYS, {user_id:, communication_channel_id:}, query);
  NOTIFICATION_PREFERENCE_CATEGORYS: { method: Network.GET, reducer: 'notification_preferences'},

  // [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_GET, {user_id:, communication_channel_id:, notification:}, query);
  NOTIFICATION_PREFERENCE_GET: { method: Network.GET, reducer: 'notification_preferences'},

  // [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_GET_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:, notification:}, query);
  NOTIFICATION_PREFERENCE_GET_BY_TYPE_AND_ADDRESS: { method: Network.GET, reducer: 'notification_preferences'},

  // [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE, {communication_channel_id:, notification:}, query);
  NOTIFICATION_PREFERENCE_UPDATE: { method: Network.PUT, reducer: 'notification_preferences'},

  // [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
  // Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_BY_TYPE_AND_ADDRESS, {type:, address:, notification:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_BY_TYPE_AND_ADDRESS: { method: Network.PUT, reducer: 'notification_preferences'},

  // [Update preferences by category)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_preferences_by_category)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preference_categories/:category
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_PREFERENCES_BY_CATEGORY, {communication_channel_id:, category:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_PREFERENCES_BY_CATEGORY: { method: Network.PUT, reducer: 'notification_preferences'},

  // [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_ALL, {communication_channel_id:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_ALL: { method: Network.PUT, reducer: 'notification_preferences'},

  // [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
  // Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_ALL_BY_TYPE_AND_ADDRESS, {type:, address:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_ALL_BY_TYPE_AND_ADDRESS: { method: Network.PUT, reducer: 'notification_preferences'},

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/global/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT, {}, query);
  OUTCOME_GROUPS_REDIRECT: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/accounts/:account_id/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  OUTCOME_GROUPS_REDIRECT_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/courses/:course_id/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_REDIRECT_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS, {account_id:}, query);
  OUTCOME_GROUPS: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
  // Api Url: /api/v1/courses/:course_id/outcome_groups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
  // Api Url: /api/v1/accounts/:account_id/outcome_group_links
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINKS, {account_id:}, query);
  OUTCOME_GROUPS_LINKS: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
  // Api Url: /api/v1/courses/:course_id/outcome_group_links
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINKS_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_LINKS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET, {id:}, query);
  OUTCOME_GROUPS_GET: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_GET_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_GET_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE, {id:}, query);
  OUTCOME_GROUPS_UPDATE: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_UPDATE_BY_COURSES_AND_COURSE: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE, {id:}, query);
  OUTCOME_GROUPS_DELETE: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_DELETE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_DELETE_BY_COURSES_AND_COURSE: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES, {id:}, query);
  OUTCOME_GROUPS_OUTCOMES: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_OUTCOMES_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK, {id:}, query);
  OUTCOME_GROUPS_LINK: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_OUTCOME, {id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_OUTCOME: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME, {account_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE_AND_OUTCOME, {course_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE_AND_OUTCOME: { method: Network.PUT, reducer: 'outcome_groups_api'},

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK, {id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK_BY_COURSES_AND_COURSE, {course_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK_BY_COURSES_AND_COURSE: { method: Network.DELETE, reducer: 'outcome_groups_api'},

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/global/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPSUBGROUPS, {id:}, query);
  OUTCOME_GROUPSUBGROUPS: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPSUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPSUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPSUBGROUPS_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPSUBGROUPS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'outcome_groups_api'},

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/global/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE, {id:}, query);
  OUTCOME_GROUPS_CREATE: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_CREATE_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_CREATE_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/global/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT, {id:}, query);
  OUTCOME_GROUPS_IMPORT: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_IMPORT_BY_ACCOUNTS_AND_ACCOUNT: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_IMPORT_BY_COURSES_AND_COURSE: { method: Network.POST, reducer: 'outcome_groups_api'},

  // [Get outcome results)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.index)
  // Api Url: /api/v1/courses/:course_id/outcome_results
  // return canvasRequest(CanvasConstants.OUTCOME_RESULTS, {course_id:}, query);
  OUTCOME_RESULTS: { method: Network.GET, reducer: 'outcome_results'},

  // [Get outcome result rollups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.rollups)
  // Api Url: /api/v1/courses/:course_id/outcome_rollups
  // return canvasRequest(CanvasConstants.OUTCOME_RESULT_ROLLUPS, {course_id:}, query);
  OUTCOME_RESULT_ROLLUPS: { method: Network.GET, reducer: 'outcome_results'},

  // [Show an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.show)
  // Api Url: /api/v1/outcomes/:id
  // return canvasRequest(CanvasConstants.OUTCOMES_GET, {id:}, query);
  OUTCOMES_GET: { method: Network.GET, reducer: 'outcomes_api'},

  // [Update an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.update)
  // Api Url: /api/v1/outcomes/:id
  // return canvasRequest(CanvasConstants.OUTCOMES_UPDATE, {id:}, query);
  OUTCOMES_UPDATE: { method: Network.PUT, reducer: 'outcomes_api'},

  // [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
  // Api Url: /api/v1/courses/:course_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_FRONT_PAGE, {course_id:}, query);
  WIKI_PAGES_GET_FRONT_PAGE: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
  // Api Url: /api/v1/groups/:group_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_GET_FRONT_PAGE_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
  // Api Url: /api/v1/courses/:course_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_FRONT_PAGE, {course_id:}, query);
  WIKI_PAGES_UPDATE_FRONT_PAGE: { method: Network.PUT, reducer: 'wiki_pages_api'},

  // [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
  // Api Url: /api/v1/groups/:group_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_UPDATE_FRONT_PAGE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'wiki_pages_api'},

  // [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
  // Api Url: /api/v1/courses/:course_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES, {course_id:}, query);
  WIKI_PAGES: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
  // Api Url: /api/v1/groups/:group_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
  // Api Url: /api/v1/courses/:course_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_CREATE, {course_id:}, query);
  WIKI_PAGES_CREATE: { method: Network.POST, reducer: 'wiki_pages_api'},

  // [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
  // Api Url: /api/v1/groups/:group_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_CREATE_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'wiki_pages_api'},

  // [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET, {course_id:, url:}, query);
  WIKI_PAGES_GET: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_GET_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE, {course_id:, url:}, query);
  WIKI_PAGES_UPDATE: { method: Network.PUT, reducer: 'wiki_pages_api'},

  // [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_UPDATE_BY_GROUPS_AND_GROUP: { method: Network.PUT, reducer: 'wiki_pages_api'},

  // [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_DELETE, {course_id:, url:}, query);
  WIKI_PAGES_DELETE: { method: Network.DELETE, reducer: 'wiki_pages_api'},

  // [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_DELETE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_DELETE_BY_GROUPS_AND_GROUP: { method: Network.DELETE, reducer: 'wiki_pages_api'},

  // [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVISIONS, {course_id:, url:}, query);
  WIKI_PAGES_REVISIONS: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVISIONS_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_REVISIONS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/latest
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION, {course_id:, url:}, query);
  WIKI_PAGES_GET_REVISION: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/latest
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_REVISION, {course_id:, url:, revision_id:}, query);
  WIKI_PAGES_GET_REVISION_BY_REVISION: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION, {group_id:, url:, revision_id:}, query);
  WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION: { method: Network.GET, reducer: 'wiki_pages_api'},

  // [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVERT, {course_id:, url:, revision_id:}, query);
  WIKI_PAGES_REVERT: { method: Network.POST, reducer: 'wiki_pages_api'},

  // [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVERT_BY_GROUPS_AND_GROUP, {group_id:, url:, revision_id:}, query);
  WIKI_PAGES_REVERT_BY_GROUPS_AND_GROUP: { method: Network.POST, reducer: 'wiki_pages_api'},

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS, {course_id:, assignment_id:}, query);
  PEER_REVIEWS: { method: Network.GET, reducer: 'peer_reviews_api'},

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  PEER_REVIEWS_BY_SECTIONS_AND_SECTION: { method: Network.GET, reducer: 'peer_reviews_api'},

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_BY_SUBMISSIONS_AND_SUBMISSION, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_BY_SUBMISSIONS_AND_SUBMISSION: { method: Network.GET, reducer: 'peer_reviews_api'},

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION: { method: Network.GET, reducer: 'peer_reviews_api'},

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_CREATE, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_CREATE: { method: Network.POST, reducer: 'peer_reviews_api'},

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_CREATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_CREATE_BY_SECTIONS_AND_SECTION: { method: Network.POST, reducer: 'peer_reviews_api'},

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_DELETE, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_DELETE: { method: Network.DELETE, reducer: 'peer_reviews_api'},

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_DELETE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_DELETE_BY_SECTIONS_AND_SECTION: { method: Network.DELETE, reducer: 'peer_reviews_api'},

  // [List poll sessions for a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.index)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSIONS, {poll_id:}, query);
  POLLING_POLL_SESSIONS: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [Get the results for a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.show)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_GET, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_GET: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [Create a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.create)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CREATE, {poll_id:}, query);
  POLLING_POLL_SESSION_CREATE: { method: Network.POST, reducer: 'polling/poll_sessions'},

  // [Update a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.update)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_UPDATE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_UPDATE: { method: Network.PUT, reducer: 'polling/poll_sessions'},

  // [Delete a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.destroy)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_DELETE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_DELETE: { method: Network.DELETE, reducer: 'polling/poll_sessions'},

  // [Open a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.open)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/open
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_OPEN, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_OPEN: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [Close an opened poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.close)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/close
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CLOSE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_CLOSE: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [List opened poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.opened)
  // Api Url: /api/v1/poll_sessions/opened
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_OPENED, {}, query);
  POLLING_POLL_SESSION_OPENED: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [List closed poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.closed)
  // Api Url: /api/v1/poll_sessions/closed
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CLOSED, {}, query);
  POLLING_POLL_SESSION_CLOSED: { method: Network.GET, reducer: 'polling/poll_sessions'},

  // [List poll choices in a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.index)
  // Api Url: /api/v1/polls/:poll_id/poll_choices
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICES, {poll_id:}, query);
  POLLING_POLL_CHOICES: { method: Network.GET, reducer: 'polling/poll_choices'},

  // [Get a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.show)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_GET, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_GET: { method: Network.GET, reducer: 'polling/poll_choices'},

  // [Create a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.create)
  // Api Url: /api/v1/polls/:poll_id/poll_choices
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_CREATE, {poll_id:}, query);
  POLLING_POLL_CHOICE_CREATE: { method: Network.POST, reducer: 'polling/poll_choices'},

  // [Update a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.update)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_UPDATE, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_UPDATE: { method: Network.PUT, reducer: 'polling/poll_choices'},

  // [Delete a poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.destroy)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_DELETE, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_DELETE: { method: Network.DELETE, reducer: 'polling/poll_choices'},

  // [Get a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.show)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SUBMISSION_GET, {poll_id:, poll_session_id:, id:}, query);
  POLLING_POLL_SUBMISSION_GET: { method: Network.GET, reducer: 'polling/poll_submissions'},

  // [Create a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.create)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SUBMISSION_CREATE, {poll_id:, poll_session_id:}, query);
  POLLING_POLL_SUBMISSION_CREATE: { method: Network.POST, reducer: 'polling/poll_submissions'},

  // [List polls)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.index)
  // Api Url: /api/v1/polls
  // return canvasRequest(CanvasConstants.POLLING_POLLS, {}, query);
  POLLING_POLLS: { method: Network.GET, reducer: 'polling/polls'},

  // [Get a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.show)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_GET, {id:}, query);
  POLLING_POLL_GET: { method: Network.GET, reducer: 'polling/polls'},

  // [Create a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.create)
  // Api Url: /api/v1/polls
  // return canvasRequest(CanvasConstants.POLLING_POLL_CREATE, {}, query);
  POLLING_POLL_CREATE: { method: Network.POST, reducer: 'polling/polls'},

  // [Update a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.update)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_UPDATE, {id:}, query);
  POLLING_POLL_UPDATE: { method: Network.PUT, reducer: 'polling/polls'},

  // [Delete a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.destroy)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_DELETE, {id:}, query);
  POLLING_POLL_DELETE: { method: Network.DELETE, reducer: 'polling/polls'},

  // [Query progress)](https://canvas.instructure.com/doc/api/all_resources.html#method.progress.show)
  // Api Url: /api/v1/progress/:id
  // return canvasRequest(CanvasConstants.PROGRES_GET, {id:}, query);
  PROGRES_GET: { method: Network.GET, reducer: 'progress'},

  // [Retrieve assignment-overridden dates for quizzes)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_assignment_overrides.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/assignment_overrides
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_ASSIGNMENT_OVERRIDES, {course_id:}, query);
  QUIZZES_QUIZ_ASSIGNMENT_OVERRIDES: { method: Network.GET, reducer: 'quizzes/quiz_assignment_overrides'},

  // [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_extensions.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/extensions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_EXTENSION_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_EXTENSION_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_extensions'},

  // [Get available quiz IP filters.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_ip_filters.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/ip_filters
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_IP_FILTERS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_IP_FILTERS: { method: Network.GET, reducer: 'quizzes/quiz_ip_filters'},

  // [Get a single quiz group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_GET: { method: Network.GET, reducer: 'quizzes/quiz_groups'},

  // [Create a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_GROUP_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_groups'},

  // [Update a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_UPDATE: { method: Network.PUT, reducer: 'quizzes/quiz_groups'},

  // [Delete a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_DELETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_DELETE: { method: Network.DELETE, reducer: 'quizzes/quiz_groups'},

  // [Reorder question groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.reorder)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id/reorder
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_REORDER, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_REORDER: { method: Network.POST, reducer: 'quizzes/quiz_groups'},

  // [List questions in a quiz or a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTIONS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_QUESTIONS: { method: Network.GET, reducer: 'quizzes/quiz_questions'},

  // [Get a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_GET: { method: Network.GET, reducer: 'quizzes/quiz_questions'},

  // [Create a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_QUESTION_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_questions'},

  // [Update an existing quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_UPDATE: { method: Network.PUT, reducer: 'quizzes/quiz_questions'},

  // [Delete a quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_DELETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_DELETE: { method: Network.DELETE, reducer: 'quizzes/quiz_questions'},

  // [Retrieve all quiz reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORTS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_REPORTS: { method: Network.GET, reducer: 'quizzes/quiz_reports'},

  // [Create a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_REPORT_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_reports'},

  // [Get a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_REPORT_GET: { method: Network.GET, reducer: 'quizzes/quiz_reports'},

  // [Abort the generation of a report, or remove a previously generated one)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.abort)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_ABORT, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_REPORT_ABORT: { method: Network.DELETE, reducer: 'quizzes/quiz_reports'},

  // [Fetching the latest quiz statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_statistics.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/statistics
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_STATISTICS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_STATISTICS: { method: Network.GET, reducer: 'quizzes/quiz_statistics'},

  // [Submit captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_EVENTS_CREATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_EVENTS_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_submission_events_api'},

  // [Retrieve captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_EVENTS, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_EVENTS: { method: Network.GET, reducer: 'quizzes/quiz_submission_events_api'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_files.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/self/files
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_FILE_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_FILE_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_submission_files'},

  // [Get all quiz submission questions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.index)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTIONS, {quiz_submission_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTIONS: { method: Network.GET, reducer: 'quizzes/quiz_submission_questions'},

  // [Answering questions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.answer)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_ANSWER, {quiz_submission_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_ANSWER: { method: Network.POST, reducer: 'quizzes/quiz_submission_questions'},

  // [Flagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.flag)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/flag
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_FLAG, {quiz_submission_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_FLAG: { method: Network.PUT, reducer: 'quizzes/quiz_submission_questions'},

  // [Unflagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.unflag)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/unflag
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_UNFLAG, {quiz_submission_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_UNFLAG: { method: Network.PUT, reducer: 'quizzes/quiz_submission_questions'},

  // [Send a message to unsubmitted or submitted users for the quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_users.message)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/submission_users/message
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_USER_MESSAGE, {course_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_USER_MESSAGE: { method: Network.POST, reducer: 'quizzes/quiz_submission_users'},

  // [Get all quiz submissions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS: { method: Network.GET, reducer: 'quizzes/quiz_submissions_api'},

  // [Get a single quiz submission.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_GET: { method: Network.GET, reducer: 'quizzes/quiz_submissions_api'},

  // [Create the quiz submission (start a quiz-taking session))](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_CREATE: { method: Network.POST, reducer: 'quizzes/quiz_submissions_api'},

  // [Update student question scores and comments.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_UPDATE: { method: Network.PUT, reducer: 'quizzes/quiz_submissions_api'},

  // [Complete the quiz submission (turn it in).)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.complete)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/complete
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_COMPLETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_COMPLETE: { method: Network.POST, reducer: 'quizzes/quiz_submissions_api'},

  // [Get current quiz submission times.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.time)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/time
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_TIME, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_TIME: { method: Network.GET, reducer: 'quizzes/quiz_submissions_api'},

  // [List quizzes in a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES, {course_id:}, query);
  QUIZZES_QUIZZES: { method: Network.GET, reducer: 'quizzes/quizzes_api'},

  // [Get a single quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_GET, {course_id:, id:}, query);
  QUIZZES_QUIZZES_GET: { method: Network.GET, reducer: 'quizzes/quizzes_api'},

  // [Create a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_CREATE, {course_id:}, query);
  QUIZZES_QUIZZES_CREATE: { method: Network.POST, reducer: 'quizzes/quizzes_api'},

  // [Edit a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_UPDATE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_UPDATE: { method: Network.PUT, reducer: 'quizzes/quizzes_api'},

  // [Delete a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_DELETE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_DELETE: { method: Network.DELETE, reducer: 'quizzes/quizzes_api'},

  // [Reorder quiz items)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.reorder)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/reorder
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_REORDER, {course_id:, id:}, query);
  QUIZZES_QUIZZES_REORDER: { method: Network.POST, reducer: 'quizzes/quizzes_api'},

  // [Validate quiz access code)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.validate_access_code)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/validate_access_code
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_VALIDATE_ACCESS_CODE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_VALIDATE_ACCESS_CODE: { method: Network.POST, reducer: 'quizzes/quizzes_api'},

  // [List roles)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.api_index)
  // Api Url: /api/v1/accounts/:account_id/roles
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDES, {account_id:}, query);
  ROLE_OVERRIDES: { method: Network.GET, reducer: 'role_overrides'},

  // [Get a single role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.show)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_GET, {account_id:, id:}, query);
  ROLE_OVERRIDE_GET: { method: Network.GET, reducer: 'role_overrides'},

  // [Create a new role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.add_role)
  // Api Url: /api/v1/accounts/:account_id/roles
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_ADD_ROLE, {account_id:}, query);
  ROLE_OVERRIDE_ADD_ROLE: { method: Network.POST, reducer: 'role_overrides'},

  // [Deactivate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.remove_role)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_REMOVE_ROLE, {account_id:, id:}, query);
  ROLE_OVERRIDE_REMOVE_ROLE: { method: Network.DELETE, reducer: 'role_overrides'},

  // [Activate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.activate_role)
  // Api Url: /api/v1/accounts/:account_id/roles/:id/activate
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_ACTIVATE_ROLE, {account_id:, id:}, query);
  ROLE_OVERRIDE_ACTIVATE_ROLE: { method: Network.POST, reducer: 'role_overrides'},

  // [Update a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.update)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_UPDATE, {account_id:, id:}, query);
  ROLE_OVERRIDE_UPDATE: { method: Network.PUT, reducer: 'role_overrides'},

  // [Get SIS import list)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.index)
  // Api Url: /api/v1/accounts/:account_id/sis_imports
  // return canvasRequest(CanvasConstants.SIS_IMPORTS, {account_id:}, query);
  SIS_IMPORTS: { method: Network.GET, reducer: 'sis_imports_api'},

  // [Import SIS data)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.create)
  // Api Url: /api/v1/accounts/:account_id/sis_imports
  // return canvasRequest(CanvasConstants.SIS_IMPORTS_CREATE, {account_id:}, query);
  SIS_IMPORTS_CREATE: { method: Network.POST, reducer: 'sis_imports_api'},

  // [Get SIS import status)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.show)
  // Api Url: /api/v1/accounts/:account_id/sis_imports/:id
  // return canvasRequest(CanvasConstants.SIS_IMPORTS_GET, {account_id:, id:}, query);
  SIS_IMPORTS_GET: { method: Network.GET, reducer: 'sis_imports_api'},

  // [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
  // Api Url: /api/sis/accounts/:account_id/assignments
  // return canvasRequest(CanvasConstants.SISIS_ASSIGNMENTS, {account_id:}, query);
  SISIS_ASSIGNMENTS: { method: Network.GET, reducer: 'sis_api'},

  // [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
  // Api Url: /api/sis/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.SISIS_ASSIGNMENTS_BY_COURSES_AND_COURSE, {course_id:}, query);
  SISIS_ASSIGNMENTS_BY_COURSES_AND_COURSE: { method: Network.GET, reducer: 'sis_api'},

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
  // Api Url: /api/v1/conversations/find_recipients
  // return canvasRequest(CanvasConstants.SEARCH_RECIPIENTS, {}, query);
  SEARCH_RECIPIENTS: { method: Network.GET, reducer: 'search'},

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
  // Api Url: /api/v1/search/recipients
  // return canvasRequest(CanvasConstants.SEARCH_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS, {}, query);
  SEARCH_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS: { method: Network.GET, reducer: 'search'},

  // [List all courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.all_courses)
  // Api Url: /api/v1/search/all_courses
  // return canvasRequest(CanvasConstants.SEARCH_ALL_COURSES, {}, query);
  SEARCH_ALL_COURSES: { method: Network.GET, reducer: 'search'},

  // [List course sections)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.index)
  // Api Url: /api/v1/courses/:course_id/sections
  // return canvasRequest(CanvasConstants.SECTIONS, {course_id:}, query);
  SECTIONS: { method: Network.GET, reducer: 'sections'},

  // [Create course section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.create)
  // Api Url: /api/v1/courses/:course_id/sections
  // return canvasRequest(CanvasConstants.SECTION_CREATE, {course_id:}, query);
  SECTION_CREATE: { method: Network.POST, reducer: 'sections'},

  // [Cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.crosslist)
  // Api Url: /api/v1/sections/:id/crosslist/:new_course_id
  // return canvasRequest(CanvasConstants.SECTION_CROSSLIST, {id:, new_course_id:}, query);
  SECTION_CROSSLIST: { method: Network.POST, reducer: 'sections'},

  // [De-cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.uncrosslist)
  // Api Url: /api/v1/sections/:id/crosslist
  // return canvasRequest(CanvasConstants.SECTION_UNCROSSLIST, {id:}, query);
  SECTION_UNCROSSLIST: { method: Network.DELETE, reducer: 'sections'},

  // [Edit a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.update)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_UPDATE, {id:}, query);
  SECTION_UPDATE: { method: Network.PUT, reducer: 'sections'},

  // [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
  // Api Url: /api/v1/courses/:course_id/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_GET, {course_id:, id:}, query);
  SECTION_GET: { method: Network.GET, reducer: 'sections'},

  // [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_GET, {id:}, query);
  SECTION_GET: { method: Network.GET, reducer: 'sections'},

  // [Delete a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.destroy)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_DELETE, {id:}, query);
  SECTION_DELETE: { method: Network.DELETE, reducer: 'sections'},

  // [Get Kaltura config)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.show_kaltura_config)
  // Api Url: /api/v1/services/kaltura
  // return canvasRequest(CanvasConstants.SERVICES_GET_KALTURA_CONFIG, {}, query);
  SERVICES_GET_KALTURA_CONFIG: { method: Network.GET, reducer: 'services_api'},

  // [Start Kaltura session)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.start_kaltura_session)
  // Api Url: /api/v1/services/kaltura_session
  // return canvasRequest(CanvasConstants.SERVICESTART_KALTURA_SESSION, {}, query);
  SERVICESTART_KALTURA_SESSION: { method: Network.POST, reducer: 'services_api'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submission_comments_api.create_file)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/comments/files
  // return canvasRequest(CanvasConstants.SUBMISSION_COMMENTS_CREATE_FILE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSION_COMMENTS_CREATE_FILE: { method: Network.POST, reducer: 'submission_comments_api'},

  // [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSION_CREATE, {course_id:, assignment_id:}, query);
  SUBMISSION_CREATE: { method: Network.POST, reducer: 'submissions'},

  // [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSION_CREATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  SUBMISSION_CREATE_BY_SECTIONS_AND_SECTION: { method: Network.POST, reducer: 'submissions'},

  // [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS, {course_id:, assignment_id:}, query);
  SUBMISSIONS: { method: Network.GET, reducer: 'submissions_api'},

  // [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  SUBMISSIONS_BY_SECTIONS_AND_SECTION: { method: Network.GET, reducer: 'submissions_api'},

  // [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
  // Api Url: /api/v1/courses/:course_id/students/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_FOR_STUDENTS, {course_id:}, query);
  SUBMISSIONS_FOR_STUDENTS: { method: Network.GET, reducer: 'submissions_api'},

  // [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
  // Api Url: /api/v1/sections/:section_id/students/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_FOR_STUDENTS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  SUBMISSIONS_FOR_STUDENTS_BY_SECTIONS_AND_SECTION: { method: Network.GET, reducer: 'submissions_api'},

  // [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GET, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_GET: { method: Network.GET, reducer: 'submissions_api'},

  // [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GET_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_GET_BY_SECTIONS_AND_SECTION: { method: Network.GET, reducer: 'submissions_api'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/files
  // return canvasRequest(CanvasConstants.SUBMISSIONS_CREATE_FILE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_CREATE_FILE: { method: Network.POST, reducer: 'submissions_api'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/files
  // return canvasRequest(CanvasConstants.SUBMISSIONS_CREATE_FILE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_CREATE_FILE_BY_SECTIONS_AND_SECTION: { method: Network.POST, reducer: 'submissions_api'},

  // [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_UPDATE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_UPDATE: { method: Network.PUT, reducer: 'submissions_api'},

  // [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_UPDATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_UPDATE_BY_SECTIONS_AND_SECTION: { method: Network.PUT, reducer: 'submissions_api'},

  // [List gradeable students)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.gradeable_students)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/gradeable_students
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GRADEABLE_STUDENTS, {course_id:, assignment_id:}, query);
  SUBMISSIONS_GRADEABLE_STUDENTS: { method: Network.GET, reducer: 'submissions_api'},

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/courses/:course_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE, {course_id:}, query);
  SUBMISSIONS_BULK_UPDATE: { method: Network.POST, reducer: 'submissions_api'},

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_ASSIGNMENTS_AND_ASSIGNMENT, {course_id:, assignment_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_ASSIGNMENTS_AND_ASSIGNMENT: { method: Network.POST, reducer: 'submissions_api'},

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/sections/:section_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION: { method: Network.POST, reducer: 'submissions_api'},

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT, {section_id:, assignment_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT: { method: Network.POST, reducer: 'submissions_api'},

  // [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_READ, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_READ: { method: Network.PUT, reducer: 'submissions_api'},

  // [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_READ_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_READ_BY_SECTIONS_AND_SECTION: { method: Network.PUT, reducer: 'submissions_api'},

  // [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_UNREAD, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_UNREAD: { method: Network.DELETE, reducer: 'submissions_api'},

  // [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_UNREAD_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_UNREAD_BY_SECTIONS_AND_SECTION: { method: Network.DELETE, reducer: 'submissions_api'},

  // [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
  // Api Url: /api/v1/courses/:course_id/tabs
  // return canvasRequest(CanvasConstants.TABS, {course_id:}, query);
  TABS: { method: Network.GET, reducer: 'tabs'},

  // [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
  // Api Url: /api/v1/groups/:group_id/tabs
  // return canvasRequest(CanvasConstants.TABS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  TABS_BY_GROUPS_AND_GROUP: { method: Network.GET, reducer: 'tabs'},

  // [Update a tab for a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.update)
  // Api Url: /api/v1/courses/:course_id/tabs/:tab_id
  // return canvasRequest(CanvasConstants.TAB_UPDATE, {course_id:, tab_id:}, query);
  TAB_UPDATE: { method: Network.PUT, reducer: 'tabs'},

  // [List observees)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.index)
  // Api Url: /api/v1/users/:user_id/observees
  // return canvasRequest(CanvasConstants.USER_OBSERVEES, {user_id:}, query);
  USER_OBSERVEES: { method: Network.GET, reducer: 'user_observees'},

  // [Add an observee with credentials)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.create)
  // Api Url: /api/v1/users/:user_id/observees
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_CREATE, {user_id:}, query);
  USER_OBSERVEE_CREATE: { method: Network.POST, reducer: 'user_observees'},

  // [Show an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.show)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_GET, {user_id:, observee_id:}, query);
  USER_OBSERVEE_GET: { method: Network.GET, reducer: 'user_observees'},

  // [Add an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.update)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_UPDATE, {user_id:, observee_id:}, query);
  USER_OBSERVEE_UPDATE: { method: Network.PUT, reducer: 'user_observees'},

  // [Remove an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.destroy)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_DELETE, {user_id:, observee_id:}, query);
  USER_OBSERVEE_DELETE: { method: Network.DELETE, reducer: 'user_observees'},

  // [List users in account)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.index)
  // Api Url: /api/v1/accounts/:account_id/users
  // return canvasRequest(CanvasConstants.USERS, {account_id:}, query);
  USERS: { method: Network.GET, reducer: 'users'},

  // [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
  // Api Url: /api/v1/users/self/activity_stream
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM, {}, query);
  USER_ACTIVITY_STREAM: { method: Network.GET, reducer: 'users'},

  // [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
  // Api Url: /api/v1/users/activity_stream
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM, {}, query);
  USER_ACTIVITY_STREAM: { method: Network.GET, reducer: 'users'},

  // [Activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream_summary)
  // Api Url: /api/v1/users/self/activity_stream/summary
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM_SUMMARY, {}, query);
  USER_ACTIVITY_STREAM_SUMMARY: { method: Network.GET, reducer: 'users'},

  // [List the TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.todo_items)
  // Api Url: /api/v1/users/self/todo
  // return canvasRequest(CanvasConstants.USER_TODO_ITEMS, {}, query);
  USER_TODO_ITEMS: { method: Network.GET, reducer: 'users'},

  // [List upcoming assignments, calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.upcoming_events)
  // Api Url: /api/v1/users/self/upcoming_events
  // return canvasRequest(CanvasConstants.USER_UPCOMING_EVENTS, {}, query);
  USER_UPCOMING_EVENTS: { method: Network.GET, reducer: 'users'},

  // [List Missing Submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.missing_submissions)
  // Api Url: /api/v1/users/:user_id/missing_submissions
  // return canvasRequest(CanvasConstants.USER_MISSING_SUBMISSIONS, {user_id:}, query);
  USER_MISSING_SUBMISSIONS: { method: Network.GET, reducer: 'users'},

  // [Hide a stream item)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_stream_item)
  // Api Url: /api/v1/users/self/activity_stream/:id
  // return canvasRequest(CanvasConstants.USER_IGNORE_STREAM_ITEM, {id:}, query);
  USER_IGNORE_STREAM_ITEM: { method: Network.DELETE, reducer: 'users'},

  // [Hide all stream items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_all_stream_items)
  // Api Url: /api/v1/users/self/activity_stream
  // return canvasRequest(CanvasConstants.USER_IGNORE_ALL_STREAM_ITEMS, {}, query);
  USER_IGNORE_ALL_STREAM_ITEMS: { method: Network.DELETE, reducer: 'users'},

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_file)
  // Api Url: /api/v1/users/:user_id/files
  // return canvasRequest(CanvasConstants.USER_CREATE_FILE, {user_id:}, query);
  USER_CREATE_FILE: { method: Network.POST, reducer: 'users'},

  // [Show user details)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.api_show)
  // Api Url: /api/v1/users/:id
  // return canvasRequest(CanvasConstants.USER_SHOW, {id:}, query);
  USER_SHOW: { method: Network.GET, reducer: 'users'},

  // [Create a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create)
  // Api Url: /api/v1/accounts/:account_id/users
  // return canvasRequest(CanvasConstants.USER_CREATE, {account_id:}, query);
  USER_CREATE: { method: Network.POST, reducer: 'users'},

  // [Self register a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_self_registered_user)
  // Api Url: /api/v1/accounts/:account_id/self_registration
  // return canvasRequest(CanvasConstants.USER_CREATE_SELF_REGISTERED_USER, {account_id:}, query);
  USER_CREATE_SELF_REGISTERED_USER: { method: Network.POST, reducer: 'users'},

  // [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
  // Api Url: /api/v1/users/:id/settings
  // return canvasRequest(CanvasConstants.USER_SETTINGS, {id:}, query);
  USER_SETTINGS: { method: Network.GET, reducer: 'users'},

  // [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
  // Api Url: /api/v1/users/:id/settings
  // return canvasRequest(CanvasConstants.USER_SETTINGS, {id:}, query);
  USER_SETTINGS: { method: Network.PUT, reducer: 'users'},

  // [Get custom colors)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_colors)
  // Api Url: /api/v1/users/:id/colors
  // return canvasRequest(CanvasConstants.USER_GET_CUSTOM_COLORS, {id:}, query);
  USER_GET_CUSTOM_COLORS: { method: Network.GET, reducer: 'users'},

  // [Get custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_color)
  // Api Url: /api/v1/users/:id/colors/:asset_string
  // return canvasRequest(CanvasConstants.USER_GET_CUSTOM_COLOR, {id:, asset_string:}, query);
  USER_GET_CUSTOM_COLOR: { method: Network.GET, reducer: 'users'},

  // [Update custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.set_custom_color)
  // Api Url: /api/v1/users/:id/colors/:asset_string
  // return canvasRequest(CanvasConstants.USER_SET_CUSTOM_COLOR, {id:, asset_string:}, query);
  USER_SET_CUSTOM_COLOR: { method: Network.PUT, reducer: 'users'},

  // [Edit a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.update)
  // Api Url: /api/v1/users/:id
  // return canvasRequest(CanvasConstants.USER_UPDATE, {id:}, query);
  USER_UPDATE: { method: Network.PUT, reducer: 'users'},

  // [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
  // Api Url: /api/v1/users/:id/merge_into/:destination_user_id
  // return canvasRequest(CanvasConstants.USER_MERGE_INTO, {id:, destination_user_id:}, query);
  USER_MERGE_INTO: { method: Network.PUT, reducer: 'users'},

  // [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
  // Api Url: /api/v1/users/:id/merge_into/accounts/:destination_account_id/users/:destination_user_id
  // return canvasRequest(CanvasConstants.USER_MERGE_INTO_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT, {id:, destination_account_id:, destination_user_id:}, query);
  USER_MERGE_INTO_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT: { method: Network.PUT, reducer: 'users'},

  // [Get user profile)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.settings)
  // Api Url: /api/v1/users/:user_id/profile
  // return canvasRequest(CanvasConstants.PROFILE_SETTINGS, {user_id:}, query);
  PROFILE_SETTINGS: { method: Network.GET, reducer: 'profile'},

  // [List avatar options)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.profile_pics)
  // Api Url: /api/v1/users/:user_id/avatars
  // return canvasRequest(CanvasConstants.PROFILE_PROFILE_PICS, {user_id:}, query);
  PROFILE_PROFILE_PICS: { method: Network.GET, reducer: 'profile'},

  // [List user page views)](https://canvas.instructure.com/doc/api/all_resources.html#method.page_views.index)
  // Api Url: /api/v1/users/:user_id/page_views
  // return canvasRequest(CanvasConstants.PAGE_VIEWS, {user_id:}, query);
  PAGE_VIEWS: { method: Network.GET, reducer: 'page_views'},

  // [Store custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.set_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_SET_DATA, {user_id:}, query);
  CUSTOM_DATA_SET_DATA: { method: Network.PUT, reducer: 'custom_data'},

  // [Load custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.get_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_GET_DATA, {user_id:}, query);
  CUSTOM_DATA_GET_DATA: { method: Network.GET, reducer: 'custom_data'},

  // [Delete custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.delete_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_DELETE_DATA, {user_id:}, query);
  CUSTOM_DATA_DELETE_DATA: { method: Network.DELETE, reducer: 'custom_data'},

  // [List course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.index)
  // Api Url: /api/v1/users/self/course_nicknames
  // return canvasRequest(CanvasConstants.COURSE_NICKNAMES, {}, query);
  COURSE_NICKNAMES: { method: Network.GET, reducer: 'course_nicknames'},

  // [Get course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.show)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_GET, {course_id:}, query);
  COURSE_NICKNAME_GET: { method: Network.GET, reducer: 'course_nicknames'},

  // [Set course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.update)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_UPDATE, {course_id:}, query);
  COURSE_NICKNAME_UPDATE: { method: Network.PUT, reducer: 'course_nicknames'},

  // [Remove course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.delete)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_DELETE, {course_id:}, query);
  COURSE_NICKNAME_DELETE: { method: Network.DELETE, reducer: 'course_nicknames'},

  // [Clear course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.clear)
  // Api Url: /api/v1/users/self/course_nicknames
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_CLEAR, {}, query);
  COURSE_NICKNAME_CLEAR: { method: Network.DELETE, reducer: 'course_nicknames'},

  // [Show ePub export)](https://canvas.instructure.com/doc/api/all_resources.html#method.epub_exports.show)
  // Api Url: /api/v1/courses/:course_id/epub_exports/:id
  // return canvasRequest(CanvasConstants.EPUB_EXPORT_GET, {course_id:, id:}, query);
  EPUB_EXPORT_GET: { method: Network.GET, reducer: 'epub_exports'},


};

const requests = _.map(CanvasMethods, (v, k) => {
  return k;
});

const CanvasConstants = wrapper([], requests);

export { CanvasMethods };
export { CanvasConstants };
