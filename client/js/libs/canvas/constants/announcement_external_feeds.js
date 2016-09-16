//
// Announcement External Feeds
//
// List external feeds
// Returns the list of External Feeds this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds
//
// Example:
// return canvasRequest(list_external_feeds_courses, {course_id});
export const list_external_feeds_courses = { type: "LIST_EXTERNAL_FEEDS_COURSES", method: "get", key: 'list_external_feeds_courses'};

// List external feeds
// Returns the list of External Feeds this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds
//
// Example:
// return canvasRequest(list_external_feeds_groups, {group_id});
export const list_external_feeds_groups = { type: "LIST_EXTERNAL_FEEDS_GROUPS", method: "get", key: 'list_external_feeds_groups'};

// Create an external feed
// Create a new external feed for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds
//
// Example:
// const query = {
//   url (required)
//   header_match
//   verbosity
// }
// return canvasRequest(create_external_feed_courses, {course_id}, query);
export const create_external_feed_courses = { type: "CREATE_EXTERNAL_FEED_COURSES", method: "post", key: 'create_external_feed_courses'};

// Create an external feed
// Create a new external feed for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds
//
// Example:
// const query = {
//   url (required)
//   header_match
//   verbosity
// }
// return canvasRequest(create_external_feed_groups, {group_id}, query);
export const create_external_feed_groups = { type: "CREATE_EXTERNAL_FEED_GROUPS", method: "post", key: 'create_external_feed_groups'};

// Delete an external feed
// Deletes the external feed.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: courses/{course_id}/external_feeds/{external_feed_id}
//
// Example:
// return canvasRequest(delete_external_feed_courses, {course_id, external_feed_id});
export const delete_external_feed_courses = { type: "DELETE_EXTERNAL_FEED_COURSES", method: "delete", key: 'delete_external_feed_courses'};

// Delete an external feed
// Deletes the external feed.
//
// API Docs: https://canvas.instructure.com/doc/api/announcement_external_feeds.html
// API Url: groups/{group_id}/external_feeds/{external_feed_id}
//
// Example:
// return canvasRequest(delete_external_feed_groups, {group_id, external_feed_id});
export const delete_external_feed_groups = { type: "DELETE_EXTERNAL_FEED_GROUPS", method: "delete", key: 'delete_external_feed_groups'};