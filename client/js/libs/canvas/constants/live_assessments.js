//
// LiveAssessments
//
// Create live assessment results
// Creates live assessment results and adds them to a live assessment
//
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments/{assessment_id}/results
//
// Example:
// return canvasRequest(create_live_assessment_results, {course_id, assessment_id});
export const create_live_assessment_results = { type: "CREATE_LIVE_ASSESSMENT_RESULTS", method: "post", key: 'create_live_assessment_results'};

// List live assessment results
// Returns a list of live assessment results
//
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments/{assessment_id}/results
//
// Example:
// const query = {
//   user_id
// }
// return canvasRequest(list_live_assessment_results, {course_id, assessment_id}, query);
export const list_live_assessment_results = { type: "LIST_LIVE_ASSESSMENT_RESULTS", method: "get", key: 'list_live_assessment_results'};

// Create or find a live assessment
// Creates or finds an existing live assessment with the given key and aligns it with
// the linked outcome
//
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments
//
// Example:
// return canvasRequest(create_or_find_live_assessment, {course_id});
export const create_or_find_live_assessment = { type: "CREATE_OR_FIND_LIVE_ASSESSMENT", method: "post", key: 'create_or_find_live_assessment'};

// List live assessments
// Returns a list of live assessments.
//
// API Docs: https://canvas.instructure.com/doc/api/live_assessments.html
// API Url: courses/{course_id}/live_assessments
//
// Example:
// return canvasRequest(list_live_assessments, {course_id});
export const list_live_assessments = { type: "LIST_LIVE_ASSESSMENTS", method: "get", key: 'list_live_assessments'};