import initialState from './initialState';
import * as constant from './constant';

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_PURCHASE_ORDERS:
      return {
        ...state,
        tableData: action.payload,
      };
    default:
      return state;
  }
};
