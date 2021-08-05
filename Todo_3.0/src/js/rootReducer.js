import { combineReducers } from 'redux';
import { tabReducer } from './modules/Tabs/tabReducer/tabReducer';
import { todoReducer } from './modules/Todos/todoReducer/todoReducer';

export default combineReducers({
  tabs: tabReducer,
  todos: todoReducer,
});
