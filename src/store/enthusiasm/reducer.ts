import { EnthusiasmAction } from './actionsCreator';
import { EnthusiasmState } from '../../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './constants';

const enthusiasmState: EnthusiasmState = {
  languageName: 'TT',
  enthusiasmLevel: 22
}

export function enthusiasm(state = enthusiasmState, action: EnthusiasmAction): EnthusiasmState {
  switch(action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state
  }
}