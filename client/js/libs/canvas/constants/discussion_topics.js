//
// Discussion Topics
//
// List discussion topics
// Returns the paginated list of discussion topics for this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics
//
// Example:
// const query = {
//   order_by
//   scope
//   only_announcements
//   search_term
// }
// return canvasRequest(list_discussion_topics_courses, {course_id}, query);
export const list_discussion_topics_courses = { type: "LIST_DISCUSSION_TOPICS_COURSES", method: "get", reducer: 'discussion_topics'};

// List discussion topics
// Returns the paginated list of discussion topics for this course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics
//
// Example:
// const query = {
//   order_by
//   scope
//   only_announcements
//   search_term
// }
// return canvasRequest(list_discussion_topics_groups, {group_id}, query);
export const list_discussion_topics_groups = { type: "LIST_DISCUSSION_TOPICS_GROUPS", method: "get", reducer: 'discussion_topics'};

// Create a new discussion topic
// Create an new discussion topic for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics
//
// Example:
// const query = {
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
//   attachment
// }
// return canvasRequest(create_new_discussion_topic_courses, {course_id}, query);
export const create_new_discussion_topic_courses = { type: "CREATE_NEW_DISCUSSION_TOPIC_COURSES", method: "post", reducer: 'discussion_topics'};

// Create a new discussion topic
// Create an new discussion topic for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics
//
// Example:
// const query = {
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
//   attachment
// }
// return canvasRequest(create_new_discussion_topic_groups, {group_id}, query);
export const create_new_discussion_topic_groups = { type: "CREATE_NEW_DISCUSSION_TOPIC_GROUPS", method: "post", reducer: 'discussion_topics'};

// Update a topic
// Update an existing discussion topic for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}
//
// Example:
// const query = {
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
// }
// return canvasRequest(update_topic_courses, {course_id, topic_id}, query);
export const update_topic_courses = { type: "UPDATE_TOPIC_COURSES", method: "put", reducer: 'discussion_topics'};

// Update a topic
// Update an existing discussion topic for the course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}
//
// Example:
// const query = {
//   title
//   message
//   discussion_type
//   published
//   delayed_post_at
//   lock_at
//   podcast_enabled
//   podcast_has_student_posts
//   require_initial_post
//   assignment
//   is_announcement
//   pinned
//   position_after
//   group_category_id
//   allow_rating
//   only_graders_can_rate
//   sort_by_rating
// }
// return canvasRequest(update_topic_groups, {group_id, topic_id}, query);
export const update_topic_groups = { type: "UPDATE_TOPIC_GROUPS", method: "put", reducer: 'discussion_topics'};

// Delete a topic
// Deletes the discussion topic. This will also delete the assignment, if it's
// an assignment discussion.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}
//
// Example:
// return canvasRequest(delete_topic_courses, {course_id, topic_id});
export const delete_topic_courses = { type: "DELETE_TOPIC_COURSES", method: "delete", reducer: 'discussion_topics'};

// Delete a topic
// Deletes the discussion topic. This will also delete the assignment, if it's
// an assignment discussion.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}
//
// Example:
// return canvasRequest(delete_topic_groups, {group_id, topic_id});
export const delete_topic_groups = { type: "DELETE_TOPIC_GROUPS", method: "delete", reducer: 'discussion_topics'};

// Reorder pinned topics
// Puts the pinned discussion topics in the specified order.
// All pinned topics should be included.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/reorder
//
// Example:
// const query = {
//   order (required)
// }
// return canvasRequest(reorder_pinned_topics_courses, {course_id}, query);
export const reorder_pinned_topics_courses = { type: "REORDER_PINNED_TOPICS_COURSES", method: "post", reducer: 'discussion_topics'};

// Reorder pinned topics
// Puts the pinned discussion topics in the specified order.
// All pinned topics should be included.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/reorder
//
// Example:
// const query = {
//   order (required)
// }
// return canvasRequest(reorder_pinned_topics_groups, {group_id}, query);
export const reorder_pinned_topics_groups = { type: "REORDER_PINNED_TOPICS_GROUPS", method: "post", reducer: 'discussion_topics'};

