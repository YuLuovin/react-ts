
import { UserState } from '@/types';
import { ISaveUserAction } from './actionCreator';
import { SAVE_USER } from './constants';
const defaultState: UserState = {
  username: '',
  jumpPath: ''
}

export const reducer = function(state = defaultState, action: ISaveUserAction) {
  switch(action.type) {
    case SAVE_USER:
      return {...state, username: action.data.username, jumpPath: action.data.jumpPath}
    default:
      return state
  }
}
