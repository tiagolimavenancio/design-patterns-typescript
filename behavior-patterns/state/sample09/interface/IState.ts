import { Order } from "../model/Order";

export interface IState {
  order: Order;

  cancelOrder(): void;
  verifyPayment(): void;
  shipOrder(): void;
}
