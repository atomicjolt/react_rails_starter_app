
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {
   //ASSIGNMENT OVERRIDE
  "LIST_OVERRIDE_ASSIGNMENT": Network.GET,
  "OVERRIDE_ASSIGNMENT": Network.GET,
  "LIST_OVERRIDE_ASSIGNMENT_GROUP": Network.GET,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);