import { todoNode } from '../../components/todoNode';
import { renderInDocument } from '../../utils';

export const renderTodoInDocument = (newArrTodo) => {
  const arrTodo = document.querySelectorAll('.todo-item');
  if (arrTodo) {
    arrTodo.forEach((todo) => todo.remove());
  }

  newArrTodo.forEach((todo) => {
    renderInDocument(todoNode(todo), '.todo-list');
  });
};