// Update an entry
// Update an existing discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{id}
//
// Example:
// const query = {
//   message
// }
// return canvasRequest(update_entry_courses, {course_id, topic_id, id}, query);
export const update_entry_courses = { type: "UPDATE_ENTRY_COURSES", method: "put", reducer: 'discussion_topics'};

// Update an entry
// Update an existing discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the edit is not allowed, a 401 will be returned.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{id}
//
// Example:
// const query = {
//   message
// }
// return canvasRequest(update_entry_groups, {group_id, topic_id, id}, query);
export const update_entry_groups = { type: "UPDATE_ENTRY_GROUPS", method: "put", reducer: 'discussion_topics'};

// Delete an entry
// Delete a discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
// 
// The discussion will be marked deleted, and the user_id and message will be cleared out.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{id}
//
// Example:
// return canvasRequest(delete_entry_courses, {course_id, topic_id, id});
export const delete_entry_courses = { type: "DELETE_ENTRY_COURSES", method: "delete", reducer: 'discussion_topics'};

// Delete an entry
// Delete a discussion entry.
// 
// The entry must have been created by the current user, or the current user
// must have admin rights to the discussion. If the delete is not allowed, a 401 will be returned.
// 
// The discussion will be marked deleted, and the user_id and message will be cleared out.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{id}
//
// Example:
// return canvasRequest(delete_entry_groups, {group_id, topic_id, id});
export const delete_entry_groups = { type: "DELETE_ENTRY_GROUPS", method: "delete", reducer: 'discussion_topics'};

// Get a single topic
// Returns data on an individual discussion topic. See the List action for the response formatting.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}
//
// Example:
// return canvasRequest(get_single_topic_courses, {course_id, topic_id});
export const get_single_topic_courses = { type: "GET_SINGLE_TOPIC_COURSES", method: "get", reducer: 'discussion_topics'};

// Get a single topic
// Returns data on an individual discussion topic. See the List action for the response formatting.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}
//
// Example:
// return canvasRequest(get_single_topic_groups, {group_id, topic_id});
export const get_single_topic_groups = { type: "GET_SINGLE_TOPIC_GROUPS", method: "get", reducer: 'discussion_topics'};

// Get the full topic
// Return a cached structure of the discussion topic, containing all entries,
// their authors, and their message bodies.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// In some rare situations, this cached structure may not be available yet. In
// that case, the server will respond with a 503 error, and the caller should
// try again soon.
// 
// The response is an object containing the following keys:
// * "participants": A list of summary information on users who have posted to
//   the discussion. Each value is an object containing their id, display_name,
//   and avatar_url.
// * "unread_entries": A list of entry ids that are unread by the current
//   user. this implies that any entry not in this list is read.
// * "entry_ratings": A map of entry ids to ratings by the current user. Entries
//   not in this list have no rating. Only populated if rating is enabled.
// * "forced_entries": A list of entry ids that have forced_read_state set to
//   true. This flag is meant to indicate the entry's read_state has been
//   manually set to 'unread' by the user, so the entry should not be
//   automatically marked as read.
// * "view": A threaded view of all the entries in the discussion, containing
//   the id, user_id, and message.
// * "new_entries": Because this view is eventually consistent, it's possible
//   that newly created or updated entries won't yet be reflected in the view.
//   If the application wants to also get a flat list of all entries not yet
//   reflected in the view, pass include_new_entries=1 to the request and this
//   array of entries will be returned. These entries are returned in a flat
//   array, in ascending created_at order.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/view
//
// Example:
// return canvasRequest(get_full_topic_courses, {course_id, topic_id});
export const get_full_topic_courses = { type: "GET_FULL_TOPIC_COURSES", method: "get", reducer: 'discussion_topics'};

