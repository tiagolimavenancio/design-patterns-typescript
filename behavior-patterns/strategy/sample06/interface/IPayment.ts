export type Payment = {
  clientId: string;
  amount: number;
};

export interface IPayment {
  charge(): Payment;
}
