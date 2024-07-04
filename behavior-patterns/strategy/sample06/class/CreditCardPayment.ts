import { Payment, IPayment } from "../interface/IPayment";

export class CreditCardPayment implements IPayment {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    console.log("Charging with credit card");
    return this.payment;
  }
}
