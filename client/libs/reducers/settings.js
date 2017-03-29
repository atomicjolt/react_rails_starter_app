import _ from 'lodash';

// Just return state. Don't let settings from the server mutate.
export default (state = {}) => state;

export function getInitialSettings(...args) {
  // Add default settings that can be overridden by values in serverSettings
  let settings = {};
  _.forEach(args, arg => (settings = { ...settings, ...arg }));
  return settings;
}
