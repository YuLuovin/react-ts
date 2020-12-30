import { Dispatch } from "react";
import axios from 'axios';
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

// 使用react-thunk ，但在ts中暂时没解决报错问题
export const getMutipleData = (data?:any) => (dispatch: Dispatch<ISaveShop>) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "GET"
  }).then(res => {
    console.log(res)
    const data = res.data.data;
    dispatch(saveBannerAction(data.banner.list));
    dispatch(saveRecommendsAction(data.recommend.list));
  })
}