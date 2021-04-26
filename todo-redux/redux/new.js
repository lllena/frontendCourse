// const { createStore } = require('redux');


// document.body.innerHTML = `
// <button id="add">add</button>
// <button id="remove">remove</button>
// <button id="toggle">toggle</button>
// `;

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [...state, action.payload];
//     case REMOVE:
//       return [...state.filter((e) => e.id !== action.payload)];
//     case TOGGLE_COMPLETE:
//       return [
//         ...state.map((e) => {
//           if (e.id === action.payload) {
//             e.isComplete = !e.isComplete;
//           }
//           return e;
//         }),
//       ];
//     default:
//       return state;
//   }
// };
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

let i = 0;

document.querySelector('#add').addEventListener('click', () => {
  store.dispatch({
    type: ADD,
    payload: {
      text: 'sdfsdf',
      id: i++,
      isComplete: false,
    },
  });
});
document.querySelector('#remove').addEventListener('click', () => {
  store.dispatch({ type: REMOVE, payload: 0 });
});
document.querySelector('#toggle').addEventListener('click', () => {
  store.dispatch({ type: TOGGLE_COMPLETE, payload: 0 });
});
