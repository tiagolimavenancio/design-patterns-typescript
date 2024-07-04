import { IPayment, Payment } from "../interface/IPayment";

export class PaymentStrategy {
  strategy: IPayment;

  constructor(strategy: IPayment) {
    this.strategy = strategy;
  }

  charge(): Payment {
    return this.strategy.charge();
  }
}
