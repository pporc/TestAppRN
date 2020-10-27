import {applyMiddleware, createStore} from 'redux';
import {reducers} from './reducer';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
