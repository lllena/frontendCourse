import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK, ADD, REMOVE, TOGGLE_COMPLETE } from './types';

export function execute() {
  return {
    type: EXECUTE_TASK,
  };
}
export function completed() {
  return {
    type: COMPLETED_TASK,
  };
}

export function all() {
  return {
    type: ALL_TASK,
  };
}

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
