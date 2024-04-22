import { IPaymentHandler } from "../interface/IPaymentHandler";
import { Payment } from "../types/PaymentTypes";

export class BankTransferHandler implements IPaymentHandler {
  private nextHandler!: IPaymentHandler;

  setNext(handler: IPaymentHandler): IPaymentHandler {
    this.nextHandler = handler;
    return handler;
  }

  async handlePayment(payment: Payment): Promise<boolean> {
    if (payment.method === "Internet Banking") {
      console.log("Processing bank transfer payment...");
      return true;
    } else if (this.nextHandler) {
      return this.nextHandler.handlePayment(payment);
    } else {
      return false;
    }
  }
}
