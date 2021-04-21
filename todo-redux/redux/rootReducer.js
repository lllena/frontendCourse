import { EXECUTE, COMPLETED, ALL } from './types';

export function counterReducer(state = '', action) {
  if (action.type === EXECUTE) {
    return (state = 'execute');
  } else if (action.type === COMPLETED) {
    return (state = 'completed');
  } else if (action.type === ALL) {
    return (state = 'all');
  }
  return state;
}
