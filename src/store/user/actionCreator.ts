import { SAVE_USER, T_SAVE_USER } from './constants';
import { UserState } from '@/types'

export interface ISaveUserAction {
  type: T_SAVE_USER;
  data: UserState
}

export const saveUserAction = (userData: UserState):ISaveUserAction => {
  return {
    type: SAVE_USER,
    data: userData
  }
}