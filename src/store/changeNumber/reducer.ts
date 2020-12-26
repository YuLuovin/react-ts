import { CounterState } from "../../types";
import { ChangeNumber } from "./actionsCreator";
import * as constants from "../changeNumber/constants";

const defaultNumber: CounterState = {
  counter: 0
}
export function changeNumber(state = defaultNumber, action: ChangeNumber) {
  switch(action.type) {
    case constants.INCREMENT_NUMBER:
      return { ...state, counter: state.counter + 1}
    case constants.ADD_NUMBER:
      return { ...state, counter: state.counter + action.num}
    case constants.DECREMENT_NUMBER:
      return { ...state, counter: state.counter - 1}
    case constants.SUB_NUMBER:
      return { ...state, counter: state.counter - action.num}
    default:
      return state
  }
}