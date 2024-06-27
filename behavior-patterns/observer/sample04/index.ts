import { ConcreteAgent } from "./class/ConcreteAgent";
import { ConcreteAuctioneerA } from "./class/ConcreteAuctioneerA";
import { ConcreteAuctioneerB } from "./class/ConcreteAuctioneerB";
import { ConcreteAuctioneerC } from "./class/ConcreteAuctioneerC";
import { ConcreteAuctioneerD } from "./class/ConcreteAuctioneerD";
import { Product } from "./model/Product";

(function main() {
  const concreteAgent = new ConcreteAgent();

  const auctioneerA = new ConcreteAuctioneerA();
  const auctioneerB = new ConcreteAuctioneerB();
  const auctioneerC = new ConcreteAuctioneerC();
  const auctioneerD = new ConcreteAuctioneerD();

  concreteAgent.subscribe(auctioneerA);
  concreteAgent.subscribe(auctioneerB);
  concreteAgent.subscribe(auctioneerC);
  concreteAgent.subscribe(auctioneerD);

  const diamond = new Product({ name: "Diamond", price: 5 });
  concreteAgent.product = diamond;

  concreteAgent.bipUp(auctioneerA, 10);

  console.log("--------- new Bid-----------");

  concreteAgent.unsubscribe(auctioneerD);

  const gem = new Product({ name: "Gem", price: 3 });
  concreteAgent.product = gem;

  concreteAgent.bipUp(auctioneerB, 5);

  console.log(`The winner of the bid is 
    Product: ${diamond.name}
    Name: ${diamond.auctioneer?.name}
    Price: ${diamond.price}`);

  console.log(`The winner of the bid is 
    Product: ${gem.name}
    Name: ${gem.auctioneer?.name}
    Price: ${gem.price}`);
})();
