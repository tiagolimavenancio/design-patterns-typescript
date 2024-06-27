import { IAgent } from "../interface/IAgent";
import { IAuctioneer } from "../interface/IAuctioneer";
import { Product } from "../model/Product";

export class ConcreteAgent implements IAgent {
  public product!: Product;
  private auctioneers: IAuctioneer[] = [];

  subscribe(auctioneer: IAuctioneer): void {
    const isExist = this.auctioneers.includes(auctioneer);

    if (isExist) {
      console.log("Agent: Auctioneer already subscribed.");
      return;
    }

    console.log("Agent: Auctioneer subscribed.");
    this.auctioneers.push(auctioneer);
  }

  unsubscribe(auctioneer: IAuctioneer): void {
    const auctioneerIndex = this.auctioneers.indexOf(auctioneer);

    if (auctioneerIndex === -1) {
      console.log("Agent: Nonexistent auctioneer.");
      return;
    }

    console.log("Agent: Auctioneer unsubscribed.");
    this.auctioneers.splice(auctioneerIndex, 1);
  }

  notify(): void {
    console.log("Agent: Notifying auctioneers...");
    for (const auctioneer of this.auctioneers) {
      auctioneer.update(this);
    }
  }

  bipUp(auctioneer: IAuctioneer, bid: number): void {
    console.log("Agent: Bidding up...");
    const isExist = this.auctioneers.includes(auctioneer);

    if (!isExist) {
      console.log("Agent: Auctioneer there is not in the system");
      return;
    }

    if (this.product.price >= bid) {
      console.log({ bid });
      console.log("price: ", this.product.price);
      console.log(`Agent ${auctioneer.name}, your bid is not valid`);
      return;
    }

    this.product.price = bid;
    this.product.auctioneer = auctioneer;

    console.log(`Agent the new price is ${bid} and the new owner is ${auctioneer.name}`);
    this.notify();
  }
}
