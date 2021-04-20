'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }
  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }
  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }
  createItem = (todo) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.key);
    li.classList.add('todo-item');
    li.insertAdjacentHTML(
      'beforeend',
      `<span class="text-todo">${todo.value}</span>
		<div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`,
    );
    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  };
  addTodo(e) {
    e.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    }
  }
  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  deleteItem(key) {
    this.todoData.forEach((item, index) => {
      if (item.key === key) {
        this.todoData.delete (index);
      }
      this.render();
    });
  }
  completedItem(key) {
    this.todoData.forEach((item) => {
      if (item.key === key) {
        if (item.completed === false) {
          item.completed = true;
        } else if (item.completed === true) {
          item.completed = false;
        }
      }
      this.render();
    });
  }

  handler() {
    let main = document.querySelector('.todo-container');
    main.addEventListener('click', ({ target }) => {
      const key = target.closest('.todo-item')?.getAttribute('data-id');
      if (target.classList.value === 'todo-complete') {
        this.completedItem(key);
      }
      if (target.classList.value === 'todo-remove') {
        this.deleteItem(key);
      }
    });
  }

  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();
todo.handler();
