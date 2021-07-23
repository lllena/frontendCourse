import '../css/style.css';
import { createStore } from 'redux';
import reducer from './redux/rootReducer';
import { outTodo } from './modules/outTodo';
import { addedTodo } from './modules/addedTodo';
import { manageTodo } from './modules/manageTodo';
import { manageTab } from './modules/manageTab';
import { filterTodo } from './modules/getTodo';
import { addToStorage } from './utils';
import { searchTodo } from './modules/searchTodo';

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
