import { Payment, IPayment } from "../interface/IPayment";

export class DebitCardPayment implements IPayment {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }

  charge(): Payment {
    console.log("Charging with debit card");
    return this.payment;
  }
}
