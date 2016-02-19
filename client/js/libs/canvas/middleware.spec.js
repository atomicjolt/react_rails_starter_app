import canvasRequest         from "./action";
import _                     from "lodash";
import CanvasApi             from "./middleware";

describe('middleware', () => {

  it('Handles Canvas requests', () => {

    const action = canvasRequest("ASSESSMENTS", {course_id: 1});
    const next = (action) => {};
    const store = {};
    CanvasApi(store)(next)(action);

  });

});