import { IAuctioneer } from "../interface/IAuctioneer";

// Colleague Class
export class Buyer {
  constructor(public name: string, private auctioneer: IAuctioneer) {
    this.auctioneer.register(this);
  }

  makeBid(amount: number): void {
    this.auctioneer.bid(this, amount);
  }

  notify(message: string): void {
    console.log(`${this.name} received notification: ${message}`);
  }
}
