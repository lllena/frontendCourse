import { store } from '../../index';
import { addClass, removeClass } from '../../utils';

export const searchTodo = (value) =>{
  if(!value)  return
  const reg = new RegExp(value, 'gi');
  const stateTodo = store.getState().todos;
  const getTodo = (dataID) => document.getElementById(dataID);

      stateTodo.forEach((todo) => {
        if (todo.value.match(reg)) {
          getTodo(todo.id) && addClass(getTodo(todo.id), 'green');
        } else {
          getTodo(todo.id) && removeClass(getTodo(todo.id), 'green');
        }
      });
};
