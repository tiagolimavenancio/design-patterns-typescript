import { IBase } from "../interface/IBase";
import { Baz } from "./Baz";
import { Foo } from "./Foo";

export class Bar implements IBase {
  execute(target: IBase): void {
    target.doJob(this);
  }

  doJob(foo: Foo): void;
  doJob(bar: Bar): void;
  doJob(baz: Baz): void;
  doJob(arg: Foo | Bar | Baz): void {
    if (arg instanceof Foo) {
      console.log("FOO object was called from BAR");
    } else if (arg instanceof Bar) {
      console.log("BAR object calls by yourself");
    } else if (arg instanceof Baz) {
      console.log("BAZ object was called from BAR");
    }
  }
}
