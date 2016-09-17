//
// Quiz Submission User List
//
// Send a message to unsubmitted or submitted users for the quiz
// {
//   "body": {
//     "type": "string",
//     "description": "message body of the conversation to be created",
//     "example": "Please take the quiz."
//   },
//   "recipients": {
//     "type": "string",
//     "description": "Who to send the message to. May be either 'submitted' or 'unsubmitted'",
//     "example": "submitted"
//   },
//   "subject": {
//     "type": "string",
//     "description": "Subject of the new Conversation created",
//     "example": "ATTN: Quiz 101 Students"
//   }
// }
//
// API Docs: https://canvas.instructure.com/doc/api/quiz_submission_user_list.html
// API Url: courses/{course_id}/quizzes/{id}/submission_users/message
//
// Example:
// const query = {
//   conversations
// }
// return canvasRequest(send_message_to_unsubmitted_or_submitted_users_for_quiz, {course_id, id}, query);
export const send_message_to_unsubmitted_or_submitted_users_for_quiz = { type: "SEND_MESSAGE_TO_UNSUBMITTED_OR_SUBMITTED_USERS_FOR_QUIZ", method: "post"};