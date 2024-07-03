import { IState } from "../interface/IState";
import { Order } from "../model/Order";

export class PaymentPendingState implements IState {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder(): void {
    console.log("Cancelling your unpaid order...");
    this.order.setState(this.order.cancelledOrderState);
  }

  verifyPayment(): void {
    console.log("Payment verified! Shipping soon.");
    this.order.setState(this.order.orderBeingPreparedState);
  }

  shipOrder(): void {
    console.log("Cannot ship order when payment is pending!");
  }
}
