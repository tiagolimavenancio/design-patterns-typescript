import { IState } from "../interface/IState";
import { Order } from "../model/Order";

export class OrderBeingPreparedState implements IState {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("Cancelling your order.. You will be refunded.");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment(): void {
    console.log("Payment is already verified.");
  }

  shipOrder(): void {
    console.log("Shipping your order now..");
    this.order.setState(this.order.orderShippedState);
  }
}
