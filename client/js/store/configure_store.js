import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter }                      from 'redux-router';
import { persistState }                          from 'redux-devtools';
import thunk                                     from 'redux-thunk';
import rootReducer                               from '../reducers';
import history                                   from '../history';
import routes                                    from '../routes';
import DevTools                                  from '../dev/dev_tools.jsx'
import API                                       from '../middleware/api';

let middleware = [ thunk, API ];

let enhancers = [
  applyMiddleware(...middleware),
  reduxReactRouter({ routes, history })
];

// In production, we want to use just the middleware.
// In development, we want to use some store enhancers from redux-devtools.
// UglifyJS will eliminate the dead code depending on the build environment.
if (__DEV__){
  enhancers = [
    ...enhancers,
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  ];
}

export default function(initialState){
  const store = compose(...enhancers)(createStore)(rootReducer, initialState);

  if (__DEV__ && module.hot) {
    module.hot.accept(
      '../reducers', 
      () => store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
