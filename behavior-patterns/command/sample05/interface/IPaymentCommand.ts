import { Buy } from "../class/Buy";

export interface IPaymentCommand {
  process(buy: Buy): void;
}
