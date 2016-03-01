//
// Users
//
// List users in account
// Retrieve the list of users associated with this account.
// 
//  @example_request
//    curl https://<canvas>/api/v1/accounts/self/users?search_term=<search value> \
//       -X GET \
//       -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/users
//
// Example:
// const query = {
//   search_term
// }
// return canvasRequest(list_users_in_account, {account_id}, query);
export const list_users_in_account = { type: "LIST_USERS_IN_ACCOUNT", method: "get", reducer: 'users'};

// List the activity stream
// Returns the current user's global activity stream, paginated.
// 
// There are many types of objects that can be returned in the activity
// stream. All object types have the same basic set of shared attributes:
//   !!!javascript
//   {
//     'created_at': '2011-07-13T09:12:00Z',
//     'updated_at': '2011-07-25T08:52:41Z',
//     'id': 1234,
//     'title': 'Stream Item Subject',
//     'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
//     'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
//     'read_state': false,
//     'context_type': 'course', // course|group
//     'course_id': 1,
//     'group_id': null,
//     'html_url': "http://..." // URL to the Canvas web UI for this stream item
//   }
// 
// In addition, each item type has its own set of attributes available.
// 
// DiscussionTopic:
// 
//   !!!javascript
//   {
//     'type': 'DiscussionTopic',
//     'discussion_topic_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': true,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For DiscussionTopic, the message is truncated at 4kb.
// 
// Announcement:
// 
//   !!!javascript
//   {
//     'type': 'Announcement',
//     'announcement_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': null,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For Announcement, the message is truncated at 4kb.
// 
// Conversation:
// 
//   !!!javascript
//   {
//     'type': 'Conversation',
//     'conversation_id': 1234,
//     'private': false,
//     'participant_count': 3,
//   }
// 
// Message:
// 
//   !!!javascript
//   {
//     'type': 'Message',
//     'message_id': 1234,
//     'notification_category': 'Assignment Graded'
//   }
// 
// Submission:
// 
// Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
// 
// Conference:
// 
//   !!!javascript
//   {
//     'type': 'Conference',
//     'web_conference_id': 1234
//   }
// 
// Collaboration:
// 
//   !!!javascript
//   {
//     'type': 'Collaboration',
//     'collaboration_id': 1234
//   }
// 
// AssessmentRequest:
// 
//   !!!javascript
//   {
//     'type': 'AssessmentRequest',
//     'assessment_request_id': 1234
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream
//
// Example:
// return canvasRequest(list_activity_stream_self, {});
export const list_activity_stream_self = { type: "LIST_ACTIVITY_STREAM_SELF", method: "get", reducer: 'users'};

