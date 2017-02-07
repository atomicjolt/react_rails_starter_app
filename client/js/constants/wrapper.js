import _ from 'lodash';

export const DONE = '_DONE';

export default function(actionTypes, asyncActionTypes) {

  let types = _.reduce(actionTypes, (result, key) => ({
    ...result,
    [key]: key
  }), {});

  types = _.reduce(asyncActionTypes, (result, key) => ({
    ...result,
    [key]: key,
    [`${key}${DONE}`]: `${key}${DONE}`
  }), types);

  types.DONE = DONE;

  return types;
}
