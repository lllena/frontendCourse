import '../css/style.css';
import { createStore } from 'redux';
import reducer from './redux/rootReducer';
import { setActiveTab } from './redux/tabReducer/actions';
import { addTodo, removeTodo, toggleParamTodo } from './redux/todoReducer/actions';
import { TABS } from './redux/tabReducer/types';
import { todoNode } from './components/todoNode';
import { outTodo } from './modules/outTodo';
import { addedTodo } from './modules/addedTodo';
import { manageTodo } from './modules/manageTodo';

export const store = createStore(reducer);
store.subscribe(() => {
  const state = store.getState();
  outTodo(state.todos);
});

addedTodo();
manageTodo();

// class Todo {
//   constructor() {
//     this.buttons = document.querySelector('.buttons');
//     this.form = document.querySelector('.form');
//     this.input = document.querySelector('.input');
//     this.error = document.querySelector('.error');
//     this.todoList = document.querySelector('.todo-list');
//   }

//   init() {
//     this.handlerButtonNavigation();
//     this.handlerButtonAdd();
//     this.handlerButtonTodos();
//     this.searchItem();
//     this.render();
//   }

//   render() {
//     this.input.value = '';
//     this.todoList.textContent = '';
//     let arrTodos = this.getTodos() || [];
//     arrTodos.forEach((todo) => this.createElement(todo));
//   }

//   getTodos() {
//     switch (state.tabs) {
//       case TABS.ALL_TODO:
//         return state.todos;
//       case TABS.COMPLETED_TODO:
//         return state.todos.filter((item) => item.completed);
//       case TABS.UNDONE_TODO:
//         return state.todos.filter((item) => !item.completed);
//       case TABS.IMPORTANT_TODO:
//         return state.todos.filter((item) => item.important);
//       default:
//         return state.todos;
//     }
//   }

//   createElement(todo) {
//     this.todoList.insertAdjacentHTML('beforeend', todoNode(todo));
//   }

//   handlerButtonAdd() {
//     this.form.addEventListener('submit', (e) => {
//       e.preventDefault();
//       if (!this.validation()) return;
//       this.createNewTodo();
//       this.changeActiveTab(TABS.ALL_TODO);
//       this.render();
//     });
//   }

//   createNewTodo() {
//     const newTodo = this.exampleItem();
//     store.dispatch(addTodo(newTodo));
//   }

//   validation() {
//     if (this.input.value.trim() === '') {
//       this.error.textContent = 'The field is empty!';
//       return;
//     }
//     this.error.textContent = '';
//     return 1;
//   }

//   exampleItem() {
//     return {
//       value: this.input.value,
//       completed: false,
//       important: false,
//       id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
//     };
//   }

//   handlerButtonNavigation() {
//     this.buttons.addEventListener('click', ({ target }) => {
//       if (target.closest('button')) {
//         this.changeActiveTab(target?.getAttribute('data-id'));
//         this.render();
//       }
//     });
//   }

//   changeActiveTab(tabName) {
//     this.buttons.querySelector(`button[data-id = ${state.tabs}]`).classList.remove('button-nav--active');
//     store.dispatch(setActiveTab(tabName));
//     this.buttons.querySelector(`button[data-id = ${state.tabs}]`).classList.add('button-nav--active');
//   }

//   handlerButtonTodos() {
//     this.todoList.addEventListener('click', ({ target }) => {
//       const idTodo = target.closest('.todo-item')?.getAttribute('data-id');
//       switch (target.classList.value.split(' ')['0']) {
//         case 'todo-remove':
//           store.dispatch(removeTodo(idTodo));
//           break;
//         case 'todo-complete':
//           store.dispatch(toggleParamTodo(idTodo, 'completed'));
//           break;
//         case 'todo-important':
//           store.dispatch(toggleParamTodo(idTodo, 'important'));
//       }
//       this.render();
//     });
//   }

//   searchItem() {
//     this.input.addEventListener('input', () => {
//       this.changeActiveTab(TABS.ALL_TODO);
//       if (this.validation()) {
//         this.reg = new RegExp(this.input.value, 'gi');
//         state.todos.forEach((todo) => {
//           if (todo.value.match(this.reg)) {
//             this.todoList.querySelector(`.todo-item[data-id=${todo.id}]`).classList.add('green');
//           } else {
//             this.todoList.querySelector(`.todo-item[data-id=${todo.id}]`).classList.remove('green');
//           }
//         });
//       } else {
//         state.todos.forEach((todo) => {
//           this.todoList.querySelector(`.todo-item[data-id=${todo.id}]`).classList.remove('green');
//         });
//       }
//     });
//   }
// }

// const todo = new Todo();
// todo.init();
