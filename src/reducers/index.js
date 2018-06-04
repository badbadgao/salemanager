import { combineReducers } from 'redux';

import purchaseorders from './purchaseorders/reducer';

const appReducers = combineReducers({
  purchaseorders,
});

export default appReducers;
