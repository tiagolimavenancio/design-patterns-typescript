import { IPaymentCommand } from "../interface/IPaymentCommand";
import { Buy } from "./Buy";

export class PaymentCreditCard implements IPaymentCommand {
  process(buy: Buy): void {
    console.log(`Purchase issued by credit card: ${buy.getInfo()}`);
  }
}
