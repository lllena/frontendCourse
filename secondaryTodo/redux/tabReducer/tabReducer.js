import { SET_ACTIVE_TAB, TABS } from './types';

const { ALL_TODO } = TABS;

export default function tabReducer(state = ALL_TODO, { type, payload }) {
  switch (type) {
    case SET_ACTIVE_TAB:
      return payload.tabName;
    default:
      return state;
  }
}
