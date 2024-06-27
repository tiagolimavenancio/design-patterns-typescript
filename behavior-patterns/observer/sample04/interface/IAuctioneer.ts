import { IAgent } from "./IAgent";

export interface IAuctioneer {
  name: string;
  MAX_LIMIT: number;

  update(agent: IAgent): void;
}
