import { CPUMemoryMessages } from "../types/messageTypes";
import { BusConnector } from "./BusConnector";

export class CPU extends BusConnector<CPUMemoryMessages> {
  private nextInstructionsAddress: number = 0;
  private result: number = 0;

  fetch() {
    console.log(
      `CPU: Triying to fetch an instruction from address ${this.nextInstructionsAddress}`
    );

    let instruction: number;

    this.signal({
      type: "memory-read",
      address: this.nextInstructionsAddress,
      response: (value) => (instruction = value),
    });

    console.log(`CPU: instruction fetched from address ${this.nextInstructionsAddress}`);

    this.nextInstructionsAddress++;
  }

  decode(instruction: number) {}

  execute(opCode: number, operand1: number, operand2: number) {
    switch (opCode) {
      case 0:
        this.result = operand1 + operand2;
        break;
      case 1:
        this.result = operand1 / operand2;
        break;
      case 2:
        console.log(`CPU: Trying write a value on address ${operand2}`);
        this.signal({
          type: "memory-write",
          value: operand1,
          address: operand2,
          response: (ok) => console.log("Write operation success: ", ok),
        });
        break;
      default:
        throw new Error("Invalid operation");
    }
  }
}
