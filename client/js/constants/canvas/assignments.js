
import wrapper from "../../constants_wrapper";
import _       from "lodash";

const CanvasMethods = {
  //ASSIGNMENTS
  "DELETE_ASSIGNMENT": Network.DEL,
  "LIST_ASSIGNMENT": Network.GET,
  "SINGLE_ASSIGNMENT": Network.GET,
  "EDIT_ASSIGNMENT": Network.PUT,

};

const asyncActionTypes = _.map(CanvasMethods, (v, k) => {
  return k;
});
const actionTypes = [];

export { CanvasMethods };
export default wrapper(actionTypes, asyncActionTypes);