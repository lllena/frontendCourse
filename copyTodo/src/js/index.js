import '../css/style.css';
import { createStore } from 'redux';
import reducer from './redux/rootReducer';
import { outTodo } from './modules/outTodo';
import { addedTodo } from './modules/addedTodo';
import { manageTodo } from './modules/manageTodo';
import { manageTab } from './modules/manageTab';
import { filterTodo } from './modules/getTodo';

export const store = createStore(reducer);
store.subscribe(() => {
  outTodo(filterTodo());
});

addedTodo();
manageTodo();
manageTab();
