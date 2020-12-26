import * as constants from './constants';

export interface IncrementEnthusiasm {
  type: constants.T_INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.T_DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): EnthusiasmAction {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): EnthusiasmAction {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}
