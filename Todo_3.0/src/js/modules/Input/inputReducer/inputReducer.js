import { SET_INPUT_VALUE } from './types';

export function inputReducer(state = '', { type, payload }) {
  switch (type) {
    case SET_INPUT_VALUE:
      return payload.value;
    default:
      return state;
  }
}
