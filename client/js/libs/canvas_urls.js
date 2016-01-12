


const CanvasUrls = {
  //ADMINS
  "ACCOUNT_ADMINS": `/api/v1/accounts/${account_id}/admins`,
  "REMOVE_ADMINS": `/api/v1/accounts/${account_id}/admins/${user_id}`,
  // ACCOUNTS
  "ACCOUNTS_LOAD": `/api/v1/accounts`,
  "ACCOUNT_LOAD": `/api/v1/accounts/${accountId}`,
  "COURSE_ACCOUNTS": `/api/v1/course_accounts`,
  "SUB_ACCOUNTS": `/api/v1/accounts/${accountId}/sub_accounts`,
  "COURSES": `/api/v1/accounts/${accountId}/courses`,
  "UPDATE_ACCOUNT": `/api/v1/accounts/${accountId}`,
  "DELETE_ACCOUNT": `/api/v1/accounts/${accountId}/user/${userId}`,
  "CREATE_SUB_ACCOUNT": `api/v1/accounts/${accountId}/sub_accounts`,
  //ANALYTICS
  "ACCOUNT_TERM_ANALYTICS": `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/activity`,
  "ACCOUNT_CURRENT_ANALYTICS": `/api/v1/accounts/${account_id}/analytics/current/activity`,
  "ACCOUNT_COMPLETED_ANALYTICS": `/api/v1/accounts/${account_id}/analytics/completed/activity`,
      //grades
  "ACCOUNT_TERM_ANALYTICS_GRADES": `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/grades`,
  "ACCOUNT_CURRENT_ANALYTICS_GRADES": `/api/v1/accounts/${account_id}/analytics/current/grades`,
  "ACCOUNT_COMPLETED_ANALYTICS_GRADES": `/api/v1/accounts/${account_id}/analytics/completed/grades`,
      //statistics
  "ACCOUNT_TERM_ANALYTICS_STATISTICS": `/api/v1/accounts/${account_id}/analytics/terms/${term_id}/statistics`,
  "ACCOUNT_CURRENT_ANALYTICS_STATISTICS": `/api/v1/accounts/${account_id}/analytics/current/statistics`,
  "ACCOUNT_COMPLETED_ANALYTICS_STATISTICS": `/api/v1/accounts/${account_id}/analytics/completed/statistics`,
      //course-level
  "COURSE_ANALYTICS": `/api/v1/courses/${course_id}/analytics/activity`,
  "COURSE_ANALYTICS_ASSIGNMENTS": `/api/v1/courses/${course_id}/analytics/assignments`,
  "COURSE_ANALYTICS_STUDENT_SUMMARIES": `/api/v1/courses/${course_id}/analytics/student_summaries`,
  "COURSE_ANALYTICS_STUDENT_ID": `/api/v1/courses/${course_id}/analytics/users/${student_id}/activity`,
  "COURSE_ANALYTICS_STUDENT_ASSIGNMENTS": `/api/v1/courses/${course_id}/analytics/users/${student_id}/assignments`,
  "COURSE_ANALYTICS_STUDENT_MESSAGE": `/api/v1/courses/${course_id}/analytics/users/${student_id}/communication`,
  //EXTERNAL FEEDS
  "COURSE_EXTERNAL_FEEDS": `/api/v1/courses/${course_id}/external_feeds`,
  "GROUP_EXTERNAL_FEEDS": `/api/v1/groups/${groups_id}/external_feeds`,
  "COURSE_EXTERNAL_FEED": `/api/v1/courses/${course_id}/external_feeds/${external_feed_id}`,
  "GROUP_EXTERNAL_FEED": `/api/v1/groups/${groups_id}/external_feeds/${external_feed_id}`,
  // ASSIGNMENT GROUP







  "COURSE_ASSIGNMENT_GROUPS": `/api/v1/courses/${course_id}/assignment_groups`,
  "COURSE_ASSIGNMENT_SINGLE_GROUP": `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`,
  "COURSE_ASSIGNMENT_SINGLE_GROUP_EDIT": `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`,
  "COURSE_ASSIGNMENT_SINGLE_GROUP_DEL": `/api/v1/courses/${course_id}/assignment_groups/${assignment_group_id}`,






   //ASSIGNMENT OVERRIDE
  "LIST_OVERRIDE_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides`,
  "OVERRIDE_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments/${assignment_id}/overrides/${id}`,
  "LIST_OVERRIDE_ASSIGNMENT_GROUP": `/api/v1/courses/${group_id}/assignments/${assignment_id}/override`,
  //ASSIGNMENTS
  "DELETE_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments/${assignment_id}`,
  "LIST_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments`,
  "SINGLE_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments/${assignment_id}`,
  "EDIT_ASSIGNMENT": `/api/v1/courses/${course_id}/assignments/${assignment_id}`,

  //Appointment Groups
  "LIST_APPOINTMENT_GROUPS": `/api/v1/appointment_groups`,
  "CREATE_APPOINTMENT_ACCOUNT": `/api/v1/appointment_groups`,
  "SINGLE_APPOINTMENT_GROUP": `/api/v1/appointment_groups/${accountId}`,
  "UPDATE_APPOINTMENT_GROUPS": `/api/v1/appointment_groups/${accountId}`,
  "DELETE_APPOINMENT_GROUP": `/api/v1/appointment_groups/${accountId}`,
  "LIST_USER_PARTICIPANTS": `/api/v1/appointment_groups/${accountId}/users`,
  "STUDENT_GROUP_PARTICIPANTS":`/api/v1/appointment_groups/${accountId}/groups`,

  //SUBMISSIONS
  "LIIST_ASSIGNMENT_SUBMISSIONS": `/api/v1/courses/:course_id/assignments/:assignment_id/submissions`,
};
