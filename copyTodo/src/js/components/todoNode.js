export const todoNode = ({ id, value, completed, important }) => {
  return `
    <li class='todo-item' data-id=${id}>
    <span class="text-todo">${value}</span>
  		<div class="todo-buttons">
              <button class="todo-remove"></button>
              <button class="todo-complete ${completed ? 'check' : 'uncheck'}"></button>
              <button class="todo-important ${important ? 'important' : 'noimportant'}"></button>
          </div>
    </li>
    `;
};
