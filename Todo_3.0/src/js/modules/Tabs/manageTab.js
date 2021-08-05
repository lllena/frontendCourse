import { store } from '../../index';
import { setActiveTab } from './tabReducer/actions';
import { addClass, removeClass } from '../../utils';

export const manageTab = () => {
  const activeTab = () => navButtons.querySelector(`button[data-id = ${store.getState().tabs}]`);

  const settingsTabHandler = ({ target }) => {
    const getParentButton = () => target.closest('[data-id]');

    removeClass(activeTab(), 'button-nav--active');
    getParentButton().dataset.id && store.dispatch(setActiveTab(getParentButton().dataset.id));
    addClass(activeTab(), 'button-nav--active');
  };

  const navButtons = document.querySelector('.buttons');
  navButtons.addEventListener('click', settingsTabHandler);
};
