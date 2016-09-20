//
// Communication Channels
//
// List user communication channels
// Returns a list of communication channels for the specified user, sorted by
// position.
//
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels
//
// Example:
// return canvasRequest(list_user_communication_channels, {user_id});
export const list_user_communication_channels = { type: "LIST_USER_COMMUNICATION_CHANNELS", method: "get", key: "list_user_communication_channelslist_user_communication_channels_user_id", required: ["user_id"] };

// Create a communication channel
// Creates a new communication channel for the specified user.
//
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels
//
// Example:
// const query = {
//   communication_channel[address] (required)
//   communication_channel[type] (required)
//   communication_channel[token]
//   skip_confirmation
// }
// return canvasRequest(create_communication_channel, {user_id}, query);
export const create_communication_channel = { type: "CREATE_COMMUNICATION_CHANNEL", method: "post", key: "create_communication_channelcreate_communication_channel_user_id", required: ["user_id"] };

// Delete a communication channel
// Delete an existing communication channel.
//
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels/{id}
//
// Example:
// return canvasRequest(delete_communication_channel_id, {user_id, id});
export const delete_communication_channel_id = { type: "DELETE_COMMUNICATION_CHANNEL_ID", method: "delete", key: "delete_communication_channel_iddelete_communication_channel_id_{user_id}_{id}", required: ["user_id","id"] };

// Delete a communication channel
// Delete an existing communication channel.
//
// API Docs: https://canvas.instructure.com/doc/api/communication_channels.html
// API Url: users/{user_id}/communication_channels/{type}/{address}
//
// Example:
// return canvasRequest(delete_communication_channel_type, {user_id, type, address});
export const delete_communication_channel_type = { type: "DELETE_COMMUNICATION_CHANNEL_TYPE", method: "delete", key: "delete_communication_channel_typedelete_communication_channel_type_{user_id}_{type}_{address}", required: ["user_id","type","address"] };