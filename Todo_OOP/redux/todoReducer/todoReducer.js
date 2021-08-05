import { param } from 'jquery';
import { ADD_TODO, REMOVE_TODO, TOGGLE_PARAM_TODO } from './types';

export function todoReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return [...state, payload.data];

    case REMOVE_TODO:
      return [...state.filter((todo) => todo.id !== payload.id)];

    case TOGGLE_PARAM_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === payload.id) {
            return Object.assign({}, todo, {
              [payload.param]: !todo[payload.param],
            });
          } else {
            return todo;
          }
        }),
      ];
  }

  return state;
}
