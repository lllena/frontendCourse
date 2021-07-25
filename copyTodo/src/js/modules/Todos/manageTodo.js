import { store } from '../../index';
import { removeTodo, toggleParamTodo } from './todoReducer/actions';

export const manageTodo = () => {
  const settingsTodoHandler = ({ target }) => {
    const getParentTodo = () => target.closest('[data-id]');

    const importantButton = target.closest('.todo-important');
    const completedButton = target.closest('.todo-complete');
    const removeButton = target.closest('.todo-remove');

    importantButton && store.dispatch(toggleParamTodo(getParentTodo().dataset.id, 'important'));
    completedButton && store.dispatch(toggleParamTodo(getParentTodo().dataset.id, 'completed'));
    removeButton && store.dispatch(removeTodo(getParentTodo().dataset.id));
  };

  const todoList = document.querySelector('.todo-list');
  todoList.addEventListener('click', settingsTodoHandler);
};
