import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import rootReducer from '../client/reducers/rootReducer';
import api from '../api/interceptor';

// Redux thunk is allowing custom api method in every action creators
const middlewares = [thunk.withExtraArgument({ api }), reduxPackMiddleware];

// adding redux thunk middleware
const storeEnhancers = [applyMiddleware(...middlewares)];

export default (initialState = {}) => {
  const store = createStore(rootReducer, initialState, compose(...storeEnhancers));
  return store;
};
