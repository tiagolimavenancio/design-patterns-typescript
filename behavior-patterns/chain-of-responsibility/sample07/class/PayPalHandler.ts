import { IPaymentHandler } from "../interface/IPaymentHandler";
import { Payment } from "../types/PaymentTypes";

export class PayPalHandler implements IPaymentHandler {
  private nextHandler!: IPaymentHandler;

  setNext(handler: IPaymentHandler): IPaymentHandler {
    this.nextHandler = handler;
    return handler;
  }

  async handlePayment(payment: Payment): Promise<boolean> {
    if (payment.method === "PayPal") {
      console.log("Processing paypal payment...");
      return true;
    } else if (this.nextHandler) {
      return this.nextHandler.handlePayment(payment);
    } else {
      return false;
    }
  }
}
