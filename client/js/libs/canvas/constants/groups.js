//
// Groups
//
// List your groups
// Returns a list of active groups for the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: users/self/groups
//
// Example:
// const query = {
//   context_type
//   include
// }
// return canvasRequest(list_your_groups, {}, query);
export const list_your_groups = { type: "LIST_YOUR_GROUPS", method: "get", reducer: 'groups'};

// List the groups available in a context.
// Returns the list of active groups in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: accounts/{account_id}/groups
//
// Example:
// const query = {
//   only_own_groups
//   include
// }
// return canvasRequest(list_groups_available_in_context_accounts, {account_id}, query);
export const list_groups_available_in_context_accounts = { type: "LIST_GROUPS_AVAILABLE_IN_CONTEXT_ACCOUNTS", method: "get", reducer: 'groups'};

// List the groups available in a context.
// Returns the list of active groups in the given context that are visible to user.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: courses/{course_id}/groups
//
// Example:
// const query = {
//   only_own_groups
//   include
// }
// return canvasRequest(list_groups_available_in_context_courses, {course_id}, query);
export const list_groups_available_in_context_courses = { type: "LIST_GROUPS_AVAILABLE_IN_CONTEXT_COURSES", method: "get", reducer: 'groups'};

// Get a single group
// Returns the data for a single group, or a 401 if the caller doesn't have
// the rights to see it.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_single_group, {group_id}, query);
export const get_single_group = { type: "GET_SINGLE_GROUP", method: "get", reducer: 'groups'};

// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups
//
// Example:
// const query = {
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
// }
// return canvasRequest(create_group_groups, {}, query);
export const create_group_groups = { type: "CREATE_GROUP_GROUPS", method: "post", reducer: 'groups'};

// Create a group
// Creates a new group. Groups created using the "/api/v1/groups/"
// endpoint will be community groups.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: group_categories/{group_category_id}/groups
//
// Example:
// const query = {
//   name
//   description
//   is_public
//   join_level
//   storage_quota_mb
// }
// return canvasRequest(create_group_group_categories, {group_category_id}, query);
export const create_group_group_categories = { type: "CREATE_GROUP_GROUP_CATEGORIES", method: "post", reducer: 'groups'};

// Edit a group
// Modifies an existing group.  Note that to set an avatar image for the
// group, you must first upload the image file to the group, and the use the
// id in the response as the argument to this function.  See the
// {file:file_uploads.html File Upload Documentation} for details on the file
// upload workflow.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// const query = {
//   name
//   description
//   is_public
//   join_level
//   avatar_id
//   storage_quota_mb
//   members
// }
// return canvasRequest(edit_group, {group_id}, query);
export const edit_group = { type: "EDIT_GROUP", method: "put", reducer: 'groups'};

// Delete a group
// Deletes a group and removes all members.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}
//
// Example:
// return canvasRequest(delete_group, {group_id});
export const delete_group = { type: "DELETE_GROUP", method: "delete", reducer: 'groups'};

// Invite others to a group
// Sends an invitation to all supplied email addresses which will allow the
// receivers to join the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/invite
//
// Example:
// const query = {
//   invitees (required)
// }
// return canvasRequest(invite_others_to_group, {group_id}, query);
export const invite_others_to_group = { type: "INVITE_OTHERS_TO_GROUP", method: "post", reducer: 'groups'};

// List group's users
// Returns a list of users in the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users
//
// Example:
// const query = {
//   search_term
//   include
// }
// return canvasRequest(list_group_s_users, {group_id}, query);
export const list_group_s_users = { type: "LIST_GROUP_S_USERS", method: "get", reducer: 'groups'};

// Upload a file
// Upload a file to the group.
// 
// This API endpoint is the first step in uploading a file to a group.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Only those with the "Manage Files" permission on a group can upload files
// to the group. By default, this is anybody participating in the
// group, or any admin over the group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/files
//
// Example:
// return canvasRequest(groups_upload_file, {group_id});
export const groups_upload_file = { type: "GROUPS_UPLOAD_FILE", method: "post", reducer: 'groups'};

