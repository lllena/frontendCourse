'use strict';

class Todo {
  constructor() {
    this.input = document.querySelector('.input');
    this.executeBtn = document.querySelector('.button-execute');
    this.completedBtn = document.querySelector('.button-completed');
    this.allBtn = document.querySelector('.button-all');
    this.inputField = document.querySelector('.input-field');
    this.todoList = document.querySelector('.todo-list');
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }
  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }
  render() {
    this.inputField.value = '';
    this.todoList.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }
  createItem = (todo) => {
    let check;
    if (todo.completed == true) {
      check = 'check';
    } else {
      check = 'uncheck';
    }
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
        console.log('execute');
        // this.arrExecuteItem();
        for (const [key, value] of this.todoData) {
          console.log(value.completed);
        }
      }
      if (target === this.completedBtn) {
        console.log('completed');
      }
      if (target === this.allBtn) {
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
