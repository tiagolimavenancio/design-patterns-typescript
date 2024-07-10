import { Bar } from "../class/Bar";
import { Baz } from "../class/Baz";
import { Foo } from "../class/Foo";

export interface IBase {
  execute(target: IBase): void;

  doJob(foo: Foo): void;
  doJob(bar: Bar): void;
  doJob(baz: Baz): void;
}
