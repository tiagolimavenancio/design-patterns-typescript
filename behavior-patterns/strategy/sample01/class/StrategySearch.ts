import { IStrategy } from "../interface/IStrategy";

export abstract class StrategySearch implements IStrategy {
  solve(): void {
    while (true) {
      this.preProcess();

      if (this.search()) {
        break;
      }

      this.postProcess();
    }
  }

  abstract preProcess(): void;
  abstract search(): boolean;
  abstract postProcess(): void;
}
