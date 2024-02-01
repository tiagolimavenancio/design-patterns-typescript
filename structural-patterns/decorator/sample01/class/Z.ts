import { D } from "./D";
import { I } from "../interface/I";

export class Z extends D {
  constructor(inner: I) {
    super(inner);
  }

  doIt(): void {
    super.doIt();
    this.doZ();
  }

  private doZ() {
    console.log("Z");
  }
}
