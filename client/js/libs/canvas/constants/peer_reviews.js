//
// Peer Reviews
//
// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_courses_peer_reviews, {course_id, assignment_id}, query);
export const get_all_peer_reviews_courses_peer_reviews = { type: "GET_ALL_PEER_REVIEWS_COURSES_PEER_REVIEWS", method: "get", key: 'get_all_peer_reviews_courses_peer_reviews'};

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_sections_peer_reviews, {section_id, assignment_id}, query);
export const get_all_peer_reviews_sections_peer_reviews = { type: "GET_ALL_PEER_REVIEWS_SECTIONS_PEER_REVIEWS", method: "get", key: 'get_all_peer_reviews_sections_peer_reviews'};

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_courses_submissions, {course_id, assignment_id, submission_id}, query);
export const get_all_peer_reviews_courses_submissions = { type: "GET_ALL_PEER_REVIEWS_COURSES_SUBMISSIONS", method: "get", key: 'get_all_peer_reviews_courses_submissions'};

// Get all Peer Reviews
// Get a list of all Peer Reviews for this assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_all_peer_reviews_sections_submissions, {section_id, assignment_id, submission_id}, query);
export const get_all_peer_reviews_sections_submissions = { type: "GET_ALL_PEER_REVIEWS_SECTIONS_SUBMISSIONS", method: "get", key: 'get_all_peer_reviews_sections_submissions'};

// Create Peer Review
// Create a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_courses, {course_id, assignment_id, submission_id}, query);
export const peer_reviews_create_peer_review_courses = { type: "PEER_REVIEWS_CREATE_PEER_REVIEW_COURSES", method: "post", key: 'peer_reviews_create_peer_review_courses'};

// Create Peer Review
// Create a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_sections, {section_id, assignment_id, submission_id}, query);
export const peer_reviews_create_peer_review_sections = { type: "PEER_REVIEWS_CREATE_PEER_REVIEW_SECTIONS", method: "post", key: 'peer_reviews_create_peer_review_sections'};

// Create Peer Review
// Delete a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: courses/{course_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_courses, {course_id, assignment_id, submission_id}, query);
export const peer_reviews_create_peer_review_courses = { type: "PEER_REVIEWS_CREATE_PEER_REVIEW_COURSES", method: "delete", key: 'peer_reviews_create_peer_review_courses'};

// Create Peer Review
// Delete a peer review for the assignment
//
// API Docs: https://canvas.instructure.com/doc/api/peer_reviews.html
// API Url: sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews
//
// Example:
// const query = {
//   user_id (required)
// }
// return canvasRequest(peer_reviews_create_peer_review_sections, {section_id, assignment_id, submission_id}, query);
export const peer_reviews_create_peer_review_sections = { type: "PEER_REVIEWS_CREATE_PEER_REVIEW_SECTIONS", method: "delete", key: 'peer_reviews_create_peer_review_sections'};