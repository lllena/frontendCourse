import { combineReducers } from 'redux';
import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK, ADD, REMOVE, TOGGLE_COMPLETE } from './types';

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

function itemReducer(state = [], action) {
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
}

export const rootReducer = combineReducers({
  tabs: tabsReducer,
  listItem: itemReducer,
});
