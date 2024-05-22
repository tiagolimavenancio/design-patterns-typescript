import { CPU } from "./class/CPU";
import { DataBus } from "./class/DataBus";
import { Memory } from "./class/Memory";

(function main() {
  const cpu = new CPU();
  const memory = new Memory();
  const bus = new DataBus(cpu, memory);

  cpu.fetch();
  cpu.fetch();
  cpu.execute(2, 4, 10);
})();
