import { store } from '../../index';
import { addClass, removeClass } from '../../utils';

export const searchTodo = (value) => {
  const reg = new RegExp(value, 'gi');
  const stateTab = store.getState().todos;

  const getTodo = (dataID) => document.getElementById(dataID);

    if (value) {
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