// Get the full topic
// Return a cached structure of the discussion topic, containing all entries,
// their authors, and their message bodies.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// In some rare situations, this cached structure may not be available yet. In
// that case, the server will respond with a 503 error, and the caller should
// try again soon.
// 
// The response is an object containing the following keys:
// * "participants": A list of summary information on users who have posted to
//   the discussion. Each value is an object containing their id, display_name,
//   and avatar_url.
// * "unread_entries": A list of entry ids that are unread by the current
//   user. this implies that any entry not in this list is read.
// * "entry_ratings": A map of entry ids to ratings by the current user. Entries
//   not in this list have no rating. Only populated if rating is enabled.
// * "forced_entries": A list of entry ids that have forced_read_state set to
//   true. This flag is meant to indicate the entry's read_state has been
//   manually set to 'unread' by the user, so the entry should not be
//   automatically marked as read.
// * "view": A threaded view of all the entries in the discussion, containing
//   the id, user_id, and message.
// * "new_entries": Because this view is eventually consistent, it's possible
//   that newly created or updated entries won't yet be reflected in the view.
//   If the application wants to also get a flat list of all entries not yet
//   reflected in the view, pass include_new_entries=1 to the request and this
//   array of entries will be returned. These entries are returned in a flat
//   array, in ascending created_at order.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/view
//
// Example:
// return canvasRequest(get_full_topic_groups, {group_id, topic_id});
export const get_full_topic_groups = { type: "GET_FULL_TOPIC_GROUPS", method: "get", reducer: 'discussion_topics'};

// Post an entry
// Create a new entry in a discussion topic. Returns a json representation of
// the created entry (see documentation for 'entries' method) on success.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries
//
// Example:
// const query = {
//   message
//   attachment
// }
// return canvasRequest(post_entry_courses, {course_id, topic_id}, query);
export const post_entry_courses = { type: "POST_ENTRY_COURSES", method: "post", reducer: 'discussion_topics'};

// Post an entry
// Create a new entry in a discussion topic. Returns a json representation of
// the created entry (see documentation for 'entries' method) on success.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries
//
// Example:
// const query = {
//   message
//   attachment
// }
// return canvasRequest(post_entry_groups, {group_id, topic_id}, query);
export const post_entry_groups = { type: "POST_ENTRY_GROUPS", method: "post", reducer: 'discussion_topics'};

// List topic entries
// Retrieve the (paginated) top-level entries in a discussion topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Will include the 10 most recent replies, if any, for each entry returned.
// 
// If the topic is a root topic with children corresponding to groups of a
// group assignment, entries from those subtopics for which the user belongs
// to the corresponding group will be returned.
// 
// Ordering of returned entries is newest-first by posting timestamp (reply
// activity is ignored).
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries
//
// Example:
// return canvasRequest(list_topic_entries_courses, {course_id, topic_id});
export const list_topic_entries_courses = { type: "LIST_TOPIC_ENTRIES_COURSES", method: "get", reducer: 'discussion_topics'};

// List topic entries
// Retrieve the (paginated) top-level entries in a discussion topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Will include the 10 most recent replies, if any, for each entry returned.
// 
// If the topic is a root topic with children corresponding to groups of a
// group assignment, entries from those subtopics for which the user belongs
// to the corresponding group will be returned.
// 
// Ordering of returned entries is newest-first by posting timestamp (reply
// activity is ignored).
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries
//
// Example:
// return canvasRequest(list_topic_entries_groups, {group_id, topic_id});
export const list_topic_entries_groups = { type: "LIST_TOPIC_ENTRIES_GROUPS", method: "get", reducer: 'discussion_topics'};

// Post a reply
// Add a reply to an entry in a discussion topic. Returns a json
// representation of the created reply (see documentation for 'replies'
// method) on success.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
//
// Example:
// const query = {
//   message
//   attachment
// }
// return canvasRequest(post_reply_courses, {course_id, topic_id, entry_id}, query);
export const post_reply_courses = { type: "POST_REPLY_COURSES", method: "post", reducer: 'discussion_topics'};