// List the activity stream
// Returns the current user's global activity stream, paginated.
// 
// There are many types of objects that can be returned in the activity
// stream. All object types have the same basic set of shared attributes:
//   !!!javascript
//   {
//     'created_at': '2011-07-13T09:12:00Z',
//     'updated_at': '2011-07-25T08:52:41Z',
//     'id': 1234,
//     'title': 'Stream Item Subject',
//     'message': 'This is the body text of the activity stream item. It is plain-text, and can be multiple paragraphs.',
//     'type': 'DiscussionTopic|Conversation|Message|Submission|Conference|Collaboration|AssessmentRequest...',
//     'read_state': false,
//     'context_type': 'course', // course|group
//     'course_id': 1,
//     'group_id': null,
//     'html_url': "http://..." // URL to the Canvas web UI for this stream item
//   }
// 
// In addition, each item type has its own set of attributes available.
// 
// DiscussionTopic:
// 
//   !!!javascript
//   {
//     'type': 'DiscussionTopic',
//     'discussion_topic_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': true,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For DiscussionTopic, the message is truncated at 4kb.
// 
// Announcement:
// 
//   !!!javascript
//   {
//     'type': 'Announcement',
//     'announcement_id': 1234,
//     'total_root_discussion_entries': 5,
//     'require_initial_post': true,
//     'user_has_posted': null,
//     'root_discussion_entries': {
//       ...
//     }
//   }
// 
// For Announcement, the message is truncated at 4kb.
// 
// Conversation:
// 
//   !!!javascript
//   {
//     'type': 'Conversation',
//     'conversation_id': 1234,
//     'private': false,
//     'participant_count': 3,
//   }
// 
// Message:
// 
//   !!!javascript
//   {
//     'type': 'Message',
//     'message_id': 1234,
//     'notification_category': 'Assignment Graded'
//   }
// 
// Submission:
// 
// Returns an {api:Submissions:Submission Submission} with its Course and Assignment data.
// 
// Conference:
// 
//   !!!javascript
//   {
//     'type': 'Conference',
//     'web_conference_id': 1234
//   }
// 
// Collaboration:
// 
//   !!!javascript
//   {
//     'type': 'Collaboration',
//     'collaboration_id': 1234
//   }
// 
// AssessmentRequest:
// 
//   !!!javascript
//   {
//     'type': 'AssessmentRequest',
//     'assessment_request_id': 1234
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/activity_stream
//
// Example:
// return canvasRequest(list_activity_stream_activity_stream, {});
export const list_activity_stream_activity_stream = { type: "LIST_ACTIVITY_STREAM_ACTIVITY_STREAM", method: "get", reducer: 'users'};

// Activity stream summary
// Returns a summary of the current user's global activity stream.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream/summary
//
// Example:
// return canvasRequest(activity_stream_summary, {});
export const activity_stream_summary = { type: "ACTIVITY_STREAM_SUMMARY", method: "get", reducer: 'users'};

// List the TODO items
// Returns the current user's list of todo items, as seen on the user dashboard.
// 
// There is a limit to the number of items returned.
// 
// The `ignore` and `ignore_permanently` URLs can be used to update the user's
// preferences on what items will be displayed.
// Performing a DELETE request against the `ignore` URL will hide that item
// from future todo item requests, until the item changes.
// Performing a DELETE request against the `ignore_permanently` URL will hide
// that item forever.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/todo
//
// Example:
// return canvasRequest(list_todo_items, {});
export const list_todo_items = { type: "LIST_TODO_ITEMS", method: "get", reducer: 'users'};

// List upcoming assignments, calendar events
// Returns the current user's upcoming events, i.e. the same things shown
// in the dashboard 'Coming Up' sidebar.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/upcoming_events
//
// Example:
// return canvasRequest(list_upcoming_assignments_calendar_events, {});
export const list_upcoming_assignments_calendar_events = { type: "LIST_UPCOMING_ASSIGNMENTS_CALENDAR_EVENTS", method: "get", reducer: 'users'};

// List Missing Submissions
// returns past-due assignments for which the student does not have a submission.
// The user sending the request must either be an admin or a parent observer using the parent app
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/missing_submissions
//
// Example:
// return canvasRequest(list_missing_submissions, {user_id});
export const list_missing_submissions = { type: "LIST_MISSING_SUBMISSIONS", method: "get", reducer: 'users'};

// Hide a stream item
// Hide the given stream item.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream/{id}
//
// Example:
// return canvasRequest(hide_stream_item, {id});
export const hide_stream_item = { type: "HIDE_STREAM_ITEM", method: "delete", reducer: 'users'};

// Hide all stream items
// Hide all stream items for the user
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/activity_stream
//
// Example:
// return canvasRequest(hide_all_stream_items, {});
export const hide_all_stream_items = { type: "HIDE_ALL_STREAM_ITEMS", method: "delete", reducer: 'users'};

// Upload a file
// Upload a file to the user's personal files section.
// 
// This API endpoint is the first step in uploading a file to a user's files.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Note that typically users will only be able to upload files to their
// own files section. Passing a user_id of +self+ is an easy shortcut
// to specify the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/files
//
// Example:
// return canvasRequest(upload_file, {user_id});
export const upload_file = { type: "UPLOAD_FILE", method: "post", reducer: 'users'};

