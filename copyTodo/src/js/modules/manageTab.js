import { store } from '..';
import { setActiveTab } from '../redux/tabReducer/actions';

export const manageTab = () => {
  const activeTab = () => navButtons.querySelector(`button[data-id = ${store.getState().tabs}]`);
  const hideActive = () => activeTab().classList.remove('button-nav--active');
  const showActive = () => activeTab().classList.add('button-nav--active');

  const settingsTabHandler = ({ target }) => {
    const getParentButton = () => target.closest('[data-id]');

    hideActive();
    getParentButton().dataset.id && store.dispatch(setActiveTab(getParentButton().dataset.id));
    showActive();
  };

  const navButtons = document.querySelector('.buttons');
  navButtons.addEventListener('click', settingsTabHandler);
};
