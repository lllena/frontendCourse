import '../css/style.css';
import { createStore } from 'redux';
import reducer from './rootReducer';
import { outTodo } from './modules/Todos/outTodo';
import { addedTodo } from './modules/Todos/addedTodo';
import { manageTodo } from './modules/Todos/manageTodo';
import { manageTab } from './modules/Tabs/manageTab';
import { filterTodo } from './modules/Todos/getTodo';
import { addToStorage } from './utils';
import { searchTodo } from './modules/Todos/searchTodo';

export const store = createStore(reducer);
store.subscribe(() => {
  outTodo(filterTodo());
  addToStorage(store.getState().todos);
});

outTodo(filterTodo());
addedTodo();
searchTodo();
manageTodo();
manageTab();
