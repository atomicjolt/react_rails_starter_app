//
// Notification Preferences
//
// List preferences
// Fetch all preferences for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences
//
// Example:
// return canvasRequest(list_preferences_communication_channel_id, {user_id, communication_channel_id});
export const list_preferences_communication_channel_id = { type: "LIST_PREFERENCES_COMMUNICATION_CHANNEL_ID", method: "get"};

// List preferences
// Fetch all preferences for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences
//
// Example:
// return canvasRequest(list_preferences_type, {user_id, type, address});
export const list_preferences_type = { type: "LIST_PREFERENCES_TYPE", method: "get"};

// List of preference categories
// Fetch all notification preference categories for the given communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preference_categories
//
// Example:
// return canvasRequest(list_of_preference_categories, {user_id, communication_channel_id});
export const list_of_preference_categories = { type: "LIST_OF_PREFERENCE_CATEGORIES", method: "get"};

// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences/{notification}
//
// Example:
// return canvasRequest(get_preference_communication_channel_id, {user_id, communication_channel_id, notification});
export const get_preference_communication_channel_id = { type: "GET_PREFERENCE_COMMUNICATION_CHANNEL_ID", method: "get"};

// Get a preference
// Fetch the preference for the given notification for the given communicaiton channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/{user_id}/communication_channels/{type}/{address}/notification_preferences/{notification}
//
// Example:
// return canvasRequest(get_preference_type, {user_id, type, address, notification});
export const get_preference_type = { type: "GET_PREFERENCE_TYPE", method: "get"};

// Update a preference
// Change the preference for a single notification for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences/{notification}
//
// Example:
// const query = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preference_communication_channel_id, {communication_channel_id, notification}, query);
export const update_preference_communication_channel_id = { type: "UPDATE_PREFERENCE_COMMUNICATION_CHANNEL_ID", method: "put"};

// Update a preference
// Change the preference for a single notification for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences/{notification}
//
// Example:
// const query = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preference_type, {type, address, notification}, query);
export const update_preference_type = { type: "UPDATE_PREFERENCE_TYPE", method: "put"};

// Update preferences by category
// Change the preferences for multiple notifications based on the category for a single communication channel
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preference_categories/{category}
//
// Example:
// const query = {
//   notification_preferences[frequency] (required)
// }
// return canvasRequest(update_preferences_by_category, {communication_channel_id, category}, query);
export const update_preferences_by_category = { type: "UPDATE_PREFERENCES_BY_CATEGORY", method: "put"};

// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{communication_channel_id}/notification_preferences
//
// Example:
// const query = {
//   notification_preferences[<X>][frequency] (required)
// }
// return canvasRequest(update_multiple_preferences_communication_channel_id, {communication_channel_id}, query);
export const update_multiple_preferences_communication_channel_id = { type: "UPDATE_MULTIPLE_PREFERENCES_COMMUNICATION_CHANNEL_ID", method: "put"};

// Update multiple preferences
// Change the preferences for multiple notifications for a single communication channel at once
//
// API Docs: https://canvas.instructure.com/doc/api/notification_preferences.html
// API Url: users/self/communication_channels/{type}/{address}/notification_preferences
//
// Example:
// const query = {
//   notification_preferences[<X>][frequency] (required)
// }
// return canvasRequest(update_multiple_preferences_type, {type, address}, query);
export const update_multiple_preferences_type = { type: "UPDATE_MULTIPLE_PREFERENCES_TYPE", method: "put"};