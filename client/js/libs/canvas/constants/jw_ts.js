//
// JWTs
//
// Create JWT
// Create a unique jwt for using with other canvas services
// 
// Generates a different JWT each time it's called, each one expires
// after a short window (1 hour)
//
// API Docs: https://canvas.instructure.com/doc/api/jw_ts.html
// API Url: jwts
//
// Example:
// return canvasRequest(create_jwt, {});
export const create_jwt = { type: "CREATE_JWT", method: "post"};