//
// ePub Exports
//
// Show ePub export
// Get information about a single ePub export.
//
// API Docs: https://canvas.instructure.com/doc/api/e_pub_exports.html
// API Url: courses/{course_id}/epub_exports/{id}
//
// Example:
// return canvasRequest(show_epub_export, {course_id, id});
export const show_epub_export = { type: "SHOW_EPUB_EXPORT", method: "get"};