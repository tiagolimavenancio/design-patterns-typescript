import { IStrategy } from "../interface/IStrategy";

export class ConcreteStrategyA implements IStrategy {
  doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
