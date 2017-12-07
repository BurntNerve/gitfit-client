import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { loadAuthToken } from './local-storage';
import { setAuthToken } from './actions';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
