//
// Outcome Groups
//
// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/root_outcome_group
//
// Example:
// return canvasRequest(redirect_to_root_outcome_group_for_context_global, {});
export const redirect_to_root_outcome_group_for_context_global = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_GLOBAL", method: "get", key: "redirect_to_root_outcome_group_for_context_global", required: [] };

// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/root_outcome_group
//
// Example:
// return canvasRequest(redirect_to_root_outcome_group_for_context_accounts, {account_id});
export const redirect_to_root_outcome_group_for_context_accounts = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_ACCOUNTS", method: "get", key: "redirect_to_root_outcome_group_for_context_accountsredirect_to_root_outcome_group_for_context_accounts_account_id", required: ["account_id"] };

// Redirect to root outcome group for context
// Convenience redirect to find the root outcome group for a particular
// context. Will redirect to the appropriate outcome group's URL.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/root_outcome_group
//
// Example:
// return canvasRequest(redirect_to_root_outcome_group_for_context_courses, {course_id});
export const redirect_to_root_outcome_group_for_context_courses = { type: "REDIRECT_TO_ROOT_OUTCOME_GROUP_FOR_CONTEXT_COURSES", method: "get", key: "redirect_to_root_outcome_group_for_context_coursesredirect_to_root_outcome_group_for_context_courses_course_id", required: ["course_id"] };

// Get all outcome groups for context
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups
//
// Example:
// return canvasRequest(get_all_outcome_groups_for_context_accounts, {account_id});
export const get_all_outcome_groups_for_context_accounts = { type: "GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_ACCOUNTS", method: "get", key: "get_all_outcome_groups_for_context_accountsget_all_outcome_groups_for_context_accounts_account_id", required: ["account_id"] };

// Get all outcome groups for context
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups
//
// Example:
// return canvasRequest(get_all_outcome_groups_for_context_courses, {course_id});
export const get_all_outcome_groups_for_context_courses = { type: "GET_ALL_OUTCOME_GROUPS_FOR_CONTEXT_COURSES", method: "get", key: "get_all_outcome_groups_for_context_coursesget_all_outcome_groups_for_context_courses_course_id", required: ["course_id"] };

// Get all outcome links for context
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_group_links
//
// Example:
// const query = {
//   outcome_style
//   outcome_group_style
// }
// return canvasRequest(get_all_outcome_links_for_context_accounts, {account_id}, query);
export const get_all_outcome_links_for_context_accounts = { type: "GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_ACCOUNTS", method: "get", key: "get_all_outcome_links_for_context_accountsget_all_outcome_links_for_context_accounts_account_id", required: ["account_id"] };

// Get all outcome links for context
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_group_links
//
// Example:
// const query = {
//   outcome_style
//   outcome_group_style
// }
// return canvasRequest(get_all_outcome_links_for_context_courses, {course_id}, query);
export const get_all_outcome_links_for_context_courses = { type: "GET_ALL_OUTCOME_LINKS_FOR_CONTEXT_COURSES", method: "get", key: "get_all_outcome_links_for_context_coursesget_all_outcome_links_for_context_courses_course_id", required: ["course_id"] };

// Show an outcome group
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}
//
// Example:
// return canvasRequest(show_outcome_group_global, {id});
export const show_outcome_group_global = { type: "SHOW_OUTCOME_GROUP_GLOBAL", method: "get", key: "show_outcome_group_globalshow_outcome_group_global_id", required: ["id"] };

// Show an outcome group
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}
//
// Example:
// return canvasRequest(show_outcome_group_accounts, {account_id, id});
export const show_outcome_group_accounts = { type: "SHOW_OUTCOME_GROUP_ACCOUNTS", method: "get", key: "show_outcome_group_accountsshow_outcome_group_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Show an outcome group
// 
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}
//
// Example:
// return canvasRequest(show_outcome_group_courses, {course_id, id});
export const show_outcome_group_courses = { type: "SHOW_OUTCOME_GROUP_COURSES", method: "get", key: "show_outcome_group_coursesshow_outcome_group_courses_{course_id}_{id}", required: ["course_id","id"] };

// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}
//
// Example:
// const query = {
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// }
// return canvasRequest(update_outcome_group_global, {id}, query);
export const update_outcome_group_global = { type: "UPDATE_OUTCOME_GROUP_GLOBAL", method: "put", key: "update_outcome_group_globalupdate_outcome_group_global_id", required: ["id"] };

// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}
//
// Example:
// const query = {
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// }
// return canvasRequest(update_outcome_group_accounts, {account_id, id}, query);
export const update_outcome_group_accounts = { type: "UPDATE_OUTCOME_GROUP_ACCOUNTS", method: "put", key: "update_outcome_group_accountsupdate_outcome_group_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Update an outcome group
// Modify an existing outcome group. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// When changing the parent outcome group, the new parent group must belong to
// the same context as this outcome group, and must not be a descendant of
// this outcome group (i.e. no cycles allowed).
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}
//
// Example:
// const query = {
//   title
//   description
//   vendor_guid
//   parent_outcome_group_id
// }
// return canvasRequest(update_outcome_group_courses, {course_id, id}, query);
export const update_outcome_group_courses = { type: "UPDATE_OUTCOME_GROUP_COURSES", method: "put", key: "update_outcome_group_coursesupdate_outcome_group_courses_{course_id}_{id}", required: ["course_id","id"] };

// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}
//
// Example:
// return canvasRequest(delete_outcome_group_global, {id});
export const delete_outcome_group_global = { type: "DELETE_OUTCOME_GROUP_GLOBAL", method: "delete", key: "delete_outcome_group_globaldelete_outcome_group_global_id", required: ["id"] };

// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}
//
// Example:
// return canvasRequest(delete_outcome_group_accounts, {account_id, id});
export const delete_outcome_group_accounts = { type: "DELETE_OUTCOME_GROUP_ACCOUNTS", method: "delete", key: "delete_outcome_group_accountsdelete_outcome_group_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Delete an outcome group
// Deleting an outcome group deletes descendant outcome groups and outcome
// links. The linked outcomes themselves are only deleted if all links to the
// outcome were deleted.
// 
// Aligned outcomes cannot be deleted; as such, if all remaining links to an
// aligned outcome are included in this group's descendants, the group
// deletion will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}
//
// Example:
// return canvasRequest(delete_outcome_group_courses, {course_id, id});
export const delete_outcome_group_courses = { type: "DELETE_OUTCOME_GROUP_COURSES", method: "delete", key: "delete_outcome_group_coursesdelete_outcome_group_courses_{course_id}_{id}", required: ["course_id","id"] };

// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_style
// }
// return canvasRequest(list_linked_outcomes_global, {id}, query);
export const list_linked_outcomes_global = { type: "LIST_LINKED_OUTCOMES_GLOBAL", method: "get", key: "list_linked_outcomes_globallist_linked_outcomes_global_id", required: ["id"] };

// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_style
// }
// return canvasRequest(list_linked_outcomes_accounts, {account_id, id}, query);
export const list_linked_outcomes_accounts = { type: "LIST_LINKED_OUTCOMES_ACCOUNTS", method: "get", key: "list_linked_outcomes_accountslist_linked_outcomes_accounts_{account_id}_{id}", required: ["account_id","id"] };

// List linked outcomes
// List the immediate OutcomeLink children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_style
// }
// return canvasRequest(list_linked_outcomes_courses, {course_id, id}, query);
export const list_linked_outcomes_courses = { type: "LIST_LINKED_OUTCOMES_COURSES", method: "get", key: "list_linked_outcomes_courseslist_linked_outcomes_courses_{course_id}_{id}", required: ["course_id","id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_global, {id}, query);
export const create_link_outcome_global = { type: "CREATE_LINK_OUTCOME_GLOBAL", method: "post", key: "create_link_outcome_globalcreate_link_outcome_global_id", required: ["id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// const query = {
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_global_outcome_id, {id, outcome_id}, query);
export const create_link_outcome_global_outcome_id = { type: "CREATE_LINK_OUTCOME_GLOBAL_OUTCOME_ID", method: "put", key: "create_link_outcome_global_outcome_idcreate_link_outcome_global_outcome_id_{id}_{outcome_id}", required: ["id","outcome_id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_accounts, {account_id, id}, query);
export const create_link_outcome_accounts = { type: "CREATE_LINK_OUTCOME_ACCOUNTS", method: "post", key: "create_link_outcome_accountscreate_link_outcome_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// const query = {
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_accounts_outcome_id, {account_id, id, outcome_id}, query);
export const create_link_outcome_accounts_outcome_id = { type: "CREATE_LINK_OUTCOME_ACCOUNTS_OUTCOME_ID", method: "put", key: "create_link_outcome_accounts_outcome_idcreate_link_outcome_accounts_outcome_id_{account_id}_{id}_{outcome_id}", required: ["account_id","id","outcome_id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes
//
// Example:
// const query = {
//   outcome_id
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_courses, {course_id, id}, query);
export const create_link_outcome_courses = { type: "CREATE_LINK_OUTCOME_COURSES", method: "post", key: "create_link_outcome_coursescreate_link_outcome_courses_{course_id}_{id}", required: ["course_id","id"] };

// Create/link an outcome
// Link an outcome into the outcome group. The outcome to link can either be
// specified by a PUT to the link URL for a specific outcome (the outcome_id
// in the PUT URLs) or by supplying the information for a new outcome (title,
// description, ratings, mastery_points) in a POST to the collection.
// 
// If linking an existing outcome, the outcome_id must identify an outcome
// available to this context; i.e. an outcome owned by this group's context,
// an outcome owned by an associated account, or a global outcome. With
// outcome_id present, any other parameters are ignored.
// 
// If defining a new outcome, the outcome is created in the outcome group's
// context using the provided title, description, ratings, and mastery points;
// the title is required but all other fields are optional. The new outcome
// is then linked into the outcome group.
// 
// If ratings are provided when creating a new outcome, an embedded rubric
// criterion is included in the new outcome. This criterion's mastery_points
// default to the maximum points in the highest rating if not specified in the
// mastery_points parameter. Any ratings lacking a description are given a
// default of "No description". Any ratings lacking a point value are given a
// default of 0. If no ratings are provided, the mastery_points parameter is
// ignored.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// const query = {
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(create_link_outcome_courses_outcome_id, {course_id, id, outcome_id}, query);
export const create_link_outcome_courses_outcome_id = { type: "CREATE_LINK_OUTCOME_COURSES_OUTCOME_ID", method: "put", key: "create_link_outcome_courses_outcome_idcreate_link_outcome_courses_outcome_id_{course_id}_{id}_{outcome_id}", required: ["course_id","id","outcome_id"] };

// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// return canvasRequest(unlink_outcome_global, {id, outcome_id});
export const unlink_outcome_global = { type: "UNLINK_OUTCOME_GLOBAL", method: "delete", key: "unlink_outcome_globalunlink_outcome_global_{id}_{outcome_id}", required: ["id","outcome_id"] };

// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// return canvasRequest(unlink_outcome_accounts, {account_id, id, outcome_id});
export const unlink_outcome_accounts = { type: "UNLINK_OUTCOME_ACCOUNTS", method: "delete", key: "unlink_outcome_accountsunlink_outcome_accounts_{account_id}_{id}_{outcome_id}", required: ["account_id","id","outcome_id"] };

// Unlink an outcome
// Unlinking an outcome only deletes the outcome itself if this was the last
// link to the outcome in any group in any context. Aligned outcomes cannot be
// deleted; as such, if this is the last link to an aligned outcome, the
// unlinking will fail.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/outcomes/{outcome_id}
//
// Example:
// return canvasRequest(unlink_outcome_courses, {course_id, id, outcome_id});
export const unlink_outcome_courses = { type: "UNLINK_OUTCOME_COURSES", method: "delete", key: "unlink_outcome_coursesunlink_outcome_courses_{course_id}_{id}_{outcome_id}", required: ["course_id","id","outcome_id"] };

// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/subgroups
//
// Example:
// return canvasRequest(list_subgroups_global, {id});
export const list_subgroups_global = { type: "LIST_SUBGROUPS_GLOBAL", method: "get", key: "list_subgroups_globallist_subgroups_global_id", required: ["id"] };

// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/subgroups
//
// Example:
// return canvasRequest(list_subgroups_accounts, {account_id, id});
export const list_subgroups_accounts = { type: "LIST_SUBGROUPS_ACCOUNTS", method: "get", key: "list_subgroups_accountslist_subgroups_accounts_{account_id}_{id}", required: ["account_id","id"] };

// List subgroups
// List the immediate OutcomeGroup children of the outcome group. Paginated.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/subgroups
//
// Example:
// return canvasRequest(list_subgroups_courses, {course_id, id});
export const list_subgroups_courses = { type: "LIST_SUBGROUPS_COURSES", method: "get", key: "list_subgroups_courseslist_subgroups_courses_{course_id}_{id}", required: ["course_id","id"] };

// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/subgroups
//
// Example:
// const query = {
//   title (required)
//   description
//   vendor_guid
// }
// return canvasRequest(create_subgroup_global, {id}, query);
export const create_subgroup_global = { type: "CREATE_SUBGROUP_GLOBAL", method: "post", key: "create_subgroup_globalcreate_subgroup_global_id", required: ["id"] };

// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/subgroups
//
// Example:
// const query = {
//   title (required)
//   description
//   vendor_guid
// }
// return canvasRequest(create_subgroup_accounts, {account_id, id}, query);
export const create_subgroup_accounts = { type: "CREATE_SUBGROUP_ACCOUNTS", method: "post", key: "create_subgroup_accountscreate_subgroup_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Create a subgroup
// Creates a new empty subgroup under the outcome group with the given title
// and description.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/subgroups
//
// Example:
// const query = {
//   title (required)
//   description
//   vendor_guid
// }
// return canvasRequest(create_subgroup_courses, {course_id, id}, query);
export const create_subgroup_courses = { type: "CREATE_SUBGROUP_COURSES", method: "post", key: "create_subgroup_coursescreate_subgroup_courses_{course_id}_{id}", required: ["course_id","id"] };

// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: global/outcome_groups/{id}/import
//
// Example:
// const query = {
//   source_outcome_group_id (required)
// }
// return canvasRequest(import_outcome_group_global, {id}, query);
export const import_outcome_group_global = { type: "IMPORT_OUTCOME_GROUP_GLOBAL", method: "post", key: "import_outcome_group_globalimport_outcome_group_global_id", required: ["id"] };

// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: accounts/{account_id}/outcome_groups/{id}/import
//
// Example:
// const query = {
//   source_outcome_group_id (required)
// }
// return canvasRequest(import_outcome_group_accounts, {account_id, id}, query);
export const import_outcome_group_accounts = { type: "IMPORT_OUTCOME_GROUP_ACCOUNTS", method: "post", key: "import_outcome_group_accountsimport_outcome_group_accounts_{account_id}_{id}", required: ["account_id","id"] };

// Import an outcome group
// Creates a new subgroup of the outcome group with the same title and
// description as the source group, then creates links in that new subgroup to
// the same outcomes that are linked in the source group. Recurses on the
// subgroups of the source group, importing them each in turn into the new
// subgroup.
// 
// Allows you to copy organizational structure, but does not create copies of
// the outcomes themselves, only new links.
// 
// The source group must be either global, from the same context as this
// outcome group, or from an associated account. The source group cannot be
// the root outcome group of its context.
//
// API Docs: https://canvas.instructure.com/doc/api/outcome_groups.html
// API Url: courses/{course_id}/outcome_groups/{id}/import
//
// Example:
// const query = {
//   source_outcome_group_id (required)
// }
// return canvasRequest(import_outcome_group_courses, {course_id, id}, query);
export const import_outcome_group_courses = { type: "IMPORT_OUTCOME_GROUP_COURSES", method: "post", key: "import_outcome_group_coursesimport_outcome_group_courses_{course_id}_{id}", required: ["course_id","id"] };