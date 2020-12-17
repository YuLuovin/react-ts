import { EnthusiasmAction } from '../actions';
import { StoreState } from '../../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const enthusiasmState: StoreState = {
  languageName: 'TT',
  enthusiasmLevel: 22
}

export function enthusiasm(state = enthusiasmState, action: EnthusiasmAction): StoreState {
  switch(action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state
  }
}