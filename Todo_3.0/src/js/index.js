import '../css/style.css';
import { createStore } from 'redux';
import reducer from './rootReducer';
import { renderTodoInDocument } from './modules/Todos/renderTodoInDocument';
import { addTodoItem } from './modules/Todos/addTodoItem';
import { manageTodo } from './modules/Todos/manageTodo';
import { manageTab } from './modules/Tabs/manageTab';
import { getFiltredTodo } from './modules/Todos/getFiltredTodo';
import { addToStorage } from './utils';
import { searchTodo } from './modules/Input/searchTodo';
import { inputListener } from './modules/Input/inputListener';

export const store = createStore(reducer);
store.subscribe(() => {
  renderTodoInDocument(getFiltredTodo());
  addToStorage(store.getState().todos);
  manageTodo();
  searchTodo(store.getState().input);
});

inputListener();
renderTodoInDocument(getFiltredTodo());
addTodoItem();
manageTodo();
manageTab();
