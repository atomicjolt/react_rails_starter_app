//
// Pages
//
// Show front page
// Retrieve the content of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
//
// Example:
// return canvasRequest(show_front_page_courses, {course_id});
export const show_front_page_courses = { type: "SHOW_FRONT_PAGE_COURSES", method: "get", reducer: 'pages'};

// Show front page
// Retrieve the content of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// return canvasRequest(show_front_page_groups, {group_id});
export const show_front_page_groups = { type: "SHOW_FRONT_PAGE_GROUPS", method: "get", reducer: 'pages'};

// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/front_page
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_courses, {course_id}, query);
export const update_create_front_page_courses = { type: "UPDATE_CREATE_FRONT_PAGE_COURSES", method: "put", reducer: 'pages'};

// Update/create front page
// Update the title or contents of the front page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/front_page
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
// }
// return canvasRequest(update_create_front_page_groups, {group_id}, query);
export const update_create_front_page_groups = { type: "UPDATE_CREATE_FRONT_PAGE_GROUPS", method: "put", reducer: 'pages'};

// List pages
// List the wiki pages associated with a course or group
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
//
// Example:
// const query = {
//   sort
//   order
//   search_term
//   published
// }
// return canvasRequest(list_pages_courses, {course_id}, query);
export const list_pages_courses = { type: "LIST_PAGES_COURSES", method: "get", reducer: 'pages'};

// List pages
// List the wiki pages associated with a course or group
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
//
// Example:
// const query = {
//   sort
//   order
//   search_term
//   published
// }
// return canvasRequest(list_pages_groups, {group_id}, query);
export const list_pages_groups = { type: "LIST_PAGES_GROUPS", method: "get", reducer: 'pages'};

// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages
//
// Example:
// const query = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(create_page_courses, {course_id}, query);
export const create_page_courses = { type: "CREATE_PAGE_COURSES", method: "post", reducer: 'pages'};

// Create page
// Create a new wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages
//
// Example:
// const query = {
//   wiki_page[title] (required)
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(create_page_groups, {group_id}, query);
export const create_page_groups = { type: "CREATE_PAGE_GROUPS", method: "post", reducer: 'pages'};

// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// return canvasRequest(show_page_courses, {course_id, url});
export const show_page_courses = { type: "SHOW_PAGE_COURSES", method: "get", reducer: 'pages'};

// Show page
// Retrieve the content of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// return canvasRequest(show_page_groups, {group_id, url});
export const show_page_groups = { type: "SHOW_PAGE_GROUPS", method: "get", reducer: 'pages'};

// Update/create page
// Update the title or contents of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_courses, {course_id, url}, query);
export const update_create_page_courses = { type: "UPDATE_CREATE_PAGE_COURSES", method: "put", reducer: 'pages'};

// Update/create page
// Update the title or contents of a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// const query = {
//   wiki_page[title]
//   wiki_page[body]
//   wiki_page[editing_roles]
//   wiki_page[notify_of_update]
//   wiki_page[published]
//   wiki_page[front_page]
// }
// return canvasRequest(update_create_page_groups, {group_id, url}, query);
export const update_create_page_groups = { type: "UPDATE_CREATE_PAGE_GROUPS", method: "put", reducer: 'pages'};

// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}
//
// Example:
// return canvasRequest(delete_page_courses, {course_id, url});
export const delete_page_courses = { type: "DELETE_PAGE_COURSES", method: "delete", reducer: 'pages'};

// Delete page
// Delete a wiki page
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}
//
// Example:
// return canvasRequest(delete_page_groups, {group_id, url});
export const delete_page_groups = { type: "DELETE_PAGE_GROUPS", method: "delete", reducer: 'pages'};

// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions
//
// Example:
// return canvasRequest(list_revisions_courses, {course_id, url});
export const list_revisions_courses = { type: "LIST_REVISIONS_COURSES", method: "get", reducer: 'pages'};

// List revisions
// List the revisions of a page. Callers must have update rights on the page in order to see page history.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions
//
// Example:
// return canvasRequest(list_revisions_groups, {group_id, url});
export const list_revisions_groups = { type: "LIST_REVISIONS_GROUPS", method: "get", reducer: 'pages'};

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_latest, {course_id, url}, query);
export const show_revision_courses_latest = { type: "SHOW_REVISION_COURSES_LATEST", method: "get", reducer: 'pages'};

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/latest
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_latest, {group_id, url}, query);
export const show_revision_groups_latest = { type: "SHOW_REVISION_GROUPS_LATEST", method: "get", reducer: 'pages'};

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_courses_revision_id, {course_id, url, revision_id}, query);
export const show_revision_courses_revision_id = { type: "SHOW_REVISION_COURSES_REVISION_ID", method: "get", reducer: 'pages'};

// Show revision
// Retrieve the metadata and optionally content of a revision of the page.
// Note that retrieving historic versions of pages requires edit rights.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// const query = {
//   summary
// }
// return canvasRequest(show_revision_groups_revision_id, {group_id, url, revision_id}, query);
export const show_revision_groups_revision_id = { type: "SHOW_REVISION_GROUPS_REVISION_ID", method: "get", reducer: 'pages'};

// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: courses/{course_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_courses, {course_id, url, revision_id});
export const revert_to_revision_courses = { type: "REVERT_TO_REVISION_COURSES", method: "post", reducer: 'pages'};

// Revert to revision
// Revert a page to a prior revision.
//
// API Docs: https://canvas.instructure.com/doc/api/pages.html
// API Url: groups/{group_id}/pages/{url}/revisions/{revision_id}
//
// Example:
// return canvasRequest(revert_to_revision_groups, {group_id, url, revision_id});
export const revert_to_revision_groups = { type: "REVERT_TO_REVISION_GROUPS", method: "post", reducer: 'pages'};