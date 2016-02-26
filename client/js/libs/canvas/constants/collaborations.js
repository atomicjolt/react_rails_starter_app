//
// Collaborations
//
// List members of a collaboration.
// List the collaborators of a given collaboration
//
// API Docs: https://canvas.instructure.com/doc/api/collaborations.html
// API Url: collaborations/{id}/members
//
// Example:
// return canvasRequest(list_members_of_collaboration, {id});
export const list_members_of_collaboration = { type: "LIST_MEMBERS_OF_COLLABORATION", method: "get", reducer: 'collaborations'};