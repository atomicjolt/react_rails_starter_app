//
// PollChoices
//
// List poll choices in a poll
// Returns the list of PollChoices in this poll.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices
//
// Example:
// return canvasRequest(list_poll_choices_in_poll, {poll_id});
export const list_poll_choices_in_poll = { type: "LIST_POLL_CHOICES_IN_POLL", method: "get", key: "list_poll_choices_in_polllist_poll_choices_in_poll_poll_id", required: ["poll_id"] };

// Get a single poll choice
// Returns the poll choice with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}
//
// Example:
// return canvasRequest(get_single_poll_choice, {poll_id, id});
export const get_single_poll_choice = { type: "GET_SINGLE_POLL_CHOICE", method: "get", key: "get_single_poll_choiceget_single_poll_choice_{poll_id}_{id}", required: ["poll_id","id"] };

// Create a single poll choice
// Create a new poll choice for this poll
//
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices
//
// Example:
// const query = {
//   poll_choices[text] (required)
//   poll_choices[is_correct]
//   poll_choices[position]
// }
// return canvasRequest(create_single_poll_choice, {poll_id}, query);
export const create_single_poll_choice = { type: "CREATE_SINGLE_POLL_CHOICE", method: "post", key: "create_single_poll_choicecreate_single_poll_choice_poll_id", required: ["poll_id"] };

// Update a single poll choice
// Update an existing poll choice for this poll
//
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}
//
// Example:
// const query = {
//   poll_choices[text] (required)
//   poll_choices[is_correct]
//   poll_choices[position]
// }
// return canvasRequest(update_single_poll_choice, {poll_id, id}, query);
export const update_single_poll_choice = { type: "UPDATE_SINGLE_POLL_CHOICE", method: "put", key: "update_single_poll_choiceupdate_single_poll_choice_{poll_id}_{id}", required: ["poll_id","id"] };

// Delete a poll choice
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/poll_choices.html
// API Url: polls/{poll_id}/poll_choices/{id}
//
// Example:
// return canvasRequest(delete_poll_choice, {poll_id, id});
export const delete_poll_choice = { type: "DELETE_POLL_CHOICE", method: "delete", key: "delete_poll_choicedelete_poll_choice_{poll_id}_{id}", required: ["poll_id","id"] };