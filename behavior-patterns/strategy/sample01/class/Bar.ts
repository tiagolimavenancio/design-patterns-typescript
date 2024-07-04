import { StrategySearch } from "./StrategySearch";

export class Bar extends StrategySearch {
  private state: number = 1;

  preProcess(): void {
    console.log("preProcess ");
  }

  postProcess(): void {
    console.log("postProcess ");
  }

  search(): boolean {
    console.log("Search - " + this.state++ + " ");
    return this.state === 3 ? true : false;
  }
}
