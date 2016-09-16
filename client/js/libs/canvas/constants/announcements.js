//
// Announcements
//
// List announcements
// Returns the paginated list of announcements for the given courses and date range.  Note that
// a +context_code+ field is added to the responses so you can tell which course each announcement
// belongs to.
//
// API Docs: https://canvas.instructure.com/doc/api/announcements.html
// API Url: announcements
//
// Example:
// const query = {
//   context_codes (required)
//   start_date
//   end_date
// }
// return canvasRequest(list_announcements, {}, query);
export const list_announcements = { type: "LIST_ANNOUNCEMENTS", method: "get", key: 'list_announcements'};