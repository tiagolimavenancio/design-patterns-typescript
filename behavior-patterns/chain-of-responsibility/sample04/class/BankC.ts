import { IDBank } from "../types/IDBank";
import { BankChain } from "./BankChain";

export class BankC extends BankChain {
  constructor() {
    super(IDBank.BankC);
  }

  public madePayment() {
    console.log("Payment made by Bank C");
  }
}
