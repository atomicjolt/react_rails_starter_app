//
// Grading Standards
//
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
//
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: accounts/{account_id}/grading_standards
//
// Example:
// const query = {
//   title (required)
//   grading_scheme_entry[name] (required)
//   grading_scheme_entry[value] (required)
// }
// return canvasRequest(create_new_grading_standard_accounts, {account_id}, query);
export const create_new_grading_standard_accounts = { type: "CREATE_NEW_GRADING_STANDARD_ACCOUNTS", method: "post", key: 'create_new_grading_standard_accounts'};

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
//
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: courses/{course_id}/grading_standards
//
// Example:
// const query = {
//   title (required)
//   grading_scheme_entry[name] (required)
//   grading_scheme_entry[value] (required)
// }
// return canvasRequest(create_new_grading_standard_courses, {course_id}, query);
export const create_new_grading_standard_courses = { type: "CREATE_NEW_GRADING_STANDARD_COURSES", method: "post", key: 'create_new_grading_standard_courses'};

// List the grading standards available in a context.
// Returns the list of grading standards in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: courses/{course_id}/grading_standards
//
// Example:
// return canvasRequest(list_grading_standards_available_in_context_courses, {course_id});
export const list_grading_standards_available_in_context_courses = { type: "LIST_GRADING_STANDARDS_AVAILABLE_IN_CONTEXT_COURSES", method: "get", key: 'list_grading_standards_available_in_context_courses'};

// List the grading standards available in a context.
// Returns the list of grading standards in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/grading_standards.html
// API Url: accounts/{account_id}/grading_standards
//
// Example:
// return canvasRequest(list_grading_standards_available_in_context_accounts, {account_id});
export const list_grading_standards_available_in_context_accounts = { type: "LIST_GRADING_STANDARDS_AVAILABLE_IN_CONTEXT_ACCOUNTS", method: "get", key: 'list_grading_standards_available_in_context_accounts'};