// Show user details
// Shows details for user.
// 
// Also includes an attribute "permissions", a non-comprehensive list of permissions for the user.
// Example:
//   !!!javascript
//   "permissions": {
//    "can_update_name": true, // Whether the user can update their name.
//    "can_update_avatar": false // Whether the user can update their avatar.
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}
//
// Example:
// return canvasRequest(show_user_details, {id});
export const show_user_details = { type: "SHOW_USER_DETAILS", method: "get", reducer: 'users'};

// Create a user
// Create and return a new user and pseudonym for an account.
// 
// If you don't have the "Modify login details for users" permission, but
// self-registration is enabled on the account, you can still use this
// endpoint to register new users. Certain fields will be required, and
// others will be ignored (see below).
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/users
//
// Example:
// const query = {
//   user[name]
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[locale]
//   user[birthdate]
//   user[terms_of_use]
//   user[skip_registration]
//   pseudonym[unique_id] (required)
//   pseudonym[password]
//   pseudonym[sis_user_id]
//   pseudonym[send_confirmation]
//   pseudonym[force_self_registration]
//   pseudonym[authentication_provider_id]
//   communication_channel[type]
//   communication_channel[address]
//   communication_channel[confirmation_url]
//   communication_channel[skip_confirmation]
//   force_validations
//   enable_sis_reactivation
// }
// return canvasRequest(create_user, {account_id}, query);
export const create_user = { type: "CREATE_USER", method: "post", reducer: 'users'};

// Self register a user
// Self register and return a new user and pseudonym for an account.
// 
// If self-registration is enabled on the account, you can use this
// endpoint to self register new users.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: accounts/{account_id}/self_registration
//
// Example:
// const query = {
//   user[name] (required)
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[locale]
//   user[birthdate]
//   user[terms_of_use] (required)
//   pseudonym[unique_id] (required)
//   communication_channel[type]
//   communication_channel[address]
// }
// return canvasRequest(self_register_user, {account_id}, query);
export const self_register_user = { type: "SELF_REGISTER_USER", method: "post", reducer: 'users'};

// Update user settings.
// Update an existing user's settings.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/settings
//
// Example:
// const query = {
//   manual_mark_as_read
// }
// return canvasRequest(update_user_settings, {id}, query);
export const update_user_settings = { type: "UPDATE_USER_SETTINGS", method: "get", reducer: 'users'};

// Get custom colors
// Returns all custom colors that have been saved for a user.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors
//
// Example:
// return canvasRequest(get_custom_colors, {id});
export const get_custom_colors = { type: "GET_CUSTOM_COLORS", method: "get", reducer: 'users'};

// Get custom color
// Returns the custom colors that have been saved for a user for a given context.
// 
// The asset_string parameter should be in the format 'context_id', for example
// 'course_42'.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors/{asset_string}
//
// Example:
// return canvasRequest(get_custom_color, {id, asset_string});
export const get_custom_color = { type: "GET_CUSTOM_COLOR", method: "get", reducer: 'users'};

// Update custom color
// Updates a custom color for a user for a given context.  This allows
// colors for the calendar and elsewhere to be customized on a user basis.
// 
// The asset string parameter should be in the format 'context_id', for example
// 'course_42'
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/colors/{asset_string}
//
// Example:
// const query = {
//   hexcode
// }
// return canvasRequest(update_custom_color, {id, asset_string}, query);
export const update_custom_color = { type: "UPDATE_CUSTOM_COLOR", method: "put", reducer: 'users'};

// Edit a user
// Modify an existing user. To modify a user's login, see the documentation for logins.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}
//
// Example:
// const query = {
//   user[name]
//   user[short_name]
//   user[sortable_name]
//   user[time_zone]
//   user[email]
//   user[locale]
//   user[avatar][token]
//   user[avatar][url]
// }
// return canvasRequest(edit_user, {id}, query);
export const edit_user = { type: "EDIT_USER", method: "put", reducer: 'users'};

