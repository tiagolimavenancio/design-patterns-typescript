import { IDBank } from "../types/IDBank";
import { BankChain } from "./BankChain";

export class BankD extends BankChain {
  constructor() {
    super(IDBank.BankD);
  }

  public madePayment() {
    console.log("Payment made by Bank D");
  }
}
