import { IAuctioneer } from "./IAuctioneer";

export interface IAgent {
  subscribe(auctioneer: IAuctioneer): void;
  unsubscribe(auctioneer: IAuctioneer): void;
  notify(): void;
}
