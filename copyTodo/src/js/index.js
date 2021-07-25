import '../css/style.css';
import { createStore } from 'redux';
import reducer from './rootReducer';
import { renderTodoInDocument } from './modules/Todos/renderTodoInDocument';
import { addTodoItem } from './modules/Todos/addTodoItem';
import { manageTodo } from './modules/Todos/manageTodo';
import { manageTab } from './modules/Tabs/manageTab';
import { getFilterTodos } from './modules/Todos/getFilterTodos';
import { addToStorage } from './utils';
import { searchTodo } from './modules/Todos/searchTodo';

export const store = createStore(reducer);
store.subscribe(() => {
  renderTodoInDocument(getFilterTodos());
  addToStorage(store.getState().todos);
});

renderTodoInDocument(getFilterTodos());
addTodoItem();
searchTodo();
manageTodo();
manageTab();
