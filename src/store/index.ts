import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
// 应用一些中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;