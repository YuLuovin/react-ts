import { combineReducers } from 'redux';
import { enthusiasm as enthusiasmReducer } from './enthusiasm/reducer';
import { changeNumber as changeNumberReducer } from './changeNumber/reducer';
import { reducer as changeShopData } from './shop/reducer';
import { reducer as userReducer } from './user/reducer';

const reducer = combineReducers({
  enthusiasm: enthusiasmReducer,
  changeNumber: changeNumberReducer,
  shopData: changeShopData,
  userData: userReducer
})

export default reducer;