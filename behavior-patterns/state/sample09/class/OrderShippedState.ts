import { IState } from "../interface/IState";
import { Order } from "../model/Order";

export class OrderShippedState implements IState {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("You cannot cancel an order that has been shipped.");
  }

  verifyPayment(): void {
    console.log("Payment is already verified");
  }

  shipOrder(): void {
    console.log("Order is already shipped");
  }
}