// Merge user into another user
// Merge a user into another user.
// To merge users, the caller must have permissions to manage both users.
// 
// When finding users by SIS ids in different accounts the
// destination_account_id is required.
// 
// The account can also be identified by passing the domain in destination_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/merge_into/{destination_user_id}
//
// Example:
// return canvasRequest(merge_user_into_another_user_destination_user_id, {id, destination_user_id});
export const merge_user_into_another_user_destination_user_id = { type: "MERGE_USER_INTO_ANOTHER_USER_DESTINATION_USER_ID", method: "put", reducer: 'users'};

// Merge user into another user
// Merge a user into another user.
// To merge users, the caller must have permissions to manage both users.
// 
// When finding users by SIS ids in different accounts the
// destination_account_id is required.
// 
// The account can also be identified by passing the domain in destination_account_id.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{id}/merge_into/accounts/{destination_account_id}/users/{destination_user_id}
//
// Example:
// return canvasRequest(merge_user_into_another_user_accounts, {id, destination_account_id, destination_user_id});
export const merge_user_into_another_user_accounts = { type: "MERGE_USER_INTO_ANOTHER_USER_ACCOUNTS", method: "put", reducer: 'users'};

// Get user profile
// Returns user profile data, including user id, name, and profile pic.
// 
// When requesting the profile for the user accessing the API, the user's
// calendar feed URL will be returned as well.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/profile
//
// Example:
// return canvasRequest(get_user_profile, {user_id});
export const get_user_profile = { type: "GET_USER_PROFILE", method: "get", reducer: 'users'};

// List avatar options
// Retrieve the possible user avatar options that can be set with the user update endpoint. The response will be an array of avatar records. If the 'type' field is 'attachment', the record will include all the normal attachment json fields; otherwise it will include only the 'url' and 'display_name' fields. Additionally, all records will include a 'type' field and a 'token' field. The following explains each field in more detail
// type:: ["gravatar"|"attachment"|"no_pic"] The type of avatar record, for categorization purposes.
// url:: The url of the avatar
// token:: A unique representation of the avatar record which can be used to set the avatar with the user update endpoint. Note: this is an internal representation and is subject to change without notice. It should be consumed with this api endpoint and used in the user update endpoint, and should not be constructed by the client.
// display_name:: A textual description of the avatar record
// id:: ['attachment' type only] the internal id of the attachment
// content-type:: ['attachment' type only] the content-type of the attachment
// filename:: ['attachment' type only] the filename of the attachment
// size:: ['attachment' type only] the size of the attachment
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/avatars
//
// Example:
// return canvasRequest(list_avatar_options, {user_id});
export const list_avatar_options = { type: "LIST_AVATAR_OPTIONS", method: "get", reducer: 'users'};

// List user page views
// Return the user's page view history in json format, similar to the
// available CSV download. Pagination is used as described in API basics
// section. Page views are returned in descending order, newest to oldest.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/page_views
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(list_user_page_views, {user_id}, query);
export const list_user_page_views = { type: "LIST_USER_PAGE_VIEWS", method: "get", reducer: 'users'};

