//
// Tabs
//
// List available tabs for a course or group
// Returns a list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: courses/{course_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_courses, {course_id}, query);
export const list_available_tabs_for_course_or_group_courses = { type: "LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_COURSES", method: "get", reducer: 'tabs'};

// List available tabs for a course or group
// Returns a list of navigation tabs available in the current context.
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: groups/{group_id}/tabs
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_available_tabs_for_course_or_group_groups, {group_id}, query);
export const list_available_tabs_for_course_or_group_groups = { type: "LIST_AVAILABLE_TABS_FOR_COURSE_OR_GROUP_GROUPS", method: "get", reducer: 'tabs'};

// Update a tab for a course
// Home and Settings tabs are not manageable, and can't be hidden or moved
// 
// Returns a tab object
//
// API Docs: https://canvas.instructure.com/doc/api/tabs.html
// API Url: courses/{course_id}/tabs/{tab_id}
//
// Example:
// const query = {
//   position
//   hidden
// }
// return canvasRequest(update_tab_for_course, {course_id, tab_id}, query);
export const update_tab_for_course = { type: "UPDATE_TAB_FOR_COURSE", method: "put", reducer: 'tabs'};