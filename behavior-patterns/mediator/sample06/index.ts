import { Buyer } from "./class/Buyer";
import { OnlineAuctioneer } from "./class/OnlineAuctioneer";

(function main() {
  const auctioneer = new OnlineAuctioneer();

  const bob = new Buyer("Bob", auctioneer);
  const alice = new Buyer("Alice", auctioneer);

  bob.makeBid(100);
  alice.makeBid(150);
})();
