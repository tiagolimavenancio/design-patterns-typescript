import { IDBank } from "../types/IDBank";
import { BankChain } from "./BankChain";

export class BankB extends BankChain {
  constructor() {
    super(IDBank.BankB);
  }

  public madePayment() {
    console.log("Payment made by Bank B");
  }
}
