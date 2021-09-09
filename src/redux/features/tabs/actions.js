import types from './types';

const setActiveTab = tab => ({
  type: types.SET_TAB,
  payload: tab,
});

const getTabs = obj => ({
  type: types.GET_TABS,
  payload: obj,
});

export default {
  setActiveTab,
  getTabs,
};
