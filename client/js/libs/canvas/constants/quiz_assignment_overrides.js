//
// Quiz Assignment Overrides
//
// Retrieve assignment-overridden dates for quizzes
// Retrieve the actual due-at, unlock-at, and available-at dates for quizzes
// based on the assignment overrides active for the current API user.
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_assignment_overrides.html
// API Url: courses/{course_id}/quizzes/assignment_overrides
//
// Example:
// const query = {
//   quiz_assignment_overrides[0][quiz_ids]
// }
// return canvasRequest(retrieve_assignment_overridden_dates_for_quizzes, {course_id}, query);
export const retrieve_assignment_overridden_dates_for_quizzes = { type: "RETRIEVE_ASSIGNMENT_OVERRIDDEN_DATES_FOR_QUIZZES", method: "get", reducer: 'quiz_assignment_overrides'};