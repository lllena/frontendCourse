import { store } from '../../index';
import { removeTodo, toggleParamTodo } from './todoReducer/actions';

export const manageTodo = () => {
  const settingsTodoHandler = (item, e) => {
    e.stopPropagation()
    const target = e.target;
    const importantButton = target.closest('.todo-important');
    const completedButton = target.closest('.todo-complete');
    const removeButton = target.closest('.todo-remove');

    importantButton && store.dispatch(toggleParamTodo(item.id, 'important'));
    completedButton && store.dispatch(toggleParamTodo(item.id, 'completed'));
    removeButton && store.dispatch(removeTodo(item.id)) && item.removeEventListener('click', (e)=>{settingsTodoHandler(item, e)});
  };

  const todoItems = document.querySelectorAll('.todo-item');
  todoItems.forEach(item=>item.addEventListener('click', (e)=>{settingsTodoHandler(item, e)}));
};
