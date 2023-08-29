import { Architecture, ArchitectureFactory } from "./abstract-factory/ArchitectureFactory";

const main = () => {
  const factory = ArchitectureFactory.getFactory(Architecture.EMBER);
  const cpu = factory.createCPU();
  console.log({ cpu });
};
