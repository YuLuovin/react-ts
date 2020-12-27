import { SAVE_BANNER, SAVE_RECOMMENDS, T_SAVE_BANNER, T_SAVE_RECOMMENDS } from "./constants";

export interface ISaveBannerAction {
  type: T_SAVE_BANNER,
  data: Array<object>
}

export interface ISaveRecommendsAction {
  type: T_SAVE_RECOMMENDS,
  data: Array<object>
}

export type ISaveShop = ISaveBannerAction | ISaveRecommendsAction

export const saveBannerAction = (data:Array<object>): ISaveBannerAction => ({
  type: SAVE_BANNER,
  data
})

export const saveRecommendsAction = (data:Array<object>): ISaveRecommendsAction => ({
  type: SAVE_RECOMMENDS,
  data
})