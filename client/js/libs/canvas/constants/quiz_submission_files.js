//
// Quiz Submission Files
//
// Upload a file
// Associate a new quiz submission file
// 
// This API endpoint is the first step in uploading a quiz submission file.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow as these parameters are interpreted as per the
// documentation there.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_files.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/submissions/self/files
//
// Example:
// const query = {
//   name
//   on_duplicate
// }
// return canvasRequest(quiz_submission_files_upload_file, {course_id, quiz_id}, query);
export const quiz_submission_files_upload_file = { type: "QUIZ_SUBMISSION_FILES_UPLOAD_FILE", method: "post", reducer: 'quiz_submission_files'};