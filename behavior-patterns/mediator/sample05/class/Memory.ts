import { CPUMemoryMessages } from "../types/messageTypes";
import { BusConnector } from "./BusConnector";

export class Memory extends BusConnector<CPUMemoryMessages> {
  private memory: number[];

  constructor() {
    super();
    this.memory = [];
  }

  read(address: number): number {
    console.log(`Memory: reading the address (${address})`);
    return this.memory[address];
  }

  write(value: number, address: number) {
    console.log(`Memory: writing the value (${value}) on address (${address})`);
    this.memory[address] = value;
  }
}
