//
// Conversations
//
// List conversations
// Returns the list of conversations for the current user, most recent ones first.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
//
// Example:
// const query = {
//   scope
//   filter
//   filter_mode
//   interleave_submissions
//   include_all_conversation_ids
//   include
// }
// return canvasRequest(list_conversations, {}, query);
export const list_conversations = { type: "LIST_CONVERSATIONS", method: "get", key: "list_conversations", required: [] };

// Create a conversation
// Create a new conversation with one or more recipients. If there is already
// an existing private conversation with the given recipients, it will be
// reused.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
//
// Example:
// const query = {
//   recipients (required)
//   subject
//   body (required)
//   group_conversation
//   attachment_ids
//   media_comment_id
//   media_comment_type
//   user_note
//   mode
//   scope
//   filter
//   filter_mode
//   context_code
// }
// return canvasRequest(create_conversation, {}, query);
export const create_conversation = { type: "CREATE_CONVERSATION", method: "post", key: "create_conversation", required: [] };

// Get running batches
// Returns any currently running conversation batches for the current user.
// Conversation batches are created when a bulk private message is sent
// asynchronously (see the mode argument to the {api:ConversationsController#create create API action}).
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/batches
//
// Example:
// return canvasRequest(get_running_batches, {});
export const get_running_batches = { type: "GET_RUNNING_BATCHES", method: "get", key: "get_running_batches", required: [] };

// Get a single conversation
// Returns information for a single conversation. Response includes all
// fields that are present in the list/index action as well as messages
// and extended participant information.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}
//
// Example:
// const query = {
//   interleave_submissions
//   scope
//   filter
//   filter_mode
//   auto_mark_as_read
// }
// return canvasRequest(get_single_conversation, {id}, query);
export const get_single_conversation = { type: "GET_SINGLE_CONVERSATION", method: "get", key: "get_single_conversationget_single_conversation_id", required: ["id"] };

// Edit a conversation
// Updates attributes for a single conversation.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}
//
// Example:
// const query = {
//   conversation[subject]
//   conversation[workflow_state]
//   conversation[subscribed]
//   conversation[starred]
//   scope
//   filter
//   filter_mode
// }
// return canvasRequest(edit_conversation, {id}, query);
export const edit_conversation = { type: "EDIT_CONVERSATION", method: "put", key: "edit_conversationedit_conversation_id", required: ["id"] };

// Mark all as read
// Mark all conversations as read.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/mark_all_as_read
//
// Example:
// return canvasRequest(mark_all_as_read, {});
export const mark_all_as_read = { type: "MARK_ALL_AS_READ", method: "post", key: "mark_all_as_read", required: [] };

// Delete a conversation
// Delete this conversation and its messages. Note that this only deletes
// this user's view of the conversation.
// 
// Response includes same fields as UPDATE action
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}
//
// Example:
// return canvasRequest(delete_conversation, {id});
export const delete_conversation = { type: "DELETE_CONVERSATION", method: "delete", key: "delete_conversationdelete_conversation_id", required: ["id"] };

// Add recipients
// Add recipients to an existing group conversation. Response is similar to
// the GET/show action, except that only includes the
// latest message (e.g. "joe was added to the conversation by bob")
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/add_recipients
//
// Example:
// const query = {
//   recipients (required)
// }
// return canvasRequest(add_recipients, {id}, query);
export const add_recipients = { type: "ADD_RECIPIENTS", method: "post", key: "add_recipientsadd_recipients_id", required: ["id"] };

// Add a message
// Add a message to an existing conversation. Response is similar to the
// GET/show action, except that only includes the
// latest message (i.e. what we just sent)
// 
// An array of user ids. Defaults to all of the current conversation
// recipients. To explicitly send a message to no other recipients,
// this array should consist of the logged-in user id.
// 
// An array of message ids from this conversation to send to recipients
// of the new message. Recipients who already had a copy of included
// messages will not be affected.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/add_message
//
// Example:
// const query = {
//   body (required)
//   attachment_ids
//   media_comment_id
//   media_comment_type
//   recipients
//   included_messages
//   user_note
// }
// return canvasRequest(add_message, {id}, query);
export const add_message = { type: "ADD_MESSAGE", method: "post", key: "add_messageadd_message_id", required: ["id"] };

// Delete a message
// Delete messages from this conversation. Note that this only affects this
// user's view of the conversation. If all messages are deleted, the
// conversation will be as well (equivalent to DELETE)
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/{id}/remove_messages
//
// Example:
// const query = {
//   remove (required)
// }
// return canvasRequest(delete_message, {id}, query);
export const delete_message = { type: "DELETE_MESSAGE", method: "post", key: "delete_messagedelete_message_id", required: ["id"] };

// Batch update conversations
// Perform a change on a set of conversations. Operates asynchronously; use the {api:ProgressController#show progress endpoint}
// to query the status of an operation.
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations
//
// Example:
// const query = {
//   conversation_ids (required)
//   event (required)
// }
// return canvasRequest(batch_update_conversations, {}, query);
export const batch_update_conversations = { type: "BATCH_UPDATE_CONVERSATIONS", method: "put", key: "batch_update_conversations", required: [] };

// Find recipients
// Deprecated, see the {api:SearchController#recipients Find recipients endpoint} in the Search API
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/find_recipients
//
// Example:
// return canvasRequest(find_recipients, {});
export const find_recipients = { type: "FIND_RECIPIENTS", method: "get", key: "find_recipients", required: [] };

// Unread count
// Get the number of unread conversations for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/conversations.html
// API Url: conversations/unread_count
//
// Example:
// return canvasRequest(unread_count, {});
export const unread_count = { type: "UNREAD_COUNT", method: "get", key: "unread_count", required: [] };