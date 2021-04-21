import { createStore } from '../node_modules/redux';
import { createReducer } from './rootReducer';
import { execute, completed, all } from './actions';

class Todo {
  constructor() {
    this.store = createStore(createReducer);
    this.input = document.querySelector('.input');
    this.executeBtn = document.querySelector('.button-execute');
    this.completedBtn = document.querySelector('.button-completed');
    this.allBtn = document.querySelector('.button-all');
    this.inputField = document.querySelector('.input-field');
    this.todoList = document.querySelector('.todo-list');
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    this.state = this.store.getState();
  }
  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }
  render() {
    this.store.subscribe(() => {
      this.state = todo.store.getState();
    });
    this.inputField.value = '';
    this.todoList.textContent = '';
    this.todoData.forEach(this.filterItem.bind(this), this);
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

  filterItem(todo) {
    let check;
    if (todo.completed == true) {
      check = 'check';
    } else {
      check = 'uncheck';
    }
    if (this.state === 'all') {
      this.createElement(todo, check);
    } else if (this.state === 'completed') {
      if (todo.completed === true) {
        this.createElement(todo, check);
      }
    } else if (this.state === 'execute') {
      if (todo.completed === false) {
        this.createElement(todo, check);
      }
    }
  }
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
        this.store.dispatch(execute());
        this.render();
      }
      if (target === this.completedBtn) {
        this.store.dispatch(completed());
        this.render();
      }
      if (target === this.allBtn) {
        this.store.dispatch(all());
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

todo.store.dispatch({ type: 'all' });
