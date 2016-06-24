import _  from "lodash";

export default (state = {}, action) => {
  return state; // Just return state. Don't let settings from the server mutate.
};

export const getInitialSettings = (serverSettings) => {
  return _.merge({}, serverSettings); // Add default settings that can be overriden by values in serverSettings
};