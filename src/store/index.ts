import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

// 应用一些中间件
const StoreEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, StoreEnhancer);

export default store;