import { ADD_TODO, REMOVE_TODO, TOGGLE_PARAM_TODO } from './types';

const initialState = localStorage.getItem('toDoList') ? [...JSON.parse(localStorage.getItem('toDoList'))] : [];

export function todoReducer(state = initialState, { type, payload }) {
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
