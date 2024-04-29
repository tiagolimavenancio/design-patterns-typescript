import { IPaymentCommand } from "../interface/IPaymentCommand";
import { Buy } from "./Buy";

export class Store {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public execute(price: number, payment: IPaymentCommand): void {
    const buy: Buy = new Buy(this.name);
    buy.setPrice(price);

    payment.process(buy);
  }
}