// Post a reply
// Add a reply to an entry in a discussion topic. Returns a json
// representation of the created reply (see documentation for 'replies'
// method) on success.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
//
// Example:
// const query = {
//   message
//   attachment
// }
// return canvasRequest(post_reply_groups, {group_id, topic_id, entry_id}, query);
export const post_reply_groups = { type: "POST_REPLY_GROUPS", method: "post", reducer: 'discussion_topics'};

// List entry replies
// Retrieve the (paginated) replies to a top-level entry in a discussion
// topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Ordering of returned entries is newest-first by creation timestamp.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
//
// Example:
// return canvasRequest(list_entry_replies_courses, {course_id, topic_id, entry_id});
export const list_entry_replies_courses = { type: "LIST_ENTRY_REPLIES_COURSES", method: "get", reducer: 'discussion_topics'};

// List entry replies
// Retrieve the (paginated) replies to a top-level entry in a discussion
// topic.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
// 
// Ordering of returned entries is newest-first by creation timestamp.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/replies
//
// Example:
// return canvasRequest(list_entry_replies_groups, {group_id, topic_id, entry_id});
export const list_entry_replies_groups = { type: "LIST_ENTRY_REPLIES_GROUPS", method: "get", reducer: 'discussion_topics'};

// List entries
// Retrieve a paginated list of discussion entries, given a list of ids.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entry_list
//
// Example:
// const query = {
//   ids
// }
// return canvasRequest(list_entries_courses, {course_id, topic_id}, query);
export const list_entries_courses = { type: "LIST_ENTRIES_COURSES", method: "get", reducer: 'discussion_topics'};

// List entries
// Retrieve a paginated list of discussion entries, given a list of ids.
// 
// May require (depending on the topic) that the user has posted in the topic.
// If it is required, and the user has not posted, will respond with a 403
// Forbidden status and the body 'require_initial_post'.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entry_list
//
// Example:
// const query = {
//   ids
// }
// return canvasRequest(list_entries_groups, {group_id, topic_id}, query);
export const list_entries_groups = { type: "LIST_ENTRIES_GROUPS", method: "get", reducer: 'discussion_topics'};

