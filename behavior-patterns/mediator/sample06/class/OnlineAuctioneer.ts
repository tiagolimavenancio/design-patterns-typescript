import { IAuctioneer } from "../interface/IAuctioneer";
import { Buyer } from "./Buyer";

export class OnlineAuctioneer implements IAuctioneer {
  private buyers: Buyer[] = [];
  private highestBid: number = 0;

  register(buyer: Buyer): void {
    this.buyers.push(buyer);
  }

  bid(buyer: Buyer, amount: number): void {
    if (amount <= this.highestBid) {
      console.log(`Bid by ${buyer.name} of ${amount} is too low.`);
      return;
    }

    this.highestBid = amount;

    this.buyers.forEach((b) => {
      if (b !== buyer) {
        b.notify(`New highest bid is $${this.highestBid} by ${buyer.name}`);
      }
    });
  }
}
