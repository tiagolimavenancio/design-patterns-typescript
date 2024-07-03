import { Order } from "./model/Order";

(function main() {
  const order = new Order();

  order.getState().verifyPayment();
  order.getState().shipOrder();
  order.getState().cancelOrder();

  console.log("Order state: " + (<any>order.getState()).constructor.name);
})();
