//
// Quiz IP Filters
//
// Get available quiz IP filters.
// Get a list of available IP filters for this Quiz.
// 
// <b>200 OK</b> response code is returned if the request was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_ip_filters.html
// API Url: courses/{course_id}/quizzes/{quiz_id}/ip_filters
//
// Example:
// return canvasRequest(get_available_quiz_ip_filters, {course_id, quiz_id});
export const get_available_quiz_ip_filters = { type: "GET_AVAILABLE_QUIZ_IP_FILTERS", method: "get", reducer: 'quiz_ip_filters'};