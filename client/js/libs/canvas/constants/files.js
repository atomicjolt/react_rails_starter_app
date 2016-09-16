//
// Files
//
// Get quota information
// Returns the total and used storage quota for the course, group, or user.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files/quota
//
// Example:
// return canvasRequest(get_quota_information_courses, {course_id});
export const get_quota_information_courses = { type: "GET_QUOTA_INFORMATION_COURSES", method: "get", key: 'get_quota_information_courses'};

// Get quota information
// Returns the total and used storage quota for the course, group, or user.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files/quota
//
// Example:
// return canvasRequest(get_quota_information_groups, {group_id});
export const get_quota_information_groups = { type: "GET_QUOTA_INFORMATION_GROUPS", method: "get", key: 'get_quota_information_groups'};

// Get quota information
// Returns the total and used storage quota for the course, group, or user.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files/quota
//
// Example:
// return canvasRequest(get_quota_information_users, {user_id});
export const get_quota_information_users = { type: "GET_QUOTA_INFORMATION_USERS", method: "get", key: 'get_quota_information_users'};

// List files
// Returns the paginated list of files for the folder or course.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files
//
// Example:
// const query = {
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// }
// return canvasRequest(list_files_courses, {course_id}, query);
export const list_files_courses = { type: "LIST_FILES_COURSES", method: "get", key: 'list_files_courses'};

// List files
// Returns the paginated list of files for the folder or course.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files
//
// Example:
// const query = {
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// }
// return canvasRequest(list_files_users, {user_id}, query);
export const list_files_users = { type: "LIST_FILES_USERS", method: "get", key: 'list_files_users'};

// List files
// Returns the paginated list of files for the folder or course.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files
//
// Example:
// const query = {
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// }
// return canvasRequest(list_files_groups, {group_id}, query);
export const list_files_groups = { type: "LIST_FILES_GROUPS", method: "get", key: 'list_files_groups'};

// List files
// Returns the paginated list of files for the folder or course.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}/files
//
// Example:
// const query = {
//   content_types
//   search_term
//   include
//   only
//   sort
//   order
// }
// return canvasRequest(list_files_folders, {id}, query);
export const list_files_folders = { type: "LIST_FILES_FOLDERS", method: "get", key: 'list_files_folders'};

// Get public inline preview url
// Determine the URL that should be used for inline preview of the file.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}/public_url
//
// Example:
// const query = {
//   submission_id
// }
// return canvasRequest(get_public_inline_preview_url, {id}, query);
export const get_public_inline_preview_url = { type: "GET_PUBLIC_INLINE_PREVIEW_URL", method: "get", key: 'get_public_inline_preview_url'};

// Get file
// Returns the standard attachment json object
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_file_files, {id}, query);
export const get_file_files = { type: "GET_FILE_FILES", method: "get", key: 'get_file_files'};

// Get file
// Returns the standard attachment json object
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/files/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_file_courses, {course_id, id}, query);
export const get_file_courses = { type: "GET_FILE_COURSES", method: "get", key: 'get_file_courses'};

// Get file
// Returns the standard attachment json object
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/files/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_file_groups, {group_id, id}, query);
export const get_file_groups = { type: "GET_FILE_GROUPS", method: "get", key: 'get_file_groups'};

// Get file
// Returns the standard attachment json object
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/files/{id}
//
// Example:
// const query = {
//   include
// }
// return canvasRequest(get_file_users, {user_id, id}, query);
export const get_file_users = { type: "GET_FILE_USERS", method: "get", key: 'get_file_users'};

// Update file
// Update some settings on the specified file
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}
//
// Example:
// const query = {
//   name
//   parent_folder_id
//   on_duplicate
//   lock_at
//   unlock_at
//   locked
//   hidden
// }
// return canvasRequest(update_file, {id}, query);
export const update_file = { type: "UPDATE_FILE", method: "put", key: 'update_file'};

// Delete file
// Remove the specified file
// 
//   curl -XDELETE 'https://<canvas>/api/v1/files/<file_id>' \
//        -H 'Authorization: Bearer <token>'
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: files/{id}
//
// Example:
// return canvasRequest(delete_file, {id});
export const delete_file = { type: "DELETE_FILE", method: "delete", key: 'delete_file'};

// List folders
// Returns the paginated list of folders in the folder.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}/folders
//
// Example:
// return canvasRequest(list_folders, {id});
export const list_folders = { type: "LIST_FOLDERS", method: "get", key: 'list_folders'};

// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders
//
// Example:
// return canvasRequest(list_all_folders_courses, {course_id});
export const list_all_folders_courses = { type: "LIST_ALL_FOLDERS_COURSES", method: "get", key: 'list_all_folders_courses'};

// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders
//
// Example:
// return canvasRequest(list_all_folders_users, {user_id});
export const list_all_folders_users = { type: "LIST_ALL_FOLDERS_USERS", method: "get", key: 'list_all_folders_users'};

