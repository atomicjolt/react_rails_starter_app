import Accounts            from "./canvas/accounts";
import Admin               from "./canvas/admin";
import Analytics           from "./canvas/analytics";
import Appointment_group   from "./canvas/appointment_group";
import Assignment_group    from "./canvas/assignment_group";
import Assignment_override from "./canvas/assignment_override";
import Assignments         from "./canvas/assignments";
import Courses             from "./canvas/courses";
import External_feeds      from "./canvas/external_feeds";
import Submissions         from "./canvas/submissions";
import wrapper             from "./wrapper";
import _                   from "lodash";

const CanvasMethods = {
  ...Accounts,
  ...Admin,
  ...Analytics,
  ...Appointment_group,
  ...Assignment_group,
  ...Assignment_override,
  ...Assignments,
  ...Courses,
  ...External_feeds,
  ...Submissions,
};

const requests = _.map(CanvasMethods, (v, k) => {
  return k;
});

const CanvasConstants = wrapper([], requests);

export { CanvasMethods };
export { CanvasConstants };
