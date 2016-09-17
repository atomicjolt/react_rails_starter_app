//
// CommMessages
//
// List of CommMessages for a user
// Retrieve messages sent to a user.
//
// API Docs: https://canvas.instructure.com/doc/api/comm_messages.html
// API Url: comm_messages
//
// Example:
// const query = {
//   user_id (required)
//   start_time
//   end_time
// }
// return canvasRequest(list_of_commmessages_for_user, {}, query);
export const list_of_commmessages_for_user = { type: "LIST_OF_COMMMESSAGES_FOR_USER", method: "get"};