// Mark topic as read
// Mark the initial text of the discussion topic as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read
//
// Example:
// return canvasRequest(mark_topic_as_read_courses, {course_id, topic_id});
export const mark_topic_as_read_courses = { type: "MARK_TOPIC_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};

// Mark topic as read
// Mark the initial text of the discussion topic as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read
//
// Example:
// return canvasRequest(mark_topic_as_read_groups, {group_id, topic_id});
export const mark_topic_as_read_groups = { type: "MARK_TOPIC_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};

// Mark topic as unread
// Mark the initial text of the discussion topic as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read
//
// Example:
// return canvasRequest(mark_topic_as_unread_courses, {course_id, topic_id});
export const mark_topic_as_unread_courses = { type: "MARK_TOPIC_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};

// Mark topic as unread
// Mark the initial text of the discussion topic as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read
//
// Example:
// return canvasRequest(mark_topic_as_unread_groups, {group_id, topic_id});
export const mark_topic_as_unread_groups = { type: "MARK_TOPIC_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};

// Mark all entries as read
// Mark the discussion topic and all its entries as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read_all
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_all_entries_as_read_courses, {course_id, topic_id}, query);
export const mark_all_entries_as_read_courses = { type: "MARK_ALL_ENTRIES_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};

// Mark all entries as read
// Mark the discussion topic and all its entries as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read_all
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_all_entries_as_read_groups, {group_id, topic_id}, query);
export const mark_all_entries_as_read_groups = { type: "MARK_ALL_ENTRIES_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};

// Mark all entries as unread
// Mark the discussion topic and all its entries as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/read_all
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_all_entries_as_unread_courses, {course_id, topic_id}, query);
export const mark_all_entries_as_unread_courses = { type: "MARK_ALL_ENTRIES_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};

// Mark all entries as unread
// Mark the discussion topic and all its entries as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/read_all
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_all_entries_as_unread_groups, {group_id, topic_id}, query);
export const mark_all_entries_as_unread_groups = { type: "MARK_ALL_ENTRIES_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};

// Mark entry as read
// Mark a discussion entry as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_entry_as_read_courses, {course_id, topic_id, entry_id}, query);
export const mark_entry_as_read_courses = { type: "MARK_ENTRY_AS_READ_COURSES", method: "put", reducer: 'discussion_topics'};

// Mark entry as read
// Mark a discussion entry as read.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_entry_as_read_groups, {group_id, topic_id, entry_id}, query);
export const mark_entry_as_read_groups = { type: "MARK_ENTRY_AS_READ_GROUPS", method: "put", reducer: 'discussion_topics'};

// Mark entry as unread
// Mark a discussion entry as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_entry_as_unread_courses, {course_id, topic_id, entry_id}, query);
export const mark_entry_as_unread_courses = { type: "MARK_ENTRY_AS_UNREAD_COURSES", method: "delete", reducer: 'discussion_topics'};

// Mark entry as unread
// Mark a discussion entry as unread.
// 
// No request fields are necessary.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/read
//
// Example:
// const query = {
//   forced_read_state
// }
// return canvasRequest(mark_entry_as_unread_groups, {group_id, topic_id, entry_id}, query);
export const mark_entry_as_unread_groups = { type: "MARK_ENTRY_AS_UNREAD_GROUPS", method: "delete", reducer: 'discussion_topics'};

// Rate entry
// Rate a discussion entry.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating
//
// Example:
// const query = {
//   rating
// }
// return canvasRequest(rate_entry_courses, {course_id, topic_id, entry_id}, query);
export const rate_entry_courses = { type: "RATE_ENTRY_COURSES", method: "post", reducer: 'discussion_topics'};

// Rate entry
// Rate a discussion entry.
// 
// On success, the response will be 204 No Content with an empty body.
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/entries/{entry_id}/rating
//
// Example:
// const query = {
//   rating
// }
// return canvasRequest(rate_entry_groups, {group_id, topic_id, entry_id}, query);
export const rate_entry_groups = { type: "RATE_ENTRY_GROUPS", method: "post", reducer: 'discussion_topics'};

// Subscribe to a topic
// Subscribe to a topic to receive notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/subscribed
//
// Example:
// return canvasRequest(subscribe_to_topic_courses, {course_id, topic_id});
export const subscribe_to_topic_courses = { type: "SUBSCRIBE_TO_TOPIC_COURSES", method: "put", reducer: 'discussion_topics'};

// Subscribe to a topic
// Subscribe to a topic to receive notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/subscribed
//
// Example:
// return canvasRequest(subscribe_to_topic_groups, {group_id, topic_id});
export const subscribe_to_topic_groups = { type: "SUBSCRIBE_TO_TOPIC_GROUPS", method: "put", reducer: 'discussion_topics'};

// Unsubscribe from a topic
// Unsubscribe from a topic to stop receiving notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: courses/{course_id}/discussion_topics/{topic_id}/subscribed
//
// Example:
// return canvasRequest(unsubscribe_from_topic_courses, {course_id, topic_id});
export const unsubscribe_from_topic_courses = { type: "UNSUBSCRIBE_FROM_TOPIC_COURSES", method: "delete", reducer: 'discussion_topics'};

// Unsubscribe from a topic
// Unsubscribe from a topic to stop receiving notifications about new entries
// 
// On success, the response will be 204 No Content with an empty body
//
// API Docs: https://canvas.instructure.com/doc/api/discussion_topics.html
// API Url: groups/{group_id}/discussion_topics/{topic_id}/subscribed
//
// Example:
// return canvasRequest(unsubscribe_from_topic_groups, {group_id, topic_id});
export const unsubscribe_from_topic_groups = { type: "UNSUBSCRIBE_FROM_TOPIC_GROUPS", method: "delete", reducer: 'discussion_topics'};