// Preview processed html
// Preview html content processed for this group
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/preview_html
//
// Example:
// const query = {
//   html
// }
// return canvasRequest(groups_preview_processed_html, {group_id}, query);
export const groups_preview_processed_html = { type: "GROUPS_PREVIEW_PROCESSED_HTML", method: "post", reducer: 'groups'};

// Group activity stream
// Returns the current user's group-specific activity stream, paginated.
// 
// For full documentation, see the API documentation for the user activity
// stream, in the user api.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream
//
// Example:
// return canvasRequest(group_activity_stream, {group_id});
export const group_activity_stream = { type: "GROUP_ACTIVITY_STREAM", method: "get", reducer: 'groups'};

// Group activity stream summary
// Returns a summary of the current user's group-specific activity stream.
// 
// For full documentation, see the API documentation for the user activity
// stream summary, in the user api.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/activity_stream/summary
//
// Example:
// return canvasRequest(group_activity_stream_summary, {group_id});
export const group_activity_stream_summary = { type: "GROUP_ACTIVITY_STREAM_SUMMARY", method: "get", reducer: 'groups'};

// List group memberships
// List the members of a group.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
//
// Example:
// const query = {
//   filter_states
// }
// return canvasRequest(list_group_memberships, {group_id}, query);
export const list_group_memberships = { type: "LIST_GROUP_MEMBERSHIPS", method: "get", reducer: 'groups'};

// Get a single group membership
// Returns the group membership with the given membership id or user id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// return canvasRequest(get_single_group_membership_memberships, {group_id, membership_id});
export const get_single_group_membership_memberships = { type: "GET_SINGLE_GROUP_MEMBERSHIP_MEMBERSHIPS", method: "get", reducer: 'groups'};

// Get a single group membership
// Returns the group membership with the given membership id or user id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// return canvasRequest(get_single_group_membership_users, {group_id, user_id});
export const get_single_group_membership_users = { type: "GET_SINGLE_GROUP_MEMBERSHIP_USERS", method: "get", reducer: 'groups'};

// Create a membership
// Join, or request to join, a group, depending on the join_level of the
// group.  If the membership or join request already exists, then it is simply
// returned
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships
//
// Example:
// const query = {
//   user_id
// }
// return canvasRequest(create_membership, {group_id}, query);
export const create_membership = { type: "CREATE_MEMBERSHIP", method: "post", reducer: 'groups'};

// Update a membership
// Accept a membership request, or add/remove moderator rights.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// const query = {
//   workflow_state
//   moderator
// }
// return canvasRequest(update_membership_memberships, {group_id, membership_id}, query);
export const update_membership_memberships = { type: "UPDATE_MEMBERSHIP_MEMBERSHIPS", method: "put", reducer: 'groups'};

// Update a membership
// Accept a membership request, or add/remove moderator rights.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// const query = {
//   workflow_state
//   moderator
// }
// return canvasRequest(update_membership_users, {group_id, user_id}, query);
export const update_membership_users = { type: "UPDATE_MEMBERSHIP_USERS", method: "put", reducer: 'groups'};

// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/memberships/{membership_id}
//
// Example:
// return canvasRequest(leave_group_memberships, {group_id, membership_id});
export const leave_group_memberships = { type: "LEAVE_GROUP_MEMBERSHIPS", method: "delete", reducer: 'groups'};

// Leave a group
// Leave a group if you are allowed to leave (some groups, such as sets of
// course groups created by teachers, cannot be left). You may also use 'self'
// in place of a membership_id.
//
// API Docs: https://canvas.instructure.com/doc/api/groups.html
// API Url: groups/{group_id}/users/{user_id}
//
// Example:
// return canvasRequest(leave_group_users, {group_id, user_id});
export const leave_group_users = { type: "LEAVE_GROUP_USERS", method: "delete", reducer: 'groups'};