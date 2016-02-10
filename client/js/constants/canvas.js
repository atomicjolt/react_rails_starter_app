import Accounts            from "./accounts";
import Admin               from "./admin";
import Analytics           from "./analytics";
import Appointment_group   from "./appointment_group";
import Assignment_group    from "./assignment_group";
import Assignment_override from "./assignment_override";
import Assignments         from "./assignments";
import Courses             from "./courses";
import External_feeds      from "./external_feeds";
import Submissions         from "./submissions";
import wrapper             from "../constants_wrapper";
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

export CanvasMethods;
export CanvasConstants;
