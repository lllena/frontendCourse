import { ADD_TODO, REMOVE_TODO, TOGGLE_PARAM_TODO } from './types';

export function addTodo(data) {
  return {
    type: ADD_TODO,
    payload: { data },
  };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, payload: { id } };
}

export function toggleParamTodo(id, param) {
  return { type: TOGGLE_PARAM_TODO, payload: { id, param } };
}
