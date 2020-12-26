import * as constants from '../changeNumber/constants';

interface IncrementNumber {
  type: constants.T_INCREMENT_NUMBER;
}

interface AddNumber {
  type: constants.T_ADD_NUMBER;
  num: number
}

interface DecrementNumber {
  type: constants.T_DECREMENT_NUMBER;
}

interface SubNumber {
  type: constants.T_SUB_NUMBER;
  num: number
}

export type ChangeNumber = IncrementNumber | AddNumber | DecrementNumber | SubNumber;

export const incrementNumber = (): IncrementNumber => ({
  type: constants.INCREMENT_NUMBER
})

export const addNumber = (num: number): AddNumber => ({
  type: constants.ADD_NUMBER,
  num
})

export const decrementNumber = (): DecrementNumber => ({
  type: constants.DECREMENT_NUMBER
})

export const subNumber = (num: number): SubNumber => ({
  type: constants.SUB_NUMBER,
  num
})
