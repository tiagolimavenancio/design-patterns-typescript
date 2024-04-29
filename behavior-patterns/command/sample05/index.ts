import { Store } from "./class/Store";
import { PaymentCreditCard } from "./class/PaymentCreditCard";
import { PaymentDebitCard } from "./class/PaymentDebitCard";
import { PaymentBillet } from "./class/PaymentBillet";

(function main() {
  const store = new Store("Tok Stock");

  store.execute(999.0, new PaymentCreditCard());
  store.execute(49.0, new PaymentBillet());
  store.execute(99.0, new PaymentDebitCard());

  const store2 = new Store("Renner");
  store2.execute(19.0, new PaymentCreditCard());
})();
