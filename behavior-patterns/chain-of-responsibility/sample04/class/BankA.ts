import { IDBank } from "../types/IDBank";
import { BankChain } from "./BankChain";

export class BankA extends BankChain {
  constructor() {
    super(IDBank.BankA);
  }

  public madePayment() {
    console.log("Payment made by Bank A");
  }
}