// Store custom data
// Store arbitrary user data as JSON.
// 
// Arbitrary JSON data can be stored for a User.
// A typical scenario would be an external site/service that registers users in Canvas
// and wants to capture additional info about them.  The part of the URL that follows
// +/custom_data/+ defines the scope of the request, and it reflects the structure of
// the JSON data to be stored or retrieved.
// 
// The value +self+ may be used for +user_id+ to store data associated with the calling user.
// In order to access another user's custom data, you must be an account administrator with
// permission to manage users.
// 
// A namespace parameter, +ns+, is used to prevent custom_data collisions between
// different apps.  This parameter is required for all custom_data requests.
// 
// A request with Content-Type multipart/form-data or Content-Type
// application/x-www-form-urlencoded can only be used to store strings.
// 
// Example PUT with multipart/form-data data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/telephone' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data=555-1234' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "555-1234"
//   }
// 
// Subscopes (or, generated scopes) can also be specified by passing values to
// +data+[+subscope+].
// 
// Example PUT specifying subscopes:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data[waist]=32in' \
//     -F 'data[inseam]=34in' \
//     -F 'data[chest]=40in' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "chest": "40in",
//       "waist": "32in",
//       "inseam": "34in"
//     }
//   }
// 
// Following such a request, subsets of the stored data to be retrieved directly from a subscope.
// 
// Example {api:UsersController#get_custom_data GET} from a generated scope
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/body/measurements/chest' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "40in"
//   }
// 
// If you want to store more than just strings (i.e. numbers, arrays, hashes, true, false,
// and/or null), you must make a request with Content-Type application/json as in the following
// example.
// 
// Example PUT with JSON data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -H 'Content-Type: application/json' \
//     -X PUT \
//     -d '{
//           "ns": "com.my-organization.canvas-app",
//           "data": {
//             "a-number": 6.02e23,
//             "a-bool": true,
//             "a-string": "true",
//             "a-hash": {"a": {"b": "ohai"}},
//             "an-array": [1, "two", null, false]
//           }
//         }' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "a-number": 6.02e+23,
//       "a-bool": true,
//       "a-string": "true",
//       "a-hash": {
//         "a": {
//           "b": "ohai"
//         }
//       },
//       "an-array": [1, "two", null, false]
//     }
//   }
// 
// If the data is an Object (as it is in the above example), then subsets of the data can
// be accessed by including the object's (possibly nested) keys in the scope of a GET request.
// 
// Example {api:UsersController#get_custom_data GET} with a generated scope:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/a-hash/a/b' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "ohai"
//   }
// 
// 
// On success, this endpoint returns an object containing the data that was stored.
// 
// Responds with status code 200 if the scope already contained data, and it was overwritten
// by the data specified in the request.
// 
// Responds with status code 201 if the scope was previously empty, and the data specified
// in the request was successfully stored there.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid, or if
// the +data+ parameter is missing.
// 
// Responds with status code 409 if the requested scope caused a conflict and data was not stored.
// This happens when storing data at the requested scope would cause data at an outer scope
// to be lost.  e.g., if +/custom_data+ was +{"fashion_app": {"hair": "blonde"}}+, but
// you tried to +`PUT /custom_data/fashion_app/hair/style -F data=buzz`+, then for the request
// to succeed,the value of +/custom_data/fashion_app/hair+ would have to become a hash, and its
// old string value would be lost.  In this situation, an error object is returned with the
// following format:
// 
//   !!!javascript
//   {
//     "message": "write conflict for custom_data hash",
//     "conflict_scope": "fashion_app/hair",
//     "type_at_conflict": "String",
//     "value_at_conflict": "blonde"
//   }
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const query = {
//   ns (required)
//   data (required)
// }
// return canvasRequest(store_custom_data, {user_id}, query);
export const store_custom_data = { type: "STORE_CUSTOM_DATA", method: "put", reducer: 'users'};

// Load custom data
// Load custom user data.
// 
// Arbitrary JSON data can be stored for a User.  This API call
// retrieves that data for a (optional) given scope.
// See {api:UsersController#set_custom_data Store Custom Data} for details and
// examples.
// 
// On success, this endpoint returns an object containing the data that was requested.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
// or if the specified scope does not contain any data.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const query = {
//   ns (required)
// }
// return canvasRequest(load_custom_data, {user_id}, query);
export const load_custom_data = { type: "LOAD_CUSTOM_DATA", method: "get", reducer: 'users'};

// Delete custom data
// Delete custom user data.
// 
// Arbitrary JSON data can be stored for a User.  This API call
// deletes that data for a given scope.  Without a scope, all custom_data is deleted.
// See {api:UsersController#set_custom_data Store Custom Data} for details and
// examples of storage and retrieval.
// 
// As an example, we'll store some data, then delete a subset of it.
// 
// Example {api:UsersController#set_custom_data PUT} with valid JSON data:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X PUT \
//     -F 'ns=com.my-organization.canvas-app' \
//     -F 'data[fruit][apple]=so tasty' \
//     -F 'data[fruit][kiwi]=a bit sour' \
//     -F 'data[veggies][root][onion]=tear-jerking' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty",
//         "kiwi": "a bit sour"
//       },
//       "veggies": {
//         "root": {
//           "onion": "tear-jerking"
//         }
//       }
//     }
//   }
// 
// Example DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/fruit/kiwi' \
//     -X DELETE \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "a bit sour"
//   }
// 
// Example {api:UsersController#get_custom_data GET} following the above DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty"
//       },
//       "veggies": {
//         "root": {
//           "onion": "tear-jerking"
//         }
//       }
//     }
//   }
// 
// Note that hashes left empty after a DELETE will get removed from the custom_data store.
// For example, following the previous commands, if we delete /custom_data/veggies/root/onion,
// then the entire /custom_data/veggies scope will be removed.
// 
// Example DELETE that empties a parent scope:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data/veggies/root/onion' \
//     -X DELETE \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": "tear-jerking"
//   }
// 
// Example {api:UsersController#get_custom_data GET} following the above DELETE:
//   curl 'https://<canvas>/api/v1/users/<user_id>/custom_data' \
//     -X GET \
//     -F 'ns=com.my-organization.canvas-app' \
//     -H 'Authorization: Bearer <token>'
// 
// Response:
//   !!!javascript
//   {
//     "data": {
//       "fruit": {
//         "apple": "so tasty"
//       }
//     }
//   }
// 
// On success, this endpoint returns an object containing the data that was deleted.
// 
// Responds with status code 400 if the namespace parameter, +ns+, is missing or invalid,
// or if the specified scope does not contain any data.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/{user_id}/custom_data
//
// Example:
// const query = {
//   ns (required)
// }
// return canvasRequest(delete_custom_data, {user_id}, query);
export const delete_custom_data = { type: "DELETE_CUSTOM_DATA", method: "delete", reducer: 'users'};

// List course nicknames
// Returns all course nicknames you have set.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames
//
// Example:
// return canvasRequest(list_course_nicknames, {});
export const list_course_nicknames = { type: "LIST_COURSE_NICKNAMES", method: "get", reducer: 'users'};

// Get course nickname
// Returns the nickname for a specific course.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// return canvasRequest(get_course_nickname, {course_id});
export const get_course_nickname = { type: "GET_COURSE_NICKNAME", method: "get", reducer: 'users'};

// Set course nickname
// Set a nickname for the given course. This will replace the course's name
// in output of API calls you make subsequently, as well as in selected
// places in the Canvas web user interface.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// const query = {
//   nickname (required)
// }
// return canvasRequest(set_course_nickname, {course_id}, query);
export const set_course_nickname = { type: "SET_COURSE_NICKNAME", method: "put", reducer: 'users'};

// Remove course nickname
// Remove the nickname for the given course.
// Subsequent course API calls will return the actual name for the course.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames/{course_id}
//
// Example:
// return canvasRequest(remove_course_nickname, {course_id});
export const remove_course_nickname = { type: "REMOVE_COURSE_NICKNAME", method: "delete", reducer: 'users'};

// Clear course nicknames
// Remove all stored course nicknames.
//
// API Docs: https://canvas.instructure.com/doc/api/users.html
// API Url: users/self/course_nicknames
//
// Example:
// return canvasRequest(clear_course_nicknames, {});
export const clear_course_nicknames = { type: "CLEAR_COURSE_NICKNAMES", method: "delete", reducer: 'users'};