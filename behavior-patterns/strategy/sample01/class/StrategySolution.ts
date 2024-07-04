import { IStrategy } from "../interface/IStrategy";

// 2. Bury implementation
export abstract class StrategySolution implements IStrategy {
  // 3. Template Method
  solve(): void {
    this.start();
    while (this.nextTry() && !this.isSolution()) {}
    this.stop();
  }

  abstract start(): void;
  abstract nextTry(): boolean;
  abstract isSolution(): boolean;
  abstract stop(): void;
}
