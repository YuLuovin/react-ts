import { combineReducers } from 'redux';
import { enthusiasm as enthusiasmReducer } from './enthusiasm/reducer';
import { changeNumber as changeNumberReducer } from './changeNumber/reducer';
import { reducer as changeShopData } from './shop/reducer';

const reducer = combineReducers({
  enthusiasm: enthusiasmReducer,
  changeNumber: changeNumberReducer,
  shopData: changeShopData
})

export default reducer;