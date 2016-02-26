//
// Submission Comments
//
// Upload a file
// Upload a file to attach to a submission comment
// 
// See the {file:file_uploads.html File Upload Documentation} for details on the file upload workflow.
// 
// The final step of the file upload workflow will return the attachment data,
// including the new file id. The caller can then PUT the file_id to the
// submission API to attach it to a comment
//
// API Docs: https://canvas.instructure.com/doc/api/submission_comments.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/files
//
// Example:
// return canvasRequest(upload_file, {course_id, assignment_id, user_id});
export const upload_file = { type: "UPLOAD_FILE", method: "post", reducer: 'submission_comments'};