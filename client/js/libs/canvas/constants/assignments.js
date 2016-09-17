//
// Assignments
//
// Delete an assignment
// Delete the given assignment.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// return canvasRequest(delete_assignment, {course_id, id});
export const delete_assignment = { type: "DELETE_ASSIGNMENT", method: "delete"};

// List assignments
// Returns the list of assignments for the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
//
// Example:
// const query = {
//   include
//   search_term
//   override_assignment_dates
//   needs_grading_count_by_section
//   bucket
// }
// return canvasRequest(list_assignments, {course_id}, query);
export const list_assignments = { type: "LIST_ASSIGNMENTS", method: "get"};

// List assignments for user
// Returns the list of assignments for the specified user if the current user has rights to view.
// See {api:AssignmentsApiController#index List assignments} for valid arguments.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: users/{user_id}/courses/{course_id}/assignments
//
// Example:
// return canvasRequest(list_assignments_for_user, {user_id, course_id});
export const list_assignments_for_user = { type: "LIST_ASSIGNMENTS_FOR_USER", method: "get"};

// Get a single assignment
// Returns the assignment with the given id.
//  "observed_users" is passed, submissions for observed users will also be included.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// const query = {
//   include
//   override_assignment_dates
//   needs_grading_count_by_section
//   all_dates
// }
// return canvasRequest(get_single_assignment, {course_id, id}, query);
export const get_single_assignment = { type: "GET_SINGLE_ASSIGNMENT", method: "get"};

// Create an assignment
// Create a new assignment for this course. The assignment is created in the
// active state.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments
//
// Example:
// const query = {
//   assignment[name] (required)
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[turnitin_settings]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[muted]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
//   assignment[omit_from_final_grade]
// }
// return canvasRequest(create_assignment, {course_id}, query);
export const create_assignment = { type: "CREATE_ASSIGNMENT", method: "post"};

// Edit an assignment
// Modify an existing assignment.
// 
// If the assignment [assignment_overrides] key is absent, any existing
// overrides are kept as is. If the assignment [assignment_overrides] key is
// present, existing overrides are updated or deleted (and new ones created,
// as necessary) to match the provided list.
// 
// NOTE: The assignment overrides feature is in beta.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{id}
//
// Example:
// const query = {
//   assignment[name]
//   assignment[position]
//   assignment[submission_types]
//   assignment[allowed_extensions]
//   assignment[turnitin_enabled]
//   assignment[turnitin_settings]
//   assignment[integration_data]
//   assignment[integration_id]
//   assignment[peer_reviews]
//   assignment[automatic_peer_reviews]
//   assignment[notify_of_update]
//   assignment[group_category_id]
//   assignment[grade_group_students_individually]
//   assignment[external_tool_tag_attributes]
//   assignment[points_possible]
//   assignment[grading_type]
//   assignment[due_at]
//   assignment[lock_at]
//   assignment[unlock_at]
//   assignment[description]
//   assignment[assignment_group_id]
//   assignment[muted]
//   assignment[assignment_overrides]
//   assignment[only_visible_to_overrides]
//   assignment[published]
//   assignment[grading_standard_id]
//   assignment[omit_from_final_grade]
// }
// return canvasRequest(edit_assignment, {course_id, id}, query);
export const edit_assignment = { type: "EDIT_ASSIGNMENT", method: "put"};

// List assignment overrides
// Returns the list of overrides for this assignment that target
// sections/groups/students visible to the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides
//
// Example:
// return canvasRequest(list_assignment_overrides, {course_id, assignment_id});
export const list_assignment_overrides = { type: "LIST_ASSIGNMENT_OVERRIDES", method: "get"};

// Get a single assignment override
// Returns details of the the override with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// return canvasRequest(get_single_assignment_override, {course_id, assignment_id, id});
export const get_single_assignment_override = { type: "GET_SINGLE_ASSIGNMENT_OVERRIDE", method: "get"};

// Redirect to the assignment override for a group
// Responds with a redirect to the override for the given group, if any
// (404 otherwise).
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: groups/{group_id}/assignments/{assignment_id}/override
//
// Example:
// return canvasRequest(redirect_to_assignment_override_for_group, {group_id, assignment_id});
export const redirect_to_assignment_override_for_group = { type: "REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_GROUP", method: "get"};

// Redirect to the assignment override for a section
// Responds with a redirect to the override for the given section, if any
// (404 otherwise).
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: sections/{course_section_id}/assignments/{assignment_id}/override
//
// Example:
// return canvasRequest(redirect_to_assignment_override_for_section, {course_section_id, assignment_id});
export const redirect_to_assignment_override_for_section = { type: "REDIRECT_TO_ASSIGNMENT_OVERRIDE_FOR_SECTION", method: "get"};

// Create an assignment override
// One of student_ids, group_id, or course_section_id must be present. At most
// one should be present; if multiple are present only the most specific
// (student_ids first, then group_id, then course_section_id) is used and any
// others are ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides
//
// Example:
// const query = {
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[group_id]
//   assignment_override[course_section_id]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// }
// return canvasRequest(create_assignment_override, {course_id, assignment_id}, query);
export const create_assignment_override = { type: "CREATE_ASSIGNMENT_OVERRIDE", method: "post"};

// Update an assignment override
// All current overridden values must be supplied if they are to be retained;
// e.g. if due_at was overridden, but this PUT omits a value for due_at,
// due_at will no longer be overridden. If the override is adhoc and
// student_ids is not supplied, the target override set is unchanged. Target
// override sets cannot be changed for group or section overrides.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// const query = {
//   assignment_override[student_ids]
//   assignment_override[title]
//   assignment_override[due_at]
//   assignment_override[unlock_at]
//   assignment_override[lock_at]
// }
// return canvasRequest(update_assignment_override, {course_id, assignment_id, id}, query);
export const update_assignment_override = { type: "UPDATE_ASSIGNMENT_OVERRIDE", method: "put"};

// Delete an assignment override
// Deletes an override and returns its former details.
//
// API Docs: https://canvas.instructure.com/doc/api/assignments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/overrides/{id}
//
// Example:
// return canvasRequest(delete_assignment_override, {course_id, assignment_id, id});
export const delete_assignment_override = { type: "DELETE_ASSIGNMENT_OVERRIDE", method: "delete"};