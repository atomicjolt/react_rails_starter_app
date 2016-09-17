//
// Favorites
//
// List favorite courses
// Retrieve the list of favorite courses for the current user. If the user has not chosen
// any favorites, then a selection of currently enrolled courses will be returned.
// 
// See the {api:CoursesController#index List courses API} for details on accepted include[] parameters.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
//
// Example:
// return canvasRequest(list_favorite_courses, {});
export const list_favorite_courses = { type: "LIST_FAVORITE_COURSES", method: "get"};

// List favorite groups
// Retrieve the list of favorite groups for the current user. If the user has not chosen
// any favorites, then a selection of groups that the user is a member of will be returned.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
//
// Example:
// return canvasRequest(list_favorite_groups, {});
export const list_favorite_groups = { type: "LIST_FAVORITE_GROUPS", method: "get"};

// Add course to favorites
// Add a course to the current user's favorites.  If the course is already
// in the user's favorites, nothing happens.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}
//
// Example:
// return canvasRequest(add_course_to_favorites, {id});
export const add_course_to_favorites = { type: "ADD_COURSE_TO_FAVORITES", method: "post"};

// Add group to favorites
// Add a group to the current user's favorites.  If the group is already
// in the user's favorites, nothing happens.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}
//
// Example:
// return canvasRequest(add_group_to_favorites, {id});
export const add_group_to_favorites = { type: "ADD_GROUP_TO_FAVORITES", method: "post"};

// Remove course from favorites
// Remove a course from the current user's favorites.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses/{id}
//
// Example:
// return canvasRequest(remove_course_from_favorites, {id});
export const remove_course_from_favorites = { type: "REMOVE_COURSE_FROM_FAVORITES", method: "delete"};

// Remove group from favorites
// Remove a group from the current user's favorites.
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups/{id}
//
// Example:
// return canvasRequest(remove_group_from_favorites, {id});
export const remove_group_from_favorites = { type: "REMOVE_GROUP_FROM_FAVORITES", method: "delete"};

// Reset course favorites
// Reset the current user's course favorites to the default
// automatically generated list of enrolled courses
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/courses
//
// Example:
// return canvasRequest(reset_course_favorites, {});
export const reset_course_favorites = { type: "RESET_COURSE_FAVORITES", method: "delete"};

// Reset group favorites
// Reset the current user's group favorites to the default
// automatically generated list of enrolled group
//
// API Docs: https://canvas.instructure.com/doc/api/favorites.html
// API Url: users/self/favorites/groups
//
// Example:
// return canvasRequest(reset_group_favorites, {});
export const reset_group_favorites = { type: "RESET_GROUP_FAVORITES", method: "delete"};