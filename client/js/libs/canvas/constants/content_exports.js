//
// Content Exports
//
// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_courses, {course_id});
export const list_content_exports_courses = { type: "LIST_CONTENT_EXPORTS_COURSES", method: "get", key: "list_content_exports_courseslist_content_exports_courses_course_id", required: ["course_id"] };

// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_groups, {group_id});
export const list_content_exports_groups = { type: "LIST_CONTENT_EXPORTS_GROUPS", method: "get", key: "list_content_exports_groupslist_content_exports_groups_group_id", required: ["group_id"] };

// List content exports
// List the past and pending content export jobs for a course, group, or user.
// Exports are returned newest first.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports
//
// Example:
// return canvasRequest(list_content_exports_users, {user_id});
export const list_content_exports_users = { type: "LIST_CONTENT_EXPORTS_USERS", method: "get", key: "list_content_exports_userslist_content_exports_users_user_id", required: ["user_id"] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_courses, {course_id, id});
export const show_content_export_courses = { type: "SHOW_CONTENT_EXPORT_COURSES", method: "get", key: "show_content_export_coursesshow_content_export_courses_{course_id}_{id}", required: ["course_id","id"] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_groups, {group_id, id});
export const show_content_export_groups = { type: "SHOW_CONTENT_EXPORT_GROUPS", method: "get", key: "show_content_export_groupsshow_content_export_groups_{group_id}_{id}", required: ["group_id","id"] };

// Show content export
// Get information about a single content export.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports/{id}
//
// Example:
// return canvasRequest(show_content_export_users, {user_id, id});
export const show_content_export_users = { type: "SHOW_CONTENT_EXPORT_USERS", method: "get", key: "show_content_export_usersshow_content_export_users_{user_id}_{id}", required: ["user_id","id"] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: courses/{course_id}/content_exports
//
// Example:
// const query = {
//   export_type (required)
//   skip_notifications
// }
// return canvasRequest(export_content_courses, {course_id}, query);
export const export_content_courses = { type: "EXPORT_CONTENT_COURSES", method: "post", key: "export_content_coursesexport_content_courses_course_id", required: ["course_id"] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: groups/{group_id}/content_exports
//
// Example:
// const query = {
//   export_type (required)
//   skip_notifications
// }
// return canvasRequest(export_content_groups, {group_id}, query);
export const export_content_groups = { type: "EXPORT_CONTENT_GROUPS", method: "post", key: "export_content_groupsexport_content_groups_group_id", required: ["group_id"] };

// Export content
// Begin a content export job for a course, group, or user.
// 
// You can use the {api:ProgressController#show Progress API} to track the
// progress of the export. The migration's progress is linked to with the
// _progress_url_ value.
// 
// When the export completes, use the {api:ContentExportsApiController#show Show content export} endpoint
// to retrieve a download URL for the exported content.
//
// API Docs: https://canvas.instructure.com/doc/api/content_exports.html
// API Url: users/{user_id}/content_exports
//
// Example:
// const query = {
//   export_type (required)
//   skip_notifications
// }
// return canvasRequest(export_content_users, {user_id}, query);
export const export_content_users = { type: "EXPORT_CONTENT_USERS", method: "post", key: "export_content_usersexport_content_users_user_id", required: ["user_id"] };