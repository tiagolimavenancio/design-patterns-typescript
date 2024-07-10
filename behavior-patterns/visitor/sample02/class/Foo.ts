import { IBase } from "../interface/IBase";
import { Bar } from "./Bar";
import { Baz } from "./Baz";

export class Foo implements IBase {
  execute(target: IBase): void {
    target.doJob(this);
  }

  doJob(foo: Foo): void;
  doJob(bar: Bar): void;
  doJob(baz: Baz): void;
  doJob(arg: Foo | Bar | Baz): void {
    if (arg instanceof Foo) {
      console.log("FOO object calls by yourself");
    } else if (arg instanceof Bar) {
      console.log("BAR object was called from FOO");
    } else if (arg instanceof Baz) {
      console.log("BAZ object was called from FOO");
    }
  }
}
