//
// Rubrics
//
// List rubrics
// Returns the paginated list of active rubrics for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: accounts/{account_id}/rubrics
//
// Example:
// return canvasRequest(list_rubrics_accounts, {account_id});
export const list_rubrics_accounts = { type: "LIST_RUBRICS_ACCOUNTS", method: "get", key: "list_rubrics_accountslist_rubrics_accounts_account_id", required: ["account_id"] };

// List rubrics
// Returns the paginated list of active rubrics for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics
//
// Example:
// return canvasRequest(list_rubrics_courses, {course_id});
export const list_rubrics_courses = { type: "LIST_RUBRICS_COURSES", method: "get", key: "list_rubrics_courseslist_rubrics_courses_course_id", required: ["course_id"] };

// Get a single rubric
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: accounts/{account_id}/rubrics/{id}
//
// Example:
// const query = {
//   include
//   style
// }
// return canvasRequest(get_single_rubric_accounts, {account_id, id}, query);
export const get_single_rubric_accounts = { type: "GET_SINGLE_RUBRIC_ACCOUNTS", method: "get", key: "get_single_rubric_accountsget_single_rubric_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Get a single rubric
// Returns the rubric with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/rubrics.html
// API Url: courses/{course_id}/rubrics/{id}
//
// Example:
// const query = {
//   include
//   style
// }
// return canvasRequest(get_single_rubric_courses, {course_id, id}, query);
export const get_single_rubric_courses = { type: "GET_SINGLE_RUBRIC_COURSES", method: "get", key: "get_single_rubric_coursesget_single_rubric_courses_{course_id}_{id}", required: ["course_id","id"] };