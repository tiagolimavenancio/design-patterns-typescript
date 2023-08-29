import { ArchitectureFactory } from "../abstract-factory/ArchitectureFactory";
import { CPU, EnginolaCPU } from "./Cpu";
import { EnginolaMMU, MMU } from "./Mmu";

export class EnginolaToolkit extends ArchitectureFactory {
  createCPU(): CPU {
    return new EnginolaCPU();
  }

  createMMU(): MMU {
    return new EnginolaMMU();
  }
}
