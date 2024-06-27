import { IAgent } from "../interface/IAgent";
import { IAuctioneer } from "../interface/IAuctioneer";
import { ConcreteAgent } from "./ConcreteAgent";

export class ConcreteAuctioneerB implements IAuctioneer {
  name = "ConcreteAuctioneerB";
  MAX_LIMIT: number = 200;

  update(agent: IAgent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a Concrete Agent!");
    }

    if (agent.product.auctioneer === this) {
      console.log(`${this.name}: I´m the owner... I´m waiting`);
      return;
    }

    console.log(`${this.name}: I am not the owner... I´m thinking`);

    const isBid = Math.random() < 0.5;

    if (isBid) {
      console.log(`${this.name}: I give up!`);
      return;
    }

    const bid = Math.round(agent.product.price * 1.05);

    if (bid > this.MAX_LIMIT) {
      console.log(`${this.name}: The bid is higher than my limit.`);
      return;
    }

    agent.bipUp(this, bid);
  }
}
