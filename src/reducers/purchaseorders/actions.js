import * as api from 'api';
import * as constant from './constant';

export const setPurcahseOrderTableData = purchaseOrders => ({
  type: constant.SET_PURCHASE_ORDERS,
  payload: purchaseOrders,
});

export const getPurchaseOrders = () => (dispatch) => {
  api.getPurchaseOrders().then((response) => {
    console.log(response);
    dispatch(setPurcahseOrderTableData(response));
  });
};
