import { CreditCardHandler } from "./class/CreditCardHandler";
import { PayPalHandler } from "./class/PayPalHandler";
import { BankTransferHandler } from "./class/BankTransferHandler";
import { Payment } from "./types/PaymentTypes";

(async function main() {
  const creditCardHandler = new CreditCardHandler();
  const payPalHandler = new PayPalHandler();
  const bankTransferHandler = new BankTransferHandler();

  creditCardHandler.setNext(payPalHandler).setNext(bankTransferHandler);

  const payment: Payment = {
    method: "PayPal",
    amount: 100,
    cardNumber: "123456789",
    cvv: "111",
    expirationDate: "01/24",
  };

  const isPaymentSuccessful = await creditCardHandler.handlePayment(payment);

  console.log(`Payment Successful: `, isPaymentSuccessful);
})();
