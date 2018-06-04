import PurchaseOrders from './datasource';

export const getPurchaseOrders = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('get purchase orders');
    resolve(PurchaseOrders);
  }, 100);
});
