import { combineReducers } from 'redux';
import { tabReducer } from './tabReducer/tabReducer';
import { todoReducer } from './todoReducer/todoReducer';

export default rootReducer = combineReducers({
  tabs: tabReducer,
  todos: todoReducer,
});
