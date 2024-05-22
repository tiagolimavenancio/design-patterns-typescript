import { Buyer } from "../class/Buyer";

// Mediator Interface
export interface IAuctioneer {
  register(buyer: Buyer): void;
  bid(buyer: Buyer, amount: number): void;
}
