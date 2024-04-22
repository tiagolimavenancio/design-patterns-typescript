import { IDBank } from "../types/IDBank";

export abstract class BankChain {
  protected next!: BankChain;
  protected idBank: IDBank;

  constructor(id: IDBank) {
    this.idBank = id;
  }

  private canMakePayment(id: IDBank): boolean {
    if (this.idBank === id) {
      return true;
    }

    return false;
  }

  public setNext(bank: BankChain) {
    if (!this.next) {
      this.next = bank;
    } else {
      this.next.setNext(bank);
    }
  }

  public makePayment(id: IDBank) {
    if (this.canMakePayment(id)) {
      this.madePayment();
    } else {
      if (!this.next) {
        throw new Error("Bank not found!");
      }

      this.next.makePayment(id);
    }
  }

  public abstract madePayment(): void;
}
