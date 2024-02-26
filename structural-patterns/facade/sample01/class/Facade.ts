import { Subsystem1 } from "./Subsystem1";
import { Subsystem2 } from "./Subsystem2";

/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */

export class Facade {
  protected subSystem1: Subsystem1;
  protected subSystem2: Subsystem2;

  constructor(subSystem1?: Subsystem1, subSystem2?: Subsystem2) {
    this.subSystem1 = subSystem1 || new Subsystem1();
    this.subSystem2 = subSystem2 || new Subsystem2();
  }

  /**
   * The Facade's methods are convenient shortcuts to the sophisticated
   * functionality of the subsystems. However, clients get only to a fraction
   * of a subsystem's capabilities.
   */

  public operation(): string {
    let result = "Facade initializes subsystems:\n";

    result += this.subSystem1.operation1();
    result += this.subSystem2.operation1();
    result += "Facade orders subsystems to perform the action:\n";
    result += this.subSystem1.operationN();
    result += this.subSystem2.operationZ();

    return result;
  }
}
