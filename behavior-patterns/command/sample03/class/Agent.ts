// Invoker

import { Order } from "./Order";

export class Agent {
  private orders: Order[] = [];

  constructor() {}

  placeOrder(order: Order) {
    this.orders.push(order);
    order.execute();
  }

  listOrders(): string {
    return this.orders.reduce((acc, curr) => acc + curr.toString() + "\n", "");
  }
}
