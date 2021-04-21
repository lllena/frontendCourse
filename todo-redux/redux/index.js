'use strict';
// import { rootReducer } from './createStore';

class Todo {
  constructor() {
    // this.store = createStore(rootReducer);
    this.input = document.querySelector('.input');
    this.executeBtn = document.querySelector('.button-execute');
    this.completedBtn = document.querySelector('.button-completed');
    this.allBtn = document.querySelector('.button-all');
    this.inputField = document.querySelector('.input-field');
    this.todoList = document.querySelector('.todo-list');
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    this.listener = 'all';
  }
  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }
  render() {
    this.inputField.value = '';
    this.todoList.textContent = '';
    this.todoData.forEach(this.filterItem, this);
    this.addToStorage();
  }
  createElement(todo, check) {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.key);
    li.classList.add('todo-item');
    li.insertAdjacentHTML(
      'beforeend',
      `<span class="text-todo">${todo.value}</span>
		<div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete ${check}"></button>
        </div>`,
    );
    this.todoList.append(li);
  }

  filterItem = (todo) => {
    let check;
    if (todo.completed == true) {
      check = 'check';
    } else {
      check = 'uncheck';
    }
    if (this.listener === 'all') {
      this.createElement(todo, check);
    } else if (this.listener === 'completed') {
      if (todo.completed === true) {
        this.createElement(todo, check);
      }
    } else if (this.listener === 'execute') {
      if (todo.completed === false) {
        this.createElement(todo, check);
      }
    }
  };
  addTodo(e) {
    e.preventDefault();
    if (this.inputField.value.trim()) {
      const newTodo = {
        value: this.inputField.value,
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
        this.todoData.delete(index);
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
    let main = document.querySelector('.main');
    main.addEventListener('click', ({ target }) => {
      const key = target.closest('.todo-item')?.getAttribute('data-id');
      if (target.classList.value.split(' ')['0'] === 'todo-complete') {
        this.completedItem(key);
      }
      if (target.classList.value === 'todo-remove') {
        this.deleteItem(key);
      }
      if (target === this.executeBtn) {
        // store.dispatch(execute());
        this.listener = 'execute';
        this.render();
      }
      if (target === this.completedBtn) {
        // store.dispatch(competed());
        this.listener = 'completed';
        this.render();
      }
      if (target === this.allBtn) {
        // store.dispatch(all());
        this.listener = 'all';
        this.render();
      }
    });
  }

  init() {
    this.input.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }
}

const todo = new Todo();
todo.init();
todo.handler();
// todo.store.subscribe(() => {
//   const state = store.getState();
//   todo.listener = state;
// });
// todo.store.dispatch({ type: 'ALL' });
