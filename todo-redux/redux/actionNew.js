import { ADD, REMOVE, TOGGLE_COMPLETE } from './typesNew';

export function add() {
  return {
    type: ADD,
    payload: {
      text: 'sdfsdf',
      id: 0,
      isComplete: false,
    },
  };
}

export function remove() {
  return { type: REMOVE, payload: 0 };
}

export function toggleComplete() {
  return { type: TOGGLE_COMPLETE, payload: 0 };
}