// List all folders
// Returns the paginated list of all folders for the given context. This will
// be returned as a flat list containing all subfolders as well.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders
//
// Example:
// return canvasRequest(list_all_folders_groups, {group_id});
export const list_all_folders_groups = { type: "LIST_ALL_FOLDERS_GROUPS", method: "get", key: 'list_all_folders_groups'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/by_path/*full_path
//
// Example:
// return canvasRequest(resolve_path_courses_full_path, {course_id});
export const resolve_path_courses_full_path = { type: "RESOLVE_PATH_COURSES_FULL_PATH", method: "get", key: 'resolve_path_courses_full_path'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/by_path
//
// Example:
// return canvasRequest(resolve_path_courses, {course_id});
export const resolve_path_courses = { type: "RESOLVE_PATH_COURSES", method: "get", key: 'resolve_path_courses'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/by_path/*full_path
//
// Example:
// return canvasRequest(resolve_path_users_full_path, {user_id});
export const resolve_path_users_full_path = { type: "RESOLVE_PATH_USERS_FULL_PATH", method: "get", key: 'resolve_path_users_full_path'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/by_path
//
// Example:
// return canvasRequest(resolve_path_users, {user_id});
export const resolve_path_users = { type: "RESOLVE_PATH_USERS", method: "get", key: 'resolve_path_users'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/by_path/*full_path
//
// Example:
// return canvasRequest(resolve_path_groups_full_path, {group_id});
export const resolve_path_groups_full_path = { type: "RESOLVE_PATH_GROUPS_FULL_PATH", method: "get", key: 'resolve_path_groups_full_path'};

// Resolve path
// Given the full path to a folder, returns a list of all Folders in the path hierarchy,
// starting at the root folder, and ending at the requested folder. The given path is
// relative to the context's root folder and does not include the root folder's name
// (e.g., "course files"). If an empty path is given, the context's root folder alone
// is returned. Otherwise, if no folder exists with the given full path, a Not Found
// error is returned.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/by_path
//
// Example:
// return canvasRequest(resolve_path_groups, {group_id});
export const resolve_path_groups = { type: "RESOLVE_PATH_GROUPS", method: "get", key: 'resolve_path_groups'};

// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders/{id}
//
// Example:
// return canvasRequest(get_folder_courses, {course_id, id});
export const get_folder_courses = { type: "GET_FOLDER_COURSES", method: "get", key: 'get_folder_courses'};

// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders/{id}
//
// Example:
// return canvasRequest(get_folder_users, {user_id, id});
export const get_folder_users = { type: "GET_FOLDER_USERS", method: "get", key: 'get_folder_users'};

// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders/{id}
//
// Example:
// return canvasRequest(get_folder_groups, {group_id, id});
export const get_folder_groups = { type: "GET_FOLDER_GROUPS", method: "get", key: 'get_folder_groups'};

// Get folder
// Returns the details for a folder
// 
// You can get the root folder from a context by using 'root' as the :id.
// For example, you could get the root folder for a course like:
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}
//
// Example:
// return canvasRequest(get_folder_folders, {id});
export const get_folder_folders = { type: "GET_FOLDER_FOLDERS", method: "get", key: 'get_folder_folders'};

// Update folder
// Updates a folder
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}
//
// Example:
// const query = {
//   name
//   parent_folder_id
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// }
// return canvasRequest(update_folder, {id}, query);
export const update_folder = { type: "UPDATE_FOLDER", method: "put", key: 'update_folder'};

// Create folder
// Creates a folder in the specified context
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/folders
//
// Example:
// const query = {
//   name (required)
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// }
// return canvasRequest(create_folder_courses, {course_id}, query);
export const create_folder_courses = { type: "CREATE_FOLDER_COURSES", method: "post", key: 'create_folder_courses'};

// Create folder
// Creates a folder in the specified context
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/folders
//
// Example:
// const query = {
//   name (required)
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// }
// return canvasRequest(create_folder_users, {user_id}, query);
export const create_folder_users = { type: "CREATE_FOLDER_USERS", method: "post", key: 'create_folder_users'};

// Create folder
// Creates a folder in the specified context
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/folders
//
// Example:
// const query = {
//   name (required)
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// }
// return canvasRequest(create_folder_groups, {group_id}, query);
export const create_folder_groups = { type: "CREATE_FOLDER_GROUPS", method: "post", key: 'create_folder_groups'};

// Create folder
// Creates a folder in the specified context
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{folder_id}/folders
//
// Example:
// const query = {
//   name (required)
//   parent_folder_id
//   parent_folder_path
//   lock_at
//   unlock_at
//   locked
//   hidden
//   position
// }
// return canvasRequest(create_folder_folders, {folder_id}, query);
export const create_folder_folders = { type: "CREATE_FOLDER_FOLDERS", method: "post", key: 'create_folder_folders'};

// Delete folder
// Remove the specified folder. You can only delete empty folders unless you
// set the 'force' flag
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{id}
//
// Example:
// const query = {
//   force
// }
// return canvasRequest(delete_folder, {id}, query);
export const delete_folder = { type: "DELETE_FOLDER", method: "delete", key: 'delete_folder'};

// Upload a file
// Upload a file to a folder.
// 
// This API endpoint is the first step in uploading a file.
// See the {file:file_uploads.html File Upload Documentation} for details on
// the file upload workflow.
// 
// Only those with the "Manage Files" permission on a course or group can
// upload files to a folder in that course or group.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{folder_id}/files
//
// Example:
// return canvasRequest(files_upload_file, {folder_id});
export const files_upload_file = { type: "FILES_UPLOAD_FILE", method: "post", key: 'files_upload_file'};

// Copy a file
// Copy a file from elsewhere in Canvas into a folder.
// 
// Copying a file across contexts (between courses and users) is permitted,
// but the source and destination must belong to the same institution.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{dest_folder_id}/copy_file
//
// Example:
// const query = {
//   source_file_id (required)
//   on_duplicate
// }
// return canvasRequest(copy_file, {dest_folder_id}, query);
export const copy_file = { type: "COPY_FILE", method: "post", key: 'copy_file'};

// Copy a folder
// Copy a folder (and its contents) from elsewhere in Canvas into a folder.
// 
// Copying a folder across contexts (between courses and users) is permitted,
// but the source and destination must belong to the same institution.
// If the source and destination folders are in the same context, the
// source folder may not contain the destination folder. A folder will be
// renamed at its destination if another folder with the same name already
// exists.
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: folders/{dest_folder_id}/copy_folder
//
// Example:
// const query = {
//   source_folder_id (required)
// }
// return canvasRequest(copy_folder, {dest_folder_id}, query);
export const copy_folder = { type: "COPY_FOLDER", method: "post", key: 'copy_folder'};

// Set usage rights
// Sets copyright and license information for one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
//   publish
//   usage_rights[use_justification] (required)
//   usage_rights[legal_copyright]
//   usage_rights[license]
// }
// return canvasRequest(set_usage_rights_courses, {course_id}, query);
export const set_usage_rights_courses = { type: "SET_USAGE_RIGHTS_COURSES", method: "put", key: 'set_usage_rights_courses'};

// Set usage rights
// Sets copyright and license information for one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
//   publish
//   usage_rights[use_justification] (required)
//   usage_rights[legal_copyright]
//   usage_rights[license]
// }
// return canvasRequest(set_usage_rights_groups, {group_id}, query);
export const set_usage_rights_groups = { type: "SET_USAGE_RIGHTS_GROUPS", method: "put", key: 'set_usage_rights_groups'};

// Set usage rights
// Sets copyright and license information for one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
//   publish
//   usage_rights[use_justification] (required)
//   usage_rights[legal_copyright]
//   usage_rights[license]
// }
// return canvasRequest(set_usage_rights_users, {user_id}, query);
export const set_usage_rights_users = { type: "SET_USAGE_RIGHTS_USERS", method: "put", key: 'set_usage_rights_users'};

// Remove usage rights
// Removes copyright and license information associated with one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
// }
// return canvasRequest(remove_usage_rights_courses, {course_id}, query);
export const remove_usage_rights_courses = { type: "REMOVE_USAGE_RIGHTS_COURSES", method: "delete", key: 'remove_usage_rights_courses'};

// Remove usage rights
// Removes copyright and license information associated with one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
// }
// return canvasRequest(remove_usage_rights_groups, {group_id}, query);
export const remove_usage_rights_groups = { type: "REMOVE_USAGE_RIGHTS_GROUPS", method: "delete", key: 'remove_usage_rights_groups'};

// Remove usage rights
// Removes copyright and license information associated with one or more files
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/usage_rights
//
// Example:
// const query = {
//   file_ids (required)
//   folder_ids
// }
// return canvasRequest(remove_usage_rights_users, {user_id}, query);
export const remove_usage_rights_users = { type: "REMOVE_USAGE_RIGHTS_USERS", method: "delete", key: 'remove_usage_rights_users'};

// List licenses
// Lists licenses that can be applied
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: courses/{course_id}/content_licenses
//
// Example:
// return canvasRequest(list_licenses_courses, {course_id});
export const list_licenses_courses = { type: "LIST_LICENSES_COURSES", method: "get", key: 'list_licenses_courses'};

// List licenses
// Lists licenses that can be applied
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: groups/{group_id}/content_licenses
//
// Example:
// return canvasRequest(list_licenses_groups, {group_id});
export const list_licenses_groups = { type: "LIST_LICENSES_GROUPS", method: "get", key: 'list_licenses_groups'};

// List licenses
// Lists licenses that can be applied
//
// API Docs: https://canvas.instructure.com/doc/api/files.html
// API Url: users/{user_id}/content_licenses
//
// Example:
// return canvasRequest(list_licenses_users, {user_id});
export const list_licenses_users = { type: "LIST_LICENSES_USERS", method: "get", key: 'list_licenses_users'};