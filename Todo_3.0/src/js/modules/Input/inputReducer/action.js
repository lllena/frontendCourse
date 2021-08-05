import {SET_INPUT_VALUE} from './types';

export const setInputValue = (value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: {value}
  }
}