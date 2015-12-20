import wrapper from "./constants_wrapper";

const actionTypes = [];
const asyncActionTypes = [

  // Accounts
  "ACCOUNTS_LOAD",

  //Admins
  "ACCOUNT_ADMINS",
  "REMOVE_ADMINS"

  //Analytics
  "ACCOUNT_TERM_ANALYTICS",
  "ACCOUNT_CURRENT_ANALYTICS",
  "ACCOUNT_COMPLETED_ANALYTICS",
      //grades
  "ACCOUNT_TERM_ANALYTICS_GRADES",
  "ACCOUNT_CURRENT_ANALYTICS_GRADES",
  "ACCOUNT_COMPLETED_ANALYTICS_GRADES",
      //statistics
  "ACCOUNT_TERM_ANALYTICS_STATISTICS",
  "ACCOUNT_CURRENT_ANALYTICS_STATISTICS",
  "ACCOUNT_COMPLETED_ANALYTICS_STATISTICS",
      //course-level
  "COURSE_ANALYTICS",
  "COURSE_ANALYTICS_ASSIGNMENTS",

  // Courses


];

export default wrapper(actionTypes, asyncActionTypes);