import { combineReducers, createStore } from 'redux';
import * as modules from './modules';

export default function initStore() {
  const appReducer = combineReducers(modules);

  return createStore(appReducer);
}
