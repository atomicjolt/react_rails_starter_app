
import wrapper             from "./wrapper";
import _                   from "lodash";

const CanvasMethods = {
  // [Search account domains)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_domain_lookups.search)
  // Api Url: /api/v1/accounts/search
  // return canvasRequest(CanvasConstants.SEARCH_ACCOUNT_DOMAINS, {}, query);
  SEARCH_ACCOUNT_DOMAINS: Network.GET,

  // [Index of active global notification for the user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_index)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_USER_INDEX, {account_id:, user_id:}, query);
  ACCOUNT_NOTIFICATION_USER_INDEX: Network.GET,

  // [Close notification for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.user_close_notification)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id/account_notifications/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_USER_CLOSE_NOTIFICATION, {account_id:, user_id:, id:}, query);
  ACCOUNT_NOTIFICATION_USER_CLOSE_NOTIFICATION: Network.DELETE,

  // [Create a global notification)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_notifications.create)
  // Api Url: /api/v1/accounts/:account_id/account_notifications
  // return canvasRequest(CanvasConstants.ACCOUNT_NOTIFICATION_CREATE, {account_id:}, query);
  ACCOUNT_NOTIFICATION_CREATE: Network.POST,

  // [List Available Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.available_reports)
  // Api Url: /api/v1/accounts/:account_id/reports
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_AVAILABLE_REPORTS, {account_id:}, query);
  ACCOUNT_REPORT_AVAILABLE_REPORTS: Network.GET,

  // [Start a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.create)
  // Api Url: /api/v1/accounts/:account_id/reports/:report
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_CREATE, {account_id:, report:}, query);
  ACCOUNT_REPORT_CREATE: Network.POST,

  // [Index of Reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.index)
  // Api Url: /api/v1/accounts/:account_id/reports/:report
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORTS, {account_id:, report:}, query);
  ACCOUNT_REPORTS: Network.GET,

  // [Status of a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.show)
  // Api Url: /api/v1/accounts/:account_id/reports/:report/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_GET, {account_id:, report:, id:}, query);
  ACCOUNT_REPORT_GET: Network.GET,

  // [Delete a Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_reports.destroy)
  // Api Url: /api/v1/accounts/:account_id/reports/:report/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_REPORT_DELETE, {account_id:, report:, id:}, query);
  ACCOUNT_REPORT_DELETE: Network.DELETE,

  // [List accounts)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.index)
  // Api Url: /api/v1/accounts
  // return canvasRequest(CanvasConstants.ACCOUNTS, {}, query);
  ACCOUNTS: Network.GET,

  // [List accounts for course admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.course_accounts)
  // Api Url: /api/v1/course_accounts
  // return canvasRequest(CanvasConstants.ACCOUNT_COURSE_ACCOUNTS, {}, query);
  ACCOUNT_COURSE_ACCOUNTS: Network.GET,

  // [Get a single account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.show)
  // Api Url: /api/v1/accounts/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_GET, {id:}, query);
  ACCOUNT_GET: Network.GET,

  // [Get the sub-accounts of an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.sub_accounts)
  // Api Url: /api/v1/accounts/:account_id/sub_accounts
  // return canvasRequest(CanvasConstants.ACCOUNT_SUB_ACCOUNTS, {account_id:}, query);
  ACCOUNT_SUB_ACCOUNTS: Network.GET,

  // [List active courses in an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.courses_api)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.ACCOUNT_COURSES, {account_id:}, query);
  ACCOUNT_COURSES: Network.GET,

  // [Update an account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.update)
  // Api Url: /api/v1/accounts/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_UPDATE, {id:}, query);
  ACCOUNT_UPDATE: Network.PUT,

  // [Delete a user from the root account)](https://canvas.instructure.com/doc/api/all_resources.html#method.accounts.remove_user)
  // Api Url: /api/v1/accounts/:account_id/users/:user_id
  // return canvasRequest(CanvasConstants.ACCOUNT_REMOVE_USER, {account_id:, user_id:}, query);
  ACCOUNT_REMOVE_USER: Network.DELETE,

  // [Create a new sub-account)](https://canvas.instructure.com/doc/api/all_resources.html#method.sub_accounts.create)
  // Api Url: /api/v1/accounts/:account_id/sub_accounts
  // return canvasRequest(CanvasConstants.SUB_ACCOUNT_CREATE, {account_id:}, query);
  SUB_ACCOUNT_CREATE: Network.POST,

  // [Make an account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.create)
  // Api Url: /api/v1/accounts/:account_id/admins
  // return canvasRequest(CanvasConstants.ADMIN_CREATE, {account_id:}, query);
  ADMIN_CREATE: Network.POST,

  // [Remove account admin)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.destroy)
  // Api Url: /api/v1/accounts/:account_id/admins/:user_id
  // return canvasRequest(CanvasConstants.ADMIN_DELETE, {account_id:, user_id:}, query);
  ADMIN_DELETE: Network.DELETE,

  // [List account admins)](https://canvas.instructure.com/doc/api/all_resources.html#method.admins.index)
  // Api Url: /api/v1/accounts/:account_id/admins
  // return canvasRequest(CanvasConstants.ADMINS, {account_id:}, query);
  ADMINS: Network.GET,

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA: Network.GET,

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_CURRENT: Network.GET,

  // [Get department-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_participation)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/activity
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_PARTICIPATION_DATA_BY_COMPLETED: Network.GET,

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA: Network.GET,

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_CURRENT: Network.GET,

  // [Get department-level grade data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_grades)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/grades
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_GRADE_DATA_BY_COMPLETED: Network.GET,

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/terms/:term_id/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS, {account_id:, term_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS: Network.GET,

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/current/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS_BY_CURRENT: Network.GET,

  // [Get department-level statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.department_statistics)
  // Api Url: /api/v1/accounts/:account_id/analytics/completed/statistics
  // return canvasRequest(CanvasConstants.GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED, {account_id:}, query);
  GET_DEPARTMENT_LEVEL_STATISTICS_BY_COMPLETED: Network.GET,

  // [Get course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_participation)
  // Api Url: /api/v1/courses/:course_id/analytics/activity
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_PARTICIPATION_DATA: Network.GET,

  // [Get course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_assignments)
  // Api Url: /api/v1/courses/:course_id/analytics/assignments
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_ASSIGNMENT_DATA: Network.GET,

  // [Get course-level student summary data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.course_student_summaries)
  // Api Url: /api/v1/courses/:course_id/analytics/student_summaries
  // return canvasRequest(CanvasConstants.GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA, {course_id:}, query);
  GET_COURSE_LEVEL_STUDENT_SUMMARY_DATA: Network.GET,

  // [Get user-in-a-course-level participation data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_participation)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/activity
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_PARTICIPATION_DATA: Network.GET,

  // [Get user-in-a-course-level assignment data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_assignments)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/assignments
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_ASSIGNMENT_DATA: Network.GET,

  // [Get user-in-a-course-level messaging data)](https://canvas.instructure.com/doc/api/all_resources.html#method.analytics_api.student_in_course_messaging)
  // Api Url: /api/v1/courses/:course_id/analytics/users/:student_id/communication
  // return canvasRequest(CanvasConstants.GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA, {course_id:, student_id:}, query);
  GET_USER_IN_A_COURSE_LEVEL_MESSAGING_DATA: Network.GET,

  // [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // Api Url: /api/v1/courses/:course_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEEDS, {course_id:}, query);
  EXTERNAL_FEEDS: Network.GET,

  // [List external feeds)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.index)
  // Api Url: /api/v1/groups/:group_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  EXTERNAL_FEEDS_BY_GROUPS_AND_GROUP: Network.GET,

  // [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
  // Api Url: /api/v1/courses/:course_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_CREATE, {course_id:}, query);
  EXTERNAL_FEED_CREATE: Network.POST,

  // [Create an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.create)
  // Api Url: /api/v1/groups/:group_id/external_feeds
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  EXTERNAL_FEED_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // Api Url: /api/v1/courses/:course_id/external_feeds/:external_feed_id
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_DELETE, {course_id:, external_feed_id:}, query);
  EXTERNAL_FEED_DELETE: Network.DELETE,

  // [Delete an external feed)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_feeds.destroy)
  // Api Url: /api/v1/groups/:group_id/external_feeds/:external_feed_id
  // return canvasRequest(CanvasConstants.EXTERNAL_FEED_DELETE_BY_GROUPS_AND_GROUP, {group_id:, external_feed_id:}, query);
  EXTERNAL_FEED_DELETE_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [List appointment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.index)
  // Api Url: /api/v1/appointment_groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUPS, {}, query);
  APPOINTMENT_GROUPS: Network.GET,

  // [Create an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.create)
  // Api Url: /api/v1/appointment_groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_CREATE, {}, query);
  APPOINTMENT_GROUP_CREATE: Network.POST,

  // [Get a single appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.show)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_GET, {id:}, query);
  APPOINTMENT_GROUP_GET: Network.GET,

  // [Update an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.update)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_UPDATE, {id:}, query);
  APPOINTMENT_GROUP_UPDATE: Network.PUT,

  // [Delete an appointment group)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.destroy)
  // Api Url: /api/v1/appointment_groups/:id
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_DELETE, {id:}, query);
  APPOINTMENT_GROUP_DELETE: Network.DELETE,

  // [List user participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.users)
  // Api Url: /api/v1/appointment_groups/:id/users
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_USERS, {id:}, query);
  APPOINTMENT_GROUP_USERS: Network.GET,

  // [List student group participants)](https://canvas.instructure.com/doc/api/all_resources.html#method.appointment_groups.groups)
  // Api Url: /api/v1/appointment_groups/:id/groups
  // return canvasRequest(CanvasConstants.APPOINTMENT_GROUP_GROUPS, {id:}, query);
  APPOINTMENT_GROUP_GROUPS: Network.GET,

  // [List assignment groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups.index)
  // Api Url: /api/v1/courses/:course_id/assignment_groups
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS, {course_id:}, query);
  ASSIGNMENT_GROUPS: Network.GET,

  // [Get an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.show)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_GET, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_GET: Network.GET,

  // [Create an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.create)
  // Api Url: /api/v1/courses/:course_id/assignment_groups
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_CREATE, {course_id:}, query);
  ASSIGNMENT_GROUPS_CREATE: Network.POST,

  // [Edit an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.update)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_UPDATE, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_UPDATE: Network.PUT,

  // [Destroy an Assignment Group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_groups_api.destroy)
  // Api Url: /api/v1/courses/:course_id/assignment_groups/:assignment_group_id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_GROUPS_DELETE, {course_id:, assignment_group_id:}, query);
  ASSIGNMENT_GROUPS_DELETE: Network.DELETE,

  // [Delete an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_DELETE, {course_id:, id:}, query);
  ASSIGNMENT_DELETE: Network.DELETE,

  // [List assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_S, {course_id:}, query);
  ASSIGNMENTS_S: Network.GET,

  // [List assignments for user)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.user_index)
  // Api Url: /api/v1/users/:user_id/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_USER_INDEX, {user_id:, course_id:}, query);
  ASSIGNMENTS_USER_INDEX: Network.GET,

  // [Get a single assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_GET, {course_id:, id:}, query);
  ASSIGNMENTS_GET: Network.GET,

  // [Create an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.create)
  // Api Url: /api/v1/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_CREATE, {course_id:}, query);
  ASSIGNMENTS_CREATE: Network.POST,

  // [Edit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignments_api.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENTS_UPDATE, {course_id:, id:}, query);
  ASSIGNMENTS_UPDATE: Network.PUT,

  // [List assignment overrides)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDES, {course_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDES: Network.GET,

  // [Get a single assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_GET, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_GET: Network.GET,

  // [Redirect to the assignment override for a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.group_alias)
  // Api Url: /api/v1/groups/:group_id/assignments/:assignment_id/override
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_GROUP_ALIAS, {group_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_GROUP_ALIAS: Network.GET,

  // [Redirect to the assignment override for a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.section_alias)
  // Api Url: /api/v1/sections/:course_section_id/assignments/:assignment_id/override
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_SECTION_ALIAS, {course_section_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_SECTION_ALIAS: Network.GET,

  // [Create an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_CREATE, {course_id:, assignment_id:}, query);
  ASSIGNMENT_OVERRIDE_CREATE: Network.POST,

  // [Update an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_UPDATE, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_UPDATE: Network.PUT,

  // [Delete an assignment override)](https://canvas.instructure.com/doc/api/all_resources.html#method.assignment_overrides.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/overrides/:id
  // return canvasRequest(CanvasConstants.ASSIGNMENT_OVERRIDE_DELETE, {course_id:, assignment_id:, id:}, query);
  ASSIGNMENT_OVERRIDE_DELETE: Network.DELETE,

  // [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIGS: Network.GET,

  // [List authentication providers)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.index)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIGS_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIGS_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.GET,

  // [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_CREATE, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_CREATE: Network.POST,

  // [Add authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.create)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_CREATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_CREATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.POST,

  // [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE: Network.PUT,

  // [Update authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.PUT,

  // [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET: Network.GET,

  // [Get authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.GET,

  // [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
  // Api Url: /api/v1/accounts/:account_id/authentication_providers/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE: Network.DELETE,

  // [Delete authentication provider)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/:id
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE_BY_ACCOUNT_AUTHORIZATION_CONFIGS, {account_id:, id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE_BY_ACCOUNT_AUTHORIZATION_CONFIGS: Network.DELETE,

  // [GET discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_DISCOVERY_URL: Network.GET,

  // [Set discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_DISCOVERY_URL: Network.PUT,

  // [Delete discovery url _Deprecated_[2015-05-08])](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.destroy_discovery_url)
  // Api Url: /api/v1/accounts/:account_id/account_authorization_configs/discovery_url
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_DELETE_DISCOVERY_URL, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_DELETE_DISCOVERY_URL: Network.DELETE,

  // [show account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.show_sso_settings)
  // Api Url: /api/v1/accounts/:account_id/sso_settings
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_GET_SSO_SETTINGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_GET_SSO_SETTINGS: Network.GET,

  // [update account auth settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.account_authorization_configs.update_sso_settings)
  // Api Url: /api/v1/accounts/:account_id/sso_settings
  // return canvasRequest(CanvasConstants.ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_SSO_SETTINGS, {account_id:}, query);
  ACCOUNT_AUTHORIZATION_CONFIG_UPDATE_SSO_SETTINGS: Network.PUT,

  // [Query by login.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_login)
  // Api Url: /api/v1/audit/authentication/logins/:login_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_LOGIN, {login_id:}, query);
  AUTHENTICATION_AUDIT_FOR_LOGIN: Network.GET,

  // [Query by account.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_account)
  // Api Url: /api/v1/audit/authentication/accounts/:account_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_ACCOUNT, {account_id:}, query);
  AUTHENTICATION_AUDIT_FOR_ACCOUNT: Network.GET,

  // [Query by user.)](https://canvas.instructure.com/doc/api/all_resources.html#method.authentication_audit_api.for_user)
  // Api Url: /api/v1/audit/authentication/users/:user_id
  // return canvasRequest(CanvasConstants.AUTHENTICATION_AUDIT_FOR_USER, {user_id:}, query);
  AUTHENTICATION_AUDIT_FOR_USER: Network.GET,

  // [List bookmarks)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.index)
  // Api Url: /api/v1/users/self/bookmarks(/.json)(.:format)
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARKS, {}, query);
  BOOKMARKS_BOOKMARKS: Network.GET,

  // [Create bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.create)
  // Api Url: /api/v1/users/self/bookmarks
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_CREATE, {}, query);
  BOOKMARKS_BOOKMARK_CREATE: Network.POST,

  // [Get bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.show)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_GET, {id:}, query);
  BOOKMARKS_BOOKMARK_GET: Network.GET,

  // [Update bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.update)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_UPDATE, {id:}, query);
  BOOKMARKS_BOOKMARK_UPDATE: Network.PUT,

  // [Delete bookmark)](https://canvas.instructure.com/doc/api/all_resources.html#method.bookmarks/bookmarks.destroy)
  // Api Url: /api/v1/users/self/bookmarks/:id
  // return canvasRequest(CanvasConstants.BOOKMARKS_BOOKMARK_DELETE, {id:}, query);
  BOOKMARKS_BOOKMARK_DELETE: Network.DELETE,

  // [List calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.index)
  // Api Url: /api/v1/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_S, {}, query);
  CALENDAR_EVENTS_S: Network.GET,

  // [List calendar events for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.user_index)
  // Api Url: /api/v1/users/:user_id/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_USER_INDEX, {user_id:}, query);
  CALENDAR_EVENTS_USER_INDEX: Network.GET,

  // [Create a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.create)
  // Api Url: /api/v1/calendar_events
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_CREATE, {}, query);
  CALENDAR_EVENTS_CREATE: Network.POST,

  // [Get a single calendar event or assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.show)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_GET, {id:}, query);
  CALENDAR_EVENTS_GET: Network.GET,

  // [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
  // Api Url: /api/v1/calendar_events/:id/reservations
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_RESERVE, {id:}, query);
  CALENDAR_EVENTS_RESERVE: Network.POST,

  // [Reserve a time slot)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.reserve)
  // Api Url: /api/v1/calendar_events/:id/reservations/:participant_id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_RESERVE_BY_PARTICIPANT, {id:, participant_id:}, query);
  CALENDAR_EVENTS_RESERVE_BY_PARTICIPANT: Network.POST,

  // [Update a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.update)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_UPDATE, {id:}, query);
  CALENDAR_EVENTS_UPDATE: Network.PUT,

  // [Delete a calendar event)](https://canvas.instructure.com/doc/api/all_resources.html#method.calendar_events_api.destroy)
  // Api Url: /api/v1/calendar_events/:id
  // return canvasRequest(CanvasConstants.CALENDAR_EVENTS_DELETE, {id:}, query);
  CALENDAR_EVENTS_DELETE: Network.DELETE,

  // [List members of a collaboration.)](https://canvas.instructure.com/doc/api/all_resources.html#method.collaborations.members)
  // Api Url: /api/v1/collaborations/:id/members
  // return canvasRequest(CanvasConstants.COLLABORATION_MEMBERS, {id:}, query);
  COLLABORATION_MEMBERS: Network.GET,

  // [List of CommMessages for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.comm_messages_api.index)
  // Api Url: /api/v1/comm_messages
  // return canvasRequest(CanvasConstants.COMM_MESSAGES_S, {}, query);
  COMM_MESSAGES_S: Network.GET,

  // [List user communication channels)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.index)
  // Api Url: /api/v1/users/:user_id/communication_channels
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNELS, {user_id:}, query);
  COMMUNICATION_CHANNELS: Network.GET,

  // [Create a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.create)
  // Api Url: /api/v1/users/:user_id/communication_channels
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_CREATE, {user_id:}, query);
  COMMUNICATION_CHANNEL_CREATE: Network.POST,

  // [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
  // Api Url: /api/v1/users/:user_id/communication_channels/:id
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_DELETE, {user_id:, id:}, query);
  COMMUNICATION_CHANNEL_DELETE: Network.DELETE,

  // [Delete a communication channel)](https://canvas.instructure.com/doc/api/all_resources.html#method.communication_channels.destroy)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address
  // return canvasRequest(CanvasConstants.COMMUNICATION_CHANNEL_DELETE_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
  COMMUNICATION_CHANNEL_DELETE_BY_TYPE_AND_ADDRESS: Network.DELETE,

  // [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
  // Api Url: /api/v1/courses/:course_id/conferences
  // return canvasRequest(CanvasConstants.CONFERENCES, {course_id:}, query);
  CONFERENCES: Network.GET,

  // [List conferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.conferences.index)
  // Api Url: /api/v1/groups/:group_id/conferences
  // return canvasRequest(CanvasConstants.CONFERENCES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONFERENCES_BY_GROUPS_AND_GROUP: Network.GET,

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/courses/:course_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_S, {course_id:}, query);
  CONTENT_EXPORTS_S: Network.GET,

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/groups/:group_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_S_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_EXPORTS_S_BY_GROUPS_AND_GROUP: Network.GET,

  // [List content exports)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.index)
  // Api Url: /api/v1/users/:user_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_S_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_EXPORTS_S_BY_USERS_AND_USER: Network.GET,

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/courses/:course_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET, {course_id:, id:}, query);
  CONTENT_EXPORTS_GET: Network.GET,

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/groups/:group_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_EXPORTS_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Show content export)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.show)
  // Api Url: /api/v1/users/:user_id/content_exports/:id
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_EXPORTS_GET_BY_USERS_AND_USER: Network.GET,

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/courses/:course_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE, {course_id:}, query);
  CONTENT_EXPORTS_CREATE: Network.POST,

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/groups/:group_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_EXPORTS_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Export content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_exports_api.create)
  // Api Url: /api/v1/users/:user_id/content_exports
  // return canvasRequest(CanvasConstants.CONTENT_EXPORTS_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_EXPORTS_CREATE_BY_USERS_AND_USER: Network.POST,

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES, {account_id:, content_migration_id:}, query);
  MIGRATION_ISSUES: Network.GET,

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_COURSES_AND_COURSE: Network.GET,

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_GROUPS_AND_GROUP: Network.GET,

  // [List migration issues)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.index)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUES_BY_USERS_AND_USER, {user_id:, content_migration_id:}, query);
  MIGRATION_ISSUES_BY_USERS_AND_USER: Network.GET,

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET, {account_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET: Network.GET,

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_COURSES_AND_COURSE: Network.GET,

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.show)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_GET_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_GET_BY_USERS_AND_USER: Network.GET,

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE, {account_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE: Network.PUT,

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_COURSES_AND_COURSE, {course_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_COURSES_AND_COURSE: Network.PUT,

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Update a migration issue)](https://canvas.instructure.com/doc/api/all_resources.html#method.migration_issues.update)
  // Api Url: /api/v1/users/:user_id/content_migrations/:content_migration_id/migration_issues/:id
  // return canvasRequest(CanvasConstants.MIGRATION_ISSUE_UPDATE_BY_USERS_AND_USER, {user_id:, content_migration_id:, id:}, query);
  MIGRATION_ISSUE_UPDATE_BY_USERS_AND_USER: Network.PUT,

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/accounts/:account_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS, {account_id:}, query);
  CONTENT_MIGRATIONS: Network.GET,

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/courses/:course_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATIONS_BY_COURSES_AND_COURSE: Network.GET,

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/groups/:group_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATIONS_BY_GROUPS_AND_GROUP: Network.GET,

  // [List content migrations)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.index)
  // Api Url: /api/v1/users/:user_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATIONS_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATIONS_BY_USERS_AND_USER: Network.GET,

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET, {account_id:, id:}, query);
  CONTENT_MIGRATION_GET: Network.GET,

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_COURSES_AND_COURSE: Network.GET,

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.show)
  // Api Url: /api/v1/users/:user_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_MIGRATION_GET_BY_USERS_AND_USER: Network.GET,

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/accounts/:account_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE, {account_id:}, query);
  CONTENT_MIGRATION_CREATE: Network.POST,

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/courses/:course_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_COURSES_AND_COURSE: Network.POST,

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/groups/:group_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Create a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.create)
  // Api Url: /api/v1/users/:user_id/content_migrations
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATION_CREATE_BY_USERS_AND_USER: Network.POST,

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE, {account_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE: Network.PUT,

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/courses/:course_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_COURSES_AND_COURSE: Network.PUT,

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/groups/:group_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Update a content migration)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.update)
  // Api Url: /api/v1/users/:user_id/content_migrations/:id
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_UPDATE_BY_USERS_AND_USER, {user_id:, id:}, query);
  CONTENT_MIGRATION_UPDATE_BY_USERS_AND_USER: Network.PUT,

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/accounts/:account_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS, {account_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS: Network.GET,

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/courses/:course_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_COURSES_AND_COURSE, {course_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_COURSES_AND_COURSE: Network.GET,

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/groups/:group_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_GROUPS_AND_GROUP: Network.GET,

  // [List Migration Systems)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_migrations.available_migrators)
  // Api Url: /api/v1/users/:user_id/content_migrations/migrators
  // return canvasRequest(CanvasConstants.CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_USERS_AND_USER, {user_id:}, query);
  CONTENT_MIGRATION_AVAILABLE_MIGRATORS_BY_USERS_AND_USER: Network.GET,

  // [List conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.index)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATIONS, {}, query);
  CONVERSATIONS: Network.GET,

  // [Create a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.create)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATION_CREATE, {}, query);
  CONVERSATION_CREATE: Network.POST,

  // [Get running batches)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batches)
  // Api Url: /api/v1/conversations/batches
  // return canvasRequest(CanvasConstants.CONVERSATION_BATCHES, {}, query);
  CONVERSATION_BATCHES: Network.GET,

  // [Get a single conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.show)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_GET, {id:}, query);
  CONVERSATION_GET: Network.GET,

  // [Edit a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.update)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_UPDATE, {id:}, query);
  CONVERSATION_UPDATE: Network.PUT,

  // [Mark all as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.mark_all_as_read)
  // Api Url: /api/v1/conversations/mark_all_as_read
  // return canvasRequest(CanvasConstants.CONVERSATION_MARK_ALL_AS_READ, {}, query);
  CONVERSATION_MARK_ALL_AS_READ: Network.POST,

  // [Delete a conversation)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.destroy)
  // Api Url: /api/v1/conversations/:id
  // return canvasRequest(CanvasConstants.CONVERSATION_DELETE, {id:}, query);
  CONVERSATION_DELETE: Network.DELETE,

  // [Add recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_recipients)
  // Api Url: /api/v1/conversations/:id/add_recipients
  // return canvasRequest(CanvasConstants.CONVERSATION_ADD_RECIPIENTS, {id:}, query);
  CONVERSATION_ADD_RECIPIENTS: Network.POST,

  // [Add a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.add_message)
  // Api Url: /api/v1/conversations/:id/add_message
  // return canvasRequest(CanvasConstants.CONVERSATION_ADD_MESSAGE, {id:}, query);
  CONVERSATION_ADD_MESSAGE: Network.POST,

  // [Delete a message)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.remove_messages)
  // Api Url: /api/v1/conversations/:id/remove_messages
  // return canvasRequest(CanvasConstants.CONVERSATION_REMOVE_MESSAGES, {id:}, query);
  CONVERSATION_REMOVE_MESSAGES: Network.POST,

  // [Batch update conversations)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.batch_update)
  // Api Url: /api/v1/conversations
  // return canvasRequest(CanvasConstants.CONVERSATION_BATCH_UPDATE, {}, query);
  CONVERSATION_BATCH_UPDATE: Network.PUT,

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.find_recipients)
  // Api Url: /api/v1/conversations/find_recipients
  // return canvasRequest(CanvasConstants.CONVERSATION_FIND_RECIPIENTS, {}, query);
  CONVERSATION_FIND_RECIPIENTS: Network.GET,

  // [Unread count)](https://canvas.instructure.com/doc/api/all_resources.html#method.conversations.unread_count)
  // Api Url: /api/v1/conversations/unread_count
  // return canvasRequest(CanvasConstants.CONVERSATION_UNREAD_COUNT, {}, query);
  CONVERSATION_UNREAD_COUNT: Network.GET,

  // [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_audit_api.for_course)
  // Api Url: /api/v1/audit/course/courses/:course_id
  // return canvasRequest(CanvasConstants.COURSE_AUDIT_FOR_COURSE, {course_id:}, query);
  COURSE_AUDIT_FOR_COURSE: Network.GET,

  // [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/course_quiz_extensions.create)
  // Api Url: /api/v1/courses/:course_id/quiz_extensions
  // return canvasRequest(CanvasConstants.QUIZZES_COURSE_QUIZ_EXTENSION_CREATE, {course_id:}, query);
  QUIZZES_COURSE_QUIZ_EXTENSION_CREATE: Network.POST,

  // [List your courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.index)
  // Api Url: /api/v1/courses
  // return canvasRequest(CanvasConstants.COURSES, {}, query);
  COURSES: Network.GET,

  // [List courses for a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user_index)
  // Api Url: /api/v1/users/:user_id/courses
  // return canvasRequest(CanvasConstants.COURSE_USER_INDEX, {user_id:}, query);
  COURSE_USER_INDEX: Network.GET,

  // [Create a new course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.COURSE_CREATE, {account_id:}, query);
  COURSE_CREATE: Network.POST,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.create_file)
  // Api Url: /api/v1/courses/:course_id/files
  // return canvasRequest(CanvasConstants.COURSE_CREATE_FILE, {course_id:}, query);
  COURSE_CREATE_FILE: Network.POST,

  // [List students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.students)
  // Api Url: /api/v1/courses/:course_id/students
  // return canvasRequest(CanvasConstants.COURSE_STUDENTS, {course_id:}, query);
  COURSE_STUDENTS: Network.GET,

  // [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  // Api Url: /api/v1/courses/:course_id/users
  // return canvasRequest(CanvasConstants.COURSE_USERS, {course_id:}, query);
  COURSE_USERS: Network.GET,

  // [List users in course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.users)
  // Api Url: /api/v1/courses/:course_id/search_users
  // return canvasRequest(CanvasConstants.COURSE_USERS_BY_SEARCH_USERS, {course_id:}, query);
  COURSE_USERS_BY_SEARCH_USERS: Network.GET,

  // [List recently logged in students)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.recent_students)
  // Api Url: /api/v1/courses/:course_id/recent_students
  // return canvasRequest(CanvasConstants.COURSE_RECENT_STUDENTS, {course_id:}, query);
  COURSE_RECENT_STUDENTS: Network.GET,

  // [Get single user)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.user)
  // Api Url: /api/v1/courses/:course_id/users/:id
  // return canvasRequest(CanvasConstants.COURSE_USER, {course_id:, id:}, query);
  COURSE_USER: Network.GET,

  // [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.preview_html)
  // Api Url: /api/v1/courses/:course_id/preview_html
  // return canvasRequest(CanvasConstants.COURSE_PREVIEW_HTML, {course_id:}, query);
  COURSE_PREVIEW_HTML: Network.POST,

  // [Course activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream)
  // Api Url: /api/v1/courses/:course_id/activity_stream
  // return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM, {course_id:}, query);
  COURSE_ACTIVITY_STREAM: Network.GET,

  // [Course activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.activity_stream_summary)
  // Api Url: /api/v1/courses/:course_id/activity_stream/summary
  // return canvasRequest(CanvasConstants.COURSE_ACTIVITY_STREAM_SUMMARY, {course_id:}, query);
  COURSE_ACTIVITY_STREAM_SUMMARY: Network.GET,

  // [Course TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.todo_items)
  // Api Url: /api/v1/courses/:course_id/todo
  // return canvasRequest(CanvasConstants.COURSE_TODO_ITEMS, {course_id:}, query);
  COURSE_TODO_ITEMS: Network.GET,

  // [Conclude a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.destroy)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_DELETE, {id:}, query);
  COURSE_DELETE: Network.DELETE,

  // [Get course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.settings)
  // Api Url: /api/v1/courses/:course_id/settings
  // return canvasRequest(CanvasConstants.COURSE_SETTINGS, {course_id:}, query);
  COURSE_SETTINGS: Network.GET,

  // [Update course settings)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update_settings)
  // Api Url: /api/v1/courses/:course_id/settings
  // return canvasRequest(CanvasConstants.COURSE_UPDATE_SETTINGS, {course_id:}, query);
  COURSE_UPDATE_SETTINGS: Network.PUT,

  // [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_GET, {id:}, query);
  COURSE_GET: Network.GET,

  // [Get a single course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.show)
  // Api Url: /api/v1/accounts/:account_id/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  COURSE_GET_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Update a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.update)
  // Api Url: /api/v1/courses/:id
  // return canvasRequest(CanvasConstants.COURSE_UPDATE, {id:}, query);
  COURSE_UPDATE: Network.PUT,

  // [Update courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.batch_update)
  // Api Url: /api/v1/accounts/:account_id/courses
  // return canvasRequest(CanvasConstants.COURSE_BATCH_UPDATE, {account_id:}, query);
  COURSE_BATCH_UPDATE: Network.PUT,

  // [Reset a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.courses.reset_content)
  // Api Url: /api/v1/courses/:course_id/reset_content
  // return canvasRequest(CanvasConstants.COURSE_RESET_CONTENT, {course_id:}, query);
  COURSE_RESET_CONTENT: Network.POST,

  // [Get course copy status)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_status)
  // Api Url: /api/v1/courses/:course_id/course_copy/:id
  // return canvasRequest(CanvasConstants.CONTENT_IMPORT_COPY_COURSE_STATUS, {course_id:, id:}, query);
  CONTENT_IMPORT_COPY_COURSE_STATUS: Network.GET,

  // [Copy course content)](https://canvas.instructure.com/doc/api/all_resources.html#method.content_imports.copy_course_content)
  // Api Url: /api/v1/courses/:course_id/course_copy
  // return canvasRequest(CanvasConstants.CONTENT_IMPORT_COPY_COURSE_CONTENT, {course_id:}, query);
  CONTENT_IMPORT_COPY_COURSE_CONTENT: Network.POST,

  // [List custom gradebook columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.index)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_S, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_S: Network.GET,

  // [Create a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.create)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_CREATE, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_CREATE: Network.POST,

  // [Update a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.update)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_UPDATE, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_UPDATE: Network.PUT,

  // [Delete a custom gradebook column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.destroy)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_DELETE, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_DELETE: Network.DELETE,

  // [Reorder custom columns)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_columns_api.reorder)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/reorder
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMNS_REORDER, {course_id:}, query);
  CUSTOM_GRADEBOOK_COLUMNS_REORDER: Network.POST,

  // [List entries for a column)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.index)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMN_DATA_S, {course_id:, id:}, query);
  CUSTOM_GRADEBOOK_COLUMN_DATA_S: Network.GET,

  // [Update column data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_gradebook_column_data_api.update)
  // Api Url: /api/v1/courses/:course_id/custom_gradebook_columns/:id/data/:user_id
  // return canvasRequest(CanvasConstants.CUSTOM_GRADEBOOK_COLUMN_DATA_UPDATE, {course_id:, id:, user_id:}, query);
  CUSTOM_GRADEBOOK_COLUMN_DATA_UPDATE: Network.PUT,

  // [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
  // Api Url: /api/v1/courses/:course_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS, {course_id:}, query);
  DISCUSSION_TOPICS: Network.GET,

  // [List discussion topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.index)
  // Api Url: /api/v1/groups/:group_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPICS_BY_GROUPS_AND_GROUP: Network.GET,

  // [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
  // Api Url: /api/v1/courses/:course_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_CREATE, {course_id:}, query);
  DISCUSSION_TOPIC_CREATE: Network.POST,

  // [Create a new discussion topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.create)
  // Api Url: /api/v1/groups/:group_id/discussion_topics
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPIC_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_UPDATE, {course_id:, topic_id:}, query);
  DISCUSSION_TOPIC_UPDATE: Network.PUT,

  // [Update a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.update)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPIC_UPDATE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_DELETE, {course_id:, topic_id:}, query);
  DISCUSSION_TOPIC_DELETE: Network.DELETE,

  // [Delete a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.destroy)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_DELETE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPIC_DELETE_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/reorder
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_REORDER, {course_id:}, query);
  DISCUSSION_TOPIC_REORDER: Network.POST,

  // [Reorder pinned topics)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics.reorder)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/reorder
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPIC_REORDER_BY_GROUPS_AND_GROUP, {group_id:}, query);
  DISCUSSION_TOPIC_REORDER_BY_GROUPS_AND_GROUP: Network.POST,

  // [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_UPDATE, {course_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_UPDATE: Network.PUT,

  // [Update an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.update)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_UPDATE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_DELETE, {course_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_DELETE: Network.DELETE,

  // [Delete an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_entries.destroy)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:id
  // return canvasRequest(CanvasConstants.DISCUSSION_ENTRIE_DELETE_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, id:}, query);
  DISCUSSION_ENTRIE_DELETE_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_GET, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_GET: Network.GET,

  // [Get a single topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.show)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_GET_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/view
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_VIEW, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_VIEW: Network.GET,

  // [Get the full topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.view)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/view
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_VIEW_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_VIEW_BY_GROUPS_AND_GROUP: Network.GET,

  // [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_ENTRY, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ADD_ENTRY: Network.POST,

  // [Post an entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_entry)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ADD_ENTRY_BY_GROUPS_AND_GROUP: Network.POST,

  // [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRIES, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRIES: Network.GET,

  // [List topic entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entries)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRIES_BY_GROUPS_AND_GROUP: Network.GET,

  // [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_REPLY, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_ADD_REPLY: Network.POST,

  // [Post a reply)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.add_reply)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ADD_REPLY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_ADD_REPLY_BY_GROUPS_AND_GROUP: Network.POST,

  // [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_REPLIES, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_REPLIES: Network.GET,

  // [List entry replies)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.replies)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/replies
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_REPLIES_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_REPLIES_BY_GROUPS_AND_GROUP: Network.GET,

  // [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entry_list
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRY_LIST, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRY_LIST: Network.GET,

  // [List entries)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.entry_list)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entry_list
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_ENTRY_LIST_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_ENTRY_LIST_BY_GROUPS_AND_GROUP: Network.GET,

  // [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_READ, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_READ: Network.PUT,

  // [Mark topic as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_READ_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_UNREAD, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_UNREAD: Network.DELETE,

  // [Mark topic as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_topic_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_TOPIC_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_TOPIC_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_READ, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_READ: Network.PUT,

  // [Mark all entries as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_READ_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_UNREAD, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_UNREAD: Network.DELETE,

  // [Mark all entries as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_all_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/read_all
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ALL_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_MARK_ALL_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_READ, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_READ: Network.PUT,

  // [Mark entry as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_read)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_READ_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_READ_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_UNREAD, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_UNREAD: Network.DELETE,

  // [Mark entry as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.mark_entry_unread)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/read
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_MARK_ENTRY_UNREAD_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_MARK_ENTRY_UNREAD_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/entries/:entry_id/rating
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_RATE_ENTRY, {course_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_RATE_ENTRY: Network.POST,

  // [Rate entry)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.rate_entry)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/entries/:entry_id/rating
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_RATE_ENTRY_BY_GROUPS_AND_GROUP, {group_id:, topic_id:, entry_id:}, query);
  DISCUSSION_TOPICS_RATE_ENTRY_BY_GROUPS_AND_GROUP: Network.POST,

  // [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_SUBSCRIBE_TOPIC, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_SUBSCRIBE_TOPIC: Network.PUT,

  // [Subscribe to a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.subscribe_topic)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_SUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_SUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
  // Api Url: /api/v1/courses/:course_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC, {course_id:, topic_id:}, query);
  DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC: Network.DELETE,

  // [Unsubscribe from a topic)](https://canvas.instructure.com/doc/api/all_resources.html#method.discussion_topics_api.unsubscribe_topic)
  // Api Url: /api/v1/groups/:group_id/discussion_topics/:topic_id/subscribed
  // return canvasRequest(CanvasConstants.DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP, {group_id:, topic_id:}, query);
  DISCUSSION_TOPICS_UNSUBSCRIBE_TOPIC_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Create enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.create)
  // Api Url: /api/v1/accounts/:account_id/terms
  // return canvasRequest(CanvasConstants.TERM_CREATE, {account_id:}, query);
  TERM_CREATE: Network.POST,

  // [Update enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.update)
  // Api Url: /api/v1/accounts/:account_id/terms/:id
  // return canvasRequest(CanvasConstants.TERM_UPDATE, {account_id:, id:}, query);
  TERM_UPDATE: Network.PUT,

  // [Delete enrollment term)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms.destroy)
  // Api Url: /api/v1/accounts/:account_id/terms/:id
  // return canvasRequest(CanvasConstants.TERM_DELETE, {account_id:, id:}, query);
  TERM_DELETE: Network.DELETE,

  // [List enrollment terms)](https://canvas.instructure.com/doc/api/all_resources.html#method.terms_api.index)
  // Api Url: /api/v1/accounts/:account_id/terms
  // return canvasRequest(CanvasConstants.TERMS_S, {account_id:}, query);
  TERMS_S: Network.GET,

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/courses/:course_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_S, {course_id:}, query);
  ENROLLMENTS_S: Network.GET,

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/sections/:section_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_S_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  ENROLLMENTS_S_BY_SECTIONS_AND_SECTION: Network.GET,

  // [List enrollments)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.index)
  // Api Url: /api/v1/users/:user_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_S_BY_USERS_AND_USER, {user_id:}, query);
  ENROLLMENTS_S_BY_USERS_AND_USER: Network.GET,

  // [Enrollment by ID)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.show)
  // Api Url: /api/v1/accounts/:account_id/enrollments/:id
  // return canvasRequest(CanvasConstants.ENROLLMENTS_GET, {account_id:, id:}, query);
  ENROLLMENTS_GET: Network.GET,

  // [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
  // Api Url: /api/v1/courses/:course_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_CREATE, {course_id:}, query);
  ENROLLMENTS_CREATE: Network.POST,

  // [Enroll a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.create)
  // Api Url: /api/v1/sections/:section_id/enrollments
  // return canvasRequest(CanvasConstants.ENROLLMENTS_CREATE_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  ENROLLMENTS_CREATE_BY_SECTIONS_AND_SECTION: Network.POST,

  // [Conclude or inactivate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.destroy)
  // Api Url: /api/v1/courses/:course_id/enrollments/:id
  // return canvasRequest(CanvasConstants.ENROLLMENTS_DELETE, {course_id:, id:}, query);
  ENROLLMENTS_DELETE: Network.DELETE,

  // [Re-activate an enrollment)](https://canvas.instructure.com/doc/api/all_resources.html#method.enrollments_api.reactivate)
  // Api Url: /api/v1/courses/:course_id/enrollments/:id/reactivate
  // return canvasRequest(CanvasConstants.ENROLLMENTS_REACTIVATE, {course_id:, id:}, query);
  ENROLLMENTS_REACTIVATE: Network.PUT,

  // [Create Error Report)](https://canvas.instructure.com/doc/api/all_resources.html#method.errors.create)
  // Api Url: /api/v1/error_reports
  // return canvasRequest(CanvasConstants.ERROR_CREATE, {}, query);
  ERROR_CREATE: Network.POST,

  // [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
  // Api Url: /api/v1/courses/:course_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOLS, {course_id:}, query);
  EXTERNAL_TOOLS: Network.GET,

  // [List external tools)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.index)
  // Api Url: /api/v1/accounts/:account_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOLS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
  // Api Url: /api/v1/courses/:course_id/external_tools/sessionless_launch
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH, {course_id:}, query);
  EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH: Network.GET,

  // [Get a sessionless launch url for an external tool.)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.generate_sessionless_launch)
  // Api Url: /api/v1/accounts/:account_id/external_tools/sessionless_launch
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOL_GENERATE_SESSIONLESS_LAUNCH_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GET, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_GET: Network.GET,

  // [Get a single external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.show)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_GET_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
  // Api Url: /api/v1/courses/:course_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_CREATE, {course_id:}, query);
  EXTERNAL_TOOL_CREATE: Network.POST,

  // [Create an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.create)
  // Api Url: /api/v1/accounts/:account_id/external_tools
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  EXTERNAL_TOOL_CREATE_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

  // [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_UPDATE, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_UPDATE: Network.PUT,

  // [Edit an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.update)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

  // [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
  // Api Url: /api/v1/courses/:course_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_DELETE, {course_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_DELETE: Network.DELETE,

  // [Delete an external tool)](https://canvas.instructure.com/doc/api/all_resources.html#method.external_tools.destroy)
  // Api Url: /api/v1/accounts/:account_id/external_tools/:external_tool_id
  // return canvasRequest(CanvasConstants.EXTERNAL_TOOL_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, external_tool_id:}, query);
  EXTERNAL_TOOL_DELETE_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

  // [List favorite courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_courses)
  // Api Url: /api/v1/users/self/favorites/courses
  // return canvasRequest(CanvasConstants.FAVORITE_LIST_FAVORITE_COURSES, {}, query);
  FAVORITE_LIST_FAVORITE_COURSES: Network.GET,

  // [List favorite groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.list_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups
  // return canvasRequest(CanvasConstants.FAVORITE_LIST_FAVORITE_GROUPS, {}, query);
  FAVORITE_LIST_FAVORITE_GROUPS: Network.GET,

  // [Add course to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_course)
  // Api Url: /api/v1/users/self/favorites/courses/:id
  // return canvasRequest(CanvasConstants.FAVORITE_ADD_FAVORITE_COURSE, {id:}, query);
  FAVORITE_ADD_FAVORITE_COURSE: Network.POST,

  // [Add group to favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.add_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups/:id
  // return canvasRequest(CanvasConstants.FAVORITE_ADD_FAVORITE_GROUPS, {id:}, query);
  FAVORITE_ADD_FAVORITE_GROUPS: Network.POST,

  // [Remove course from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_course)
  // Api Url: /api/v1/users/self/favorites/courses/:id
  // return canvasRequest(CanvasConstants.FAVORITE_REMOVE_FAVORITE_COURSE, {id:}, query);
  FAVORITE_REMOVE_FAVORITE_COURSE: Network.DELETE,

  // [Remove group from favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.remove_favorite_groups)
  // Api Url: /api/v1/users/self/favorites/groups/:id
  // return canvasRequest(CanvasConstants.FAVORITE_REMOVE_FAVORITE_GROUPS, {id:}, query);
  FAVORITE_REMOVE_FAVORITE_GROUPS: Network.DELETE,

  // [Reset course favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_course_favorites)
  // Api Url: /api/v1/users/self/favorites/courses
  // return canvasRequest(CanvasConstants.FAVORITE_RESET_COURSE_FAVORITES, {}, query);
  FAVORITE_RESET_COURSE_FAVORITES: Network.DELETE,

  // [Reset group favorites)](https://canvas.instructure.com/doc/api/all_resources.html#method.favorites.reset_groups_favorites)
  // Api Url: /api/v1/users/self/favorites/groups
  // return canvasRequest(CanvasConstants.FAVORITE_RESET_GROUPS_FAVORITES, {}, query);
  FAVORITE_RESET_GROUPS_FAVORITES: Network.DELETE,

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/courses/:course_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS, {course_id:}, query);
  FEATURE_FLAGS: Network.GET,

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/accounts/:account_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  FEATURE_FLAGS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [List features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.index)
  // Api Url: /api/v1/users/:user_id/features
  // return canvasRequest(CanvasConstants.FEATURE_FLAGS_BY_USERS_AND_USER, {user_id:}, query);
  FEATURE_FLAGS_BY_USERS_AND_USER: Network.GET,

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/courses/:course_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES, {course_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES: Network.GET,

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/accounts/:account_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [List enabled features)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.enabled_features)
  // Api Url: /api/v1/users/:user_id/features/enabled
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_ENABLED_FEATURES_BY_USERS_AND_USER, {user_id:}, query);
  FEATURE_FLAG_ENABLED_FEATURES_BY_USERS_AND_USER: Network.GET,

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET, {course_id:, feature:}, query);
  FEATURE_FLAG_GET: Network.GET,

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_GET_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Get feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.show)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_GET_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_GET_BY_USERS_AND_USER: Network.GET,

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE, {course_id:, feature:}, query);
  FEATURE_FLAG_UPDATE: Network.PUT,

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

  // [Set feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.update)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_UPDATE_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_UPDATE_BY_USERS_AND_USER: Network.PUT,

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/courses/:course_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE, {course_id:, feature:}, query);
  FEATURE_FLAG_DELETE: Network.DELETE,

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/accounts/:account_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, feature:}, query);
  FEATURE_FLAG_DELETE_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

  // [Remove feature flag)](https://canvas.instructure.com/doc/api/all_resources.html#method.feature_flags.delete)
  // Api Url: /api/v1/users/:user_id/features/flags/:feature
  // return canvasRequest(CanvasConstants.FEATURE_FLAG_DELETE_BY_USERS_AND_USER, {user_id:, feature:}, query);
  FEATURE_FLAG_DELETE_BY_USERS_AND_USER: Network.DELETE,

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/courses/:course_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA, {course_id:}, query);
  FILE_QUOTA: Network.GET,

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/groups/:group_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FILE_QUOTA_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_quota)
  // Api Url: /api/v1/users/:user_id/files/quota
  // return canvasRequest(CanvasConstants.FILE_QUOTA_BY_USERS_AND_USER, {user_id:}, query);
  FILE_QUOTA_BY_USERS_AND_USER: Network.GET,

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/courses/:course_id/files
  // return canvasRequest(CanvasConstants.FILE_INDEX, {course_id:}, query);
  FILE_INDEX: Network.GET,

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/users/:user_id/files
  // return canvasRequest(CanvasConstants.FILE_INDEX_BY_USERS_AND_USER, {user_id:}, query);
  FILE_INDEX_BY_USERS_AND_USER: Network.GET,

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/groups/:group_id/files
  // return canvasRequest(CanvasConstants.FILE_INDEX_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FILE_INDEX_BY_GROUPS_AND_GROUP: Network.GET,

  // [List files)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_index)
  // Api Url: /api/v1/folders/:id/files
  // return canvasRequest(CanvasConstants.FILE_INDEX_BY_FOLDERS_AND_ID, {id:}, query);
  FILE_INDEX_BY_FOLDERS_AND_ID: Network.GET,

  // [Get quota information)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.public_url)
  // Api Url: /api/v1/files/:id/public_url
  // return canvasRequest(CanvasConstants.FILE_PUBLIC_URL, {id:}, query);
  FILE_PUBLIC_URL: Network.GET,

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW, {id:}, query);
  FILE_SHOW: Network.GET,

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/courses/:course_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  FILE_SHOW_BY_COURSES_AND_COURSE: Network.GET,

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/groups/:group_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  FILE_SHOW_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_show)
  // Api Url: /api/v1/users/:user_id/files/:id
  // return canvasRequest(CanvasConstants.FILE_SHOW_BY_USERS_AND_USER, {user_id:, id:}, query);
  FILE_SHOW_BY_USERS_AND_USER: Network.GET,

  // [Update file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.api_update)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_UPDATE, {id:}, query);
  FILE_UPDATE: Network.PUT,

  // [Delete file)](https://canvas.instructure.com/doc/api/all_resources.html#method.files.destroy)
  // Api Url: /api/v1/files/:id
  // return canvasRequest(CanvasConstants.FILE_DELETE, {id:}, query);
  FILE_DELETE: Network.DELETE,

  // [List folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_index)
  // Api Url: /api/v1/folders/:id/folders
  // return canvasRequest(CanvasConstants.FOLDER_INDEX, {id:}, query);
  FOLDER_INDEX: Network.GET,

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/courses/:course_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS, {course_id:}, query);
  FOLDER_LIST_ALL_FOLDERS: Network.GET,

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/users/:user_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_LIST_ALL_FOLDERS_BY_USERS_AND_USER: Network.GET,

  // [List all folders)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.list_all_folders)
  // Api Url: /api/v1/groups/:group_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_LIST_ALL_FOLDERS_BY_GROUPS_AND_GROUP: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/courses/:course_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH, {course_id:}, query);
  FOLDER_RESOLVE_PATH: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/courses/:course_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH, {course_id:}, query);
  FOLDER_RESOLVE_PATH: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/users/:user_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_RESOLVE_PATH_BY_USERS_AND_USER: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/users/:user_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_RESOLVE_PATH_BY_USERS_AND_USER: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/groups/:group_id/folders/by_path/*full_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP: Network.GET,

  // [Resolve path)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.resolve_path)
  // Api Url: /api/v1/groups/:group_id/folders/by_path
  // return canvasRequest(CanvasConstants.FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_RESOLVE_PATH_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/courses/:course_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET, {course_id:, id:}, query);
  FOLDER_GET: Network.GET,

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/users/:user_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET_BY_USERS_AND_USER, {user_id:, id:}, query);
  FOLDER_GET_BY_USERS_AND_USER: Network.GET,

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/groups/:group_id/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET_BY_GROUPS_AND_GROUP, {group_id:, id:}, query);
  FOLDER_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Get folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.show)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_GET, {id:}, query);
  FOLDER_GET: Network.GET,

  // [Update folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.update)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_UPDATE, {id:}, query);
  FOLDER_UPDATE: Network.PUT,

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/courses/:course_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE, {course_id:}, query);
  FOLDER_CREATE: Network.POST,

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/users/:user_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_USERS_AND_USER, {user_id:}, query);
  FOLDER_CREATE_BY_USERS_AND_USER: Network.POST,

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/groups/:group_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  FOLDER_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Create folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create)
  // Api Url: /api/v1/folders/:folder_id/folders
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_BY_FOLDER, {folder_id:}, query);
  FOLDER_CREATE_BY_FOLDER: Network.POST,

  // [Delete folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.api_destroy)
  // Api Url: /api/v1/folders/:id
  // return canvasRequest(CanvasConstants.FOLDER_DESTROY, {id:}, query);
  FOLDER_DESTROY: Network.DELETE,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.create_file)
  // Api Url: /api/v1/folders/:folder_id/files
  // return canvasRequest(CanvasConstants.FOLDER_CREATE_FILE, {folder_id:}, query);
  FOLDER_CREATE_FILE: Network.POST,

  // [Copy a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_file)
  // Api Url: /api/v1/folders/:dest_folder_id/copy_file
  // return canvasRequest(CanvasConstants.FOLDER_COPY_FILE, {dest_folder_id:}, query);
  FOLDER_COPY_FILE: Network.POST,

  // [Copy a folder)](https://canvas.instructure.com/doc/api/all_resources.html#method.folders.copy_folder)
  // Api Url: /api/v1/folders/:dest_folder_id/copy_folder
  // return canvasRequest(CanvasConstants.FOLDER_COPY_FOLDER, {dest_folder_id:}, query);
  FOLDER_COPY_FOLDER: Network.POST,

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/courses/:course_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS, {course_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS: Network.PUT,

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/groups/:group_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Set usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.set_usage_rights)
  // Api Url: /api/v1/users/:user_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_SET_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_SET_USAGE_RIGHTS_BY_USERS_AND_USER: Network.PUT,

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/courses/:course_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS, {course_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS: Network.DELETE,

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/groups/:group_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [Remove usage rights)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.remove_usage_rights)
  // Api Url: /api/v1/users/:user_id/usage_rights
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_REMOVE_USAGE_RIGHTS_BY_USERS_AND_USER: Network.DELETE,

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/courses/:course_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES, {course_id:}, query);
  USAGE_RIGHT_LICENSES: Network.GET,

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/groups/:group_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES_BY_GROUPS_AND_GROUP, {group_id:}, query);
  USAGE_RIGHT_LICENSES_BY_GROUPS_AND_GROUP: Network.GET,

  // [List licenses)](https://canvas.instructure.com/doc/api/all_resources.html#method.usage_rights.licenses)
  // Api Url: /api/v1/users/:user_id/content_licenses
  // return canvasRequest(CanvasConstants.USAGE_RIGHT_LICENSES_BY_USERS_AND_USER, {user_id:}, query);
  USAGE_RIGHT_LICENSES_BY_USERS_AND_USER: Network.GET,

  // [Query by assignment.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_assignment)
  // Api Url: /api/v1/audit/grade_change/assignments/:assignment_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_ASSIGNMENT, {assignment_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_ASSIGNMENT: Network.GET,

  // [Query by course.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_course)
  // Api Url: /api/v1/audit/grade_change/courses/:course_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_COURSE, {course_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_COURSE: Network.GET,

  // [Query by student.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_student)
  // Api Url: /api/v1/audit/grade_change/students/:student_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_STUDENT, {student_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_STUDENT: Network.GET,

  // [Query by grader.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grade_change_audit_api.for_grader)
  // Api Url: /api/v1/audit/grade_change/graders/:grader_id
  // return canvasRequest(CanvasConstants.GRADE_CHANGE_AUDIT_FOR_GRADER, {grader_id:}, query);
  GRADE_CHANGE_AUDIT_FOR_GRADER: Network.GET,

  // [Days in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.days)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/days
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_DAYS, {course_id:}, query);
  GRADEBOOK_HISTORY_DAYS: Network.GET,

  // [Details for a given date in gradebook history for this course)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.day_details)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/:date
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_DAY_DETAILS, {course_id:, date:}, query);
  GRADEBOOK_HISTORY_DAY_DETAILS: Network.GET,

  // [Lists submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.submissions)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/:date/graders/:grader_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_SUBMISSIONS, {course_id:, date:, grader_id:, assignment_id:}, query);
  GRADEBOOK_HISTORY_SUBMISSIONS: Network.GET,

  // [List uncollated submission versions)](https://canvas.instructure.com/doc/api/all_resources.html#method.gradebook_history_api.feed)
  // Api Url: /api/v1/courses/:course_id/gradebook_history/feed
  // return canvasRequest(CanvasConstants.GRADEBOOK_HISTORY_FEED, {course_id:}, query);
  GRADEBOOK_HISTORY_FEED: Network.GET,

  // [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
  // Api Url: /api/v1/courses/:course_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIODS, {course_id:}, query);
  GRADING_PERIODS: Network.GET,

  // [List grading periods)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.index)
  // Api Url: /api/v1/accounts/:account_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_PERIODS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_GET, {course_id:, id:}, query);
  GRADING_PERIOD_GET: Network.GET,

  // [Get a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.show)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_GET_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
  // Api Url: /api/v1/courses/:course_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_CREATE, {course_id:}, query);
  GRADING_PERIOD_CREATE: Network.POST,

  // [Create a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.create)
  // Api Url: /api/v1/accounts/:account_id/grading_periods
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_PERIOD_CREATE_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

  // [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_UPDATE, {course_id:, id:}, query);
  GRADING_PERIOD_UPDATE: Network.PUT,

  // [Update a single grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.update)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

  // [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
  // Api Url: /api/v1/courses/:course_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_DELETE, {course_id:, id:}, query);
  GRADING_PERIOD_DELETE: Network.DELETE,

  // [Delete a grading period)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_periods.destroy)
  // Api Url: /api/v1/accounts/:account_id/grading_periods/:id
  // return canvasRequest(CanvasConstants.GRADING_PERIOD_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  GRADING_PERIOD_DELETE_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

  // [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
  // Api Url: /api/v1/accounts/:account_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CREATE, {account_id:}, query);
  GRADING_STANDARDS_CREATE: Network.POST,

  // [Create a new grading standard)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.create)
  // Api Url: /api/v1/courses/:course_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  GRADING_STANDARDS_CREATE_BY_COURSES_AND_COURSE: Network.POST,

  // [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
  // Api Url: /api/v1/courses/:course_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CONTEXT_INDEX, {course_id:}, query);
  GRADING_STANDARDS_CONTEXT_INDEX: Network.GET,

  // [List the grading standards available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.grading_standards_api.context_index)
  // Api Url: /api/v1/accounts/:account_id/grading_standards
  // return canvasRequest(CanvasConstants.GRADING_STANDARDS_CONTEXT_INDEX_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  GRADING_STANDARDS_CONTEXT_INDEX_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
  // Api Url: /api/v1/accounts/:account_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIES, {account_id:}, query);
  GROUP_CATEGORIES: Network.GET,

  // [List group categories for a context)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.index)
  // Api Url: /api/v1/courses/:course_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIES_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CATEGORIES_BY_COURSES_AND_COURSE: Network.GET,

  // [Get a single group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.show)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_GET, {group_category_id:}, query);
  GROUP_CATEGORIE_GET: Network.GET,

  // [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
  // Api Url: /api/v1/accounts/:account_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_CREATE, {account_id:}, query);
  GROUP_CATEGORIE_CREATE: Network.POST,

  // [Create a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.create)
  // Api Url: /api/v1/courses/:course_id/group_categories
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_CREATE_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CATEGORIE_CREATE_BY_COURSES_AND_COURSE: Network.POST,

  // [Update a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.update)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_UPDATE, {group_category_id:}, query);
  GROUP_CATEGORIE_UPDATE: Network.PUT,

  // [Delete a Group Category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.destroy)
  // Api Url: /api/v1/group_categories/:group_category_id
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_DELETE, {group_category_id:}, query);
  GROUP_CATEGORIE_DELETE: Network.DELETE,

  // [List groups in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.groups)
  // Api Url: /api/v1/group_categories/:group_category_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_GROUPS, {group_category_id:}, query);
  GROUP_CATEGORIE_GROUPS: Network.GET,

  // [List users in group category)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.users)
  // Api Url: /api/v1/group_categories/:group_category_id/users
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_USERS, {group_category_id:}, query);
  GROUP_CATEGORIE_USERS: Network.GET,

  // [Assign unassigned members)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_categories.assign_unassigned_members)
  // Api Url: /api/v1/group_categories/:group_category_id/assign_unassigned_members
  // return canvasRequest(CanvasConstants.GROUP_CATEGORIE_ASSIGN_UNASSIGNED_MEMBERS, {group_category_id:}, query);
  GROUP_CATEGORIE_ASSIGN_UNASSIGNED_MEMBERS: Network.POST,

  // [List your groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.index)
  // Api Url: /api/v1/users/self/groups
  // return canvasRequest(CanvasConstants.GROUPS, {}, query);
  GROUPS: Network.GET,

  // [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
  // Api Url: /api/v1/accounts/:account_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CONTEXT_INDEX, {account_id:}, query);
  GROUP_CONTEXT_INDEX: Network.GET,

  // [List the groups available in a context.)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.context_index)
  // Api Url: /api/v1/courses/:course_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CONTEXT_INDEX_BY_COURSES_AND_COURSE, {course_id:}, query);
  GROUP_CONTEXT_INDEX_BY_COURSES_AND_COURSE: Network.GET,

  // [Get a single group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.show)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_GET, {group_id:}, query);
  GROUP_GET: Network.GET,

  // [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
  // Api Url: /api/v1/groups
  // return canvasRequest(CanvasConstants.GROUP_CREATE, {}, query);
  GROUP_CREATE: Network.POST,

  // [Create a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create)
  // Api Url: /api/v1/group_categories/:group_category_id/groups
  // return canvasRequest(CanvasConstants.GROUP_CREATE_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY, {group_category_id:}, query);
  GROUP_CREATE_BY_GROUP_CATEGORIES_AND_GROUP_CATEGORY: Network.POST,

  // [Edit a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.update)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_UPDATE, {group_id:}, query);
  GROUP_UPDATE: Network.PUT,

  // [Delete a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.destroy)
  // Api Url: /api/v1/groups/:group_id
  // return canvasRequest(CanvasConstants.GROUP_DELETE, {group_id:}, query);
  GROUP_DELETE: Network.DELETE,

  // [Invite others to a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.invite)
  // Api Url: /api/v1/groups/:group_id/invite
  // return canvasRequest(CanvasConstants.GROUP_INVITE, {group_id:}, query);
  GROUP_INVITE: Network.POST,

  // [List group's users)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.users)
  // Api Url: /api/v1/groups/:group_id/users
  // return canvasRequest(CanvasConstants.GROUP_USERS, {group_id:}, query);
  GROUP_USERS: Network.GET,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.create_file)
  // Api Url: /api/v1/groups/:group_id/files
  // return canvasRequest(CanvasConstants.GROUP_CREATE_FILE, {group_id:}, query);
  GROUP_CREATE_FILE: Network.POST,

  // [Preview processed html)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.preview_html)
  // Api Url: /api/v1/groups/:group_id/preview_html
  // return canvasRequest(CanvasConstants.GROUP_PREVIEW_HTML, {group_id:}, query);
  GROUP_PREVIEW_HTML: Network.POST,

  // [Group activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream)
  // Api Url: /api/v1/groups/:group_id/activity_stream
  // return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM, {group_id:}, query);
  GROUP_ACTIVITY_STREAM: Network.GET,

  // [Group activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.groups.activity_stream_summary)
  // Api Url: /api/v1/groups/:group_id/activity_stream/summary
  // return canvasRequest(CanvasConstants.GROUP_ACTIVITY_STREAM_SUMMARY, {group_id:}, query);
  GROUP_ACTIVITY_STREAM_SUMMARY: Network.GET,

  // [List group memberships)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.index)
  // Api Url: /api/v1/groups/:group_id/memberships
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIPS, {group_id:}, query);
  GROUP_MEMBERSHIPS: Network.GET,

  // [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_GET, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_GET: Network.GET,

  // [Get a single group membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.show)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_GET_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_GET_BY_USERS_AND_USER: Network.GET,

  // [Create a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.create)
  // Api Url: /api/v1/groups/:group_id/memberships
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_CREATE, {group_id:}, query);
  GROUP_MEMBERSHIP_CREATE: Network.POST,

  // [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_UPDATE, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_UPDATE: Network.PUT,

  // [Update a membership)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.update)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_UPDATE_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_UPDATE_BY_USERS_AND_USER: Network.PUT,

  // [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
  // Api Url: /api/v1/groups/:group_id/memberships/:membership_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_DELETE, {group_id:, membership_id:}, query);
  GROUP_MEMBERSHIP_DELETE: Network.DELETE,

  // [Leave a group)](https://canvas.instructure.com/doc/api/all_resources.html#method.group_memberships.destroy)
  // Api Url: /api/v1/groups/:group_id/users/:user_id
  // return canvasRequest(CanvasConstants.GROUP_MEMBERSHIP_DELETE_BY_USERS_AND_USER, {group_id:, user_id:}, query);
  GROUP_MEMBERSHIP_DELETE_BY_USERS_AND_USER: Network.DELETE,

  // [Create JWT)](https://canvas.instructure.com/doc/api/all_resources.html#method.jwts.create)
  // Api Url: /api/v1/jwts
  // return canvasRequest(CanvasConstants.JWT_CREATE, {}, query);
  JWT_CREATE: Network.POST,

  // [Create live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.create)
  // Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_RESULT_CREATE, {course_id:, assessment_id:}, query);
  LIVE_ASSESSMENTS_RESULT_CREATE: Network.POST,

  // [List live assessment results)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/results.index)
  // Api Url: /api/v1/courses/:course_id/live_assessments/:assessment_id/results
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_RESULTS, {course_id:, assessment_id:}, query);
  LIVE_ASSESSMENTS_RESULTS: Network.GET,

  // [Create or find a live assessment)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.create)
  // Api Url: /api/v1/courses/:course_id/live_assessments
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_ASSESSMENT_CREATE, {course_id:}, query);
  LIVE_ASSESSMENTS_ASSESSMENT_CREATE: Network.POST,

  // [List live assessments)](https://canvas.instructure.com/doc/api/all_resources.html#method.live_assessments/assessments.index)
  // Api Url: /api/v1/courses/:course_id/live_assessments
  // return canvasRequest(CanvasConstants.LIVE_ASSESSMENTS_ASSESSMENTS, {course_id:}, query);
  LIVE_ASSESSMENTS_ASSESSMENTS: Network.GET,

  // [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
  // Api Url: /api/v1/accounts/:account_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYMS, {account_id:}, query);
  PSEUDONYMS: Network.GET,

  // [List user logins)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.index)
  // Api Url: /api/v1/users/:user_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYMS_BY_USERS_AND_USER, {user_id:}, query);
  PSEUDONYMS_BY_USERS_AND_USER: Network.GET,

  // [Create a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.create)
  // Api Url: /api/v1/accounts/:account_id/logins
  // return canvasRequest(CanvasConstants.PSEUDONYM_CREATE, {account_id:}, query);
  PSEUDONYM_CREATE: Network.POST,

  // [Edit a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.update)
  // Api Url: /api/v1/accounts/:account_id/logins/:id
  // return canvasRequest(CanvasConstants.PSEUDONYM_UPDATE, {account_id:, id:}, query);
  PSEUDONYM_UPDATE: Network.PUT,

  // [Delete a user login)](https://canvas.instructure.com/doc/api/all_resources.html#method.pseudonyms.destroy)
  // Api Url: /api/v1/users/:user_id/logins/:id
  // return canvasRequest(CanvasConstants.PSEUDONYM_DELETE, {user_id:, id:}, query);
  PSEUDONYM_DELETE: Network.DELETE,

  // [List students selected for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
  // return canvasRequest(CanvasConstants.MODERATION_SET_S, {course_id:, assignment_id:}, query);
  MODERATION_SET_S: Network.GET,

  // [Select students for moderation)](https://canvas.instructure.com/doc/api/all_resources.html#method.moderation_set.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/moderated_students
  // return canvasRequest(CanvasConstants.MODERATION_SET_CREATE, {course_id:, assignment_id:}, query);
  MODERATION_SET_CREATE: Network.POST,

  // [Show provisional grade status for a student)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.status)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/status
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_STATUS, {course_id:, assignment_id:}, query);
  PROVISIONAL_GRADE_STATUS: Network.GET,

  // [Select provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.select)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/select
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_SELECT, {course_id:, assignment_id:, provisional_grade_id:}, query);
  PROVISIONAL_GRADE_SELECT: Network.PUT,

  // [Copy provisional grade)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.copy_to_final_mark)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/:provisional_grade_id/copy_to_final_mark
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_COPY_TO_FINAL_MARK, {course_id:, assignment_id:, provisional_grade_id:}, query);
  PROVISIONAL_GRADE_COPY_TO_FINAL_MARK: Network.POST,

  // [Publish provisional grades for an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.provisional_grades.publish)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/provisional_grades/publish
  // return canvasRequest(CanvasConstants.PROVISIONAL_GRADE_PUBLISH, {course_id:, assignment_id:}, query);
  PROVISIONAL_GRADE_PUBLISH: Network.POST,

  // [List modules)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.index)
  // Api Url: /api/v1/courses/:course_id/modules
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_S, {course_id:}, query);
  CONTEXT_MODULES_S: Network.GET,

  // [Show module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.show)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_GET, {course_id:, id:}, query);
  CONTEXT_MODULES_GET: Network.GET,

  // [Create a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.create)
  // Api Url: /api/v1/courses/:course_id/modules
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_CREATE, {course_id:}, query);
  CONTEXT_MODULES_CREATE: Network.POST,

  // [Update a module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.update)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_UPDATE, {course_id:, id:}, query);
  CONTEXT_MODULES_UPDATE: Network.PUT,

  // [Delete module)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.destroy)
  // Api Url: /api/v1/courses/:course_id/modules/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_DELETE, {course_id:, id:}, query);
  CONTEXT_MODULES_DELETE: Network.DELETE,

  // [Re-lock module progressions)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_modules_api.relock)
  // Api Url: /api/v1/courses/:course_id/modules/:id/relock
  // return canvasRequest(CanvasConstants.CONTEXT_MODULES_RELOCK, {course_id:, id:}, query);
  CONTEXT_MODULES_RELOCK: Network.PUT,

  // [List module items)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.index)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_S, {course_id:, module_id:}, query);
  CONTEXT_MODULE_ITEMS_S: Network.GET,

  // [Show module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.show)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_GET, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_GET: Network.GET,

  // [Create a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.create)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_CREATE, {course_id:, module_id:}, query);
  CONTEXT_MODULE_ITEMS_CREATE: Network.POST,

  // [Update a module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.update)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_UPDATE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_UPDATE: Network.PUT,

  // [Delete module item)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.destroy)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_DELETE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_DELETE: Network.DELETE,

  // [Mark module item as done/not done)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_as_done)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/done
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_MARK_AS_DONE, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_MARK_AS_DONE: Network.PUT,

  // [Get module item sequence)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.item_sequence)
  // Api Url: /api/v1/courses/:course_id/module_item_sequence
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_ITEM_SEQUENCE, {course_id:}, query);
  CONTEXT_MODULE_ITEMS_ITEM_SEQUENCE: Network.GET,

  // [Mark module item read)](https://canvas.instructure.com/doc/api/all_resources.html#method.context_module_items_api.mark_item_read)
  // Api Url: /api/v1/courses/:course_id/modules/:module_id/items/:id/mark_read
  // return canvasRequest(CanvasConstants.CONTEXT_MODULE_ITEMS_MARK_ITEM_READ, {course_id:, module_id:, id:}, query);
  CONTEXT_MODULE_ITEMS_MARK_ITEM_READ: Network.POST,

  // [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCES, {user_id:, communication_channel_id:}, query);
  NOTIFICATION_PREFERENCES: Network.GET,

  // [List preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCES_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:}, query);
  NOTIFICATION_PREFERENCES_BY_TYPE_AND_ADDRESS: Network.GET,

  // [List of preference categories)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.category_index)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preference_categories
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_CATEGORY_INDEX, {user_id:, communication_channel_id:}, query);
  NOTIFICATION_PREFERENCE_CATEGORY_INDEX: Network.GET,

  // [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
  // Api Url: /api/v1/users/:user_id/communication_channels/:communication_channel_id/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_GET, {user_id:, communication_channel_id:, notification:}, query);
  NOTIFICATION_PREFERENCE_GET: Network.GET,

  // [Get a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.show)
  // Api Url: /api/v1/users/:user_id/communication_channels/:type/:address/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_GET_BY_TYPE_AND_ADDRESS, {user_id:, type:, address:, notification:}, query);
  NOTIFICATION_PREFERENCE_GET_BY_TYPE_AND_ADDRESS: Network.GET,

  // [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE, {communication_channel_id:, notification:}, query);
  NOTIFICATION_PREFERENCE_UPDATE: Network.PUT,

  // [Update a preference)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update)
  // Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences/:notification
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_BY_TYPE_AND_ADDRESS, {type:, address:, notification:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_BY_TYPE_AND_ADDRESS: Network.PUT,

  // [Update preferences by category)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_preferences_by_category)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preference_categories/:category
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_PREFERENCES_BY_CATEGORY, {communication_channel_id:, category:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_PREFERENCES_BY_CATEGORY: Network.PUT,

  // [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
  // Api Url: /api/v1/users/self/communication_channels/:communication_channel_id/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_ALL, {communication_channel_id:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_ALL: Network.PUT,

  // [Update multiple preferences)](https://canvas.instructure.com/doc/api/all_resources.html#method.notification_preferences.update_all)
  // Api Url: /api/v1/users/self/communication_channels/:type/:address/notification_preferences
  // return canvasRequest(CanvasConstants.NOTIFICATION_PREFERENCE_UPDATE_ALL_BY_TYPE_AND_ADDRESS, {type:, address:}, query);
  NOTIFICATION_PREFERENCE_UPDATE_ALL_BY_TYPE_AND_ADDRESS: Network.PUT,

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/global/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT, {}, query);
  OUTCOME_GROUPS_REDIRECT: Network.GET,

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/accounts/:account_id/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT_BY_ACCOUNTS_AND_ACCOUNT, {account_id:}, query);
  OUTCOME_GROUPS_REDIRECT_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Redirect to root outcome group for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.redirect)
  // Api Url: /api/v1/courses/:course_id/root_outcome_group
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_REDIRECT_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_REDIRECT_BY_COURSES_AND_COURSE: Network.GET,

  // [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_S, {account_id:}, query);
  OUTCOME_GROUPS_S: Network.GET,

  // [Get all outcome groups for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.index)
  // Api Url: /api/v1/courses/:course_id/outcome_groups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_S_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_S_BY_COURSES_AND_COURSE: Network.GET,

  // [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
  // Api Url: /api/v1/accounts/:account_id/outcome_group_links
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_INDEX, {account_id:}, query);
  OUTCOME_GROUPS_LINK_INDEX: Network.GET,

  // [Get all outcome links for context)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link_index)
  // Api Url: /api/v1/courses/:course_id/outcome_group_links
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_INDEX_BY_COURSES_AND_COURSE, {course_id:}, query);
  OUTCOME_GROUPS_LINK_INDEX_BY_COURSES_AND_COURSE: Network.GET,

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET, {id:}, query);
  OUTCOME_GROUPS_GET: Network.GET,

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_GET_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [Show an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.show)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_GET_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_GET_BY_COURSES_AND_COURSE: Network.GET,

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE, {id:}, query);
  OUTCOME_GROUPS_UPDATE: Network.PUT,

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_UPDATE_BY_ACCOUNTS_AND_ACCOUNT: Network.PUT,

  // [Update an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.update)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UPDATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_UPDATE_BY_COURSES_AND_COURSE: Network.PUT,

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/global/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE, {id:}, query);
  OUTCOME_GROUPS_DELETE: Network.DELETE,

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_DELETE_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

  // [Delete an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.destroy)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_DELETE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_DELETE_BY_COURSES_AND_COURSE: Network.DELETE,

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES, {id:}, query);
  OUTCOME_GROUPS_OUTCOMES: Network.GET,

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_OUTCOMES_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [List linked outcomes)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.outcomes)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_OUTCOMES_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_OUTCOMES_BY_COURSES_AND_COURSE: Network.GET,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK, {id:}, query);
  OUTCOME_GROUPS_LINK: Network.POST,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_OUTCOME, {id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_OUTCOME: Network.PUT,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME, {account_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_ACCOUNTS_AND_ACCOUNT_AND_OUTCOME: Network.PUT,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE: Network.POST,

  // [Create/link an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.link)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE_AND_OUTCOME, {course_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_LINK_BY_COURSES_AND_COURSE_AND_OUTCOME: Network.PUT,

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/global/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK, {id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK: Network.DELETE,

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK_BY_ACCOUNTS_AND_ACCOUNT: Network.DELETE,

  // [Unlink an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.unlink)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/outcomes/:outcome_id
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_UNLINK_BY_COURSES_AND_COURSE, {course_id:, id:, outcome_id:}, query);
  OUTCOME_GROUPS_UNLINK_BY_COURSES_AND_COURSE: Network.DELETE,

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/global/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_SUBGROUPS, {id:}, query);
  OUTCOME_GROUPS_SUBGROUPS: Network.GET,

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_SUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_SUBGROUPS_BY_ACCOUNTS_AND_ACCOUNT: Network.GET,

  // [List subgroups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.subgroups)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_SUBGROUPS_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_SUBGROUPS_BY_COURSES_AND_COURSE: Network.GET,

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/global/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE, {id:}, query);
  OUTCOME_GROUPS_CREATE: Network.POST,

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_CREATE_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

  // [Create a subgroup)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.create)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/subgroups
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_CREATE_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_CREATE_BY_COURSES_AND_COURSE: Network.POST,

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/global/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT, {id:}, query);
  OUTCOME_GROUPS_IMPORT: Network.POST,

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/accounts/:account_id/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT_BY_ACCOUNTS_AND_ACCOUNT, {account_id:, id:}, query);
  OUTCOME_GROUPS_IMPORT_BY_ACCOUNTS_AND_ACCOUNT: Network.POST,

  // [Import an outcome group)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_groups_api.import)
  // Api Url: /api/v1/courses/:course_id/outcome_groups/:id/import
  // return canvasRequest(CanvasConstants.OUTCOME_GROUPS_IMPORT_BY_COURSES_AND_COURSE, {course_id:, id:}, query);
  OUTCOME_GROUPS_IMPORT_BY_COURSES_AND_COURSE: Network.POST,

  // [Get outcome results)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.index)
  // Api Url: /api/v1/courses/:course_id/outcome_results
  // return canvasRequest(CanvasConstants.OUTCOME_RESULTS, {course_id:}, query);
  OUTCOME_RESULTS: Network.GET,

  // [Get outcome result rollups)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcome_results.rollups)
  // Api Url: /api/v1/courses/:course_id/outcome_rollups
  // return canvasRequest(CanvasConstants.OUTCOME_RESULT_ROLLUPS, {course_id:}, query);
  OUTCOME_RESULT_ROLLUPS: Network.GET,

  // [Show an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.show)
  // Api Url: /api/v1/outcomes/:id
  // return canvasRequest(CanvasConstants.OUTCOMES_GET, {id:}, query);
  OUTCOMES_GET: Network.GET,

  // [Update an outcome)](https://canvas.instructure.com/doc/api/all_resources.html#method.outcomes_api.update)
  // Api Url: /api/v1/outcomes/:id
  // return canvasRequest(CanvasConstants.OUTCOMES_UPDATE, {id:}, query);
  OUTCOMES_UPDATE: Network.PUT,

  // [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
  // Api Url: /api/v1/courses/:course_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_FRONT_PAGE, {course_id:}, query);
  WIKI_PAGES_GET_FRONT_PAGE: Network.GET,

  // [Show front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_front_page)
  // Api Url: /api/v1/groups/:group_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_GET_FRONT_PAGE_BY_GROUPS_AND_GROUP: Network.GET,

  // [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
  // Api Url: /api/v1/courses/:course_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_FRONT_PAGE, {course_id:}, query);
  WIKI_PAGES_UPDATE_FRONT_PAGE: Network.PUT,

  // [Update/create front page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update_front_page)
  // Api Url: /api/v1/groups/:group_id/front_page
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_FRONT_PAGE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_UPDATE_FRONT_PAGE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
  // Api Url: /api/v1/courses/:course_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_S, {course_id:}, query);
  WIKI_PAGES_S: Network.GET,

  // [List pages)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.index)
  // Api Url: /api/v1/groups/:group_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_S_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_S_BY_GROUPS_AND_GROUP: Network.GET,

  // [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
  // Api Url: /api/v1/courses/:course_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_CREATE, {course_id:}, query);
  WIKI_PAGES_CREATE: Network.POST,

  // [Create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.create)
  // Api Url: /api/v1/groups/:group_id/pages
  // return canvasRequest(CanvasConstants.WIKI_PAGES_CREATE_BY_GROUPS_AND_GROUP, {group_id:}, query);
  WIKI_PAGES_CREATE_BY_GROUPS_AND_GROUP: Network.POST,

  // [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET, {course_id:, url:}, query);
  WIKI_PAGES_GET: Network.GET,

  // [Show page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_GET_BY_GROUPS_AND_GROUP: Network.GET,

  // [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE, {course_id:, url:}, query);
  WIKI_PAGES_UPDATE: Network.PUT,

  // [Update/create page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.update)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_UPDATE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_UPDATE_BY_GROUPS_AND_GROUP: Network.PUT,

  // [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
  // Api Url: /api/v1/courses/:course_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_DELETE, {course_id:, url:}, query);
  WIKI_PAGES_DELETE: Network.DELETE,

  // [Delete page)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.destroy)
  // Api Url: /api/v1/groups/:group_id/pages/:url
  // return canvasRequest(CanvasConstants.WIKI_PAGES_DELETE_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_DELETE_BY_GROUPS_AND_GROUP: Network.DELETE,

  // [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVISIONS, {course_id:, url:}, query);
  WIKI_PAGES_REVISIONS: Network.GET,

  // [List revisions)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revisions)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVISIONS_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_REVISIONS_BY_GROUPS_AND_GROUP: Network.GET,

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/latest
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION, {course_id:, url:}, query);
  WIKI_PAGES_GET_REVISION: Network.GET,

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/latest
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP, {group_id:, url:}, query);
  WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP: Network.GET,

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_REVISION, {course_id:, url:, revision_id:}, query);
  WIKI_PAGES_GET_REVISION_BY_REVISION: Network.GET,

  // [Show revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.show_revision)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION, {group_id:, url:, revision_id:}, query);
  WIKI_PAGES_GET_REVISION_BY_GROUPS_AND_GROUP_AND_REVISION: Network.GET,

  // [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
  // Api Url: /api/v1/courses/:course_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVERT, {course_id:, url:, revision_id:}, query);
  WIKI_PAGES_REVERT: Network.POST,

  // [Revert to revision)](https://canvas.instructure.com/doc/api/all_resources.html#method.wiki_pages_api.revert)
  // Api Url: /api/v1/groups/:group_id/pages/:url/revisions/:revision_id
  // return canvasRequest(CanvasConstants.WIKI_PAGES_REVERT_BY_GROUPS_AND_GROUP, {group_id:, url:, revision_id:}, query);
  WIKI_PAGES_REVERT_BY_GROUPS_AND_GROUP: Network.POST,

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_S, {course_id:, assignment_id:}, query);
  PEER_REVIEWS_S: Network.GET,

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_S_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  PEER_REVIEWS_S_BY_SECTIONS_AND_SECTION: Network.GET,

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_S_BY_SUBMISSIONS_AND_SUBMISSION, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_S_BY_SUBMISSIONS_AND_SUBMISSION: Network.GET,

  // [Get all Peer Reviews)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_S_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_S_BY_SECTIONS_AND_SECTION_AND_SUBMISSIONS_AND_SUBMISSION: Network.GET,

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_CREATE, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_CREATE: Network.POST,

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.create)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_CREATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_CREATE_BY_SECTIONS_AND_SECTION: Network.POST,

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_DELETE, {course_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_DELETE: Network.DELETE,

  // [Create Peer Review)](https://canvas.instructure.com/doc/api/all_resources.html#method.peer_reviews_api.destroy)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:submission_id/peer_reviews
  // return canvasRequest(CanvasConstants.PEER_REVIEWS_DELETE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, submission_id:}, query);
  PEER_REVIEWS_DELETE_BY_SECTIONS_AND_SECTION: Network.DELETE,

  // [List poll sessions for a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.index)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSIONS, {poll_id:}, query);
  POLLING_POLL_SESSIONS: Network.GET,

  // [Get the results for a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.show)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_GET, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_GET: Network.GET,

  // [Create a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.create)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CREATE, {poll_id:}, query);
  POLLING_POLL_SESSION_CREATE: Network.POST,

  // [Update a single poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.update)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_UPDATE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_UPDATE: Network.PUT,

  // [Delete a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.destroy)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_DELETE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_DELETE: Network.DELETE,

  // [Open a poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.open)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/open
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_OPEN, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_OPEN: Network.GET,

  // [Close an opened poll session)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.close)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:id/close
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CLOSE, {poll_id:, id:}, query);
  POLLING_POLL_SESSION_CLOSE: Network.GET,

  // [List opened poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.opened)
  // Api Url: /api/v1/poll_sessions/opened
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_OPENED, {}, query);
  POLLING_POLL_SESSION_OPENED: Network.GET,

  // [List closed poll sessions)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_sessions.closed)
  // Api Url: /api/v1/poll_sessions/closed
  // return canvasRequest(CanvasConstants.POLLING_POLL_SESSION_CLOSED, {}, query);
  POLLING_POLL_SESSION_CLOSED: Network.GET,

  // [List poll choices in a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.index)
  // Api Url: /api/v1/polls/:poll_id/poll_choices
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICES, {poll_id:}, query);
  POLLING_POLL_CHOICES: Network.GET,

  // [Get a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.show)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_GET, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_GET: Network.GET,

  // [Create a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.create)
  // Api Url: /api/v1/polls/:poll_id/poll_choices
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_CREATE, {poll_id:}, query);
  POLLING_POLL_CHOICE_CREATE: Network.POST,

  // [Update a single poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.update)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_UPDATE, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_UPDATE: Network.PUT,

  // [Delete a poll choice)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_choices.destroy)
  // Api Url: /api/v1/polls/:poll_id/poll_choices/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_CHOICE_DELETE, {poll_id:, id:}, query);
  POLLING_POLL_CHOICE_DELETE: Network.DELETE,

  // [Get a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.show)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_SUBMISSION_GET, {poll_id:, poll_session_id:, id:}, query);
  POLLING_POLL_SUBMISSION_GET: Network.GET,

  // [Create a single poll submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/poll_submissions.create)
  // Api Url: /api/v1/polls/:poll_id/poll_sessions/:poll_session_id/poll_submissions
  // return canvasRequest(CanvasConstants.POLLING_POLL_SUBMISSION_CREATE, {poll_id:, poll_session_id:}, query);
  POLLING_POLL_SUBMISSION_CREATE: Network.POST,

  // [List polls)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.index)
  // Api Url: /api/v1/polls
  // return canvasRequest(CanvasConstants.POLLING_POLLS, {}, query);
  POLLING_POLLS: Network.GET,

  // [Get a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.show)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_GET, {id:}, query);
  POLLING_POLL_GET: Network.GET,

  // [Create a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.create)
  // Api Url: /api/v1/polls
  // return canvasRequest(CanvasConstants.POLLING_POLL_CREATE, {}, query);
  POLLING_POLL_CREATE: Network.POST,

  // [Update a single poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.update)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_UPDATE, {id:}, query);
  POLLING_POLL_UPDATE: Network.PUT,

  // [Delete a poll)](https://canvas.instructure.com/doc/api/all_resources.html#method.polling/polls.destroy)
  // Api Url: /api/v1/polls/:id
  // return canvasRequest(CanvasConstants.POLLING_POLL_DELETE, {id:}, query);
  POLLING_POLL_DELETE: Network.DELETE,

  // [Query progress)](https://canvas.instructure.com/doc/api/all_resources.html#method.progress.show)
  // Api Url: /api/v1/progress/:id
  // return canvasRequest(CanvasConstants.PROGRES_GET, {id:}, query);
  PROGRES_GET: Network.GET,

  // [Retrieve assignment-overridden dates for quizzes)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_assignment_overrides.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/assignment_overrides
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_ASSIGNMENT_OVERRIDES, {course_id:}, query);
  QUIZZES_QUIZ_ASSIGNMENT_OVERRIDES: Network.GET,

  // [Set extensions for student quiz submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_extensions.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/extensions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_EXTENSION_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_EXTENSION_CREATE: Network.POST,

  // [Get available quiz IP filters.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_ip_filters.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/ip_filters
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_IP_FILTERS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_IP_FILTERS: Network.GET,

  // [Get a single quiz group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_GET: Network.GET,

  // [Create a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_GROUP_CREATE: Network.POST,

  // [Update a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_UPDATE: Network.PUT,

  // [Delete a question group)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_DELETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_DELETE: Network.DELETE,

  // [Reorder question groups)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_groups.reorder)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/groups/:id/reorder
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_GROUP_REORDER, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_GROUP_REORDER: Network.POST,

  // [List questions in a quiz or a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTIONS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_QUESTIONS: Network.GET,

  // [Get a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_GET: Network.GET,

  // [Create a single quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_QUESTION_CREATE: Network.POST,

  // [Update an existing quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_UPDATE: Network.PUT,

  // [Delete a quiz question)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_questions.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/questions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_QUESTION_DELETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_QUESTION_DELETE: Network.DELETE,

  // [Retrieve all quiz reports)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORTS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_REPORTS: Network.GET,

  // [Create a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_REPORT_CREATE: Network.POST,

  // [Get a quiz report)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_REPORT_GET: Network.GET,

  // [Abort the generation of a report, or remove a previously generated one)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_reports.abort)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/reports/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_REPORT_ABORT, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_REPORT_ABORT: Network.DELETE,

  // [Fetching the latest quiz statistics)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_statistics.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/statistics
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_STATISTICS, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_STATISTICS: Network.GET,

  // [Submit captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_EVENTS_CREATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_EVENTS_CREATE: Network.POST,

  // [Retrieve captured events)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_events_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/events
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_EVENTS_S, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_EVENTS_S: Network.GET,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_files.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/self/files
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_FILE_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_FILE_CREATE: Network.POST,

  // [Get all quiz submission questions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.index)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTIONS, {quiz_submission_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTIONS: Network.GET,

  // [Answering questions)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.answer)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_ANSWER, {quiz_submission_id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_ANSWER: Network.POST,

  // [Flagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.flag)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/flag
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_FLAG, {quiz_submission_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_FLAG: Network.PUT,

  // [Unflagging a question.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_questions.unflag)
  // Api Url: /api/v1/quiz_submissions/:quiz_submission_id/questions/:id/unflag
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_QUESTION_UNFLAG, {quiz_submission_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_QUESTION_UNFLAG: Network.PUT,

  // [Send a message to unsubmitted or submitted users for the quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submission_users.message)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/submission_users/message
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSION_USER_MESSAGE, {course_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSION_USER_MESSAGE: Network.POST,

  // [Get all quiz submissions.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_S, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_S: Network.GET,

  // [Get a single quiz submission.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_GET, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_GET: Network.GET,

  // [Create the quiz submission (start a quiz-taking session))](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_CREATE, {course_id:, quiz_id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_CREATE: Network.POST,

  // [Update student question scores and comments.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_UPDATE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_UPDATE: Network.PUT,

  // [Complete the quiz submission (turn it in).)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.complete)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/complete
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_COMPLETE, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_COMPLETE: Network.POST,

  // [Get current quiz submission times.)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quiz_submissions_api.time)
  // Api Url: /api/v1/courses/:course_id/quizzes/:quiz_id/submissions/:id/time
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZ_SUBMISSIONS_TIME, {course_id:, quiz_id:, id:}, query);
  QUIZZES_QUIZ_SUBMISSIONS_TIME: Network.GET,

  // [List quizzes in a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.index)
  // Api Url: /api/v1/courses/:course_id/quizzes
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_S, {course_id:}, query);
  QUIZZES_QUIZZES_S: Network.GET,

  // [Get a single quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.show)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_GET, {course_id:, id:}, query);
  QUIZZES_QUIZZES_GET: Network.GET,

  // [Create a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.create)
  // Api Url: /api/v1/courses/:course_id/quizzes
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_CREATE, {course_id:}, query);
  QUIZZES_QUIZZES_CREATE: Network.POST,

  // [Edit a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.update)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_UPDATE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_UPDATE: Network.PUT,

  // [Delete a quiz)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.destroy)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_DELETE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_DELETE: Network.DELETE,

  // [Reorder quiz items)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.reorder)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/reorder
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_REORDER, {course_id:, id:}, query);
  QUIZZES_QUIZZES_REORDER: Network.POST,

  // [Validate quiz access code)](https://canvas.instructure.com/doc/api/all_resources.html#method.quizzes/quizzes_api.validate_access_code)
  // Api Url: /api/v1/courses/:course_id/quizzes/:id/validate_access_code
  // return canvasRequest(CanvasConstants.QUIZZES_QUIZZES_VALIDATE_ACCESS_CODE, {course_id:, id:}, query);
  QUIZZES_QUIZZES_VALIDATE_ACCESS_CODE: Network.POST,

  // [List roles)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.api_index)
  // Api Url: /api/v1/accounts/:account_id/roles
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_INDEX, {account_id:}, query);
  ROLE_OVERRIDE_INDEX: Network.GET,

  // [Get a single role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.show)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_GET, {account_id:, id:}, query);
  ROLE_OVERRIDE_GET: Network.GET,

  // [Create a new role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.add_role)
  // Api Url: /api/v1/accounts/:account_id/roles
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_ADD_ROLE, {account_id:}, query);
  ROLE_OVERRIDE_ADD_ROLE: Network.POST,

  // [Deactivate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.remove_role)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_REMOVE_ROLE, {account_id:, id:}, query);
  ROLE_OVERRIDE_REMOVE_ROLE: Network.DELETE,

  // [Activate a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.activate_role)
  // Api Url: /api/v1/accounts/:account_id/roles/:id/activate
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_ACTIVATE_ROLE, {account_id:, id:}, query);
  ROLE_OVERRIDE_ACTIVATE_ROLE: Network.POST,

  // [Update a role)](https://canvas.instructure.com/doc/api/all_resources.html#method.role_overrides.update)
  // Api Url: /api/v1/accounts/:account_id/roles/:id
  // return canvasRequest(CanvasConstants.ROLE_OVERRIDE_UPDATE, {account_id:, id:}, query);
  ROLE_OVERRIDE_UPDATE: Network.PUT,

  // [Get SIS import list)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.index)
  // Api Url: /api/v1/accounts/:account_id/sis_imports
  // return canvasRequest(CanvasConstants.SIS_IMPORTS_S, {account_id:}, query);
  SIS_IMPORTS_S: Network.GET,

  // [Import SIS data)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.create)
  // Api Url: /api/v1/accounts/:account_id/sis_imports
  // return canvasRequest(CanvasConstants.SIS_IMPORTS_CREATE, {account_id:}, query);
  SIS_IMPORTS_CREATE: Network.POST,

  // [Get SIS import status)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_imports_api.show)
  // Api Url: /api/v1/accounts/:account_id/sis_imports/:id
  // return canvasRequest(CanvasConstants.SIS_IMPORTS_GET, {account_id:, id:}, query);
  SIS_IMPORTS_GET: Network.GET,

  // [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
  // Api Url: /api/sis/accounts/:account_id/assignments
  // return canvasRequest(CanvasConstants.SIS_SIS_ASSIGNMENTS, {account_id:}, query);
  SIS_SIS_ASSIGNMENTS: Network.GET,

  // [Retrieve assignments enabled for grade export to SIS)](https://canvas.instructure.com/doc/api/all_resources.html#method.sis_api.sis_assignments)
  // Api Url: /api/sis/courses/:course_id/assignments
  // return canvasRequest(CanvasConstants.SIS_SIS_ASSIGNMENTS_BY_COURSES_AND_COURSE, {course_id:}, query);
  SIS_SIS_ASSIGNMENTS_BY_COURSES_AND_COURSE: Network.GET,

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
  // Api Url: /api/v1/conversations/find_recipients
  // return canvasRequest(CanvasConstants.SEARCH_RECIPIENTS, {}, query);
  SEARCH_RECIPIENTS: Network.GET,

  // [Find recipients)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.recipients)
  // Api Url: /api/v1/search/recipients
  // return canvasRequest(CanvasConstants.SEARCH_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS, {}, query);
  SEARCH_RECIPIENTS_BY_SEARCH_AND_RECIPIENTS: Network.GET,

  // [List all courses)](https://canvas.instructure.com/doc/api/all_resources.html#method.search.all_courses)
  // Api Url: /api/v1/search/all_courses
  // return canvasRequest(CanvasConstants.SEARCH_ALL_COURSES, {}, query);
  SEARCH_ALL_COURSES: Network.GET,

  // [List course sections)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.index)
  // Api Url: /api/v1/courses/:course_id/sections
  // return canvasRequest(CanvasConstants.SECTIONS, {course_id:}, query);
  SECTIONS: Network.GET,

  // [Create course section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.create)
  // Api Url: /api/v1/courses/:course_id/sections
  // return canvasRequest(CanvasConstants.SECTION_CREATE, {course_id:}, query);
  SECTION_CREATE: Network.POST,

  // [Cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.crosslist)
  // Api Url: /api/v1/sections/:id/crosslist/:new_course_id
  // return canvasRequest(CanvasConstants.SECTION_CROSSLIST, {id:, new_course_id:}, query);
  SECTION_CROSSLIST: Network.POST,

  // [De-cross-list a Section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.uncrosslist)
  // Api Url: /api/v1/sections/:id/crosslist
  // return canvasRequest(CanvasConstants.SECTION_UNCROSSLIST, {id:}, query);
  SECTION_UNCROSSLIST: Network.DELETE,

  // [Edit a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.update)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_UPDATE, {id:}, query);
  SECTION_UPDATE: Network.PUT,

  // [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
  // Api Url: /api/v1/courses/:course_id/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_GET, {course_id:, id:}, query);
  SECTION_GET: Network.GET,

  // [Get section information)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.show)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_GET, {id:}, query);
  SECTION_GET: Network.GET,

  // [Delete a section)](https://canvas.instructure.com/doc/api/all_resources.html#method.sections.destroy)
  // Api Url: /api/v1/sections/:id
  // return canvasRequest(CanvasConstants.SECTION_DELETE, {id:}, query);
  SECTION_DELETE: Network.DELETE,

  // [Get Kaltura config)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.show_kaltura_config)
  // Api Url: /api/v1/services/kaltura
  // return canvasRequest(CanvasConstants.SERVICES_GET_KALTURA_CONFIG, {}, query);
  SERVICES_GET_KALTURA_CONFIG: Network.GET,

  // [Start Kaltura session)](https://canvas.instructure.com/doc/api/all_resources.html#method.services_api.start_kaltura_session)
  // Api Url: /api/v1/services/kaltura_session
  // return canvasRequest(CanvasConstants.SERVICES_START_KALTURA_SESSION, {}, query);
  SERVICES_START_KALTURA_SESSION: Network.POST,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submission_comments_api.create_file)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/comments/files
  // return canvasRequest(CanvasConstants.SUBMISSION_COMMENTS_CREATE_FILE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSION_COMMENTS_CREATE_FILE: Network.POST,

  // [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSION_CREATE, {course_id:, assignment_id:}, query);
  SUBMISSION_CREATE: Network.POST,

  // [Submit an assignment)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions.create)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSION_CREATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  SUBMISSION_CREATE_BY_SECTIONS_AND_SECTION: Network.POST,

  // [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_S, {course_id:, assignment_id:}, query);
  SUBMISSIONS_S: Network.GET,

  // [List assignment submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.index)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_S_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:}, query);
  SUBMISSIONS_S_BY_SECTIONS_AND_SECTION: Network.GET,

  // [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
  // Api Url: /api/v1/courses/:course_id/students/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_FOR_STUDENTS, {course_id:}, query);
  SUBMISSIONS_FOR_STUDENTS: Network.GET,

  // [List submissions for multiple assignments)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.for_students)
  // Api Url: /api/v1/sections/:section_id/students/submissions
  // return canvasRequest(CanvasConstants.SUBMISSIONS_FOR_STUDENTS_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  SUBMISSIONS_FOR_STUDENTS_BY_SECTIONS_AND_SECTION: Network.GET,

  // [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GET, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_GET: Network.GET,

  // [Get a single submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.show)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GET_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_GET_BY_SECTIONS_AND_SECTION: Network.GET,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/files
  // return canvasRequest(CanvasConstants.SUBMISSIONS_CREATE_FILE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_CREATE_FILE: Network.POST,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.create_file)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/files
  // return canvasRequest(CanvasConstants.SUBMISSIONS_CREATE_FILE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_CREATE_FILE_BY_SECTIONS_AND_SECTION: Network.POST,

  // [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_UPDATE, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_UPDATE: Network.PUT,

  // [Grade or comment on a submission)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.update)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id
  // return canvasRequest(CanvasConstants.SUBMISSIONS_UPDATE_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_UPDATE_BY_SECTIONS_AND_SECTION: Network.PUT,

  // [List gradeable students)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.gradeable_students)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/gradeable_students
  // return canvasRequest(CanvasConstants.SUBMISSIONS_GRADEABLE_STUDENTS, {course_id:, assignment_id:}, query);
  SUBMISSIONS_GRADEABLE_STUDENTS: Network.GET,

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/courses/:course_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE, {course_id:}, query);
  SUBMISSIONS_BULK_UPDATE: Network.POST,

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_ASSIGNMENTS_AND_ASSIGNMENT, {course_id:, assignment_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_ASSIGNMENTS_AND_ASSIGNMENT: Network.POST,

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/sections/:section_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION, {section_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION: Network.POST,

  // [Grade or comment on multiple submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.bulk_update)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/update_grades
  // return canvasRequest(CanvasConstants.SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT, {section_id:, assignment_id:}, query);
  SUBMISSIONS_BULK_UPDATE_BY_SECTIONS_AND_SECTION_AND_ASSIGNMENTS_AND_ASSIGNMENT: Network.POST,

  // [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_READ, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_READ: Network.PUT,

  // [Mark submission as read)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_read)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_READ_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_READ_BY_SECTIONS_AND_SECTION: Network.PUT,

  // [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
  // Api Url: /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_UNREAD, {course_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_UNREAD: Network.DELETE,

  // [Mark submission as unread)](https://canvas.instructure.com/doc/api/all_resources.html#method.submissions_api.mark_submission_unread)
  // Api Url: /api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/read
  // return canvasRequest(CanvasConstants.SUBMISSIONS_MARK_SUBMISSION_UNREAD_BY_SECTIONS_AND_SECTION, {section_id:, assignment_id:, user_id:}, query);
  SUBMISSIONS_MARK_SUBMISSION_UNREAD_BY_SECTIONS_AND_SECTION: Network.DELETE,

  // [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
  // Api Url: /api/v1/courses/:course_id/tabs
  // return canvasRequest(CanvasConstants.TABS, {course_id:}, query);
  TABS: Network.GET,

  // [List available tabs for a course or group)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.index)
  // Api Url: /api/v1/groups/:group_id/tabs
  // return canvasRequest(CanvasConstants.TABS_BY_GROUPS_AND_GROUP, {group_id:}, query);
  TABS_BY_GROUPS_AND_GROUP: Network.GET,

  // [Update a tab for a course)](https://canvas.instructure.com/doc/api/all_resources.html#method.tabs.update)
  // Api Url: /api/v1/courses/:course_id/tabs/:tab_id
  // return canvasRequest(CanvasConstants.TAB_UPDATE, {course_id:, tab_id:}, query);
  TAB_UPDATE: Network.PUT,

  // [List observees)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.index)
  // Api Url: /api/v1/users/:user_id/observees
  // return canvasRequest(CanvasConstants.USER_OBSERVEES, {user_id:}, query);
  USER_OBSERVEES: Network.GET,

  // [Add an observee with credentials)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.create)
  // Api Url: /api/v1/users/:user_id/observees
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_CREATE, {user_id:}, query);
  USER_OBSERVEE_CREATE: Network.POST,

  // [Show an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.show)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_GET, {user_id:, observee_id:}, query);
  USER_OBSERVEE_GET: Network.GET,

  // [Add an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.update)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_UPDATE, {user_id:, observee_id:}, query);
  USER_OBSERVEE_UPDATE: Network.PUT,

  // [Remove an observee)](https://canvas.instructure.com/doc/api/all_resources.html#method.user_observees.destroy)
  // Api Url: /api/v1/users/:user_id/observees/:observee_id
  // return canvasRequest(CanvasConstants.USER_OBSERVEE_DELETE, {user_id:, observee_id:}, query);
  USER_OBSERVEE_DELETE: Network.DELETE,

  // [List users in account)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.index)
  // Api Url: /api/v1/accounts/:account_id/users
  // return canvasRequest(CanvasConstants.USERS, {account_id:}, query);
  USERS: Network.GET,

  // [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
  // Api Url: /api/v1/users/self/activity_stream
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM, {}, query);
  USER_ACTIVITY_STREAM: Network.GET,

  // [List the activity stream)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream)
  // Api Url: /api/v1/users/activity_stream
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM, {}, query);
  USER_ACTIVITY_STREAM: Network.GET,

  // [Activity stream summary)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.activity_stream_summary)
  // Api Url: /api/v1/users/self/activity_stream/summary
  // return canvasRequest(CanvasConstants.USER_ACTIVITY_STREAM_SUMMARY, {}, query);
  USER_ACTIVITY_STREAM_SUMMARY: Network.GET,

  // [List the TODO items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.todo_items)
  // Api Url: /api/v1/users/self/todo
  // return canvasRequest(CanvasConstants.USER_TODO_ITEMS, {}, query);
  USER_TODO_ITEMS: Network.GET,

  // [List upcoming assignments, calendar events)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.upcoming_events)
  // Api Url: /api/v1/users/self/upcoming_events
  // return canvasRequest(CanvasConstants.USER_UPCOMING_EVENTS, {}, query);
  USER_UPCOMING_EVENTS: Network.GET,

  // [List Missing Submissions)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.missing_submissions)
  // Api Url: /api/v1/users/:user_id/missing_submissions
  // return canvasRequest(CanvasConstants.USER_MISSING_SUBMISSIONS, {user_id:}, query);
  USER_MISSING_SUBMISSIONS: Network.GET,

  // [Hide a stream item)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_stream_item)
  // Api Url: /api/v1/users/self/activity_stream/:id
  // return canvasRequest(CanvasConstants.USER_IGNORE_STREAM_ITEM, {id:}, query);
  USER_IGNORE_STREAM_ITEM: Network.DELETE,

  // [Hide all stream items)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.ignore_all_stream_items)
  // Api Url: /api/v1/users/self/activity_stream
  // return canvasRequest(CanvasConstants.USER_IGNORE_ALL_STREAM_ITEMS, {}, query);
  USER_IGNORE_ALL_STREAM_ITEMS: Network.DELETE,

  // [Upload a file)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_file)
  // Api Url: /api/v1/users/:user_id/files
  // return canvasRequest(CanvasConstants.USER_CREATE_FILE, {user_id:}, query);
  USER_CREATE_FILE: Network.POST,

  // [Show user details)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.api_show)
  // Api Url: /api/v1/users/:id
  // return canvasRequest(CanvasConstants.USER_SHOW, {id:}, query);
  USER_SHOW: Network.GET,

  // [Create a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create)
  // Api Url: /api/v1/accounts/:account_id/users
  // return canvasRequest(CanvasConstants.USER_CREATE, {account_id:}, query);
  USER_CREATE: Network.POST,

  // [Self register a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.create_self_registered_user)
  // Api Url: /api/v1/accounts/:account_id/self_registration
  // return canvasRequest(CanvasConstants.USER_CREATE_SELF_REGISTERED_USER, {account_id:}, query);
  USER_CREATE_SELF_REGISTERED_USER: Network.POST,

  // [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
  // Api Url: /api/v1/users/:id/settings
  // return canvasRequest(CanvasConstants.USER_SETTINGS, {id:}, query);
  USER_SETTINGS: Network.GET,

  // [Update user settings.)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.settings)
  // Api Url: /api/v1/users/:id/settings
  // return canvasRequest(CanvasConstants.USER_SETTINGS, {id:}, query);
  USER_SETTINGS: Network.PUT,

  // [Get custom colors)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_colors)
  // Api Url: /api/v1/users/:id/colors
  // return canvasRequest(CanvasConstants.USER_GET_CUSTOM_COLORS, {id:}, query);
  USER_GET_CUSTOM_COLORS: Network.GET,

  // [Get custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.get_custom_color)
  // Api Url: /api/v1/users/:id/colors/:asset_string
  // return canvasRequest(CanvasConstants.USER_GET_CUSTOM_COLOR, {id:, asset_string:}, query);
  USER_GET_CUSTOM_COLOR: Network.GET,

  // [Update custom color)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.set_custom_color)
  // Api Url: /api/v1/users/:id/colors/:asset_string
  // return canvasRequest(CanvasConstants.USER_SET_CUSTOM_COLOR, {id:, asset_string:}, query);
  USER_SET_CUSTOM_COLOR: Network.PUT,

  // [Edit a user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.update)
  // Api Url: /api/v1/users/:id
  // return canvasRequest(CanvasConstants.USER_UPDATE, {id:}, query);
  USER_UPDATE: Network.PUT,

  // [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
  // Api Url: /api/v1/users/:id/merge_into/:destination_user_id
  // return canvasRequest(CanvasConstants.USER_MERGE_INTO, {id:, destination_user_id:}, query);
  USER_MERGE_INTO: Network.PUT,

  // [Merge user into another user)](https://canvas.instructure.com/doc/api/all_resources.html#method.users.merge_into)
  // Api Url: /api/v1/users/:id/merge_into/accounts/:destination_account_id/users/:destination_user_id
  // return canvasRequest(CanvasConstants.USER_MERGE_INTO_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT, {id:, destination_account_id:, destination_user_id:}, query);
  USER_MERGE_INTO_BY_ACCOUNTS_AND_DESTINATION_ACCOUNT: Network.PUT,

  // [Get user profile)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.settings)
  // Api Url: /api/v1/users/:user_id/profile
  // return canvasRequest(CanvasConstants.PROFILE_SETTINGS, {user_id:}, query);
  PROFILE_SETTINGS: Network.GET,

  // [List avatar options)](https://canvas.instructure.com/doc/api/all_resources.html#method.profile.profile_pics)
  // Api Url: /api/v1/users/:user_id/avatars
  // return canvasRequest(CanvasConstants.PROFILE_PROFILE_PICS, {user_id:}, query);
  PROFILE_PROFILE_PICS: Network.GET,

  // [List user page views)](https://canvas.instructure.com/doc/api/all_resources.html#method.page_views.index)
  // Api Url: /api/v1/users/:user_id/page_views
  // return canvasRequest(CanvasConstants.PAGE_VIEWS, {user_id:}, query);
  PAGE_VIEWS: Network.GET,

  // [Store custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.set_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_SET_DATA, {user_id:}, query);
  CUSTOM_DATA_SET_DATA: Network.PUT,

  // [Load custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.get_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_GET_DATA, {user_id:}, query);
  CUSTOM_DATA_GET_DATA: Network.GET,

  // [Delete custom data)](https://canvas.instructure.com/doc/api/all_resources.html#method.custom_data.delete_data)
  // Api Url: /api/v1/users/:user_id/custom_data(/*scope)
  // return canvasRequest(CanvasConstants.CUSTOM_DATA_DELETE_DATA, {user_id:}, query);
  CUSTOM_DATA_DELETE_DATA: Network.DELETE,

  // [List course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.index)
  // Api Url: /api/v1/users/self/course_nicknames
  // return canvasRequest(CanvasConstants.COURSE_NICKNAMES, {}, query);
  COURSE_NICKNAMES: Network.GET,

  // [Get course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.show)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_GET, {course_id:}, query);
  COURSE_NICKNAME_GET: Network.GET,

  // [Set course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.update)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_UPDATE, {course_id:}, query);
  COURSE_NICKNAME_UPDATE: Network.PUT,

  // [Remove course nickname)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.delete)
  // Api Url: /api/v1/users/self/course_nicknames/:course_id
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_DELETE, {course_id:}, query);
  COURSE_NICKNAME_DELETE: Network.DELETE,

  // [Clear course nicknames)](https://canvas.instructure.com/doc/api/all_resources.html#method.course_nicknames.clear)
  // Api Url: /api/v1/users/self/course_nicknames
  // return canvasRequest(CanvasConstants.COURSE_NICKNAME_CLEAR, {}, query);
  COURSE_NICKNAME_CLEAR: Network.DELETE,

  // [Show ePub export)](https://canvas.instructure.com/doc/api/all_resources.html#method.epub_exports.show)
  // Api Url: /api/v1/courses/:course_id/epub_exports/:id
  // return canvasRequest(CanvasConstants.EPUB_EXPORT_GET, {course_id:, id:}, query);
  EPUB_EXPORT_GET: Network.GET,


};

const requests = _.map(CanvasMethods, (v, k) => {
  return k;
});

const CanvasConstants = wrapper([], requests);

export { CanvasMethods };
export { CanvasConstants };
