import { D } from "./D";
import { I } from "../interface/I";

export class X extends D {
  constructor(inner: I) {
    super(inner);
  }

  doIt(): void {
    super.doIt();
    this.doX();
  }

  private doX() {
    console.log("X");
  }
}
