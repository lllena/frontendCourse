import './style.css';
import { createStore } from 'redux';
import { createReducer } from './redux/rootReducerNew';
import { add, remove, toggleComplete } from './redux/actionNew';

class Todo {
  constructor() {
    this.store = createStore(createReducer);
    this.form = document.querySelector('.form');
    this.executeBtn = document.querySelector('.button-execute');
    this.completedBtn = document.querySelector('.button-completed');
    this.allBtn = document.querySelector('.button-all');
    this.input = document.querySelector('.input');
    this.todoList = document.querySelector('.todo-list');
    this.tab = 'all';
    this.main = document.querySelector('.main');
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
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
    switch (this.tab) {
      case 'all':
        this.createElement(item);
        break;
      case 'completed':
        if (item.completed) this.createElement(item);
        break;
      case 'execute':
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
    item.repeat = false;
  }

  addGreen(item) {
    if (item.value.match(this.reg) && this.input.value !== '') {
      // this.store.dispatch(all());
      item.repeat = true;
    } else {
      item.repeat = false;
    }
  }

  deleteItem(key) {
    this.todoData.forEach((item, index) => {
      if (item.key !== key) return;
      this.todoData.delete(index);
    });
  }

  completedItem(key) {
    this.todoData.forEach((item) => {
      if (item.key !== key) return;
      item.completed = !item.completed;
    });
  }

  searchItem(e) {
    this.reg = new RegExp(e.target.value, true ? 'gi' : '');
    this.setItem(this.todoData, this.addGreen);
    this.render();
  }

  addTodo(e) {
    e.preventDefault();
    if (!this.input.value.trim()) return;
    const newTodo = this.exampleItem();
    this.todoData.set(newTodo.key, newTodo);
    this.input.value = '';
    this.setItem(this.todoData, this.clear);
    this.render();
  }

  init() {
    todo.render();
    this.form.addEventListener('input', this.searchItem.bind(this));
    this.form.addEventListener('submit', this.addTodo.bind(this));
  }

  handler() {
    this.main.addEventListener('click', ({ target }) => {
      const key = target.closest('.todo-item')?.getAttribute('data-id');
      this.handlerAction(target.classList.value.split(' ')['0'] === 'todo-complete', this.completedItem, key);
      this.handlerAction(target.classList.value === 'todo-remove', this.deleteItem, key);
      // this.handlerAction(target === this.executeBtn, this.store.dispatch, execute());
      // this.handlerAction(target === this.completedBtn, this.store.dispatch, completed());
      // this.handlerAction(target === this.allBtn, this.store.dispatch, all());
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
    this.store.subscribe(() => console.log(this.store.getState()));
    this.todoList.textContent = '';
    this.todoData.forEach(this.tabItems.bind(this), this);
    this.addToStorage();
  }
}

const todo = new Todo();
todo.init();
todo.handler();
