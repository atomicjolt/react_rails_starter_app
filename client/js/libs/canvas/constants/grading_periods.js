//
// Grading Periods
//
// List grading periods
// Returns the list of grading periods for the current course.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods
//
// Example:
// return canvasRequest(list_grading_periods_courses, {course_id});
export const list_grading_periods_courses = { type: "LIST_GRADING_PERIODS_COURSES", method: "get", reducer: 'grading_periods'};

// List grading periods
// Returns the list of grading periods for the current course.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods
//
// Example:
// return canvasRequest(list_grading_periods_accounts, {account_id});
export const list_grading_periods_accounts = { type: "LIST_GRADING_PERIODS_ACCOUNTS", method: "get", reducer: 'grading_periods'};

// Get a single grading period
// Returns the grading period with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(get_single_grading_period_courses, {course_id, id});
export const get_single_grading_period_courses = { type: "GET_SINGLE_GRADING_PERIOD_COURSES", method: "get", reducer: 'grading_periods'};

// Get a single grading period
// Returns the grading period with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(get_single_grading_period_accounts, {account_id, id});
export const get_single_grading_period_accounts = { type: "GET_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "get", reducer: 'grading_periods'};

// Create a single grading period
// Create a new grading period for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods
//
// Example:
// const query = {
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(create_single_grading_period_courses, {course_id}, query);
export const create_single_grading_period_courses = { type: "CREATE_SINGLE_GRADING_PERIOD_COURSES", method: "post", reducer: 'grading_periods'};

// Create a single grading period
// Create a new grading period for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods
//
// Example:
// const query = {
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(create_single_grading_period_accounts, {account_id}, query);
export const create_single_grading_period_accounts = { type: "CREATE_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "post", reducer: 'grading_periods'};

// Update a single grading period
// Update an existing grading period.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// const query = {
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(update_single_grading_period_courses, {course_id, id}, query);
export const update_single_grading_period_courses = { type: "UPDATE_SINGLE_GRADING_PERIOD_COURSES", method: "put", reducer: 'grading_periods'};

// Update a single grading period
// Update an existing grading period.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
//
// Example:
// const query = {
//   grading_periods[start_date] (required)
//   grading_periods[end_date] (required)
//   grading_periods[weight]
// }
// return canvasRequest(update_single_grading_period_accounts, {account_id, id}, query);
export const update_single_grading_period_accounts = { type: "UPDATE_SINGLE_GRADING_PERIOD_ACCOUNTS", method: "put", reducer: 'grading_periods'};

// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: courses/{course_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_courses, {course_id, id});
export const delete_grading_period_courses = { type: "DELETE_GRADING_PERIOD_COURSES", method: "delete", reducer: 'grading_periods'};

// Delete a grading period
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_periods.html
// API Url: accounts/{account_id}/grading_periods/{id}
//
// Example:
// return canvasRequest(delete_grading_period_accounts, {account_id, id});
export const delete_grading_period_accounts = { type: "DELETE_GRADING_PERIOD_ACCOUNTS", method: "delete", reducer: 'grading_periods'};