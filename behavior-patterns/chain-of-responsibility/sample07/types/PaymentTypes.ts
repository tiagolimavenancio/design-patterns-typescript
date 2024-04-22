export type PaymentTypes =
  | "Credit Card"
  | "Debit Card"
  | "Internet Banking"
  | "PayPal"
  | "Google Pay"
  | "Apple Pay";

export type Payment = {
  method: PaymentTypes;
  amount: number;
  cardNumber: string;
  cvv: string;
  expirationDate: string;
};
