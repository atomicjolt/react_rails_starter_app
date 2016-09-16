//
// Enrollment Terms
//
// Create enrollment term
// Create a new enrollment term for the specified account.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms
//
// Example:
// const query = {
//   enrollment_term[name]
//   enrollment_term[start_at]
//   enrollment_term[end_at]
//   enrollment_term[sis_term_id]
// }
// return canvasRequest(create_enrollment_term, {account_id}, query);
export const create_enrollment_term = { type: "CREATE_ENROLLMENT_TERM", method: "post", key: 'create_enrollment_term'};

// Update enrollment term
// Update an existing enrollment term for the specified account.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms/{id}
//
// Example:
// const query = {
//   enrollment_term[name]
//   enrollment_term[start_at]
//   enrollment_term[end_at]
//   enrollment_term[sis_term_id]
// }
// return canvasRequest(update_enrollment_term, {account_id, id}, query);
export const update_enrollment_term = { type: "UPDATE_ENROLLMENT_TERM", method: "put", key: 'update_enrollment_term'};

// Delete enrollment term
// Delete the specified enrollment term.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms/{id}
//
// Example:
// return canvasRequest(delete_enrollment_term, {account_id, id});
export const delete_enrollment_term = { type: "DELETE_ENROLLMENT_TERM", method: "delete", key: 'delete_enrollment_term'};

// List enrollment terms
// Return all of the terms in the account.
//
// API Docs: https://canvas.instructure.com/doc/api/enrollment_terms.html
// API Url: accounts/{account_id}/terms
//
// Example:
// const query = {
//   workflow_state
// }
// return canvasRequest(list_enrollment_terms, {account_id}, query);
export const list_enrollment_terms = { type: "LIST_ENROLLMENT_TERMS", method: "get", key: 'list_enrollment_terms'};