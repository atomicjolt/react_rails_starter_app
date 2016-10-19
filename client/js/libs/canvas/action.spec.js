import canvasRequest         from "./action";
import _                     from "lodash";

describe('canvasRequest', () => {

  it('Generates an action that can be dispatched to canvas middleware', () => {
    const listAccounts = { type: "LIST_ACCOUNTS", method: "get", reducer: 'accounts'};
    const action = canvasRequest(listAccounts, {course_id: 1});
    expect(action.params.course_id).toBe(1);
    expect(action.canvas.method).toBe("get");
    expect(action.canvas.type).toBe("LIST_ACCOUNTS");
  });

});