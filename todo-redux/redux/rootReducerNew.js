import { ADD, REMOVE, TOGGLE_COMPLETE } from './typesNew';

export const createReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return [...state.filter((e) => e.id !== action.payload)];

    case TOGGLE_COMPLETE:
      return [
        ...state.map((e) => {
          if (e.id === action.payload) {
            e.isComplete = !e.isComplete;
          }
          return e;
        }),
      ];

    default:
      return state;
  }
};
