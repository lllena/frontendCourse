import { SET_ACTIVE_TAB } from './types';

export function setActiveTab(tabName) {
  return {
    type: SET_ACTIVE_TAB,
    payload: { tabName },
  };
}
