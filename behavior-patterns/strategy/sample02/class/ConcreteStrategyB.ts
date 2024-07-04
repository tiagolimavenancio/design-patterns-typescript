import { IStrategy } from "../interface/IStrategy";

export class ConcreteStrategyB implements IStrategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
