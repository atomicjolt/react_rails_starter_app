//
// Assignment Groups
//
// List assignment groups
// Returns the list of assignment groups for the current context. The returned
// groups are sorted by their position field.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
//
// Example:
// const query = {
//   include
//   exclude_assignment_submission_types
//   override_assignment_dates
//   grading_period_id
//   scope_assignments_to_student
// }
// return canvasRequest(list_assignment_groups, {course_id}, query);
export const list_assignment_groups = { type: "LIST_ASSIGNMENT_GROUPS", method: "get", reducer: 'assignment_groups'};

// Get an Assignment Group
// Returns the assignment group with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// const query = {
//   include
//   override_assignment_dates
//   grading_period_id
// }
// return canvasRequest(get_assignment_group, {course_id, assignment_group_id}, query);
export const get_assignment_group = { type: "GET_ASSIGNMENT_GROUP", method: "get", reducer: 'assignment_groups'};

// Create an Assignment Group
// Create a new assignment group for this course.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups
//
// Example:
// const query = {
//   name
//   position
//   group_weight
//   rules
// }
// return canvasRequest(create_assignment_group, {course_id}, query);
export const create_assignment_group = { type: "CREATE_ASSIGNMENT_GROUP", method: "post", reducer: 'assignment_groups'};

// Edit an Assignment Group
// Modify an existing Assignment Group.
// Accepts the same parameters as Assignment Group creation
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// return canvasRequest(edit_assignment_group, {course_id, assignment_group_id});
export const edit_assignment_group = { type: "EDIT_ASSIGNMENT_GROUP", method: "put", reducer: 'assignment_groups'};

// Destroy an Assignment Group
// Deletes the assignment group with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignment_groups.html
// API Url: courses/{course_id}/assignment_groups/{assignment_group_id}
//
// Example:
// const query = {
//   move_assignments_to
// }
// return canvasRequest(destroy_assignment_group, {course_id, assignment_group_id}, query);
export const destroy_assignment_group = { type: "DESTROY_ASSIGNMENT_GROUP", method: "delete", reducer: 'assignment_groups'};