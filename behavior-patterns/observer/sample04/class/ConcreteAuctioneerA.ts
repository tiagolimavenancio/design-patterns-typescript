import { IAgent } from "../interface/IAgent";
import { IAuctioneer } from "../interface/IAuctioneer";
import { ConcreteAgent } from "./ConcreteAgent";

export class ConcreteAuctioneerA implements IAuctioneer {
  name = "ConcreteAuctioneerA";
  MAX_LIMIT: number = 100;

  update(agent: IAgent): void {
    if (!(agent instanceof ConcreteAgent)) {
      throw new Error("ERROR: Agent is not a Concrete Agent!");
    }

    if (agent.product.auctioneer === this) {
      console.log(`${this.name}: I´m the owner... I´m waiting`);
      return;
    }

    console.log(`${this.name}: I am not the owner... I´m thinking`);
    const bid = Math.round(agent.product.price * 1.1);

    if (bid > this.MAX_LIMIT) {
      console.log(`${this.name}: The bid is higher than my limit.`);
      return;
    }

    agent.bipUp(this, bid);
  }
}
