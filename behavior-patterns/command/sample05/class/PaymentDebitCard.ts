import { IPaymentCommand } from "../interface/IPaymentCommand";
import { Buy } from "./Buy";

export class PaymentDebitCard implements IPaymentCommand {
  process(buy: Buy): void {
    console.log(`Purchase issued by debit card: ${buy.getInfo()}`);
  }
}
