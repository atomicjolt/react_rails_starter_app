//
// Collaborations
//
// List collaborations
// List collaborations the current user has access to in the context of the course
// provided in the url
// 
//   curl https://<canvas>/api/v1/courses/1/collaborations/
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: courses/{course_id}/collaborations
//
// Example:
// return canvasRequest(list_collaborations_courses, {course_id});
export const list_collaborations_courses = { type: "LIST_COLLABORATIONS_COURSES", method: "get", reducer: 'collaborations'};

// List collaborations
// List collaborations the current user has access to in the context of the course
// provided in the url
// 
//   curl https://<canvas>/api/v1/courses/1/collaborations/
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: groups/{group_id}/collaborations
//
// Example:
// return canvasRequest(list_collaborations_groups, {group_id});
export const list_collaborations_groups = { type: "LIST_COLLABORATIONS_GROUPS", method: "get", reducer: 'collaborations'};

// List members of a collaboration.
// List the collaborators of a given collaboration
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: collaborations/{id}/members
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(list_members_of_collaboration, {id}, query);
export const list_members_of_collaboration = { type: "LIST_MEMBERS_OF_COLLABORATION", method: "get", reducer: 'collaborations'};