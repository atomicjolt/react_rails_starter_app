//
// Group Categories
//
// List group categories for a context
// Returns a list of group categories in a context
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories
//
// Example:
// return canvasRequest(list_group_categories_for_context_accounts, {account_id});
export const list_group_categories_for_context_accounts = { type: "LIST_GROUP_CATEGORIES_FOR_CONTEXT_ACCOUNTS", method: "get"};

// List group categories for a context
// Returns a list of group categories in a context
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories
//
// Example:
// return canvasRequest(list_group_categories_for_context_courses, {course_id});
export const list_group_categories_for_context_courses = { type: "LIST_GROUP_CATEGORIES_FOR_CONTEXT_COURSES", method: "get"};

// Get a single group category
// Returns the data for a single group category, or a 401 if the caller doesn't have
// the rights to see it.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// return canvasRequest(get_single_group_category, {group_category_id});
export const get_single_group_category = { type: "GET_SINGLE_GROUP_CATEGORY", method: "get"};

// Create a Group Category
// Create a new group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: accounts/{account_id}/group_categories
//
// Example:
// const query = {
//   name (required)
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// }
// return canvasRequest(create_group_category_accounts, {account_id}, query);
export const create_group_category_accounts = { type: "CREATE_GROUP_CATEGORY_ACCOUNTS", method: "post"};

// Create a Group Category
// Create a new group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: courses/{course_id}/group_categories
//
// Example:
// const query = {
//   name (required)
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// }
// return canvasRequest(create_group_category_courses, {course_id}, query);
export const create_group_category_courses = { type: "CREATE_GROUP_CATEGORY_COURSES", method: "post"};

// Update a Group Category
// Modifies an existing group category.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// const query = {
//   name
//   self_signup
//   auto_leader
//   group_limit
//   create_group_count
//   split_group_count
// }
// return canvasRequest(update_group_category, {group_category_id}, query);
export const update_group_category = { type: "UPDATE_GROUP_CATEGORY", method: "put"};

// Delete a Group Category
// Deletes a group category and all groups under it. Protected group
// categories can not be deleted, i.e. "communities" and "student_organized".
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}
//
// Example:
// return canvasRequest(delete_group_category, {group_category_id});
export const delete_group_category = { type: "DELETE_GROUP_CATEGORY", method: "delete"};

// List groups in group category
// Returns a list of groups in a group category
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/groups
//
// Example:
// return canvasRequest(list_groups_in_group_category, {group_category_id});
export const list_groups_in_group_category = { type: "LIST_GROUPS_IN_GROUP_CATEGORY", method: "get"};

// List users in group category
// Returns a list of users in the group category.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/users
//
// Example:
// const query = {
//   search_term
//   unassigned
// }
// return canvasRequest(list_users_in_group_category, {group_category_id}, query);
export const list_users_in_group_category = { type: "LIST_USERS_IN_GROUP_CATEGORY", method: "get"};

// Assign unassigned members
// Assign all unassigned members as evenly as possible among the existing
// student groups.
//
// API Docs: https://canvas.instructure.com/doc/api/group_categories.html
// API Url: group_categories/{group_category_id}/assign_unassigned_members
//
// Example:
// const query = {
//   sync
// }
// return canvasRequest(assign_unassigned_members, {group_category_id}, query);
export const assign_unassigned_members = { type: "ASSIGN_UNASSIGNED_MEMBERS", method: "post"};