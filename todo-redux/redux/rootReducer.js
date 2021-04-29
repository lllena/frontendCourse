import { combineReducers } from 'redux';
import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK, ADD, REMOVE, TOGGLE_COMPLETE, REPEAT } from './types';

function tabsReducer(state = { tab: ALL_TASK }, action) {
  switch (action.type) {
    case EXECUTE_TASK:
      return { ...state, tab: EXECUTE_TASK };

    case COMPLETED_TASK:
      return { ...state, tab: COMPLETED_TASK };

    case ALL_TASK:
      return { ...state, tab: ALL_TASK };

    default:
      return state;
  }
}

function itemReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case REMOVE:
      return [...state.filter((e) => e.key !== action.payload)];

    case TOGGLE_COMPLETE:
      return [
        ...state.map((e) => {
          if (e.key === action.payload) {
            e.completed = !e.completed;
          }
          return e;
        }),
      ];

    case REPEAT:
      return [
        ...state.map((e) => {
          if (e.key === action.payload.key) {
            e.repeat = action.payload.bool;
          }
          return e;
        }),
      ];
  }
  return state;
}

export const rootReducer = combineReducers({
  tabs: tabsReducer,
  listItem: itemReducer,
});
