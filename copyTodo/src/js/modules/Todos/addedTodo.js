import { store } from '../..';
import { addTodo } from './todoReducer/actions';
import { addClass, generationKey, removeClass } from '../../utils';

export const addedTodo = () => {
  const input = document.querySelector('.input');
  const inputButton = document.querySelector('.input-button');

  const handleInput = () => {
    input.value.trim() !== '' ? removeClass(inputButton, 'hide') : addClass(inputButton, 'hide');
  };

  const createTodo = () => {
    if (input.value.trim() !== '') {
      const id = generationKey();
      const todoData = {
        id,
        value: input.value,
        completed: false,
        important: false,
      };
      store.dispatch(addTodo(todoData));
      input.value = '';
    }
  };

  input.addEventListener('input', handleInput);
  inputButton.addEventListener('click', createTodo);
};
