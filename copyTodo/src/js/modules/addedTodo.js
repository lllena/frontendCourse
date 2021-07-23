import { store } from '..';
import { addTodo } from '../redux/todoReducer/actions';
import { generationKey } from '../utils';

export const addedTodo = () => {
  const input = document.querySelector('.input');
  const inputButton = document.querySelector('.input-button');

  const handleInput = () => {
    input.value.trim() !== '' ? inputButton.classList.remove('hide') : inputButton.classList.add('hide');
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
