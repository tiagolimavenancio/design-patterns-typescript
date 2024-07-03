import { IState } from "../interface/IState";
import { Order } from "../model/Order";

export class CancelledOrderState implements IState {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("This order is already cancelled");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment(): void {
    console.log("The order is cancelled, you cannot pay anymore.");
  }

  shipOrder(): void {
    console.log("The order is cancelled, you cannot ship it anymore.");
  }
}
