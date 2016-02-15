import canvasRequest         from "./action";
import _                     from "lodash";

describe('canvasRequest', () => {

  it('Generates an action that can be dispatched to canvas middleware', () => {

    const action = canvasRequest("ASSESSMENTS", {course_id: 1});
    expect(action.params.course_id).toBe(1);
    expect(action.canvas).toBe(true);
    expect(action.type).toBe("ASSESSMENTS");
  
  });

});