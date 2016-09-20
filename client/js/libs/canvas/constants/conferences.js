//
// Conferences
//
// List conferences
// Retrieve the list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
//
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: courses/{course_id}/conferences
//
// Example:
// return canvasRequest(list_conferences_courses, {course_id});
export const list_conferences_courses = { type: "LIST_CONFERENCES_COURSES", method: "get", key: "list_conferences_courseslist_conferences_courses_course_id", required: ["course_id"] };

// List conferences
// Retrieve the list of conferences for this context
// 
// This API returns a JSON object containing the list of conferences,
// the key for the list of conferences is "conferences"
//
// API Docs: https://canvas.instructure.com/doc/api/conferences.html
// API Url: groups/{group_id}/conferences
//
// Example:
// return canvasRequest(list_conferences_groups, {group_id});
export const list_conferences_groups = { type: "LIST_CONFERENCES_GROUPS", method: "get", key: "list_conferences_groupslist_conferences_groups_group_id", required: ["group_id"] };