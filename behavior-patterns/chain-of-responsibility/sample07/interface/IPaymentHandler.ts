import { Payment } from "../types/PaymentTypes";

export interface IPaymentHandler {
  handlePayment(payment: Payment): Promise<boolean>;
  setNext(handler: IPaymentHandler): IPaymentHandler;
}
