import { CreditCardPayment } from "./class/CreditCardPayment";
import { DebitCardPayment } from "./class/DebitCardPayment";
import { PaymentStrategy } from "./class/PaymentStrategy";

(function main() {
  const creditCardPayment = new CreditCardPayment({
    clientId: "123",
    amount: 10,
  });

  const paymentCredit = new PaymentStrategy(creditCardPayment);
  paymentCredit.charge();

  const debitCardPayment = new DebitCardPayment({
    clientId: "999",
    amount: 50,
  });

  const paymentDebit = new PaymentStrategy(debitCardPayment);
  paymentDebit.charge();
})();
