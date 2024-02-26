import { ClassA } from "./ClassA";
import { ClassA2 } from "./ClassA2";
import { ClassB } from "./ClassB";
import { ClassC } from "./ClassC";
import { ClassC2 } from "./ClassC2";
import { ClassC3 } from "./ClassC3";
import { ClassD } from "./ClassD";

export class Facade {
  private a = new ClassA();
  private a2 = new ClassA2();
  private b = new ClassB();
  private c = new ClassC();
  private c2 = new ClassC2();
  private c3 = new ClassC3();
  private d = new ClassD();

  public methodClient1() {
    console.log("\n...methodClient1\n");

    this.a2.methodA2();
    this.b.methodB();
    this.c.methodC();
    this.d.methodD();
  }

  public methodClient2() {
    console.log("\n...methodClient2\n");

    this.a.methodA();
    this.c2.methodC2();
    this.c3.methodC3();
    this.c.methodC();
  }
}
