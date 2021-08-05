import { store } from '../../index';
import { setActiveTab } from './tabReducer/actions';
import { addClass, removeClass } from '../../utils';

export const manageTab = () => {
  const activeTab = () => document.querySelector(`button[data-id = ${store.getState().tabs}]`);

  const settingsTabHandler = (item) => {
    removeClass(activeTab(), 'button-nav--active');
    store.dispatch(setActiveTab(item.dataset.id));
    addClass(activeTab(), 'button-nav--active');
  };

  const navButtons = document.querySelectorAll('.button-nav');
  navButtons.forEach(item=>item.addEventListener('click', ()=>{settingsTabHandler(item)}))
};
