import { ShopState } from "../../types";
import { ISaveShop } from './actionsCreator';
import * as constants from './constants';

const defaultShopData: ShopState = {
  banners: [],
  recommends: []
}
export function reducer(state = defaultShopData, action: ISaveShop) {
  switch(action.type) {
    case constants.SAVE_BANNER:
      return { ...state, banners: action.data };
    case constants.SAVE_RECOMMENDS:
      return { ...state, recommends: action.data };
    default:
      return state;
  }
}