import wrapper from '../constants/wrapper';
import Network from '../constants/network';

// Local actions
const actions = [];

// Actions that make an api request
const requests = [
  'REFRESH_JWT',
];

export const Constants = wrapper(actions, requests);

export function refreshJwt(userId) {
  return {
    type: Constants.REFRESH_JWT,
    method: Network.GET,
    url: `api/jwts/${userId}`,
  };
}
