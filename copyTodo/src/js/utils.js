export const renderInDocument = ($el, selector) => {
  if (!$el || !selector) {
    throw new Error('renderInDocument must contain 2 args');
  }

  document.querySelector(selector).insertAdjacentHTML('beforeend', $el);
};

export const generationKey = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const addToStorage = (arrTodo) => {
  localStorage.setItem('toDoList', JSON.stringify([...arrTodo]));
};
