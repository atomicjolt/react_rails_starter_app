import configureStore from 'atomic-fuel/libs/store/configure_store';
import rootReducer from '../reducers/index';
import API from '../middleware/api';

const middleware = [API];

// This file just exports the default configure store. If modifications are needed
// make the modifications in this file by extending the configureStore
// or copy pasting the code into this file.
export default function(initialState) {
  const store = configureStore(initialState, rootReducer, middleware);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require("../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
