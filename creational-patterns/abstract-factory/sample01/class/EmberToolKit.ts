import { ArchitectureFactory } from "../abstract-factory/ArchitectureFactory";
import { CPU, EmberCPU } from "./Cpu";
import { EmberMMU, MMU } from "./Mmu";

export class EmberToolkit extends ArchitectureFactory {
  createCPU(): CPU {
    return new EmberCPU();
  }

  createMMU(): MMU {
    return new EmberMMU();
  }
}
