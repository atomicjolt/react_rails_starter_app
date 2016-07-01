import _  from "lodash";

export default (state = {}, action) => {
  return state; // Just return state. Don't let settings from the server mutate.
};

export function getInitialSettings(){
  return _.merge({}, ...arguments); // Add default settings that can be overriden by values in serverSettings
};