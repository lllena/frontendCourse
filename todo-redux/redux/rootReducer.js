import { EXECUTE, COMPLETED, ALL } from './types';

export function createReducer(state = 'all', action) {
  if (action.type === EXECUTE) {
    return (state = 'execute');
  } else if (action.type === COMPLETED) {
    return (state = 'completed');
  } else if (action.type === ALL) {
    return (state = 'all');
  }
  return state;
}
