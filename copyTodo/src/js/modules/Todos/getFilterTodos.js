import { store } from '../..';
import { TABS } from '../Tabs/tabReducer/types';

export const getFilterTodos = () => {
  const state = store.getState();
  switch (state.tabs) {
    case TABS.ALL_TODO:
      return state.todos;
    case TABS.COMPLETED_TODO:
      return state.todos.filter((item) => item.completed);
    case TABS.UNDONE_TODO:
      return state.todos.filter((item) => !item.completed);
    case TABS.IMPORTANT_TODO:
      return state.todos.filter((item) => item.important);
    default:
      return state.todos;
  }
};
