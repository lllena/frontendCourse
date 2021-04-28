import './style.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { execute, completed, all, add, remove, toggleComplete, repeat } from './redux/actions';
import { EXECUTE_TASK, COMPLETED_TASK, ALL_TASK } from './redux/types';

class Todo {
  constructor() {
    this.store = createStore(rootReducer);
    this.state = this.store.getState();
    this.state.listItem = JSON.parse(localStorage.getItem('toDoList'))
      ? JSON.parse(localStorage.getItem('toDoList'))
      : [];
    this.form = document.querySelector('.form');
    this.executeBtn = document.querySelector('.button-execute');
    this.completedBtn = document.querySelector('.button-completed');
    this.allBtn = document.querySelector('.button-all');
    this.input = document.querySelector('.input');
    this.todoList = document.querySelector('.todo-list');
    this.main = document.querySelector('.main');
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.state.listItem]));
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  itemCheck(completed) {
    if (completed) return 'check';
    return 'uncheck';
  }

  exampleItem() {
    return {
      value: this.input.value,
      completed: false,
      repeat: false,
      key: this.generateKey(),
    };
  }

  tabItems(item) {
    switch (this.state.tabs) {
      case ALL_TASK:
        this.createElement(item);
        break;
      case COMPLETED_TASK:
        if (item.completed) this.createElement(item);
        break;
      case EXECUTE_TASK:
        if (!item.completed) this.createElement(item);
    }
  }

  handlerAction(bool, func, key = '') {
    if (bool) {
      func.call(this, key);
    }
  }

  setItem(map, func) {
    map.forEach((item) => {
      func.call(this, item);
    });
  }

  clear(item) {
    this.store.dispatch(repeat(item.key, false));
  }

  searchItem(e) {
    this.reg = new RegExp(e.target.value, true ? 'gi' : '');
    this.setItem(this.state.listItem, this.addGreen);
    this.render();
  }

  addGreen(item) {
    this.store.dispatch(all());
    if (item.value.match(this.reg) && this.input.value !== '') {
      this.store.dispatch(repeat(item.key, true));
    } else {
      this.store.dispatch(repeat(item.key, false));
    }
  }

  deleteItem(key) {
    this.store.dispatch(remove(key));
  }

  completedItem(key) {
    this.store.dispatch(toggleComplete(key));
  }

  addTodo(e) {
    e.preventDefault();
    if (!this.input.value.trim()) return;
    const newTodo = this.exampleItem();
    this.store.dispatch(add(newTodo));
    this.input.value = '';
    this.setItem(this.state.listItem, this.clear);
    this.render();
  }

  init() {
    this.render();
    this.store.subscribe(() => (this.state = this.store.getState()));
    this.form.addEventListener('input', this.searchItem.bind(this));
    this.form.addEventListener('submit', this.addTodo.bind(this));
  }

  handler() {
    this.main.addEventListener('click', ({ target }) => {
      const key = target.closest('.todo-item')?.getAttribute('data-id');
      this.handlerAction(target.classList.value.split(' ')['0'] === 'todo-complete', this.completedItem, key);
      this.handlerAction(target.classList.value === 'todo-remove', this.deleteItem, key);
      this.handlerAction(target === this.executeBtn, this.store.dispatch, execute());
      this.handlerAction(target === this.completedBtn, this.store.dispatch, completed());
      this.handlerAction(target === this.allBtn, this.store.dispatch, all());
      this.render();
    });
  }

  createElement(todo) {
    const li = document.createElement('li');
    li.setAttribute('data-id', todo.key);
    li.classList.add('todo-item');
    if (todo.repeat) li.classList.add('green');
    li.insertAdjacentHTML(
      'beforeend',
      `<span class="text-todo">${todo.value}</span>
		<div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete ${this.itemCheck(todo.completed)}"></button>
        </div>`,
    );
    this.todoList.append(li);
  }

  render() {
    this.todoList.textContent = '';
    this.state.listItem.forEach(this.tabItems.bind(this), this);
    this.addToStorage();
  }
}

const todo = new Todo();
todo.init();
todo.handler();
