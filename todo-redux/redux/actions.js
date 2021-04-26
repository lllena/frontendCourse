import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK, ADD, REMOVE, TOGGLE_COMPLETE, REPEAT } from './types';

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

export function add(key, { value, completed, repeat }) {
  return {
    type: ADD,
    payload: {
      key,
      value: {
        key,
        value,
        completed,
        repeat,
      },
    },
  };
}

export function remove(key) {
  return { type: REMOVE, payload: key };
}

export function toggleComplete(key) {
  return { type: TOGGLE_COMPLETE, payload: key };
}

export function repeat(key, bool) {
  return { type: REPEAT, payload: { key, bool } };
}
