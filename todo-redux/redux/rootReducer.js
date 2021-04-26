import { combineReducers } from 'redux';
import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK, ADD, REMOVE, TOGGLE_COMPLETE, REPEAT } from './types';

function tabsReducer(state = 'all', action) {
  switch (action.type) {
    case EXECUTE_TASK:
      return (state = 'execute');

    case COMPLETED_TASK:
      return (state = 'completed');

    case ALL_TASK:
      return (state = 'all');

    default:
      return state;
  }
}

function itemReducer(state = new Map(), action) {
  switch (action.type) {
    case ADD:
      state.set(action.payload.key, action.payload.value);
      break;

    case REMOVE:
      state.delete(action.payload);
      break;

    case TOGGLE_COMPLETE:
      state.forEach((value, key) => {
        if (key === action.payload) {
          value.completed = !value.completed;
        }
      });
      break;

    case REPEAT:
      state.forEach((value, key) => {
        if (key === action.payload.key) {
          value.repeat = action.payload.bool;
        }
      });
      break;
  }
  return state;
}

export const rootReducer = combineReducers({
  tabs: tabsReducer,
  listItem: itemReducer,
});
