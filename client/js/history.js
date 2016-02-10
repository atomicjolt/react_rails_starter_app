// import createBrowserHistory from 'history/lib/createBrowserHistory';
// export default createBrowserHistory();


import { createHashHistory } from 'history';
export default new createHashHistory({
  //queryKey: false // Opt-out of persistent state, not recommended.
});