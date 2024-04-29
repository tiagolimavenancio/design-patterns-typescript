import { IPaymentCommand } from "../interface/IPaymentCommand";
import { Buy } from "./Buy";

export class PaymentBillet implements IPaymentCommand {
  process(buy: Buy): void {
    console.log(`Created billet: ${buy.getInfo()}`);
  }
}
