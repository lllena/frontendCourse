import { store } from '..';
import { addClass, removeClass } from '../utils';

export const searchTodo = () => {
  const getTodo = (dataID) => document.getElementById(dataID);

  const searchItem = ({ target }) => {
    const stateTab = store.getState().todos;
      const reg = new RegExp(target.value, 'gi');
      
    if (target.value) {
      stateTab.forEach((todo) => {
        if (todo.value.match(reg)) {
          addClass(getTodo(todo.id), 'green');
        } else {
          removeClass(getTodo(todo.id), 'green');
        }
      });
    } else {
      stateTab.forEach((todo) => removeClass(getTodo(todo.id), 'green'));
      }
      
  };

  const input = document.querySelector('.input');
  input.addEventListener('input', searchItem);
};
