import { D } from "./D";
import { I } from "../interface/I";

export class Y extends D {
  constructor(inner: I) {
    super(inner);
  }

  doIt(): void {
    super.doIt();
    this.doY();
  }

  private doY() {
    console.log("Y");
  }
}
