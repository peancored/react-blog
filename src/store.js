import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

const initialState = {};

const middleware = applyMiddleware(thunk, promise());

const store = createStore(rootReducer, initialState, middleware);

export default store;
