import {combineReducers, createStore} from 'redux';
import activeTabReducer from '../features/tabs/reducers';

const rootReducer = combineReducers({
  ...activeTabReducer,
});

const store = createStore(rootReducer);

export default store;
