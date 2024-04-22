import { BankA } from "./class/BankA";
import { BankB } from "./class/BankB";
import { BankC } from "./class/BankC";
import { BankChain } from "./class/BankChain";
import { BankD } from "./class/BankD";
import { IDBank } from "./types/IDBank";

(function main() {
  const banks: BankChain = new BankA();
  banks.setNext(new BankB());
  banks.setNext(new BankC());
  banks.setNext(new BankD());

  try {
    banks.makePayment(IDBank.BankC);
    banks.makePayment(IDBank.BankD);
    banks.makePayment(IDBank.BankA);
    banks.makePayment(IDBank.BankB);
  } catch (error) {
    console.log({ error });
  }
})();
