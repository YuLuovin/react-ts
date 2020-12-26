import { combineReducers } from 'redux';
import { enthusiasm as enthusiasmReducer } from './enthusiasm/reducer';
import { changeNumber as changeNumberReducer } from './changeNumber/reducer';

const reducer = combineReducers({
  enthusiasm: enthusiasmReducer,
  changeNumber: changeNumberReducer
})

export default reducer;