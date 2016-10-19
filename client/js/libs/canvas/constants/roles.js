//
// Roles
//
// List roles
// List the roles available to an account.
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles
//
// Example:
// const query = {
//   state
//   show_inherited
// }
// return canvasRequest(list_roles, {account_id}, query);
export const list_roles = { type: "LIST_ROLES", method: "get", key: "list_roleslist_roles_account_id", required: ["account_id"] };

// Get a single role
// Retrieve information about a single role
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles/{id}
//
// Example:
// const query = {
//   role_id (required)
//   role
// }
// return canvasRequest(get_single_role, {account_id, id}, query);
export const get_single_role = { type: "GET_SINGLE_ROLE", method: "get", key: "get_single_roleget_single_role_{account_id}_{id}", required: ["account_id","id"] };

// Create a new role
// Create a new course-level or account-level role.
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles
//
// Example:
// const query = {
//   label (required)
//   role
//   base_role_type
//   permissions[<X>][explicit]
//   permissions[<X>][enabled]
//   permissions[<X>][locked]
//   permissions[<X>][applies_to_self]
//   permissions[<X>][applies_to_descendants]
// }
// return canvasRequest(create_new_role, {account_id}, query);
export const create_new_role = { type: "CREATE_NEW_ROLE", method: "post", key: "create_new_rolecreate_new_role_account_id", required: ["account_id"] };

// Deactivate a role
// Deactivates a custom role.  This hides it in the user interface and prevents it
// from being assigned to new users.  Existing users assigned to the role will
// continue to function with the same permissions they had previously.
// Built-in roles cannot be deactivated.
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles/{id}
//
// Example:
// const query = {
//   role_id (required)
//   role
// }
// return canvasRequest(deactivate_role, {account_id, id}, query);
export const deactivate_role = { type: "DEACTIVATE_ROLE", method: "delete", key: "deactivate_roledeactivate_role_{account_id}_{id}", required: ["account_id","id"] };

// Activate a role
// Re-activates an inactive role (allowing it to be assigned to new users)
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles/{id}/activate
//
// Example:
// const query = {
//   role_id (required)
//   role
// }
// return canvasRequest(activate_role, {account_id, id}, query);
export const activate_role = { type: "ACTIVATE_ROLE", method: "post", key: "activate_roleactivate_role_{account_id}_{id}", required: ["account_id","id"] };

// Update a role
// Update permissions for an existing role.
// 
// Recognized roles are:
// * TeacherEnrollment
// * StudentEnrollment
// * TaEnrollment
// * ObserverEnrollment
// * DesignerEnrollment
// * AccountAdmin
// * Any previously created custom role
//
// API Docs: https://canvas.instructure.com/doc/api/roles.html
// API Url: accounts/{account_id}/roles/{id}
//
// Example:
// const query = {
//   label
//   permissions[<X>][explicit]
//   permissions[<X>][enabled]
//   permissions[<X>][applies_to_self]
//   permissions[<X>][applies_to_descendants]
// }
// return canvasRequest(update_role, {account_id, id}, query);
export const update_role = { type: "UPDATE_ROLE", method: "put", key: "update_roleupdate_role_{account_id}_{id}", required: ["account_id","id"] };