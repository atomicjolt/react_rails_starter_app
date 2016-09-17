//
// Bookmarks
//
// List bookmarks
// Returns the list of bookmarks.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
//
// Example:
// return canvasRequest(list_bookmarks, {});
export const list_bookmarks = { type: "LIST_BOOKMARKS", method: "get"};

// Create bookmark
// Creates a bookmark.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks
//
// Example:
// const query = {
//   name
//   url
//   position
//   data
// }
// return canvasRequest(create_bookmark, {}, query);
export const create_bookmark = { type: "CREATE_BOOKMARK", method: "post"};

// Get bookmark
// Returns the details for a bookmark.
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(get_bookmark, {id});
export const get_bookmark = { type: "GET_BOOKMARK", method: "get"};

// Update bookmark
// Updates a bookmark
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// const query = {
//   name
//   url
//   position
//   data
// }
// return canvasRequest(update_bookmark, {id}, query);
export const update_bookmark = { type: "UPDATE_BOOKMARK", method: "put"};

// Delete bookmark
// Deletes a bookmark
//
// API Docs: https://canvas.instructure.com/doc/api/bookmarks.html
// API Url: users/self/bookmarks/{id}
//
// Example:
// return canvasRequest(delete_bookmark, {id});
export const delete_bookmark = { type: "DELETE_BOOKMARK", method: "delete"};