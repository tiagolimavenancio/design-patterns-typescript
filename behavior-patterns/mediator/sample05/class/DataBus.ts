import { IBus } from "../interface/IBus";
import { CPUMemoryMessages } from "../types/messageTypes";
import { CPU } from "./CPU";
import { Memory } from "./Memory";

export class DataBus implements IBus<CPUMemoryMessages> {
  private cpu: CPU;
  private memory: Memory;

  constructor(cpu: CPU, memory: Memory) {
    this.cpu = cpu;
    this.memory = memory;

    this.cpu.connect(this);
    this.memory.connect(this);
  }

  notify(message: CPUMemoryMessages): void {
    switch (message.type) {
      case "memory-read":
        {
          const { address, response } = message;
          const value = this.memory.read(address);
          response(value);
        }
        break;
      case "memory-write":
        {
          const { address, value, response } = message;
          try {
            this.memory.write(address, value);
            response(true);
          } catch (error) {
            response(false);
          }
        }
        break;
      default:
        throw new Error("Invalid message");
    }
  }
}
