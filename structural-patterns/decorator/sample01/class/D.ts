import { I } from "../interface/I";

export abstract class D implements I {
  private core: I;

  constructor(inner: I) {
    this.core = inner;
  }

  doIt(): void {
    this.core.doIt();
  }
}
