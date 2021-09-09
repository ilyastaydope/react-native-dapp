import types from './types';
const initialState = {
  tab: '1',
};

const reducer = (state = {}, action) => {
  const {type, payload} = action;
  const {SET_TAB, GET_TABS} = types;
  switch (type) {
    case SET_TAB:
      return {tab: payload};
    case GET_TABS:
      return {...payload};
    default:
      return state;
  }
};

export default {
  tabReducer: reducer,
};
