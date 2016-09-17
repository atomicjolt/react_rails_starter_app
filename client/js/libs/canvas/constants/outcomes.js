//
// Outcomes
//
// Show an outcome
// Returns the details of the outcome with the given id.
//
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}
//
// Example:
// return canvasRequest(show_outcome, {id});
export const show_outcome = { type: "SHOW_OUTCOME", method: "get"};

// Update an outcome
// Modify an existing outcome. Fields not provided are left as is;
// unrecognized fields are ignored.
// 
// If any new ratings are provided, the combination of all new ratings
// provided completely replace any existing embedded rubric criterion; it is
// not possible to tweak the ratings of the embedded rubric criterion.
// 
// A new embedded rubric criterion's mastery_points default to the maximum
// points in the highest rating if not specified in the mastery_points
// parameter. Any new ratings lacking a description are given a default of "No
// description". Any new ratings lacking a point value are given a default of
// 0.
//
// API Docs: https://canvas.instructure.com/doc/api/outcomes.html
// API Url: outcomes/{id}
//
// Example:
// const query = {
//   title
//   display_name
//   description
//   vendor_guid
//   mastery_points
//   ratings[description]
//   ratings[points]
//   calculation_method
//   calculation_int
// }
// return canvasRequest(update_outcome, {id}, query);
export const update_outcome = { type: "UPDATE_OUTCOME", method: "put"};