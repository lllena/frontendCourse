import { combineReducers } from 'redux';
import { tabReducer } from './modules/Tabs/tabReducer/tabReducer';
import { todoReducer } from './modules/Todos/todoReducer/todoReducer';
import { inputReducer } from './modules/Input/inputReducer/inputReducer';

export default combineReducers({
  tabs: tabReducer,
  todos: todoReducer,
  input: inputReducer
});
