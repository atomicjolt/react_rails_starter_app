//
// SIS Imports
//
// Get SIS import list
// Returns the list of SIS imports for an account
// 
// Example:
//   curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports' \
//     -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports
//
// Example:
// const query = {
//   created_since
// }
// return canvasRequest(get_sis_import_list, {account_id}, query);
export const get_sis_import_list = { type: "GET_SIS_IMPORT_LIST", method: "get", reducer: 'sis_imports'};

// Import SIS data
// Import SIS data into Canvas. Must be on a root account with SIS imports
// enabled.
// 
// For more information on the format that's expected here, please see the
// "SIS CSV" section in the API docs.
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports
//
// Example:
// const query = {
//   import_type
//   attachment
//   extension
//   batch_mode
//   batch_mode_term_id
//   override_sis_stickiness
//   add_sis_stickiness
//   clear_sis_stickiness
//   diffing_data_set_identifier
//   diffing_remaster_data_set
// }
// return canvasRequest(import_sis_data, {account_id}, query);
export const import_sis_data = { type: "IMPORT_SIS_DATA", method: "post", reducer: 'sis_imports'};

// Get SIS import status
// Get the status of an already created SIS import.
// 
//   Examples:
//     curl 'https://<canvas>/api/v1/accounts/<account_id>/sis_imports/<sis_import_id>' \
//         -H "Authorization: Bearer <token>"
//
// API Docs: https://canvas.instructure.com/doc/api/sis_imports.html
// API Url: accounts/{account_id}/sis_imports/{id}
//
// Example:
// return canvasRequest(get_sis_import_status, {account_id, id});
export const get_sis_import_status = { type: "GET_SIS_IMPORT_STATUS", method: "get", reducer: 'sis_imports'};