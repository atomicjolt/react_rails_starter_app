//
// Poll Sessions
//
// List poll sessions for a poll
// Returns the list of PollSessions in this poll.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions
//
// Example:
// return canvasRequest(list_poll_sessions_for_poll, {poll_id});
export const list_poll_sessions_for_poll = { type: "LIST_POLL_SESSIONS_FOR_POLL", method: "get", reducer: 'poll_sessions'};

// Get the results for a single poll session
// Returns the poll session with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}
//
// Example:
// return canvasRequest(get_results_for_single_poll_session, {poll_id, id});
export const get_results_for_single_poll_session = { type: "GET_RESULTS_FOR_SINGLE_POLL_SESSION", method: "get", reducer: 'poll_sessions'};

// Create a single poll session
// Create a new poll session for this poll
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions
//
// Example:
// const query = {
//   poll_sessions[course_id] (required)
//   poll_sessions[course_section_id]
//   poll_sessions[has_public_results]
// }
// return canvasRequest(create_single_poll_session, {poll_id}, query);
export const create_single_poll_session = { type: "CREATE_SINGLE_POLL_SESSION", method: "post", reducer: 'poll_sessions'};

// Update a single poll session
// Update an existing poll session for this poll
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}
//
// Example:
// const query = {
//   poll_sessions[course_id]
//   poll_sessions[course_section_id]
//   poll_sessions[has_public_results]
// }
// return canvasRequest(update_single_poll_session, {poll_id, id}, query);
export const update_single_poll_session = { type: "UPDATE_SINGLE_POLL_SESSION", method: "put", reducer: 'poll_sessions'};

// Delete a poll session
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}
//
// Example:
// return canvasRequest(delete_poll_session, {poll_id, id});
export const delete_poll_session = { type: "DELETE_POLL_SESSION", method: "delete", reducer: 'poll_sessions'};

// Open a poll session
// 
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}/open
//
// Example:
// return canvasRequest(open_poll_session, {poll_id, id});
export const open_poll_session = { type: "OPEN_POLL_SESSION", method: "get", reducer: 'poll_sessions'};

// Close an opened poll session
// 
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: polls/{poll_id}/poll_sessions/{id}/close
//
// Example:
// return canvasRequest(close_opened_poll_session, {poll_id, id});
export const close_opened_poll_session = { type: "CLOSE_OPENED_POLL_SESSION", method: "get", reducer: 'poll_sessions'};

// List opened poll sessions
// Lists all opened poll sessions available to the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: poll_sessions/opened
//
// Example:
// return canvasRequest(list_opened_poll_sessions, {});
export const list_opened_poll_sessions = { type: "LIST_OPENED_POLL_SESSIONS", method: "get", reducer: 'poll_sessions'};

// List closed poll sessions
// Lists all closed poll sessions available to the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_sessions.html
// API Url: poll_sessions/closed
//
// Example:
// return canvasRequest(list_closed_poll_sessions, {});
export const list_closed_poll_sessions = { type: "LIST_CLOSED_POLL_SESSIONS", method: "get", reducer: 'poll_sessions'};