import { CPU } from "../class/Cpu";
import { EmberToolkit } from "../class/EmberToolKit";
import { EnginolaToolkit } from "../class/EnginolaToolkit";
import { MMU } from "../class/Mmu";

export enum Architecture {
  EMBER,
  ENGINOLA,
}

export abstract class ArchitectureFactory {
  private static EMBER_TOOLKIT = new EmberToolkit();
  private static ENGINOLA_TOOLKIT = new EnginolaToolkit();

  static getFactory = (architecture: Architecture): ArchitectureFactory => {
    switch (architecture) {
      case Architecture.EMBER:
        return this.EMBER_TOOLKIT;
      case Architecture.ENGINOLA:
        return this.ENGINOLA_TOOLKIT;
      default:
        throw new Error("Architecture not supported");
    }
  };

  public abstract createCPU(): CPU;
  public abstract createMMU(): MMU;
}
